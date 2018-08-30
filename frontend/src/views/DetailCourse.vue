<template>
  <div>
    <Header />
    <v-container>
      <h1>Curso: {{accessedCourseData.title}}</h1>
      <v-layout>
        <v-flex ma-0 wrap>
          <div class="main">
            <v-flex xs-12 sm12 md-12 lg-12 xl-12>
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
            <v-flex sm3>
              <v-card class="videos_list">
                <v-expansion-panel>
                  <v-expansion-panel-content
                    v-for="(item,i) in 5"
                    :key="i"
                  >
                    <div slot="header">Módulo</div>
                    <v-card>
                      <ul class="lectures">
                        <li><a>Introdução</a></li>
                        <li><a>Principais conceitos</a></li>
                        <li><a>Ferramentas de ortodontia</a></li>
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
    computed: {
      ...mapGetters([
        'accessedCourseData'
      ])
    }
  };
</script>

<style scoped>

  h1 {
    margin-top: -30px;
  }
  
  h3 {
    text-transform: uppercase;
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
