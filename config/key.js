if (process.env.NODE_ENV === 'Production') {
    module.exports = require('./prod')
} else {
    module.exports = require('./dev')
}

// module.exports = {
//     mongoURI:'mongodb+srv://camlump:12345@cluster0.vo7mu.mongodb.net/image-data?retryWrites=true&w=majority',
//     secretOrKey: "secret"
// };