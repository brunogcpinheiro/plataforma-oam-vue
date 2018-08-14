"use strict";

const User = use("App/Models/User");

class SessionController {
  async register({ request }) {
    const data = request.only(["username", "email", "password", "admin"]);

    const user = await User.create(data);

    return user;
  }

  async login({ request, auth }) {
    const { email, password } = request.all();

    const token = await auth.attempt(email, password);

    return token;
  }
  
  async currentUser({ request, auth }) {
    const user = await auth.getUser();
    
    return { user };
  }
}

module.exports = SessionController;
