import { schema, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class MkCreateProdCateValidator {
  constructor(protected ctx: HttpContextContract) { }
  public schema = schema.create({
    title: schema.string(),
    lang: schema.enum(['en', 'la', 'cn', 'vn'])
  })
  public messages: CustomMessages = {}
}
