module.exports = {
    development: {
        client: 'pg',
        connection: {
            database: 'address_dev'
        }
    },
    test: {
        client: 'pg',
        connection: {
            database: 'address_test_dev'
        }
    }
};
