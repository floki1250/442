<template>
  <client-only class="Field">
    <grid-layout
      :layout.sync="layout"
      :col-num="30"
      :row-height="30"
      :is-draggable="draggable"
      :is-resizable="false"
      :vertical-compact="false"
      :use-css-transforms="false"
    >
      <grid-item
        v-for="item in layout"
        :key="item"
        :static="item.static"
        :x="item.x"
        :y="item.y"
        :w="item.w"
        :h="item.h"
        :i="item.i"
      ><img src="../assets/player.svg" alt="">
        <span class="text">{{ itemTitle(item) }}</span>
      </grid-item>
    </grid-layout>
  </client-only>
</template>

<script>
import ClientOnly from 'vue-client-only'

export default {
  components: {
    ClientOnly,
  },
  data() {
    return {
      layout: [
        { x: 2, y: 3, w: 2, h: 2, i: '1', static: false },
        { x: 4, y: 0, w: 2, h: 2, i: '2', static: false },
        { x: 6, y: 0, w: 2, h: 2, i: '3', static: false },
        { x: 8, y: 0, w: 2, h: 2, i: '4', static: false },
        { x: 10, y: 0, w: 2, h: 2, i: '5', static: false },
        { x: 0, y: 5, w: 2, h: 2, i: '6', static: false },
        { x: 2, y: 5, w: 2, h: 2, i: '7', static: false },
        { x: 4, y: 5, w: 2, h: 2, i: '8', static: false },
        { x: 6, y: 3, w: 2, h: 2, i: '9', static: false },
        { x: 8, y: 4, w: 2, h: 2, i: '10', static: false },
        { x: 10, y: 1, w: 2, h: 2, i: '11', static: false },
      ],

      index: 0,
    }
  },
  methods: {
    itemTitle(item) {
      let result = item.i
      if (item.static) {
        result += ' - Static'
      }
      return result
    },
  },
}
</script>

<style scoped>
.vue-grid-layout {
}
.vue-grid-item {
  border-radius: 0%;
}
.vue-grid-item:not(.vue-grid-placeholder) {
  background: transparent ;

}
.vue-grid-item .resizing {
  opacity: 0.1;
}
.vue-grid-item .static {
  background: #cce;
}
.vue-grid-item .text {
  font-size: 24px;
  text-align: center;
  position: absolute;
  top: 1%;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  height: 100%;
  width: 100%;
  color: white;
}
.vue-grid-item .no-drag {
  height: 100%;
  width: 100%;
}
.vue-grid-item .minMax {
  font-size: 12px;
}
.vue-grid-item .add {
  cursor: pointer;
}
.vue-draggable-handle {
  position: absolute;
  width: 20px;
  height: 20px;
  top: 0;
  left: 0;
  background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10'><circle cx='5' cy='5' r='5' fill='#999999'/></svg>")
    no-repeat;
  background-position: bottom right;
  padding: 0 8px 8px 0;
  background-repeat: no-repeat;
  background-origin: content-box;
  box-sizing: border-box;
  cursor: pointer;
}
</style>
