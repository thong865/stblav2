
import Route from '@ioc:Adonis/Core/Route'
Route.group(() => {

    //product Creation
    Route.post('products', 'MarketsController.StoreProduct').as('createProduct')
    Route.put('products/:id', 'MarketsController.updateProduct').as('updateProduct')
    Route.post('mksearch', 'MarketsController.ProductSearch')

    Route.get('products/', 'MarketsController.index')
    Route.get('products/categoryexist', 'MarketsController.asyncIndexExistCategory')
    Route.delete('products/:id', 'MarketsController.DeleteProduct')
    Route.get('products/:id', 'MarketsController.findone')
    
    /*
    * 
    *
    *
    */
    Route.get('/category', 'MarketsController.IndexCateogry')
    Route.get('/category/:id/compfind', 'MarketsController.FindViewCategory')
    Route.put('/category/:id', 'MarketsController.UpdateCategory')

    Route.put('/vprod/:id/:pid/:actype','MarketsController.setViewProduct')

    Route.post('/category', 'MarketsController.StoreCateogry').as('StoreCateogry')
    Route.delete('/category/:id', 'MarketsController.DeletedCateogry').as('DeletedCateogry')
    
}).prefix('srvcontroller/api/v1/markets')


Route.group(() => {
    Route.get('/', 'MarketsController.ViewIndex').as('listProducts')
    Route.get('/detail/:id', 'MarketsController.ViewProductDetail').as('ViewProduct')
    Route.get('/create', 'MarketsController.ViewForm').as('productForm')
    Route.get('/category', 'MarketsController.ViewCategory').as('ViewCategory')
}).prefix('srvcontroller/stbmarket')

