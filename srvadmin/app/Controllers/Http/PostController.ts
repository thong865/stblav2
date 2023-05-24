import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Application from '@ioc:Adonis/Core/Application'
import CmtbPost from 'App/Models/CmtbPost'
import StorePostValidator from 'App/Validators/StorePostValidator'


export default class PostController {
    public async index({ request, response }: HttpContextContract) {
        const { module,type} = request.all()
        try {
            const posts = await CmtbPost.query().where('module',module).paginate(1, 200)
            response.status(200)
            return posts
        } catch (error) {

        }
    }

    public async show({ request, params, response }: HttpContextContract) {
        try {
            const post = await CmtbPost.findOrFail(params.pid)
            response.status(200)
            return post
        } catch (error) {

        }
    }

    public async store({ request, response }: HttpContextContract) {
        const payload = await request.validate(StorePostValidator)
        const { shortDesc } = request.all()

        try {
            const result = await CmtbPost.create({ title: payload.title, short_desc: shortDesc, content: payload.content, background: payload.background, module: payload.module, psType: payload.ptype })
            if(result.$attributes.module == 'CRSO'){
                response.redirect('/srvcontroller/carousel')
            }
            

            return payload

        } catch (error) {
             console.log(error)
            response.badRequest(error.messages)
        }

    }



    public async indexPostType({ request, response }: HttpContextContract) {

        const payload = await request.validate(StorePostValidator)

        try {

        } catch (error) {

        }

    }


    public async fileUpload({ request, response }: HttpContextContract) {
        try {
            const files = request.files('upload')
            const rsfile = []

            if (files.length > 1) {
                for (let file of files) {
                    await file.move(Application.tmpPath('uploads'))
                    rsfile.push({ uploaded: true, url: `/file-stream?fl=${file.fileName}` })
                }
                return response.status(200).json(rsfile)
            } else {
                await files[0].move(Application.tmpPath('uploads'))
                return { uploaded: true, url: `/file-stream?fl=${files[0].fileName}` }
            }
        } catch (error) {

        }

    }

}
