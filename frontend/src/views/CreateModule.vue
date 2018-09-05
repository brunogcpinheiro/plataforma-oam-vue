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
                  label="Módulo *"
                  v-model="moduleTitle">
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
    name: 'CreateModule',
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
        const contentData = {
          moduleTitle: this.moduleTitle,
        };

        if (this.moduleTitle) {
          this.$store.dispatch('createModule', contentData);
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
