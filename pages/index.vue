<template>
  <div class="layout">
    <div class="header">
      <div class="columns is-mobile is-centered">
        <div class="column is-half" style="width: fit-content !important">
          <a @click="scrollToTop">
            <nuxt-img src="/442Logo.webp" alt="442" width="80px" format="webp" />
          </a>
        </div>
      </div>
    </div>
    <div class="columns  is-mobile">
      <div class="column is-three-fifths-desktop" style="margin: 10px;">
        <div class="scene scene--card" style="backgroun:blue">
          <div class="subscene" :class="{ flipme: cardOne == 'flipped' }">
            <div class="card__face card__face--front" @mouseenter="overlay = true" @mouseleave="overlay = false"
              style="backgroun:red">
              <div style="display: flex;justify-content: center;align-items: center;">
                <nuxt-img src="/field.webp" sizes="sm:100vw md:50vw lg:600px" format="webp" quality="100" />
              </div>
              <Transition appear>
                <div class="overlay" v-if="overlay">
                  <b-button @click="fullscreen = true" v-show="cardOne == 'start' ? true : false" type="is-ghost"
                    size="50px">
                    <nuxt-img src="/expand.svg" alt="expand" width="50px" provider="static" quality="100" />
                  </b-button>
                </div>
              </Transition>

              <fullscreen v-model="fullscreen">
                <nuxt-img src="/field.webp" v-show="fullscreen" format="webp" alt="field" provider="static" />
                <div class="players">
                  <client-only>
                    <grid-layout :layout="teamsLayout" :col-num="24" :row-height="30" :is-draggable="true"
                      :is-resizable="false" :vertical-compact="false" :use-css-transforms="true" :auto-Size="false"
                      :maxRows="maxRows" :responsive="false" v-show="fullscreen">
                      <grid-item v-for="item in layout.team1" :key="'1' + item.i" :static="item.static" :x="item.x"
                        :y="item.y" :w="item.w" :h="item.h" :i="item.i" style="touch-action: none">
                        <div>
                          <div class="playerShirt" :style="{ background: team1style }">
                            <b-button size="is-medium" rounded style="background: transparent"
                              @click="editPlayer(item)">
                              <span class="text">{{ item.playerNumber }}</span>
                            </b-button>
                          </div>
                          <div style="text-align: left">{{ item.name }}</div>
                        </div>
                      </grid-item>
                      <grid-item v-for="item in layout.team2" :key="'2' + item.i" :static="item.static" :x="item.x"
                        :y="item.y" :w="item.w" :h="item.h" :i="item.i">
                        <div>
                          <div class="playerShirt" :style="{ background: team2style }">
                            <b-button size="is-medium" rounded style="background: transparent"
                              @click="editPlayer(item)">
                              <span class="text">{{ item.playerNumber }}</span>
                            </b-button>
                          </div>
                          <div style="text-align: left">{{ item.name }}</div>
                        </div>
                      </grid-item>
                    </grid-layout>
                  </client-only>
                </div>
              </fullscreen>
            </div>
            <div class="card__face card__face--back">
              <b-tabs expanded v-model="activeTab">
                <b-tab-item label="Team 1">
                  <b-button>Test Me</b-button>
                </b-tab-item>
                <b-tab-item label="Team 2">
                </b-tab-item>
              </b-tabs>
            </div>
          </div>
        </div>
      </div>
      <div class="column settings">
        <div>
          <b-tabs expanded v-model="activeTab">
            <b-tab-item label="Team 1">
              <div class="columns is-mobile is-centered">
                <div class="column is-half" style="width: fit-content">
                  <nuxt-img src="/442Club.webp" alt="Team1 Logo" width="150px" provider="static"
                    v-if="(team1.team.logo == 'NA' || team1.team.logo == null) ? true : false" />
                  <nuxt-img :src="team1.team.logo" format="webp" v-else />
                </div>
                <div class="column is-half">
                  <b-field label="Team 1 :">
                    <v-select :clearable="false" :options="teams.data" label="team" class="style-chooser"
                      v-model="team1.team"></v-select>
                  </b-field>
                  <b-field label=" Select a color 1">
                    <b-colorpicker v-model="team1.color1" />
                  </b-field>
                  <b-field label="Select a color 2">
                    <b-colorpicker v-model="team1.color2" />
                  </b-field>
                </div>
              </div>
            </b-tab-item>
            <b-tab-item label="Team 2">
              <div class="columns is-mobile is-centered">
                <div class="column is-half" style="width: fit-content">
                  <nuxt-img src="/442Club.webp" alt="Team2 Logo" width="150px" provider="static"
                    v-if="(team2.team.logo == 'NA' || team2.team.logo == null) ? true : false" />
                  <nuxt-img v-else :src="team2.team.logo" width="150px" format="webp" />
                </div>
                <div class=" column is-half">
                  <b-field label="Team 2 :">
                    <v-select :options="teams.data" label="team" class="style-chooser" :clearable="false"
                      v-model="team2.team"></v-select>
                  </b-field>
                  <b-field label="Select a color 1">
                    <b-colorpicker v-model="team2.color1" />
                  </b-field>
                  <b-field label="Select a color 2">
                    <b-colorpicker v-model="team2.color2" />
                  </b-field>
                </div>
              </div>
            </b-tab-item>
          </b-tabs>
        </div>
        <b-button expanded outlined @click="cardOne == 'start' ? (cardOne = 'flipped') : (cardOne = 'start')"
          type="is-primary">
          Lineup
        </b-button>

      </div>
    </div>
    <footer class="footer" style="margin: 10px">
      <div class="content has-text-centered">
        <p>442</p>
      </div>
    </footer>
    <b-modal v-model="isComponentModalActive" has-modal-card trap-focus :destroy-on-hide="false" aria-role="dialog"
      aria-label="Edit Player" close-button-aria-label="Close" aria-modal>
      <div class="modal-card" style="width: auto">
        <header class="modal-card-head">
          <p class="modal-card-title">
            Edit Team {{ SelectedplayerTeam }} Player
          </p>
          <button type="button" class="delete" @click="isComponentModalActive = false" />
        </header>
        <section class="modal-card-body">
          <b-field label="Player Name">
            <b-input placeholder="Player Name" required v-model="SelectedplayerName">
            </b-input>
          </b-field>
          <b-field label="Player Number">
            <b-input type="number" placeholder="Player Number" required min="1" max="99" v-model="SelectedplayerNumber">
            </b-input>
          </b-field>
        </section>
        <footer class="modal-card-foot">
          <b-button label="Reset" type="reset" />
          <b-button label="Submit" type="is-primary" @click="SubmitPlayer" />
        </footer>
      </div>
    </b-modal>
  </div>
</template>

<script>
import VueFullscreen from 'vue-fullscreen'
import Vue from 'vue'
import data from '../assets/layout.json'
import vSelect from 'vue-select'
Vue.use(VueFullscreen)
import 'vue-select/dist/vue-select.css';
export default {
  name: 'IndexPage',
  components: { 'v-select': vSelect },
  data () {
    return {
      overlay: false,
      items: null,
      lineup: false,
      layout: data.layout,
      index: 0,
      fullscreen: false,
      teams: [],
      isComponentModalActive: false,
      activeTab: 0,
      cardOne: "start",
      divwidth: 0,
      SelectedplayerName: '',
      SelectedplayerNumber: 0,
      SelectedplayerID: 0,
      SelectedplayerTeam: 0,
      team1: {
        name: null,
        team: [],
        color1: Math.floor(Math.random() * 16777215).toString(16),
        color2: Math.floor(Math.random() * 16777215).toString(16),
      },
      team2: {
        name: null,
        team: [],
        color1: Math.floor(Math.random() * 16777215).toString(16),
        color2: Math.floor(Math.random() * 16777215).toString(16),
      },
    }
  },

  methods: {
    SubmitPlayer () {
      var temp = null
      if (this.SelectedplayerTeam == 1) {
        temp = this.layout.team1
      } else {
        temp = this.layout.team2
      }
      console.log(temp)
      const UpdatedTeam = temp.map((obj) =>
        obj.i == this.SelectedplayerID
          ? {
            ...obj,
            name: this.SelectedplayerName,
            playerNumber: this.SelectedplayerNumber,
          }
          : obj
      )
      if (this.SelectedplayerTeam == 1) {
        this.layout.team1 = UpdatedTeam
      } else {
        this.layout.team2 = UpdatedTeam
      }
    },
    editPlayer (player) {
      this.isComponentModalActive = true
      this.SelectedplayerName = player.name
      this.SelectedplayerNumber = player.playerNumber
      this.SelectedplayerID = player.i
      this.SelectedplayerTeam = player.team
      console.log(player)
    },
    calculateFieldSize () {
      this.divwidth = this.$refs.field.clientWidth
    },

    scrollToTop () {
      window.window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      })
    },
  },
  async mounted () {
    this.teams = await this.$supabase
      .from('FootballTeams')
      .select('team,logo,id')

  },
  computed: {
    SortedTeams () {
      this.teams.sort((x, y) => {
        y.data.team - x.data.team
      })
      return this.teams
    },
    teamsLayout () {
      return this.layout.team1.concat(this.layout.team2)
    },
    maxRows () {
      if (this.fullscreen == false) {
        if (this.$refs.field == null) {
          return 11
        } else {
          if (this.$refs.field.clientWidth >= 800) {
            return 11
          } else if (
            this.$refs.field.clientWidth < 800 &&
            this.$refs.field.clientWidth > 600
          ) {
            return 9
          } else {
            return 7
          }
        }
      } else {
        return 19
      }
    },
    findclublogo () {
      if (this.team1.team != null || this.team1.team.logo == 'NA') {
        return ''
      } else {
        return this.team1.team.logo
      }
    },
    team2style () {
      return `linear-gradient(90deg, ${this.team2.color1} 25%, ${this.team2.color2} 25%, ${this.team2.color2} 50%, ${this.team2.color1} 50%, ${this.team2.color1} 75%, ${this.team2.color2} 75%, ${this.team2.color2} 100%,${this.team2.color1} 100%)`
    },
    team1style () {
      return `linear-gradient(90deg, ${this.team1.color1} 25%, ${this.team1.color2} 25%, ${this.team1.color2} 50%, ${this.team1.color1} 50%, ${this.team1.color1} 75%, ${this.team1.color2} 75%, ${this.team1.color2} 100%,${this.team1.color1} 100%)`
    },
  },
}
</script>
