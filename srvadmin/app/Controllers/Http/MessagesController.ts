import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import MStbcontract from 'App/Models/MStbcontract'
import Mfeedback from 'App/Models/Mfeedback'
import KeyData from 'App/Services/KeyData'
import CreateMessageValidator from 'App/Validators/CreateMessageValidator'
import StbContractValidator from 'App/Validators/StbContractValidator'
const kdata = KeyData

export default class MessagesController {
    public async comment({ request, response }: HttpContextContract) {
        const xMi = request.headers()['x-mi']
        let textKey;
        const payload = await request.validate(CreateMessageValidator)
        if (!xMi) {
            throw response.badRequest('please provide x-mi')
        } else {
            textKey = kdata.getWebTextPaint(String(xMi).replaceAll('__', '/')).split('|')
        }
        try {
            response.status(201)
            await Mfeedback.create(Object.assign(payload, { uuid: textKey[1], status: 'N', cannel: 'MARKET' }))
            return {
                message: 'created'
            }
        } catch (error) {
            console.log(error)
        }

    }

    public async IndexMessage({ view, request }: HttpContextContract) {
        const { title } = request.all()
        let message;
        if (title && title != '') {
            message = await Mfeedback.query().whereRaw(`message like '%${title}%' or mobile like '%${title}%' or email like '%${title}%'`)
        } else {
            message = await Mfeedback.query().paginate(1, 20)
        }
        return view.render('message/index', {
            message,
            title
        })
    }

    public async IndexComment({ response }: HttpContextContract) {
        try {
            response.status(200)
            const comments = await Mfeedback.query().paginate(1, 20)
            return comments
        } catch (error) {

        }
    }

    public async IndexCommentByProd({ params, response }: HttpContextContract) {
        try {
            response.status(200)
            const comments = await Mfeedback.query().where('prodId', params.id)
            return comments
        } catch (error) {

        }

    }

    ////
    public async CreateStbcontract({ request, response }: HttpContextContract) {
        const payload = await request.validate(StbContractValidator)
        try {
            await MStbcontract.create(payload)
            response.redirect('/srvcontroller/stbcontract')
        } catch (error) {
            console.log(error)
            response.redirect().back()

        }


    }

    public async StoreStbcontract({ params, request, response }: HttpContextContract) {
        const payload = await request.validate(StbContractValidator)
        try {
            await MStbcontract.query().where('id', params.id).update(payload)
            response.redirect('/srvcontroller/stbcontract')
        } catch (error) {
            response.redirect().back()

        }


    }
    public async updateStbcontract({ params, request, response }: HttpContextContract) {
        const payload = await request.validate(StbContractValidator)
        try {
            await MStbcontract.query().where('id', params.id).update(payload)
            response.redirect('/srvcontroller/stbcontract')
        } catch (error) {
            response.redirect().back()

        }


    }
    public async deleteStbcontract({ request, response }: HttpContextContract) {
        const { id } = request.all()
        console.log('asdfasd')
        try {
            const con = await MStbcontract.findOrFail(id)
            con.delete()
            response.redirect('/srvcontroller/stbcontract')
        } catch (error) {
            response.redirect().back()

        }
    }
    public async IndexStbcontract({ view }: HttpContextContract) {
        const dt = await MStbcontract.all()
        return view.render('stbcontract/view', {
            contracts: dt
        })

    }

    public async StbcontractForm({ request, view }: HttpContextContract) {
        const { typ, id } = request.all()

        const seleContract = [
            {
                title: 'ເບີໂທ',
                value: 'phone'
            },
            {
                title: 'Email',
                value: 'envelope'
            },
            {
                title: 'Whatsapp',
                value: 'whatsapp'
            },
            {
                title: 'Fax',
                value: 'file-landscape-alt'
            }
        ]
        let contract;
        if (typ == 'edit' && id) {
            contract = await MStbcontract.query().where('id', id).first()
        }
        return view.render('stbcontract/form', {
            seleContract,
            contract,
            act: typ == 'edit' ? 'edit' : ''
        })

    }


    public async stbcontract({ response }: HttpContextContract) {
        const dt = await MStbcontract.all()
        return response.status(200).json(dt)

    }

}
