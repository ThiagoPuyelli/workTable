import joi from 'joi'
import genValidator from '../utils/genValidator'

const registerJoi = joi.object({
  name: genValidator('string', true, { max: 40 }),
  lastname: genValidator('string', true, { max: 40 }),
  email: genValidator('string', true, { max: 64 }).email(),
  password: genValidator('string', true, { max: 40, min: 4 })
})

export { registerJoi }
