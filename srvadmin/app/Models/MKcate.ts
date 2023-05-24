import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class MKcate extends BaseModel {
  public static table = 'mktb_categories'
  @column({ isPrimary: true })
  public id: number
  @column()
  public title:string
  @column()
  public lang:string
}
