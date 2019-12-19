export enum Roles {
  'ADMIN' = 'ADMIN',
  'SUPER_ADMIN' = 'SUPER_ADMIN'
}

class RoleHelper {
  roles = Roles;
  hasRole(checkRoles: Roles[] | undefined | Roles) {
    let loginUser: { roles: Roles[] } = JSON.parse(JSON.stringify(localStorage.getItem('loginUser')));
    if (checkRoles) {
      if (checkRoles.length > 0) {
        let flog: boolean = true;
        for (let i = 0; i < checkRoles.length; i++) {
          let fd = loginUser.roles.find((r) => r === checkRoles[i]);
          if (!fd) {
            return false;
          }
        }
        return flog;
      } else {
        loginUser.roles.find((r) => r === checkRoles);
      }
    }
    return false;
  }
  isAdmin() {
    return this.hasRole(this.roles.ADMIN);
  }
}
export const roleHelper = new RoleHelper();
