import { schema, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class StbContractValidator {
  constructor(protected ctx: HttpContextContract) { }
  public schema = schema.create({
    title: schema.string(),
    value: schema.string(),
    type: schema.string()
  })

  public messages: CustomMessages = {}
}
