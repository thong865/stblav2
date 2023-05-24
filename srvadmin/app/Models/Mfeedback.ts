import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
const moment = require('moment')
export default class Mfeedback extends BaseModel {
  public static table = 'smtb_feedbacks';
  @column({ isPrimary: true })
  public id: number
  @column()
  public mobile: string
  @column()
  public cannel: string
  @column()
  public prodId: number
  @column()
  public email: string
  @column({ columnName: 'iscontract' })
  public isContract: boolean
  @column()
  public message: string
  @column({ columnName: 'mstatus' })
  public status: string
  @column()
  public uuid: string
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
}