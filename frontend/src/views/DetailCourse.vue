<template>
  <div>
    <Header />
    <v-container ma-0 class="content">
      <h1>Curso: {{accessedCourseData.title}}</h1>
      <v-layout row wrap>
        <v-flex xs12 sm12 md12>
          <div class="main">
            <v-flex xs7 md8 lg9>
              <div ma-0 pa-0 class="video-card">
                <v-card class="video">
                  <v-card-title primary-title>
                    <div>
                      <h3>{{selectedLecture}}</h3>
                    </div>
                  </v-card-title>
                  
                  <div class="embed-container">
                    <vimeo-player ref="player" :video-id="selectedLectureURL" @ready="onReady">
                    </vimeo-player>
                  </div>
          
                </v-card>
              </div>
            </v-flex>
            <v-flex xs5 md4 lg3 mb3>
              <v-card class="videos_list">
                <v-expansion-panel>
                  <v-expansion-panel-content
                    popout
                    v-for="(item, i) in headers"
                    :key="i"
                  >
                    <div slot="header"><strong>{{item.moduleTitle}}</strong></div>
                    <v-card>
                      <ul class="lectures" v-for="(lecture, i) in item.lectures" :key="i">
                        <a @click="selected(lecture)"><li>{{lecture.lectureTitle}}</li></a>
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
        headers: this.$store.getters.accessedCourseData.modules,
        selectedLecture: this.$store.getters.accessedCourseData.modules[0].lectures[0].lectureTitle,
        selectedLectureURL: this.$store.getters.accessedCourseData.modules[0].lectures[0].lectureURL,
        options: {
          color: "#ff5566"
        },
        playerReady: false,
      };
    },
    computed: {
      ...mapGetters([
        'accessedCourseData'
      ])
    },
    methods: {
      selected(lecture) {
        this.selectedLecture = lecture.lectureTitle;
        this.selectedLectureURL = lecture.lectureURL;
      },
      onReady() {
          this.playerReady = true;
      },
      play () {
          this.$refs.player.play();
      },
      stop () {
          this.$refs.player.stop();
      }
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
    height: calc(100vh - 200px);
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
  
  .video-player {
    background-size: cover;
  }
  
  .embed-container { 
    position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; 
  } 
  
  .embed-container iframe, .embed-container object, .embed-container embed { 
    position: absolute; top: 0; left: 0; width: 100%; height: 100%; 
  }
</style>
