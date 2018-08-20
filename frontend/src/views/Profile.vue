<template>
  <div>
    <Header />
    <v-container>
      <h1>Alterar Perfil</h1>
      <v-layout justify-center>
        <v-flex>
          <v-form class="form">
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
                label="Nova senha"
                type="password"
              ></v-text-field>
              <v-text-field
                label="Confirmar nova senha"
                type="password"
              ></v-text-field>
            </div>
            <v-btn color="primary">Alterar</v-btn>
          </v-form>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'Profile',
  components: {
    Header
  },
  computed: {
    ...mapGetters([
      'user'
    ])
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
