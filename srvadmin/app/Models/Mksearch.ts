import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Mksearch extends BaseModel {
  public static table = 'mkvw_search'
  @column({ isPrimary: true })
  public id: number
  @column()
  public title: string
  @column()
  public concat: string
  @column()
  public mk_cate: number
  @column()
  public district: number
  @column()
  public pvid: number
  @column()
  public price: number
}
