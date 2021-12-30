export default interface User {
  name: string;
  lastname: string;
  email: string;
  password: string;
  projects: any;
  modeProjects: any;
  workProjects: any;
  comparePasswords?: Function;
}
