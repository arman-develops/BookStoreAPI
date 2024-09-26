
import mysql from 'mysql';

import Db from "./dbClass.js";

class Mysql extends Db {

    static pool = null

    constructor(table) {
        super();
        this.table = table;
    }

    static async connect() {
        if(!this.pool) {
            this.pool = mysql.createPool({
                host: process.env.MYSQL_HOST,
                port: process.env.MYSQL_PORT,
                user: process.env.MYSQL_DB_USER,
                password: process.env.MYSQL_DB_PASSWORD,
                database: process.env.MYSQL_DB,
                waitForConnections: true,
                connectionLimit: 10,
                queueLimit: 0, 
            });
            console.log("Connected to MYSQL database");
            
        }
        return this.pool; 
    }

    async insert(data) {
        this.pool = await Mysql.connect();
        const columns = Object.keys(data).join(',');
        const placeholders = Object.keys(data).map(() => '?').join(',');
        const values = Object.values(data).map(value => `'${value}'`).join(',');
        const query = `INSERT INTO ${this.table} (${columns}) VALUES (${placeholders})`;
        return await this.pool.query(query, values);
    }

    async read(query) {
        this.pool = await Mysql.connect();
        const whereClause = Object.keys(query).map(key => `${key}='${query[key]}'`).join(' AND ');
        const sql = `SELECT * FROM ${this.table} WHERE ${whereClause}`;
        return await this.pool.query(sql);
    }

    async update(query, data) {
        this.pool = await Mysql.connect();
        const setClause = Object.keys(data).map(key => `${key}='${data[key]}'`).join(',');
        const whereClause = Object.keys(query).map(key => `${key}='${query[key]}'`).join(' AND ');
        const sql = `UPDATE ${this.table} SET ${setClause} WHERE ${whereClause}`;
        return await this.pool.query(sql);
    }

    async delete(query) {
        this.pool = await Mysql.connect();
        const whereClause = Object.keys(query).map(key => `${key}='${query[key]}'`).join(' AND ');
        const sql = `DELETE FROM ${this.table} WHERE ${whereClause}`;
        return await this.pool.query(sql);
    }
}

export default Mysql;