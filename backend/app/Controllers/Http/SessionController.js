"use strict";

const User = use("App/Models/User");
const Hash = use("Hash")
const Persona = use('Persona')

class SessionController {
  async index() {
    const users = await User.all();
    
    return users;
  }
  
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
    
    return user;
  }
  
  async changePassword ({ request, auth }) {
    const payload = request.only(['old_password', 'password', 'password_confirmation']);
    const user = auth.user;
    await Persona.updatePassword(user, payload);
  }
  
  async destroy({ params }) {
    const user = await User.find(params.id);
    await user.delete();
    return user;
  }
}

module.exports = SessionController;
