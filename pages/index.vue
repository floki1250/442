<template>
  <div class="layout">
    <div class="header">
      <img
        src="../assets/442Logo.svg"
        alt="442"
        class="logo"
        style="width: 100px; padding: 10px"
      />
    </div>
    <div class="columns">
      <div class="column is-two-thirds">
        <fullscreen v-model="fullscreen">
          <div style="position: relative" id="capture">
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
          <!--Team 2-->
          <div class="column container">
            <img
              src="https://apiv2.allsportsapi.com/logo/96_juventus.jpg"
              alt=""
              width="100px"
            />
            <b-field label="Team 2 :">
              <b-select placeholder="Select a Team">
                <option
                  v-for="option in data"
                  :value="option.id"
                  :key="option.id"
                >
                  {{ option.user.first_name }}
                </option>
              </b-select>
            </b-field>
            <b-field label="Team 2 :">
              <b-select placeholder="Select a Lineup">
                <option
                  v-for="option in data"
                  :value="option.id"
                  :key="option.id"
                >
                  {{ option.user.first_name }}
                </option>
              </b-select>
            </b-field>
            <div>
              <b-field label="Select a color 1">
                <b-colorpicker value="#7957d5" />
              </b-field>
              <b-field label="Select a color 2">
                <b-colorpicker value="#7957d5" />
              </b-field>
            </div>
          </div>
          <!--Team 1-->
          <div class="column container">
            <img
              src="https://apiv2.allsportsapi.com/logo/96_juventus.jpg"
              alt=""
              width="100px"
            />
            <b-field label="Team 1 :">
              <b-select placeholder="Select a Team">
                <option
                  v-for="option in data"
                  :value="option.id"
                  :key="option.id"
                >
                  {{ option.user.first_name }}
                </option>
              </b-select>
            </b-field>
            <b-field label="Team 1 :">
              <b-select placeholder="Select a Lineup">
                <option
                  v-for="option in data"
                  :value="option.id"
                  :key="option.id"
                >
                  {{ option.user.first_name }}
                </option>
              </b-select>
            </b-field>
            <div>
              <b-field label="Select a color 1">
                <b-colorpicker value="#7957d5" />
              </b-field>
              <b-field label="Select a color 2">
                <b-colorpicker value="#7957d5" />
              </b-field>
            </div>
          </div>
        </div>
        <b-button type="button" @click="toggle"> Toggle Fullscreen </b-button>
        <b-button type="button" @click="takeScreenShot">
          Take ScrenShot
        </b-button>
      </div>
    </div>
    <div>
      <div class="columns">
        <div class="column is-half">
          <h2>ScreenShots :</h2>
          <div id="ScreenShot" style="width: 100%"></div>
        </div>
        <div class="column is-half">
          <div id="ScreenShot" style="width: 100%"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueFullscreen from 'vue-fullscreen'
import Vue from 'vue'
import Grid from '../components/grid.vue'
import html2canvas from 'html2canvas'
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
    takeScreenShot() {
      html2canvas(document.querySelector('#capture')).then((canvas) => {
        document.querySelector('#ScreenShot').appendChild(canvas)
      })
    },
  },
  components: { Grid },
}
</script>
