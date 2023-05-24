import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm'
import MPostType from 'App/Models/MPostType'
import MInterest from 'App/Models/MInterest'

export default class CmtbPost extends BaseModel {
  public static table = 'cmtb_posts'
  @column({ isPrimary: true })
  public id: number
  @column()
  public background: string
  @column()
  public title: string
  @column()
  public short_desc:string
  @column()
  public content: string
  @column({columnName:'ps_type'})
  public psType: number
  @column()
  public module: string
  @column()
  public lang: string
  @column()
  public slug: string
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime


  @hasOne(() => MPostType, {
    localKey: 'psType',
    foreignKey: 'id'
  })
  public ptype: HasOne<typeof MPostType>

  @hasMany(() => MInterest, {
    localKey: 'id',
    foreignKey: 'cntid'
  })
  public irate: HasMany<typeof MInterest>
}
