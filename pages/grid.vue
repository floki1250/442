<grid-layout
  :layout.sync="layout"
  :col-num="24"
  :row-height="30"
  :is-draggable="true"
  :is-resizable="false"
  :use-css-transforms="false"
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
