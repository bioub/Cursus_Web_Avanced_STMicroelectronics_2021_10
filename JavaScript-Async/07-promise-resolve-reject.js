class UserService {
  constructor() {

  }
  async getAll() {
    const res = await fetch('/users');
    const data = await res.json();

    return data;
  }
}


class PageUserController {
  constructor(userService) {
    this.userService = userService;
  }
  pageList() {
    this.userService.getAll().then((users) => {
      // TODO UI
      console.log(users);
    })


  }
}

// code source de l'app
const userService = new UserService();
// const pageUserContrl = new PageUserController(userService);


// test unitaire de PageUserController
const fakeUserService = {
  getAll() {
    // return new Promise((resolve) => {
    //   resolve([{id: 1, name: 'A'}])
    // });
    return Promise.resolve([{id: 1, name: 'A'}]);
    // return Promise.reject(new Error('sample error'));
  }
}
const pageUserContrl = new PageUserController(fakeUserService);
pageUserContrl.pageList();
