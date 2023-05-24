// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import CmtbPost from "App/Models/CmtbPost"

export default class ReportsController {
    public async index({ view, response }) {
        const res = await CmtbPost.query().whereIn('module', ['RPQT', 'RPAN']).paginate(1, 50)
        return view.render('reports/show', {
            reports: res
        })
    }

    public async createFrom({ view, request, response }) {
        // const res = await CmtbPost.query().whereIn('psType',['RPQT','RPAN']).paginate(1,50)
        return view.render('reports/create')
    }
}
