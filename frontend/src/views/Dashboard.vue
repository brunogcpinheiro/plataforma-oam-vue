<template v-if="">
  <div>
    <Header />
    <v-container>
      <h1>Meus Cursos</h1>
      <v-layout>
        <v-flex class="content">
          
          <v-card class="course">
            <v-card-media
              src="https://www.corpuzfamilydentistry.com/blog/wp-content/uploads/2015/03/invisalign-copy.jpg"
              height="180px"
            ></v-card-media>
            <v-card-title primary-title>
              <div>
                <h3>Ortodontia Iniciante I</h3>
                <small><strong>Autor:</strong> Dr. Alexandre Mendonça</small>
                <p>Lorem idivsum dolor, sit amet consectetur adipisicing elit. Dolorum alias, fuga ipsa possimus illum quidem consectetur corrupti quasi dolor assumenda similique quibusdam quae odit aliquid nisi accusamus est saepe sed?</p>
              </div>
            </v-card-title>
            <v-card-actions class="access">
              <v-btn to="/dashboard/courses/detail" color="primary" block>Acessar curso</v-btn>
            </v-card-actions>
          </v-card>

          <v-card class="course">
            <v-card-media
              src="http://studiodentisticosantevassallo.it/blog/wp-content/uploads/2017/01/Ortodonzia_Linguale-2-1024x483.jpg"
              height="180px"
            ></v-card-media>
            <v-card-title primary-title>
              <div>
                <h3>Ortodontia Intermediária II</h3>
                <small><strong>Autor:</strong> Dr. Alexandre Mendonça</small>
                <p>Lorem idivsum dolor, sit amet consectetur adipisicing elit. Dolorum alias, fuga ipsa possimus illum quidem consectetur corrupti quasi dolor assumenda similique quibusdam quae odit aliquid nisi accusamus est saepe sed?</p>
              </div>
            </v-card-title>
            <v-card-actions class="access">
              <v-btn to="/dashboard/courses/detail" color="primary" block>Acessar curso</v-btn>
            </v-card-actions>
          </v-card>
          
          <v-card class="course">
            <v-card-media
              src="http://especialize-se.com.br/wp-content/uploads/2018/01/ortodontia.jpg"
              height="180px"
            ></v-card-media>
            <v-card-title primary-title>
              <div>
                <h3>Ortodontia Avançada IV</h3>
                <small><strong>Autor:</strong> Dr. Alexandre Mendonça</small>
                <p>Lorem idivsum dolor, sit amet consectetur adipisicing elit. Dolorum alias, fuga ipsa possimus illum quidem consectetur corrupti quasi dolor assumenda similique quibusdam quae odit aliquid nisi accusamus est saepe sed?</p>
              </div>
            </v-card-title>
            <v-card-actions class="access">
              <v-btn to="/dashboard/courses/detail" color="primary" block>Acessar curso</v-btn>
            </v-card-actions>
          </v-card>

        </v-flex>
        </v-layout>
    </v-container>
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import { mapGetters } from 'vuex';

export default {
  name: "Dashboard",
  components: {
    Header
  },
  computed: {
    ...mapGetters([
      'user'
    ])
  },
  methods: {
    onLogout() {
      this.$store.dispatch("logoutUser");
      /*global localStorage*/ localStorage.removeItem('token');
      this.$router.replace('/login');
    }
  },
};
</script>

<style scoped>
.content {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

h1 {
  text-align: center;
  margin: -30px 0 20px 0;
}

.course {
  margin: 20px;
  width: 300px;
}

p {
  margin: 15px 0 0 0;
}
</style>

