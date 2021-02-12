const routes = require('next-routes')();

routes
.add('/newblog','/newBlog')
.add('/books','/books')

module.exports = routes;