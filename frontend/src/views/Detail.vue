<template>
  <div>
    <Header />
    <v-container>
      <h1>Ortodontia Avançada IV</h1>
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
                <v-card-title>
                  <ol>
                    <li>
                      <v-btn class="video-desc">
                        <h5>Introdução</h5>
                        <small>7:44</small>
                      </v-btn>
                    </li>
                    
                    <li>
                      <v-btn class="video-desc">
                        <h5>Introdução</h5>
                        <small>7:44</small>
                      </v-btn>
                    </li>
                    
                    <li>
                      <v-btn class="video-desc">
                        <h5>Introdução</h5>
                        <small>7:44</small>
                      </v-btn>
                    </li>
                  </ol>
                </v-card-title>
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

  export default {
    name: 'Detail',
    components: {
      Header
    }
  }
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
  
  ol {
    margin-right: 10px;
    background: #752939;
    border-radius: 3px;
    color: #fff;
  }
  
  li {
    padding: 10px;
  }
  
  .video-desc {
    display: flex;
    padding: 10px;
  }
  
  small {
    margin-left: 10px;
  }
</style>
