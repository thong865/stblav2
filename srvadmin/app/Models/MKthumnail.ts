import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class MKthumnail extends BaseModel {
  public static table = 'mktb_thumnails'
  @column({ isPrimary: true })
  public id: number
  @column()
  public mkid: number
  @column()
  public file: string
}
