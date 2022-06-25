<template>
  <div class="layout">
    <div>
      <div class="header">
        <img
          src="../assets/442Logo.svg"
          alt="442"
          class="logo"
          style="width: 100px; padding: 10px"
        />
      </div>
      <div class="columns">
        <div class="column is-three-quarters">
          <fullscreen v-model="fullscreen">
            <div style="position: relative">
              <div class="bg">
                <img src="../assets/field.jpg" alt="" class="Field" />
              </div>
              <div class="players">
                <Grid></Grid>
              </div>
            </div>
          </fullscreen>
        </div>

        <div class="column settings">
          <div class="columns is-mobile">
            <div class="column container">
              <img
                src="https://apiv2.allsportsapi.com/logo/96_juventus.jpg"
                alt=""
                width="100px"
              />
            </div>
            <div class="column container">
              <img
                src="https://apiv2.allsportsapi.com/logo/96_juventus.jpg"
                alt=""
                width="100px"
              />
            </div>
          </div>
          <div class="columns">
            <div class="column">0</div>
            <div class="column">0</div>
          </div>
          <button type="button" @click="toggle" class="button">
            Toggle Fullscreen
          </button>
        </div>
      </div>
      <hr />
      <div>
        <p>hfsdfffffff</p>
      </div>
    </div>
  </div>
</template>

<script>
import VueFullscreen from 'vue-fullscreen'
import Vue from 'vue'
import Grid from '../components/grid.vue'
Vue.use(VueFullscreen)

export default {
  name: 'IndexPage',
  data() {
    return {
      fullscreen: false,
    }
  },
  methods: {
    toggle() {
      this.fullscreen = !this.fullscreen
    },
  },
  components: { Grid },
}
</script>
