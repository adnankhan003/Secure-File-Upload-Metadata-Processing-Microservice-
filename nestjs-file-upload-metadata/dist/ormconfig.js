"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./src/auth/user.entity");
const fileMetadata_entity_1 = require("./src/files/fileMetadata.entity");
const isSQLite = process.env.DB_TYPE === 'sqlite';
exports.AppDataSource = new typeorm_1.DataSource({
    type: isSQLite ? 'sqlite' : 'postgres',
    database: isSQLite ? 'db.sqlite' : process.env.DB_NAME,
    host: isSQLite ? undefined : process.env.DB_HOST,
    port: isSQLite ? undefined : Number(process.env.DB_PORT) || 5432,
    username: isSQLite ? undefined : process.env.DB_USERNAME,
    password: isSQLite ? undefined : process.env.DB_PASSWORD,
    synchronize: true,
    logging: false,
    entities: [user_entity_1.User, fileMetadata_entity_1.FileMetadata],
    migrations: [],
    subscribers: [],
});
//# sourceMappingURL=ormconfig.js.map