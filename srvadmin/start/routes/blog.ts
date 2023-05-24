import Route from '@ioc:Adonis/Core/Route'
Route.group(() => {
    Route.get('/', 'BlogsController.index')
    Route.get('/:id', 'BlogsController.show').as('getPostDetail')
    Route.get('/frm', 'BlogsController.createFrom')
    Route.post('/create', 'PostController.store').as('blogsCreate')
}).prefix('srvcontroller/blogs')


Route.group(() => {
    Route.get('/:id', 'BlogsController.findBlogOne')
}).prefix('srvcontroller/api/v1/blogs')

