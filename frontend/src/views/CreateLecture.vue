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
                  label="ID da aula *"
                  hint="ID do Vimeo"
                  v-model="lectureURL">
                </v-text-field>
                <v-btn color="secondary" @click="onSubmit">Salvar</v-btn>
              </v-form>
              <br>
              <small>* - Campos obrigatórios</small>
              
              <div v-if="addLectureContent.lectures.length == 0">
                <h3>Sem aulas cadastradas neste módulo.</h3>
              </div>
              <div v-else>
                <h3>Aulas cadastradas neste módulo <v-icon>arrow_downward</v-icon></h3>
                <div class="lectures-list" v-for="lecture in addLectureContent.lectures">
                  <ul>
                    <li><strong>Aula.: </strong>{{lecture.lectureTitle}} - <strong>ID.: </strong><small>{{lecture.lectureURL}}</small></li>
                  </ul>
                </div>
              </div>
            </v-flex>
          </v-layout>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import AdminHeader from '../components/AdminHeader.vue';
import { mapGetters } from 'vuex';

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
    computed: {
      ...mapGetters(['addLectureContent'])
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

h3 {
  margin-top: 20px;
}

.create-card {
  margin-top: 30px;
  padding: 30px;
}

.lectures-list {
  margin-top: 25px;
  border: 1px solid #4B6584;
}
</style>
