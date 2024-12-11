class DatabaseConnection {
    constructor() {
        if (DatabaseConnection.instance) {
            return DatabaseConnection.instance;
        }
        
        this.connection = null;
        DatabaseConnection.instance = this;
    }

    connect() {
        if (!this.connection) {
            this.connection = {
                host: 'localhost',
                port: 5432,
                database: 'myapp'
            };
            console.log('Database connection established');
        }
        return this.connection;
    }
}
