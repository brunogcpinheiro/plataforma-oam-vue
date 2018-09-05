<template>
  <div>
    <AdminHeader />
    <v-container>
      <v-layout>
          <v-btn color="secondary" to="/dashboard/admin"><v-icon>arrow_back</v-icon> Voltar</v-btn>
      </v-layout>
      <v-card class="create-card">
        <h1>Criar Aula</h1>
          <v-layout justify-center>
            <v-flex>
              <v-form class="form">
                <v-text-field
                  label="Título da aula *"
                  v-model="lectureTitle">
                </v-text-field>
                <v-text-field
                  label="URL da aula *"
                  v-model="lectureURL">
                </v-text-field>
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
    name: 'CreateLecture',
    components: {
      AdminHeader
    },
    data() {
        return {
            lectureTitle: '',
            lectureURL: '',
        };
    },
    methods: {
      onSubmit() {
        const lectureData = {
          lectureTitle: this.lectureTitle,
          lectureURL: this.lectureURL,
        };

        if (this.lectureTitle && this.lectureURL) {
          this.$store.dispatch('createLecture', lectureData);
          const toast = this.$swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            padding: '2em',
            timer: 2000
          });
          toast({
            type: 'success',
            title: 'Aula adicionada com sucesso!'
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
