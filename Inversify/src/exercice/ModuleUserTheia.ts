import { UserService } from "./UserService";

export class ModuleUserTheia {
  protected userService: UserService;
  constructor() {
    this.userService = new UserService();
  }
  showUsers() {
    this.userService.getAll().then((users) => {
      console.log(users);
    });
  }
}
