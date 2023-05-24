import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class MPostTag extends BaseModel {
  public static table = 'cmtb_post_tags'
  @column({ isPrimary: true })
  public id: number
  @column()
  public title:string
}
