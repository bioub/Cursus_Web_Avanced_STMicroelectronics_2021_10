import { injectable } from "inversify";
import { UserService } from "./UserService";

@injectable()
export class ModuleUserTheia {
  constructor(protected userService: UserService) {}

  showUsers() {
    this.userService.getAll().then((users) => {
      console.log(users);
    });
  }
}
