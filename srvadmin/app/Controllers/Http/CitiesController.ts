import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import MCprovince from 'App/Models/MCprovince'

export default class CitiesController {

    public async IndexProvice({ request, response }: HttpContextContract) {
        const rs = await MCprovince.query().preload('districts', (dbqy) => {
            dbqy.preload('villages')
        })
        return rs
    }

    public async FindProviceRef({ request, response }: HttpContextContract) {
        const rs = await MCprovince.query().preload('districts', (dbqy) => {
            dbqy.preload('villages')
        })
        return rs
    }
}
