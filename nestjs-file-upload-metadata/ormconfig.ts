import { DataSource } from 'typeorm';
import { User } from './src/auth/user.entity';
import { FileMetadata } from './src/files/fileMetadata.entity';

const isSQLite = process.env.DB_TYPE === 'sqlite';

export const AppDataSource = new DataSource({
  type: isSQLite ? 'sqlite' : 'postgres',
  database: isSQLite ? 'db.sqlite' : process.env.DB_NAME,
  host: isSQLite ? undefined : process.env.DB_HOST,
  port: isSQLite ? undefined : Number(process.env.DB_PORT) || 5432,
  username: isSQLite ? undefined : process.env.DB_USERNAME,
  password: isSQLite ? undefined : process.env.DB_PASSWORD,
  synchronize: true,
  logging: false,
  entities: [User, FileMetadata],
  migrations: [],
  subscribers: [],
});