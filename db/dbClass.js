class Db {

    async insert(data) {
        throw new Error("Insert Method not implemented");
    }

    async read(query) {
        throw new Error("Read Method not implemented");
    }

    async update(query, data) {
        throw new Error("Update Method not implemented");
    }

    async delete(query) {   
        throw new Error("Delete Method not implemented");
    }
}

export default Db;