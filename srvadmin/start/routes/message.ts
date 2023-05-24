import Route from '@ioc:Adonis/Core/Route'
Route.group(()=> {
    Route.get('', 'MessagesController.IndexMessage').as('listMessages')
}).prefix('srvcontroller/message')