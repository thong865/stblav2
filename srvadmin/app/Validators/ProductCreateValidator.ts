import { schema, CustomMessages,rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ProductCreateValidator {
  constructor(protected ctx: HttpContextContract) {}

  /*
   * Define schema to validate the "shape", "type", "formatting" and "integrity" of data.
   *
   * For example:
   * 1. The username must be of data type string. But then also, it should
   *    not contain special characters or numbers.
   *    ```
   *     schema.string({}, [ rules.alpha() ])
   *    ```
   *
   * 2. The email must be of data type string, formatted as a valid
   *    email. But also, not used by any other user.
   *    ```
   *     schema.string({}, [
   *       rules.email(),
   *       rules.unique({ table: 'users', column: 'email' }),
   *     ])
   *    ```
   */
  public schema = schema.create({
    title: schema.string(),
    content: schema.string(),
    prodCode:schema.string(),
    area:schema.string(),
    price:schema.number(),
    cate:schema.number(),
    village:schema.string(),
    district:schema.number(),
    ccy:schema.enum(['LAK','THB','USD','CNY']),
    mapLat:schema.string.nullableAndOptional(),
    mapLon:schema.string.nullableAndOptional()
  })
  public messages: CustomMessages = {}
}
