import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class MInterest extends BaseModel {
    public static table = 'cmtb_interests'
    @column({ isPrimary: true })
    public id: number
    @column()
    public ccy: string
    @column()
    public cntid: number
    @column({ columnName: 'int_rate' })
    public rate: number
    @column()
    public rate_class: string
    @column()
    public module: string
    @column.dateTime({ autoCreate: true })
    public createdAt: DateTime

    @column.dateTime({ autoCreate: true, autoUpdate: true })
    public updatedAt: DateTime
}
