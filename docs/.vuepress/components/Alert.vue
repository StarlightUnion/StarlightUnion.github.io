<template>
  <div class="alert">
    <div class="alert-main" v-for="item in notices" :key="item.name">
      <div class="alert-content">
        <span v-show="type === 'info'" class="alert-type type-info">i</span>
        <span v-show="type === 'error'" class="alert-type type-error">×</span>
        {{ item.content }}
      </div>
    </div>
  </div>
</template>

<script>
let seed = 0;

function getUuid() {
  return 'alert_' + (seed++);
}

export default {
  data () {
    return {
      notices: [],
      type: ''
    }
  },
  methods: {
    add (notice) {
      const name = getUuid();
      let _notice = Object.assign({
        name: name
      }, notice);

      this.type = _notice.type ? _notice.type : 'info';
      this.notices.push(_notice);

      const duration = notice.duration;
      setTimeout(() => {
        this.remove(name);
      }, duration * 1000);
    },
    remove (name) {
      const notices = this.notices;

      for (let i = 0; i < notices.length; i++) {
        if (notices[i].name === name) {
          this.notices.splice(i, 1);
          break;
        }
      }
    }
  }
}
</script>

<style lang="stylus">
  .alert
    position fixed
    width 100%
    top 1rem
    left: 0
    text-align center
    pointer-events none
    z-index 99999

  .alert-content
    display inline-block
    padding 0.5rem 1rem
    background: #fff
    border-radius 0.25rem
    box-shadow 0 0.0625rem 0.375rem rgba(0, 0, 0, .2)
    margin-bottom 0.5rem
    height 1.5rem
    line-height 1.5rem

    .alert-type
      width 1.4rem
      height 1.4rem
      border-radius 50%
      text-align center
      line-height 1.4rem
      display inline-block
      color #fff

    .type-info
      background-color #4fc08d

    .type-error
      background-color #e21814
</style>