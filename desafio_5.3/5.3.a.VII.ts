export class DesafioService {
  private list: Array<String> = [];

  getUsers() {
    return this.list;
  }

  getUserById(userId: number) {
    return this.list.filter((index) => userId);
  }

  setUsers(users: Array<String>) {
    this.list.concat(users);
  }

  deleteUser(userId: number) {
    if (userId !== -1) {
      this.list.splice(userId, 1);
    }
  }
}
