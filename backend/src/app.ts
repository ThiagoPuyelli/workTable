import express, { Application } from 'express'
import { connect } from 'mongoose'
import morgan from 'morgan'
import cors from 'cors'
import { config } from 'dotenv'
import passportBasic from './passport/passport-basic'
import passportJwt from './passport/passport-jwt'
import session from 'express-session'
import passport from 'passport'

// Routes
import authRoutes from './routes/auth.routes'
import projectRoutes from './routes/project.routes'

export default class App {
  public app: Application

  constructor () {
    this.app = express()

    this.app.set('port', 8300)
    config()
    this.mongoConnect()
    this.setMiddlewares()
    this.app.use(cors(process.env.URL))
    passportBasic()
    passportJwt()
    this.setRoutes()
  }

  private setRoutes () {
    this.app.use('/auth', authRoutes)
    this.app.use('/project', projectRoutes)
  }

  private setMiddlewares () {
    this.app.use(morgan('dev'))
    this.app.use(express.urlencoded({ extended: false }))
    this.app.use(express.json())
    this.app.use(session({
      secret: process.env.SECRET_SESSION,
      resave: false,
      saveUninitialized: false
    }))
    this.app.use(passport.initialize())
    this.app.use(passport.session())
  }

  private mongoConnect () {
    const { MONGODB_URI } = process.env

    connect(MONGODB_URI, (err: Error) => {
      if (!err) {
        console.log('Database is connected')
      } else {
        console.log('Error to database error:', err)
      }
    })
  }
}
