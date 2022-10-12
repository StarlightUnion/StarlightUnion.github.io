<template>
  <div class="video-player">
    <video
      controls="controls"
      :src="src"
      :poster="poster"
      preload="preload"
    >
      Your browser does not support the video tag.
    </video>
  </div>
</template>

<script>
export default {
  name: 'DisplayBar',
  props: {
    src: { type: String },
    poster: { type: String }
  }
}
</script>

<style lang="stylus">
  .video-player
    width 100%
    height 100%
    video
      width 100%
      height 100%
      outline none
      background-color #000
</style>