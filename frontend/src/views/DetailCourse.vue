<template>
  <div>
    <Header />
    <v-container ma-0 class="content">
      <h1>Curso: {{accessedCourseData.title}}</h1>
      <v-layout row wrap>
        <v-flex xs12 sm12 md12>
          <div class="main">
            <v-flex xs9 md9 lg9>
              <div ma-0 pa-0 class="video-card">
                <v-card class="video">
                  <v-card-title primary-title>
                    <div>
                      <h3>1. INTRODUÇÃO</h3>
                    </div>
                  </v-card-title>
                  
                  <v-card-media
                    src="https://i.ytimg.com/vi/0tLIs66LVIM/maxresdefault.jpg"
                    height="500px"
                  ></v-card-media>
          
                </v-card>
              </div>
            </v-flex>
            <v-flex xs3 md3 lg3 mb3>
              <v-card class="videos_list">
                <v-expansion-panel>
                  <v-expansion-panel-content
                    popout
                    v-for="(item, i) in headers"
                    :key="i"
                  >
                    <div slot="header"><strong>{{item.module}}</strong></div>
                    <v-card>
                      <ul class="lectures" v-for="(lecture, i) in item.lectures" :key="i">
                        <a><li>{{lecture}}</li></a>
                      </ul>
                    </v-card>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-card>
            </v-flex>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import { mapGetters } from 'vuex';

  export default {
    name: 'DetailCourse',
    components: {
      Header
    },
    data() {
      return {
        headers: [
          {
            module: '0. Introdução e principais conceitos',
            lectures: ['Introdução', 'Principais conceitos', 'Definições na Ortodontia']
          },
          {
            module: '1. Conceituando as primeiras ferramentas',
            lectures: ['Introdução às ferramentas', 'Principais problemas', 'Definições de como utilizá-las']
          },
        ]
      };
    },
    computed: {
      ...mapGetters([
        'accessedCourseData'
      ])
    }
  };
</script>

<style scoped>

  h1 {
    margin: -30px 0 10px 10px;
  }
  
  h3 {
    text-transform: uppercase;
  }
  
  .content {
    max-width: 100%;
  }
  
  .main {
    display: flex;
  }
  
  .video-card {
    display: flex;
  }
  
  .video {
    margin: 10px 10px 0;
    padding: 25px;
    width: 100%;
  }
  
  .videos_list {
    margin-top: 10px;
  }
  
  li {
    padding: 10px;
  }
  
  .video-desc {
    display: flex;
    padding: 10px;
    color: #fff;
  }
  
  .lectures li:hover {
    background: #f5f5f5;
  }
</style>
