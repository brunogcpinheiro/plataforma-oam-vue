"use strict";

/*global use*/
const User = use("App/Models/User");
const Persona = use('Persona');

class SessionController {
  async index() {
    const users = await User.query().with('courses').fetch();
    
    return users ;
  }
  
  async register({ request }) {
    const { courses, ...data } = request.only(["username", "email", "password", "admin", "courses"]);
    const user = await User.create(data);
    
    if(courses && courses.length > 0) {
      await user.courses().attach(courses);
      user.courses = await user.courses().fetch();
    }

    return user;
  }

  async login({ request, auth }) {
    const { email, password } = request.all();

    const token = await auth.attempt(email, password);

    return token;
  }
  
  async update({ params, request }) {
    const user = await User.findOrFail(params.id);
    const { courses, ...data } = request.only(['username', 'email', 'admin', 'courses']);
    user.merge(data);
    await user.save();
    if(courses && courses.length > 0) {
      await user.courses().detach();
      await user.courses().attach(courses);
      user.courses = await user.courses().fetch();
    }
    return user;
  }
  
  async currentUser({ request, auth }) {
    const user = await User.query().where('id', auth.current.user.id).with('courses').firstOrFail();
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
