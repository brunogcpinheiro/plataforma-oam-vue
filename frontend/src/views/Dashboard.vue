<template>
  <div>
    <Header />
    <v-container>
      <v-layout justify-center>
        <v-flex class="content">

          <v-card class="course">
            <v-card-media
              src="https://www.corpuzfamilydentistry.com/blog/wp-content/uploads/2015/03/invisalign-copy.jpg"
              height="180px"
            ></v-card-media>
            <v-card-title primary-title>
              <div>
                <h2>Ortodontia Iniciante I</h2>
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
                <h2>Ortodontia Intermediária II</h2>
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
              src="https://www.tg24.info/rubriche/wp-content/uploads/2016/04/apparecchio-denti-680x365_c.jpg"
              height="180px"
            ></v-card-media>
            <v-card-title primary-title>
              <div>
                <h2>Ortodontia Avançada IV</h2>
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
.content {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.course {
  margin: 20px;
  width: 350px;
}

p {
  margin: 15px 0 0 0;
}
</style>

