<template>
    <div class="login-form">
        <v-form @submit.prevent="onSubmit">
            <img src="../assets/logo.png" alt="Logo" />
            <v-text-field
              label="E-mail"
              id="email"
              @input="$v.email.$touch()"
              v-model="email"
              name="email"
            ></v-text-field>
            <div>{{$v}}</div>
            <v-text-field
              label="Senha"
              v-model="password"
              id="password"
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
import { mapGetters } from 'vuex';
import { required, email } from 'vuelidate/lib/validators';

export default {
    name: "Login",
    data() {
        return {
            email: '',
            password: '',
            isLoggedIn: false,
            loader: null,
            loading: false,
        };
    },
    watch: {
      loader () {
        const l = this.loader;
        this[l] = !this[l];

        setTimeout(() => (this[l] = false), 1000);

        this.loader = null;
      }
    },
    computed: {
      ...mapGetters([
        'statusType',
        'status'
      ])
    },
    validations: {
      email: {
        required,
        email
      },
    },
    methods: {
    onSubmit() {
      this.$store.dispatch("login", {
        email: this.email,
        password: this.password
      }).then(() => {
        if(this.status === 'success') {
          const toast = this.$swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            padding: '2em',
            timer: 2000
          });
          toast({
            type: 'success',
            title: 'Login efetuado com sucesso!'
          });
        } else if (this.status === 'error' && this.statusType === 'password') {
          const toast = this.$swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            padding: '2em',
            timer: 2000
          });
          toast({
            type: 'error',
            title: 'Senha inválida. Digite novamente.'
          });
        } else if (this.status === 'error' && this.statusType === 'email') {
          const toast = this.$swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            padding: '2em',
            timer: 2000
          });
          toast({
            type: 'error',
            title: 'Usuário não cadastrado.'
          });
        }
        this.$router.replace('/dashboard/courses');
      }).catch(err => {
        return err;
      });
    },
    clearAlert() {
      return this.$store.dispatch('clearAlert');
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
