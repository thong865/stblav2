import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Mexrate extends BaseModel {
  public static table = 'vw_rates'
  @column({ isPrimary: true })
  public id: number
  @column()
  public ccy1: string
  @column()
  public ccy2: string
  @column({ columnName: 'rate_type' })
  public rateType: string
  @column({ columnName: 'buy_rate' })
  public buyRate: number
  @column({ columnName: 'sale_rate' })
  public saleRate: number
  @column({ columnName: 'vm_rate' })
  public vmRate: number
  @column({ columnName: 'mg_rate' })
  public mgRate: number
  @column({ columnName: 'rate_margin' })
  public rateMargin: string
  @column({ columnName: 'rate_date' })
  public rateDate: string
  @column({ columnName: 'rate_time' })
  public rateTime: string
  @column()
  public round: number
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
