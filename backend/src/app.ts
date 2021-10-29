import express, { Application } from 'express'
import { connect } from 'mongoose'
import morgan from 'morgan'
import cors from 'cors'
import { config } from 'dotenv'

export default class App {
  public app: Application

  constructor () {
    this.app = express()

    this.app.set('port', 8300)
    config()
    this.mongoConnect()
    this.setMiddlewares()
    this.app.use(cors(process.env.URL))
  }

  private setMiddlewares () {
    this.app.use(morgan('dev'))
    this.app.use(express.urlencoded({ extended: false }))
    this.app.use(express.json())
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
