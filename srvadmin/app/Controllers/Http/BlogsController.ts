import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import CmtbPost from "App/Models/CmtbPost"
import MPostType from "App/Models/MPostType"

export default class BlogsController {
    public async index({ view, response }) {
        const res = await CmtbPost.query().whereIn('module', ['POST']).paginate(1, 50)
        return view.render('blog/show', {
            blogs: res
        })
    }

    public async show({ view, params, response }: HttpContextContract) {
        const res = await CmtbPost.query().whereIn('module', ['POST']).andWhere('id', params.id).first()
        return view.render('blog/detail', {
            blog: res
        })
    }

    public async createFrom({ view, response }) {
        // const res = await CmtbPost.query().whereIn('psType',['RPQT','RPAN']).paginate(1,50)
        const pstype = await MPostType.all()
        return view.render('blog/form', { pstype })
    }


    /// api 
    public async findBlogOne({ params, response }: HttpContextContract) {
        const res = await CmtbPost.query().whereIn('module', ['POST','CRSO']).andWhere('id', params.id).first()
        return response.status(200).json(res)
    }
}
