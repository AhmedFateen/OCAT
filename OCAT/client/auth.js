class Auth {
  supervisor;
  constructor() {
    this.authenticated = false;
    this.supervisor = false;
  }

  login(cb) {
    this.authenticated = true;
    cb();

  }

  logout() {
    this.authenticated = false;

  }

  supervisorLogin

  isAuthenticated() {
    return this.authenticated;
  }

  isSupervisor() {
    return this.isSupervisor();
  }
}
export default new Auth();
