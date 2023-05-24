import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import CmtbPost from "App/Models/CmtbPost"
import MPostType from "App/Models/MPostType"
import StorePostValidator from "App/Validators/StorePostValidator"

export default class CarouselsController {

    public async index({ view, response }) {
        const res = await CmtbPost.query().preload('ptype').whereIn('module', ['CRSO']).paginate(1, 50)
        return view.render('carousel/show', {
            carousels: res
        })
    }
    public async findOne({ params, view, response }) {
        const res = await CmtbPost.query().preload('ptype').whereIn('module', ['CRSO']).where('id', params.id).first()
        return view.render('carousel/detail', {
            carousel: res
        })
    }


    public async createFrom({ request, view, response }) {
        const { typ, id } = request.all()
        let carousel;
        const pstype = await MPostType.query().where('group', 'CRSO')
        if (typ == 'edit' && id) {
            carousel = await CmtbPost.query().where('id', id).first()
        }
        return view.render('carousel/form', { pstype, carousel: typ == 'edit' ? carousel : '', frmType: typ == 'edit' ? 'edit' : '' })
    }



    // api
    public async indexApi({ request, response }) {
        const { slug } = request.all()
        const res = await CmtbPost.query().preload('ptype').whereIn('module', ['CRSO']).andWhere('slug', slug).paginate(1, 50)
        response.status(200)
        return res
    }

    public async UpdateApi({ request, response }) {
        const { id } = request.all()
        console.log(request.all())
        try {
            const payload = await request.validate(StorePostValidator)
            await CmtbPost.query().where('id', id).update(payload)
            response.redirect('/srvcontroller/carousel')
            return {
                message: 'created'
            }
        } catch (error) {
            console.log(JSON.stringify(error))
            response.redirect().back()
        }

    }

    public async ClientCarousel({ request, response }) {
        const { ptype } = request.all()
        const res = await CmtbPost.query().preload('ptype').where('module', 'CRSO').andWhere('slug', ptype)
        return response.json(res)
    }

    public async DeleteApi({ params, response }:HttpContextContract) {
        try {
            await CmtbPost.query().where('module', 'CRSO').andWhere('id', params.id).delete()
            return response.status(201).json({ code: 200 })
        } catch (error) {
            console.log(error)
        }
    }
}
