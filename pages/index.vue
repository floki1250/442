<template>
  <div class="layout">
    <div class="header">
      <div class="columns is-mobile is-centered">
        <div class="column is-half" style="width: fit-content !important">
          <a @click="scrollToTop">
            <nuxt-img src="/442Logo.svg" alt="442" width="80px" />
          </a>
        </div>
      </div>
    </div>

    <div class="columns">
      <div class="column is-three-fifths">
        <div style="margin-left: 10px">
          <b-button outlined @click="takeScreenShot" type="is-warning">
            ScrenShot
          </b-button>

          <b-button
            outlined
            @click="fullscreen = !fullscreen"
            type="is-primary"
          >
            Fullscreen
          </b-button>
        </div>
        <fullscreen v-model="fullscreen">
          <div
            style="position: relative; padding: 10px"
            id="capture"
            ref="field"
          >
            <img src="/field.jpg" />

            <div class="players">
              <client-only>
                <grid-layout
                  :layout.sync="layout"
                  :col-num="24"
                  :row-height="30"
                  :is-draggable="true"
                  :is-resizable="false"
                  :use-css-transforms="true"
                  :vertical-compact="false"
                  :auto-Size="false"
                  :maxRows="maxRows"
                >
                  <grid-item
                    v-for="item in layout"
                    :key="item.i"
                    :static="item.static"
                    :x="item.x"
                    :y="item.y"
                    :w="item.w"
                    :h="item.h"
                    :i="item.i"
                  >
                    <div>
                      <div
                        class="playerShirt"
                        :style="{ background: team1style }"
                      >
                        <b-button
                          size="is-medium"
                          rounded
                          style="background: transparent"
                        >
                          <span class="text">{{ item.i }}</span>
                        </b-button>
                      </div>
                      <div style="text-align: left">{{ item.name }}</div>
                    </div>
                  </grid-item>
                </grid-layout>
              </client-only>
            </div>
          </div>
        </fullscreen>
      </div>

      <div class="column settings">
        <div>
          <!--Team 2-->
          <b-tabs expanded v-model="activeTab">
            <b-tab-item label="Team 1">
              <div class="columns is-mobile is-centered">
                <div class="column is-half" style="width: fit-content">
                  <!-- <img :src="findclublogo" alt="" width="100px" /> -->
                  <nuxt-img src="/442Club.png" width="150px" />
                </div>

                <div class="column is-half">
                  <b-field label="Team 2 :">
                    <b-select
                      placeholder="Select a Team"
                      v-model="team1.team"
                      icon="soccer"
                    >
                      <option
                        v-for="i in this.teams.data"
                        :key="i.id"
                        :value="i"
                      >
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

                  <b-field label="Select a color 1">
                    <b-colorpicker v-model="team1.color1" />
                  </b-field>

                  <b-field label="Select a color 2">
                    <b-colorpicker v-model="team1.color2" />
                  </b-field>
                </div>
              </div>
            </b-tab-item>
            <b-tab-item label="Team 2">
              <p>team2</p>
            </b-tab-item>
          </b-tabs>
        </div>
      </div>
    </div>
    <div>
      <h2>ScreenShots :</h2>
      <div ref="ScreenShot" style="width: 100%; overflow-x: scroll"></div>
    </div>
    <hr />
    <footer class="footer" style="margin: 10px">
      <div class="content has-text-centered">
        <p>442</p>
      </div>
    </footer>
  </div>
</template>

<script>
import VueFullscreen from 'vue-fullscreen'
import Vue from 'vue'
import data from '../assets/layout.json'
import html2canvas from 'html2canvas'
Vue.use(VueFullscreen)

export default {
  name: 'IndexPage',

  data() {
    return {
      layout: data.layout,
      index: 0,
      fullscreen: false,
      teams: [],
      lineup: ['4-4-2', '4-3-3', '5-3-2', '3-5-2'],
      divwidth: 0,
      activeTab: 0,
      team1: {
        name: null,
        team: [],

        color1: Math.floor(Math.random() * 16777215).toString(16),
        color2: Math.floor(Math.random() * 16777215).toString(16),
      },
    }
  },

  methods: {
    calculateFieldSize() {
      this.divwidth = this.$refs.field.clientWidth
    },
    takeScreenShot() {
      html2canvas(this.$refs.field).then((canvas) => {
        this.$refs.ScreenShot.appendChild(canvas)
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
    this.teams = await this.$supabase
      .from('FootballTeams')
      .select('team,logo,id')
  },
  computed: {
    maxRows() {
      if ((this.$refs.field = !null)) {
        if (this.fullscreen == true) return 19
        else {
          this.calculateFieldSize()
          switch (this.divwidth) {
            case this.divwidth >= 800:
              return 11
            case this.divwidth < 800 && this.divwidth >= 700:
              return 9
            default:
              return 11
          }
        }
      }
    },
    findclublogo() {
      if (this.team1.team != null) {
        if (this.team1.team.logo == 'NA') {
          return ''
        } else {
          return this.team1.team.logo
        }
      }
    },
    team1style() {
      if (this.team1.color1 == '' || this.team1.color1 == null) {
        this.team1.color1 = '#000'
        this.team1.color2 = '#FFF'
      }
      return `linear-gradient(90deg, ${this.team1.color1} 25%, ${this.team1.color2} 25%, ${this.team1.color2} 50%, ${this.team1.color1} 50%, ${this.team1.color1} 75%, ${this.team1.color2} 75%, ${this.team1.color2} 100%,${this.team1.color1} 100%)`
    },
  },
}
</script>
