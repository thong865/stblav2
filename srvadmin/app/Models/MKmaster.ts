import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm'
import MKcate from './MKcate'
import MKthumnail from './MKthumnail'
import MCvillage from './MCvillage'
import MCdistrict from './MCdistrict'
import MKprodActionMaster from './MKprodActionMaster'
import Mfeedback from './Mfeedback'
const moment = require('moment')
export default class MKmaster extends BaseModel {
  public static table = 'mktb_masters'
  @column({ isPrimary: true })
  public id: number
  @column()
  public title: string
  @column({ columnName: 'pdcode' })
  public prodCode: string
  @column()
  public content: string
  @column({ columnName: 'mk_cate' })
  public cate: number
  @column()
  public ccy: string
  @column()
  public price: number
  @column()
  public village: string
  @column()
  public district: number
  @column()
  public area: string
  @column()
  public status: string
  @column({ columnName: 'map_lon' })
  public mapLon: string
  @column({ columnName: 'map_lat' })
  public mapLat: string

  @column.dateTime({
    autoCreate: true, consume: (val) => {
      return moment(val).format('DD/MM/YYYY hh:mm:ss')
    }
  })
  public createdAt: DateTime

  @column.dateTime({
    autoCreate: true, autoUpdate: true, consume: (val) => {
      return moment(val).format('DD/MM/YYYY hh:mm:ss')
    }
  })
  public updatedAt: DateTime


  @hasOne(() => MKcate, {
    localKey: 'cate',
    foreignKey: 'id'
  })
  public category: HasOne<typeof MKcate>

  @hasOne(() => MCvillage, {
    localKey: 'village',
    foreignKey: 'id'
  })
  public address: HasOne<typeof MCvillage>

  @hasOne(() => MCdistrict, {
    localKey: 'district',
    foreignKey: 'id'
  })
  public city: HasOne<typeof MCdistrict>


  @hasMany(() => MKthumnail, {
    localKey: 'id',
    foreignKey: 'mkid'
  })
  public thumails: HasMany<typeof MKthumnail>
  @hasOne(() => MKthumnail, {
    localKey: 'id',
    foreignKey: 'mkid'
  })
  public image: HasOne<typeof MKthumnail>

  @hasMany(() => MKprodActionMaster, {
    localKey: 'id',
    foreignKey: 'proid'
  })
  public actions: HasMany<typeof MKprodActionMaster>

  @hasMany(() => Mfeedback, {
    localKey: 'id',
    foreignKey: 'prodId'
  })
  public comments: HasMany<typeof Mfeedback>
}
