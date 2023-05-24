import Route from '@ioc:Adonis/Core/Route'
Route.group(() => {
    Route.post('loginWeb', 'AuthController.WebLogin').as('WebLogin')
    Route.post('register', 'AuthController.WebRegister').as('WebRegister')
}).prefix('srvcontroller/api/v1/auth')