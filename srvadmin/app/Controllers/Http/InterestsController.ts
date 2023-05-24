import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import CmtbPost from 'App/Models/CmtbPost'

export default class InterestsController {
    public async depoistInterest({ request, response }: HttpContextContract) {
        try {
            const dt = await CmtbPost.query().preload('irate', (qb) => { qb.select('ccy', 'rate').where('module', 'DINT') }).where('module', 'DINT')
            response.status(200)
            return dt
        } catch (error) {
            console.log(error)
        }
    }

    public async loanInterest({ request, response }: HttpContextContract) {
        try {
            const dt = await CmtbPost.query().preload('irate', (qb) => { qb.select('ccy', 'rate', 'rate_class').where('module', 'LINT').orderBy('id', 'asc') }).where('module', 'LINT')
            response.status(200)
            return dt
        } catch (error) {

        }
    }




    public async VExrate({ request, view, response }: HttpContextContract) {
     //const dt = await CmtbPost.query().preload('irate', (qb) => { qb.select('ccy', 'rate', 'rate_class').where('module', 'LINT').orderBy('id', 'asc') }).where('module', 'LINT')
        response.status(200)
        return view.render('currency/exchange')
    }

    public async VDeposit({ request, view, response }: HttpContextContract) {
        const dt = await CmtbPost.query().preload('irate', (qb) => { qb.select('ccy', 'rate', 'rate_class').where('module', 'DINT').orderBy('id', 'asc') }).where('module', 'DINT')
           response.status(200)
           return view.render('interest/deposit',{
            dt
           })
    }

    public async VLoan({ request, view, response }: HttpContextContract) {
           const dt = await CmtbPost.query().preload('irate', (qb) => { qb.select('ccy', 'rate', 'rate_class').where('module', 'LINT').orderBy('id', 'asc') }).where('module', 'LINT')
           response.status(200)
           return view.render('interest/loan',{
            dt
           })
    }


}
