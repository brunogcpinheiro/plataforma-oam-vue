<template v-if="">
  <div>
    <Header />
    <v-container>
      <h1>Meus Cursos</h1>
      <v-layout>
        <v-flex class="content" v-for="u in user" :key="u.id">
          <v-card class="course" v-for="item in u.courses" :key="item.id">
            <v-card-media
              :src="item.url"
              height="150px"
            ></v-card-media>
            <v-card-title primary-title>
              <div>
                <h3>{{item.title}}</h3>
                <small><strong>Autor:</strong> {{item.author}}</small>
                <p>{{item.description}}</p>
              </div>
            </v-card-title>
            <v-card-actions class="access">
              <v-btn @click="accessCourse(item)" color="primary" block>Acessar curso</v-btn>
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
  created() {
    this.$store.dispatch('fetchUsersTable');
    this.$store.dispatch('fetchCoursesTable');
  },
  methods: {
    onLogout() {
      this.$store.dispatch("logoutUser");
      /*global localStorage*/ localStorage.removeItem('token');
      this.$router.replace('/login');
    },
    accessCourse(item) {
      this.$store.dispatch('accessedCourse', item);
      this.$router.replace(`/dashboard/courses/${item.id}`);
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

.courses-list {
  display: flex;
}

.course {
  margin: 20px;
  width: 300px;
}

p {
  margin: 15px 0 0 0;
}
</style>

