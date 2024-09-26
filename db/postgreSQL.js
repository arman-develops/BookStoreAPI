
import Pool from 'pg';
import { config } from 'dotenv';
import {promises as fs} from 'fs';
import path from 'path';
import Db from './dbClass.js';
config();

const certPath = path.resolve(`./db/cert/ca.pem`);


class Postgres extends Db {

    static pool = null;

    constructor(table) {
        super();
        this.table = table;
    }

    static async connect() {
        if(!this.pool) {
            this.pool = new Pool.Pool({
                // connectionString: process.env.PGSQL_URL,
                // ssl: {
                //     rejectUnauthorized: false,
                //     ca: await fs.readFile(certPath, 'utf-8'),
                // },

                user: 'admin',
                host: 'localhost',
                database: 'bookapi',
                password: 'password123',
                port: 5432,
            });
            console.log("Connected to Postgres Database");
        }
        
        return this.pool;
    }

    async insert(data) {
        this.pool = await Postgres.connect();
        const col = Object.keys(data).join(',');
        const values = Object.values(data).map((_, index) => `$${index + 1}`).join(',');
        const sql = `INSERT INTO ${this.table} (${col}) VALUES (${values}) RETURNING *`;

        return await this.pool.query(sql, Object.values(data));
    }

    async read(query) {
        Postgres.pool = await Postgres.connect(process.env.PGSQL_URL);
        const whereClause = Object.keys(query).map((key, index) => `${key}=$${index + 1}`).join(' AND ');
        const sql = `SELECT * FROM ${this.table} WHERE  ${whereClause}`;

        return await this.pool.query(sql, Object.values(query));
    }

    async update(query, data) {
        Postgres.pool = await Postgres.connect(process.env.PGSQL_URL);
        const setClause = Object.keys(data).map((key, index) => `${key}=$${index + 1}`).join(',');
        const whereClause = Object.keys(query).map((key, index) => `${key}=$${Object.keys(data).length + index + 1}`).join(' AND ');
        const sql = `UPDATE ${this.table} SET ${setClause} WHERE ${whereClause} RETURNING *`;
        return await this.pool.query(sql, [...Object.values(data), ...Object.values(query)]);
    }

    async delete(query) {
        Postgres.pool = await Postgres.connect(process.env.PGSQL_URL);
        const whereClause = Object.keys(query).map((key, index) => `${key}=$${index + 1}`).join(' AND ');
        const sql = `DELETE FROM ${this.table} WHERE ${whereClause} RETURNING *`;

        return await this.pool.query(sql, Object.values(query));
    }

}

export default Postgres;