import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'mktb_thumnails'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('mkid')
      table.string('file')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
