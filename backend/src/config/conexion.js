import dotenv from 'dotenv';
import pkg from 'pg';

dotenv.config();

const { Pool } = pkg;

const pool = new Pool({
  user: process.env.DB_USER || 'postgres',
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_DATABASE || process.env.DB_NAME || 'asistencia_uptnts',
  password: process.env.DB_PASSWORD ?? '',
  port: Number(process.env.DB_PORT || 5432),
});

export default pool;
