import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'sstb_contract_uses'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('title',50)
      table.string('ct_value',50)
      table.string('tyope',10)
      table.integer('order')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
