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
            <v-btn
              :loading="loading"
              :disabled="loading"
              color="primary"
              type="submit"
              large
              @click.native="loader = 'loading'"
            >
              Entrar
              <span slot="loader" class="custom-loader">
                <v-icon light>cached</v-icon>
              </span>
            </v-btn>
        </v-form>
    </div>
</template>

<script>
import api from '../services/api';

export default {
    name: "Login",
    data() {
        return {
            email: '',
            password: '',
            isLoggedIn: false,
            loader: null,
            loading: false
        };
    },
    watch: {
      loader () {
        const l = this.loader
        this[l] = !this[l]

        setTimeout(() => (this[l] = false), 1000)

        this.loader = null
      }
    },
    methods: {
    onSubmit() {
      this.$store.dispatch("login", {
        email: this.email,
        password: this.password
      }).then(() => {
        this.$router.replace('/dashboard/courses');
      }).catch(err => {
        if(err.status === 401) {
          this.$store.dispatch('authError');
        }
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

.custom-loader {
  animation: loader 1s infinite;
  display: flex;
}
@-moz-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-o-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
