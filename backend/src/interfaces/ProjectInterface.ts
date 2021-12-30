import { Document } from 'mongoose'

export interface TaskInterface {
  title: string
  description?: string;
  manager: string;
}

export interface TableInterface {
  title: string;
  tasks: TaskInterface[]
}

export default interface ProjectInterface extends Document {
  title: string;
  background: string;
  tables: TableInterface[];
  workers: any;
  owner: any;
  moderators: any;
  description?: string;
}
