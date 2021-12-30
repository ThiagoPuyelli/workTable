import joi from 'joi'
import genValidator from '../utils/genValidator'

export const modifyProject = (required: boolean) => {
  return joi.object({
    title: genValidator('string', required, { max: 40 }),
    background: genValidator('string', false, { max: 30 }),
    workers: genValidator('array', false, undefined),
    description: genValidator('string', false, { max: 200 })
  })
}
