import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class MStbcontract extends BaseModel {
  public static table = 'sstb_contract_uses'
  @column({ isPrimary: true })
  public id: number
  @column()
  public title: string
  @column({columnName:'ct_value'})
  public value: string
  @column({columnName:'tyope'})
  public type: string
  @column()
  public order: number
}
