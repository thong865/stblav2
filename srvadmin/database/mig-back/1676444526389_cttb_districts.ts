import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'cttb_districts'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('title',100)
      table.integer('pvid')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
