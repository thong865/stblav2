import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Application from '@ioc:Adonis/Core/Application'
import MKmaster from 'App/Models/MKmaster'
import ProductCreateValidator from 'App/Validators/ProductCreateValidator';
import MkCreateProdCateValidator from 'App/Validators/MkCreateProdCateValidator';
import MKcate from 'App/Models/MKcate';
import KeyData from 'App/Services/KeyData';
import MKprodAction from 'App/Models/MKprodAction';
import MCprovince from 'App/Models/MCprovince';
import MCdistrict from 'App/Models/MCdistrict';
import Mksearch from 'App/Models/Mksearch';
import MKthumnail from 'App/Models/MKthumnail';
import Database from '@ioc:Adonis/Lucid/Database';

export default class MarketsController {
    public async index({ request, response }: HttpContextContract) {
        const result = await MKmaster.query().preload('category').preload('image', (bq) => {
            bq.select('file')
        }).preload('actions', (q) => {
            q.select('atype', 'count')
        }).where('status', '<>', 'D').paginate(1, 20);
        response.status(200)
        return result
    }
    public async asyncIndexExistCategory({ response }: HttpContextContract) {
        const categories = await MKcate.query().whereRaw(`id in ((select distinct(mk_cate) from ${MKmaster.table} where status <>'D'))`)
        response.status(200)
        return response.json(categories)
    }
    public async findone({ params, request, response }: HttpContextContract) {
        const result = await MKmaster.query().where('id', params.id)
            .preload('category')
            .preload('thumails')
            .preload('actions', (q) => {
                q.select('count', 'atype')
            })
            .preload('city', (qb) => {
                qb.preload('province')
            }).first()
        response.status(200)
        return result
    }
    public async ViewIndex({ request, view, response }: HttpContextContract) {
        const { keyword } = request.all()
        let result;

        if (keyword && keyword != '') {
            const qry = keyword ? `title like '%${keyword}%'` : '';
            result = await MKmaster.query().preload('category').preload('image', (bq) => {
                bq.select('file')
            }).preload('actions', (q) => {
                q.select('count', 'atype')
            }).preload('comments').preload('city').whereNotIn('status', ['D']).andWhereRaw(qry)
        } else {
            result = await MKmaster.query().preload('category').preload('image', (bq) => {
                bq.select('file')
            }).preload('actions', (q) => {
                q.select('count', 'atype')
            }).preload('comments').preload('city', (qt) => {
                qt.preload('province')
            }).whereNotIn('status', ['D']).paginate(1, 20);
        }
        response.status(200)
        return view.render('markets/views', { result, keyword: keyword })
    }

    public async DeleteProduct({ params, response }: HttpContextContract) {

        const product = await MKmaster.findOrFail(params.id)
        product.status = 'D'
        product.save()
        response.status(201)
        return {
            message: 'Deleted'
        }

    }
    public async StoreProduct({ request, response }: HttpContextContract) {
        try {
            const images = [];
            const { thumails } = request.all()
            const payload = await request.validate(ProductCreateValidator)
            for (let image of thumails) {
                images.push({ file: `${image}` })
                // await image.move(Application.tmpPath(`markets/20203320`))
            }
            const product = await MKmaster.create(Object.assign(payload, { status: 'O' }))
            product.related('thumails').createMany(images)
            response.redirect('/srvcontroller/stbmarket')
            return {
                message: 'created'
            }
        } catch (error) {
            response.redirect().back()
        }


    }
    public async updateProduct({ request, params, response }: HttpContextContract) {
        try {
            const images = [];
            const { thumails } = request.all()
            const payload = await request.validate(ProductCreateValidator)
            for (let image of thumails) {
                images.push({ file: `${image}`,mkid:params.id })
                // await image.move(Application.tmpPath(`markets/20203320`))
            }
            const product = await MKmaster.query().where('id',params.id).update(payload)
            await Database.rawQuery(`delete from mktb_thumnails where mkid=${params.id}`)
            await MKthumnail.createMany(images)
            response.redirect('/srvcontroller/stbmarket')
        } catch (error) {
            // response.redirect().back()
            console.log(error)
        }


    }
    /*
    * Todo create category of product master
    */
    public async StoreCateogry({ request, response }: HttpContextContract) {
        try {
            const payload = await request.validate(MkCreateProdCateValidator)
            await MKcate.create(payload)
            return response.json({ message: 'created' })
        } catch (error) {
            return response.badRequest()
        }

    }
    public async DeletedCateogry({ params, response }: HttpContextContract) {
        try {
            (await MKcate.findOrFail(params.id)).delete()
            response.redirect('/srvcontroller/stbmarket/category')
        } catch (error) {
            return response.badRequest()
        }

    }
    /*
    * Todo show category of product master
    */
    public async IndexCateogry({ request, response }: HttpContextContract) {
        const rs = await MKcate.query().where('lang', 'la')
        response.status(200)
        return rs
    }

    public async ViewForm({ request, view, response }: HttpContextContract) {
        const { typ, id } = request.all()
        let product;
        if (typ && typ == 'edit' && id && id != '') {
            product = await MKmaster.query().where('id', id)
                .preload('category')
                .preload('thumails')
                .preload('actions', (q) => {
                    q.select('count', 'atype')
                })
                .preload('city', (qb) => {
                    qb.preload('province')
                }).first()
        }
        // const result = await MKmaster.query().preload('category').paginate(1, 20);
        const provinces = await MCprovince.all()
        const districts = await MCdistrict.query().where('pvid', 1)
        const category = await MKcate.all()
        response.status(200)
        return view.render('markets/form', {
            provinces,
            districts,
            category,
            product,
            frmType: typ == 'edit' ? 'edit' :''
        })
    }


    public async ViewProductDetail({ params, view }: HttpContextContract) {
        const product = await MKmaster.query().whereNotIn('status', ['D']).andWhere('id', params.id)
            .preload('category')
            .preload('thumails')
            .preload('actions', (q) => {
                q.select('count', 'atype')
            })
            .preload('city', (qb) => {
                qb.preload('province')
            }).preload('comments').first()
        return view.render('markets/detail', {
            product
        })
    }



    /**
     * name
     */
    public async setViewProduct({ params }) {
        const keyData = KeyData
        const getText = keyData.getWebTextPaint(String(params.id).replaceAll('__', '/'))
        const payload = getText.split('|')
        await MKprodAction.updateOrCreate({ proid: params.pid, atype: params.actype, uqid: payload[1], gdate: payload[0] }, { gdate: payload[0], a_count: 2 })
        return `${params.actype} Thanks`

    }

    public async setLikeProduct({ params }) {

    }


    public async ViewCategory({ view }: HttpContextContract) {
        const category = await MKcate.query()
        return view.render('markets/category/index', {
            category
        })
    }
    public async FindViewCategory({ params, view }: HttpContextContract) {
        const category = await MKcate.query().where('id', params.id).first()
        return view.render('components/form/CategoryFormInput', {
            category,
            title: 'ແກ້ໄຂ',
            action: 'edit'
        })
    }
    public async UpdateCategory({ params, request, response }: HttpContextContract) {
        const { title } = request.all()
        try {
            const category = await MKcate.findOrFail(params.id)
            category.title = title
            category.save()
            return response.status(201).json({
                message: 'updated'
            })
        } catch (error) {

        }

    }
    // search
    public async ProductSearch({ request, response }: HttpContextContract) {
        const { keyword, priceMin, priceMax, cat, province, district } = request.all()
        let result = [];
        const sqlkey = keyword && keyword != '' ? 'and concat like ' + `'%${keyword}%'` : ''
            + province && province != 0 ? ' and pvid =' + province : ''
                + district && district != 0 ? ' and district =' + district : ''
                    + cat && cat != 0 ? ' and mk_cate =' + cat : '';
        const findQuery = await Mksearch.query().whereRaw('1=1' + sqlkey)
        for (let i = 0; i < findQuery.length; i++) {
            const dt = await getProduct(findQuery[i].id)
            result.push(dt)
        }
        return response.json(result)

        async function getProduct(id) {
            // return new Promise(async (resolve, reject) => {
            return await MKmaster.query().preload('category').preload('image', (bq) => {
                bq.select('file')
            }).preload('actions', (q) => {
                q.select('count', 'atype')
            }).preload('comments').whereNotIn('status', ['D']).andWhere('id', id).first()
            //     resolve(res)
            // })
        }
    }

}
