import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'mktb_masters'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('title')
      table.text('content')
      table.string('image')
      table.integer('mk_cate')
      table.string('ccy')
      table.double('price')
      table.string('area')
      table.string('village',100)
      table.text('tags')
      table.integer('district')
      table.string('pdcode',30)
      table.string('status',1)
      table.string('map_lon',200)
      table.string('map_lat',200)
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
