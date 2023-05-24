import { DateTime } from 'luxon'
import { BaseModel, beforeCreate, column } from '@ioc:Adonis/Lucid/Orm'

export default class MKprodAction extends BaseModel {
  public static table = 'mktb_product_cactions'
  @column({ isPrimary: true })
  public id: number
  @column()
  public proid:number
  @column()
  public uqid:string
  @column()
  public gdate:string
  @column()
  public atype:string
  @column()
  public a_count:number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  // @beforeCreate()
  // public async CreatedAction(MKprodAction act){

  // }
}
