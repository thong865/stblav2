import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import MUser from 'App/Models/MUser'
import LoginValidator from 'App/Validators/LoginValidator'
import RegisterValidator from 'App/Validators/RegisterValidator'

export default class AuthController {
    public async WebLogin({ request, response, auth, session }: HttpContextContract) {
        const payload = await request.validate(LoginValidator)
        try {
            await auth.use('web').attempt(payload.username, payload.password)
            response.redirect('/srvcontroller')
        } catch (e) {
            console.log(e)
            session.flash('notifyError', 'Login Failer')
            return response.redirect().back()
        }
    }
    public async WebRegister({ request, response }: HttpContextContract) {
        const payload = await request.validate(RegisterValidator)
        try {
            response.status(201)
            const user = await MUser.create(payload)
            response.status(201).json(user)
        } catch (error) {
            console.log(error)
        }

    }
}
