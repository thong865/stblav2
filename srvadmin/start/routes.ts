import Route from '@ioc:Adonis/Core/Route'
import Application from '@ioc:Adonis/Core/Application'
import './routes/auth'
import './routes/report'
import './routes/blog'
import './routes/interest'
import './routes/market'
import './routes/city'
import './routes/feed'
import './routes/message'
import './routes/carousel'

Route.get('/', async ({ response }) => {
  return response.redirect('/srvcontroller')
})
Route.get('/srvcontroller', async ({ view }) => {
  return view.render('home')
}).middleware('auth')
Route.get('/srvcontroller/login', async ({ view }) => {
  return view.render('login')
})
Route.get('srvcontroller/rate', 'CbRatesController.exrateRetries')
Route.get('srvcontroller/posts', 'PostController.index')
Route.get('srvcontroller/post/:pid', 'PostController.show')
Route.post('srvcontroller/upload', 'PostController.fileUpload')

Route.get('srvcontroller/file-stream', ({ request, response }) => {
  const { fl } = request.all()
  const filePath = Application.tmpPath(`uploads/${fl}`)
  response.download(filePath)
})