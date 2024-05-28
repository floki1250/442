<template>
  <div id="ls-widget" v-html="widgetHtml"></div>
</template>

<script>
export default {
  data () {
    return {
      widgetHtml: `
        <div id='wo_w5307_6655ab0cc84ab' class='livescore-widget' style='margin:0px;padding:0px;overflow:hidden'>
          <iframe 
            data-widget='wo_w5307_6655ab0cc84ab' 
            data-hj-allow-iframe='true' 
            src='https://ls.soccersapi.com?w=wo_w5307_6655ab0cc84ab' 
            width='100%' 
            height='100%' 
            frameborder='0' 
            class='widget' 
            style='overflow:hidden;height:80vh;width:100%'>
          </iframe>
        </div>
      `
    };
  }
};
</script>

<style scoped>
/* Add any necessary styles here */
</style>
