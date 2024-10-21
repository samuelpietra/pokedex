import { z } from 'zod'

const envSchema = z.object({
  ESLINT_NO_DEV_ERRORS: z.string().transform((value) => value === 'true'),
})

export const env = envSchema.parse(process.env)
