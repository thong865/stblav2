import { BaseModel, column, hasMany, HasMany, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm'
import MCprovince from 'App/Models/MCprovince'
import MCvillage from './MCvillage'

export default class MCdistrict extends BaseModel {
  public static table = 'cttb_districts'
  @column({ isPrimary: true })
  public id: number
  @column()
  public title: string
  @column()
  public pvid: number


  @hasOne(() => MCprovince, {
    localKey: 'pvid',
    foreignKey: 'id'
  })
  public province: HasOne<typeof MCprovince>
  
  @hasMany(()=> MCvillage,{
    localKey:'id',
    foreignKey:'dtid'
  })
  public villages: HasMany<typeof MCvillage>
}
