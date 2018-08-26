<template>
  <div>
    <AdminHeader />
    <v-container>
      <v-layout>
          <v-btn color="secondary" to="/dashboard/admin"><v-icon>arrow_back</v-icon> Voltar</v-btn>
      </v-layout>
      <v-card class="create-card">
        <h1>Criar Curso</h1>
          <v-layout justify-center>
            <v-flex>
              <v-form class="form">
                <v-text-field
                  label="Nome *"
                  v-model="title"
                  required
                ></v-text-field>
                <v-text-field
                  label="URL *"
                  hint="URL da imagem"
                  v-model="url"
                  required
                ></v-text-field>
                <v-text-field
                  label="Autor *"
                  v-model="author"
                  required
                ></v-text-field>
                <v-text-field
                  label="Decrição *"
                  v-model="description"
                  required
                ></v-text-field>
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
    name: 'CreateCourses',
    components: {
      AdminHeader
    },
    data() {
        return {
            title: '',
            url: '',
            author: '',
            description: ''
        };
    },
    methods: {
      onSubmit() {
        const courseData = {
          title: this.title,
          url: this.url,
          author: this.author,
          description: this.description,
        };

        if (this.title && this.url && this.author && this.description) {
          this.$store.dispatch('createCourse', courseData);
          const toast = this.$swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            padding: '2em',
            timer: 2000
          });
          toast({
            type: 'success',
            title: 'Curso cadastrado com sucesso!'
          });
          this.$router.replace('/dashboard/courses');
          this.$store.dispatch('fetchCoursesTable');
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
