import Route from '@ioc:Adonis/Core/Route'
Route.group(() => {
    Route.get('/', 'CarouselsController.index').as('ViewCarousel')
    Route.get('detail/:id', 'CarouselsController.findOne').as('ViewCarouselDetail')
    Route.get('/frm', 'CarouselsController.createFrom').as('CarouselCreate')
}).prefix('srvcontroller/carousel')


Route.group(() => {
    Route.get('/', 'CarouselsController.ClientCarousel')
    Route.get('/frm', 'CarouselsController.createFrom')
    Route.put('/:id', 'CarouselsController.UpdateApi').as('UpdateCarousel')
    Route.delete('/:id', 'CarouselsController.DeleteApi').as('DeleteCarousel')
}).prefix('srvcontroller/api/v1/carousel')