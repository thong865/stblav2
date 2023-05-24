import Route from '@ioc:Adonis/Core/Route'
Route.group(() => {
    Route.get('/provincWithRef', 'CitiesController.IndexProvice')
    Route.get('/findProvincWithRef', 'CitiesController.FindProviceRef')
}).prefix('srvcontroller/api/v1/city')