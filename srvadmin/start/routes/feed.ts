
import Route from '@ioc:Adonis/Core/Route'

Route.get('/srvcontroller/stbcontract','MessagesController.IndexStbcontract').as('listStcontract')
Route.get('/srvcontroller/stbcontract/frm', 'MessagesController.StbcontractForm').as('createStcontract')
Route.group(() => {
    Route.get('/comments', 'MessagesController.IndexComment')
    Route.get('/comments/products/:id', 'MessagesController.IndexCommentByProd')
    Route.post('/comments', 'MessagesController.comment')


    Route.get('/stbcontract', 'MessagesController.stbcontract')
    Route.post('/stbcontract', 'MessagesController.CreateStbcontract').as('storeStbContract')
    Route.put('/stbcontract/:id', 'MessagesController.updateStbcontract').as('updateStbContract')
    Route.post('/stbcontract/delete', 'MessagesController.deleteStbcontract').as('deleteContract')
}).prefix('srvcontroller/api/v1/feed')
