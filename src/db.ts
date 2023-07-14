import { Pool } from 'pg';

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'EducationPlatform',
    password: '^D3I8FEfcnpc',
    port: '5432'
});

export { pool }