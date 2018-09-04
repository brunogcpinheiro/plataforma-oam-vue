<template>
  <div>
    <AdminHeader />
    <v-container>
      <v-layout>
          <v-btn color="secondary" to="/dashboard/admin"><v-icon>arrow_back</v-icon> Voltar</v-btn>
      </v-layout>
      <v-card class="create-card">
        <h1>Criar Conteúdo</h1>
          <v-layout justify-center>
            <v-flex>
              <v-form class="form">
                <v-text-field
                  label="Módulos *"
                  v-model="moduleTitle"
                ></v-text-field>
                <p><strong>OBS.: </strong>Separar os módulos com ";" (Ponto-vírgula).</p>
                <p><strong>Ex.: </strong>Módulo 1; Módulo 2; Módulo 3</p>
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
    name: 'CourseContent',
    components: {
      AdminHeader
    },
    data() {
        return {
            moduleTitle: '',
        };
    },
    methods: {
      onSubmit() {
        const courseContentData = {
          course_id: this.$store.getters.editedCourseData.id,
          moduleTitle: this.moduleTitle,
        };
        
        console.log(courseContentData);

        if (this.moduleTitle) {
          this.$store.dispatch('createModule', courseContentData);
          const toast = this.$swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            padding: '2em',
            timer: 2000
          });
          toast({
            type: 'success',
            title: 'Módulos adicionados com sucesso!'
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
