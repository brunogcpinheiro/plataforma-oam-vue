<template>
  <div>
    <v-toolbar color="primary">
      <v-toolbar-items>
        <v-btn flat to="/dashboard/courses"><v-icon>local_library</v-icon> Cursos</v-btn>
        <v-btn flat to="/dashboard/profile"><v-icon>person</v-icon> Profile</v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat v-if="this.$store.getters.user.user.admin" to="/dashboard/admin"><v-icon>supervised_user_circle</v-icon> Admin</v-btn>
        <v-btn flat @click="onLogout"><v-icon>exit_to_app</v-icon> Sair</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-container>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    onLogout() {
      this.$store.dispatch("logoutUser");
      /*global localStorage*/ localStorage.removeItem('token');
      this.$router.replace('/login');
    }
  }
};
</script>

<style scoped>
.v-container {
  background: #fafafa;
}

.v-btn {
  color: #fff;
}

.v-icon {
  margin-right: 5px;
}
</style>
