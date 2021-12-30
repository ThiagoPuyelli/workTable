import { Router } from 'express'
import passport from 'passport'
import jwt from 'jsonwebtoken'
import sendResponse from '../utils/sendResponse'
import validatorReq from '../middlewares/validatorReq'
import { registerJoi } from '../validators/users'
import User from '../models/User'
const router = Router()

router.post('/sign-up', validatorReq(registerJoi, 'body'), async (req, res) => {
  try {
    const newUser = await User.create(req.body)

    if (!newUser) {
      return sendResponse(res, 500, 'Error to save new user')
    }

    return sendResponse(res, 200, 'User registered')
  } catch (err) {
    return sendResponse(res, 500, err.message || 'Server error')
  }
})

router.post('/sign-in', passport.authenticate('login'), (req, res) => {
  try {
    console.log('pepe')
    const token = jwt.sign({ userID: req.user._id }, process.env.JWT_PASSWORD, {
      expiresIn: '2d'
    })

    return sendResponse(res, 200, { token })
  } catch (err) {
    return sendResponse(res, 500, err.message || 'Server error')
  }
})

export default router
