import { Schema, Document, model } from 'mongoose'
import ProjectInterface from '../interfaces/ProjectInterface'

const projectSchema = new Schema<ProjectInterface & Document>({
  title: {
    type: String,
    required: true,
    maxLength: 40
  },
  background: {
    type: String,
    maxLength: 30,
    default: '#000000'
  },
  description: {
    type: String,
    maxLength: 200
  },
  workers: {
    type: [Schema.Types.ObjectId],
    ref: 'User',
    default: []
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  moderators: {
    type: [Schema.Types.ObjectId],
    ref: 'User',
    default: []
  },
  tables: {
    type: [{
      title: {
        type: String,
        required: true,
        maxLength: 40
      },
      tasks: {
        type: [{
          title: {
            type: String,
            required: true,
            maxLength: 40
          },
          description: {
            type: String,
            required: true,
            maxLength: 200
          },
          manager: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: 'User'
          }
        }],
        default: []
      }
    }],
    default: [],
    maxLength: 7
  }
}, {
  versionKey: false
})

export default model('Project', projectSchema)
