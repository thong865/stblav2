import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'cmtb_post_types'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('title', 100)
      table.string('slug', 30)
      table.string('group', 30)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
