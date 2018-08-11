<template>
    <div class="login-form">
        <v-form @submit.prevent="onSubmit">
            <img src="../assets/logo.png" alt="Logo" />
            <v-text-field
              label="E-mail"
              v-model="email"
              name="email"
            ></v-text-field>
            <v-text-field
              label="Senha"
              v-model="password"
              name="password"
              type="password"
            ></v-text-field>
            <v-btn type="submit" color="primary" large round>Entrar</v-btn>
        </v-form>
    </div>
</template>

<script>
import api from '../services/api';

export default {
    data() {
        return {
            email: '',
            password: '',
            isLoggedIn: false
        };
    },
    methods: {
    onSubmit() {
      this.$store.dispatch("login", {
        email: this.email,
        password: this.password
      }).then(() => {
        localStorage.setItem('token', this.$store.state.token);
        api.defaults.headers.common['Authorization'] = 'Bearer ' + this.$store.state.token;
        this.$router.replace('/dashboard');
      });
    }
  },
};
</script>

<style scoped>
.login-form {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #fafafa;
}

.v-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -50px;
  border-radius: 10px;
  padding: 20px;
  background: #fff;
  -webkit-box-shadow: 0px 2px 5px 0px rgba(204, 204, 204, 1);
  -moz-box-shadow: 0px 2px 5px 0px rgba(204, 204, 204, 1);
  box-shadow: 0px 2px 5px 0px rgba(204, 204, 204, 1);
}

img {
  width: 300px;
  height: 200px;
}

label {
  align-self: flex-start;
  margin-left: 4;
}

.v-text-field {
  padding: 0 10px;
  margin: 10px;
  width: 350px;
  border-radius: 10px;
}

.v-btn:last-child {
  background: #842e41;
  color: #fff;
  cursor: pointer;
}
</style>
