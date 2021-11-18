export class UserService {
  async getAll() {
    const res = await fetch('/users');
    const data = await res.json();
    return data;
  }
}
