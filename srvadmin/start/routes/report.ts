import Route from '@ioc:Adonis/Core/Route'
Route.get('srvcontroller/reports','ReportsController.index')
Route.get('srvcontroller/reports/frm','ReportsController.createFrom').as('reportCreate')