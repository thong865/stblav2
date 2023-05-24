import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import Mexrate from 'App/Models/Mexrate';

export default class CbRatesController {
  public async exrateRetries({ request, response }: HttpContextContract) {
    const newRate = [];
    const result = await Database.connection('oracle').rawQuery(`with pc_date_std as
        (select a.branch_code,
                a.ccy1,
                a.ccy2,
                c.ccy_type as ccy1_cd,
                a.rate_type,
                max(a.rate_dt_stamp) as rate_dt_stamp
           from bivw_all_rates_entries a, cytm_ccy_defn_master c
          where a.ccy2 = 'LAK'
            and c.ccy_code = a.ccy1
            and a.rate_type = 'STANDARD'
            and a.branch_code = '001'
            and a.rate_date < = '31-Oct-22' -- to_char('31-Oct-22', 'DD-MON-YYYY')
          group by a.branch_code, a.ccy1, a.ccy2, c.ccy_type, a.rate_type),
       pc_date_cash as
        (select a.branch_code,
                a.ccy1,
                a.ccy2,
                c.ccy_type as ccy1_cd,
                a.rate_type,
                max(a.rate_dt_stamp) as rate_dt_stamp
           from bivw_all_rates_entries a, cytm_ccy_defn_master c
          where a.ccy2 = 'LAK'
            and c.ccy_code = a.ccy1
            and a.rate_type = 'CASH'
            and a.branch_code = '001'
            and a.rate_date < = '31-Oct-22'-- to_char('31-Oct-22', 'DD-MON-YYYY')
          group by a.branch_code, a.ccy1, a.ccy2, c.ccy_type, a.rate_type),
       pc_std as
        (select d.ccy1_cd,
                a.ccy1,
                a.buy_rate  as book,
                a.buy_rate  as trans_b,
                a.sale_rate as trans_s,
                A.rate_dt_stamp
           from bivw_all_rates_entries a, pc_date_std d
          where a.branch_code = d.branch_code
            and a.ccy1 = d.ccy1
            and a.ccy2 = d.ccy2
            and a.rate_type = d.rate_type
            and a.rate_type = 'STANDARD'
            and a.rate_dt_stamp = d.rate_dt_stamp),
       pc_cash as
        (select d.ccy1_cd, a.ccy1, a.buy_rate as cash_b, a.sale_rate as cash_s
           from bivw_all_rates_entries a, pc_date_cash d
          where a.branch_code = d.branch_code
            and a.ccy1 = d.ccy1
            and a.ccy2 = d.ccy2
            and a.rate_type = d.rate_type
            and a.rate_type = 'CASH'
            and a.rate_dt_stamp = d.rate_dt_stamp)
        select pc_std.ccy1_cd,
              pc_std.ccy1,
              pc_std.book,
              nvl(pc_cash.cash_b, 0) cash_b,
              nvl(pc_cash.cash_s, 0) cash_s,
              pc_std.rate_dt_stamp,
              abs(nvl(pc_cash.cash_s, 0) - nvl(pc_std.trans_b, 0)) as margin,
              '0' as money_gram
         from pc_std
         left join pc_cash
           on pc_std.ccy1_cd = pc_cash.ccy1_cd
        --where pc_std.ccy1 in ('USD')
        order by pc_std.ccy1_cd`);

    //  await Mexrate.updateOrCreateMany()
    result.forEach(e => {
      newRate.push({
        ccy1: e.CCY1,
        ccy2: 'LAK',
        rateType: 'CASH',
        buyRate: e.CASH_B,
        saleRate: e.CASH_S,
        vmRate: 0,
        mgRate: e.MONEY_GRAM,
        rateMargin: e.MARGIN,
        rateDate: '',
        rateTime: '',
        round: 1
      })
    });
    // await Mexrate.createMany(newRate)
    return {
      rate_date:'12/12/2022',
      lastUpdate:'12/12/2022',
      changTime:'01:12',
      round:1,
      data: newRate
    }
  }
}
