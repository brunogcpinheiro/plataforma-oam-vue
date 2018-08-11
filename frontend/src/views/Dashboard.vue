<template>
  <div>
    <h1>Dashboard</h1>
    <v-btn @click="onLogout">Logout</v-btn>
    <router-link to="/dashboard/detail">Detalhe</router-link>
  </div>
</template>

<script>
export default {
  methods: {
    onLogout() {
      this.$store.dispatch("logoutUser");
      localStorage.removeItem('token');
      this.$router.replace('/login');
    }
  }
}
</script>
