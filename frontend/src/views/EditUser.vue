<template>
  <div>
    <AdminHeader />
    <v-container>
      <v-layout>
          <v-btn color="secondary" to="/dashboard/admin"><v-icon>arrow_back</v-icon> Voltar</v-btn>
      </v-layout>
      <v-card class="create-card">
        <h1>Editar Usuário</h1>
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
                <v-checkbox
                  v-model="admin"
                  label="Administrador"
                  color="secondary"
                  hide-details
                ></v-checkbox>
                <br />
                <v-select
                  v-model="selected"
                  item-text="title"
                  item-value="id"
                  :items="courses"
                  chips
                  label="Cursos *"
                  multiple
                ></v-select>
                <div v-for="selected in selectedCourses">
                  <p><strong>Curso adquirido.:</strong> {{selected.title}}</p>
                </div>
                <p><strong>* OBS.: CURSOS JÁ ADQUIRIDOS DEVEM SER SELECIONADOS NOVAMENTE.</strong></p>
                <v-btn color="secondary" @click="onSubmit">Atualizar</v-btn>
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
    name: 'EditUser',
    components: {
      AdminHeader
    },
    data() {
        return {
            admin: this.$store.state.editedUserData.admin,
            username: this.$store.state.editedUserData.username,
            email: this.$store.state.editedUserData.email,
            courses: this.$store.getters.coursesTable,
            selectedCourses: this.$store.getters.editedUserData.courses,
            selected: [],
        };
    },
    methods: {
      onSubmit() {
        const registerData = {
          username: this.username,
          email: this.email,
          admin: this.admin,
          courses: this.selected,
          id: this.$route.params.id
        };

        if (this.username && this.email) {
          this.$store.dispatch('updateUser', registerData);
          const toast = this.$swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            padding: '2em',
            timer: 2000
          });
          toast({
            type: 'success',
            title: 'Usuário atualizado com sucesso!'
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

ul {
  list-style: none;
  margin: 0;
  padding: 0 0 20px 0;
}

p {
  color: #4B6584;
}
</style>
