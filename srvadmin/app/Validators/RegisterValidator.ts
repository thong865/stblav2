import { schema, CustomMessages,rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class RegisterValidator {
  constructor(protected ctx: HttpContextContract) {}
  public schema = schema.create({
    fullname: schema.string(),
    mobile: schema.string(),
    email: schema.string(),
    password: schema.string([
      rules.confirmed('cpassword')
    ])
  })
  public messages: CustomMessages = {}
}
