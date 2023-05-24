
import Route from '@ioc:Adonis/Core/Route'
Route.group(() => {
    Route.get('/deposit', 'InterestsController.depoistInterest')
    Route.get('/loan', 'InterestsController.loanInterest')
}).prefix('srvcontroller/api/v1/interest')


Route.group(() => {
    Route.get('/deposit', 'InterestsController.VDeposit')
    Route.get('/loan', 'InterestsController.VLoan')
}).prefix('srvcontroller/interest')


Route.group(() => {
    Route.get('/exchangerate', 'InterestsController.VExrate')
}).prefix('srvcontroller/currency')