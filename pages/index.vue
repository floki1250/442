<template>
  <div class="layout">
    <div class="header">
      <div class="columns is-mobile is-centered">
        <div class="column is-half" style="width: fit-content !important">
          <a @click="scrollToTop">
            <img src="../assets/442Logo.svg" alt="442" width="80px" />
          </a>
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="column is-two-thirds">
        <fullscreen v-model="fullscreen">
          <div style="position: relative" id="capture">
            <div class="bg">
              <img src="../assets/field.jpg" alt="" class="Field" />
            </div>
            <div class="players"></div>
          </div>
        </fullscreen>
      </div>

      <div class="column settings">
        <div class="columns is-mobile is-centered">
          <!--Team 2-->
          <div class="column">
            <img :src="findclublogo" alt="" width="100px" />
            <b-field label="Team 2 :">
              <b-select placeholder="Select a Team" v-model="team1.team">
                <option v-for="i in this.teams.data" :key="i" :value="i">
                  {{ i.team }}
                </option>
              </b-select>
            </b-field>

            <b-field label="Team 2 :">
              <b-select placeholder="Select a Lineup">
                <option :value="j" v-for="j in this.lineup" :key="j">
                  {{ j }}
                </option>
              </b-select>
            </b-field>
            <div>
              <b-field label="Select a color 1">
                <b-colorpicker v-model="team1.color1" />
              </b-field>

              <b-field label="Select a color 2">
                <b-colorpicker v-model="team1.color2" />
              </b-field>
            </div>
          </div>
          <!--Team 1-->
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
        <div class="column is-half"></div>
      </div>
    </div>
  </div>
</template>

<script>
import VueFullscreen from 'vue-fullscreen'
import Vue from 'vue'

import html2canvas from 'html2canvas'
Vue.use(VueFullscreen)

export default {
  name: 'IndexPage',

  data() {
    return {
      fullscreen: false,
      teams: [],
      lineup: ['4-4-2', '4-3-3', '5-3-2', '3-5-2'],

      team1: {
        name: null,
        team: [],
        color1: Math.floor(Math.random() * 16777215).toString(16),
        color2: Math.floor(Math.random() * 16777215).toString(16),
      },
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
    scrollToTop() {
      window.window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      })
    },
  },
  async mounted() {
    this.teams = await this.$supabase.from('FootballTeams').select('team,logo')
  },
  computed: {
    findclublogo() {
      if ((this.team1.team.logo = 'NA')) return '../assets/442Club.png'
      else return this.team1.team.logo
    },
    team1style() {
      return `linear-gradient(90deg, ${this.team1.color1} 25%, ${this.team1.color2} 25%, ${this.team1.color2} 50%, ${this.team1.color1} 50%, ${this.team1.color1} 75%, ${this.team1.color2} 75%, ${this.team1.color2} 100%,${this.team1.color1} 100%)`
    },
  },
}
</script>
