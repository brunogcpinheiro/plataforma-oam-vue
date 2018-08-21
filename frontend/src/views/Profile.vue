<template>
  <div>
    <Header />
    <v-container>
      <h1>Alterar Perfil</h1>
      <v-layout justify-center>
        <v-flex>
          <v-form class="form" @submit.prevent="changePassword">
            <v-text-field
              label="Name"
              disabled
              :value="user.user.username"
            ></v-text-field>
            <v-text-field
              label="E-mail"
              :value="user.user.email"
              disabled
            ></v-text-field>
            <div class="passwords-field">
              <v-text-field
                label="Senha atual"
                name="old_password"
                v-model="old_password"
                type="password"
              ></v-text-field>
              <v-text-field
                label="Nova senha"
                name="password"
                v-model="password"
                type="password"
              ></v-text-field>
              <v-text-field
                label="Confirmar nova senha"
                name="password_confirmation"
                v-model="password_confirmation"
                type="password"
              ></v-text-field>
            </div>
            <v-btn color="primary" type="submit">Alterar</v-btn>
          </v-form>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import api from '../services/api';
import { mapGetters } from 'vuex';

export default {
  name: 'Profile',
  components: {
    Header
  },
  data() {
    return {
      old_password: '',
      password: '',
      password_confirmation: ''
    };
  },
  computed: {
    ...mapGetters([
      'user'
    ])
  },
  methods: {
    changePassword() {
      /*global localStorage*/
      const token = localStorage.getItem('token');

      api.put('/dashboard/profile/change_password',
          {
            old_password: this.old_password,
            password: this.password,
            password_confirmation: this.password_confirmation,
          },
          {
            headers: {
                Authorization: `Bearer ${token}`
            },
          }
        )
        .then(response => {
            // clear form inputs
            this.old_password = '';
            this.password = '';
            this.password_confirmation = '';
            
            const toast = this.$swal.mixin({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              padding: '2em',
              timer: 2000
            });
            toast({
              type: 'success',
              title: 'Senha alterada com sucesso!'
            });
            this.$router.push('/dashboard/courses');
        })
        .catch(error => {
            // clear form inputs
            this.old_password = '';
            this.password = '';
            this.password_confirmation = '';
            
            if(error.response.data[0].field === 'old_password') {
              const toast = this.$swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                padding: '2em',
                timer: 2000
              });
              toast({
                type: 'error',
                title: 'Senha atual inválida! Digite novamente.'
              });
            } else if(error.response.data[0].field === 'password') {
              const toast = this.$swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                padding: '2em',
                timer: 2000
              });
              toast({
                type: 'error',
                title: 'As novas senhas não conferem! Digite novamente.'
              });
            }
        });
    },
  }
};
</script>

<style scoped>
  h1 {
    text-align: center;
    margin: -30px 0 20px 0;
  }
  
  .passwords-field {
    display: flex;
  }
  
  .passwords-field .v-text-field:first-of-type {
    margin-right: 30px;
  }
  
  .passwords-field .v-text-field:last-of-type {
    margin-left: 30px;
  }

</style>
