import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class MPostType extends BaseModel {
  public static table = 'cmtb_post_types'
  @column({ isPrimary: true })
  public id: number
  @column()
  public title: string
  @column()
  public slug: string
  @column()
  public group: string
}
