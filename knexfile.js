module.exports = {

    development: {
        client: 'pg',
        connection: 'postgres://localhost/address_dev'
    },

    // production: {
    //     client: 'pg',
    //     connection: process.env.DATABASE_URL
    // },

    test: {
        client: 'pg',
        connection: 'postgres://localhost/address_test_dev'
    }
};
