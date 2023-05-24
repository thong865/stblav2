import { BaseModel, BelongsTo, belongsTo, column, hasOne, HasOne } from '@ioc:Adonis/Lucid/Orm'
import MCdistrict from 'App/Models/MCdistrict'

export default class MCvillage extends BaseModel {
  public static table = 'cttb_villages'
  @column({ isPrimary: true })
  public id: number
  @column()
  public title: string
  @column()
  public dtid: number

  @hasOne(() => MCdistrict, {
    localKey: 'dtid',
    foreignKey: 'id'
  })
  public district: HasOne<typeof MCdistrict>

  @belongsTo(()=> MCdistrict,{
    localKey:'dtid',
    foreignKey:'id'
  })
  public bedistrict: BelongsTo<typeof MCdistrict>
}
