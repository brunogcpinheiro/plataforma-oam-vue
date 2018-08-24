<template>
  <div>
    <AdminHeader />
    <v-container>
      <v-layout>
          <v-btn color="secondary" to="/dashboard/admin"><v-icon>arrow_back</v-icon> Voltar</v-btn>
      </v-layout>
      <v-card class="create-card">
        <h1>Criar Usuário</h1>
          <v-layout justify-center>
            <v-flex>
              <v-form class="form">
                <v-text-field
                  label="Usuário *"
                  hint="Nome completo"
                  v-model="username"
                  required
                ></v-text-field>
                <v-text-field
                  label="Email *"
                  hint="E-mail de compra"
                  v-model="email"
                  required
                ></v-text-field>
                <v-text-field
                  label="Senha *"
                  type="password"
                  v-model="password"
                  required
                ></v-text-field>
                <v-checkbox
                  v-model="admin"
                  label="Administrador"
                  color="secondary"
                  hide-details
                ></v-checkbox>
                <br />
                <v-autocomplete
                  v-for="i in items"
                  :key="i.id"
                  :items="items"
                  label="Cursos *"
                  multiple
                  chips
                ></v-autocomplete>
                <v-btn color="secondary" @click="onSubmit">Salvar</v-btn>
              </v-form>
              <br>
              <small>* - Campos obrigatórios</small>
            </v-flex>
          </v-layout>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import AdminHeader from '../components/AdminHeader.vue';

  export default {
    name: 'CreateUsers',
    components: {
      AdminHeader
    },
    data() {
        return {
            admin: false,
            username: '',
            email: '',
            password: '',
            items: this.coursesTable
        };
    },
    computed: {
      coursesTable() {
        return this.$store.getters.coursesTable.map(t => console.log(t.title));
      }
    },
    methods: {
      onSubmit() {
        const registerData = {
          username: this.username,
          email: this.email,
          password: this.password,
          admin: this.admin,
        };

        if (this.username && this.email && this.password) {
          this.$store.dispatch('register', registerData);
          const toast = this.$swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            padding: '2em',
            timer: 2000
          });
          toast({
            type: 'success',
            title: 'Usuário cadastrado com sucesso!'
          });
          this.$router.replace('/dashboard/courses');
          this.$store.dispatch('fetchUsersTable');
        } else {
          const toast = this.$swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            padding: '2em',
            timer: 2000
          });

          toast({
            type: 'error',
            title: 'Preencha todos os campos!'
          });
        }
      },
    },
  };
</script>

<style scoped>
.create-card {
  margin-top: 30px;
  padding: 30px;
}
</style>
