import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class MKprodActionMaster extends BaseModel {
  public static table = 'mktb_product_caction_masters'
  @column({ isPrimary: true })
  public id: number
  @column()
  public proid:number
  @column({columnName:'atype'})
  public acType:string
  @column({columnName:'a_count'})
  public count:number

  @column.dateTime({ autoCreate: true})
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
