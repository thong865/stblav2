import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import MCdistrict from './MCdistrict'

export default class MCprovince extends BaseModel {
  public static table = 'cttb_provinces'
  @column({ isPrimary: true })
  public id: number
  @column()
  public title: string

  @hasMany(()=> MCdistrict,{
    localKey:'id',
    foreignKey:'pvid'
  })
  public districts: HasMany<typeof MCdistrict>
}
