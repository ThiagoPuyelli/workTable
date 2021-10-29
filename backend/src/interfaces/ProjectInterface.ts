import { Document } from 'mongoose'

export interface TaskInterface {
  title: string
  description: string;
}

export interface TableInterface {
  title: string;
  tasks: TaskInterface[]
}

export default interface ProjectInterface extends Document {
  title: string;
  background: string;
  tables: TableInterface[];
  workers: string[];
}
