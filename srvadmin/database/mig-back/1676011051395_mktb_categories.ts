import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'mktb_categories'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('title',100)
      table.string('lang',5)
      table.integer('parent')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
