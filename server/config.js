const config = {
    name: "admin",
    http: {
        port: "8081"
    },
    base_url_static_file: "/static",
    static_file_folder: "../dist",
    mongodb_uri: "mongodb://localhost:27017/admin"
}
module.exports = config;