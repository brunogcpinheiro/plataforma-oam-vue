<template>
  <div>
    <Header />
    <v-container>
        <v-layout justify-center wrap row>
        <v-flex xs12 sm5 md6 lg3 xl4>
          <v-card row>
            <v-card-media
              src="http://dentarth.com.br/wp-content/uploads/2017/12/ortodontia.jpg"
              height="180px"
            ></v-card-media>
            <v-card-title primary-title>
              <div>
                <h2>Ortodontia Iniciante I</h2>
                <small><strong>Autor:</strong> Dr. Alexandre Mendonça</small>
                <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum alias, fuga ipsa possimus illum quidem consectetur corrupti quasi dolor assumenda similique quibusdam quae odit aliquid nisi accusamus est saepe sed?</div>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-btn color="primary">Acessar curso</v-btn>
            </v-card-actions>
          </v-card>
          <v-card>
            <v-card-media
              src="https://www.corpuzfamilydentistry.com/blog/wp-content/uploads/2015/03/invisalign-copy.jpg"
              height="150px"
            ></v-card-media>
            <v-card-title primary-title>
              <div>
                <h2>Ortodontia Avançada III</h2>
                <small>Dr. Alexandre Mendonça</small>
                <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum alias, fuga ipsa possimus illum quidem consectetur corrupti quasi dolor assumenda similique quibusdam quae odit aliquid nisi accusamus est saepe sed?</div>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-btn color="primary">Acessar curso</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import Header from '../components/Header.vue';
export default {
  name: "Dashboard",
  components: {
    Header
  },
  methods: {
    onLogout() {
      this.$store.dispatch("logoutUser");
      localStorage.removeItem('token');
      this.$router.replace('/login');
    }
  }
}
</script>

<style scoped>
</style>

