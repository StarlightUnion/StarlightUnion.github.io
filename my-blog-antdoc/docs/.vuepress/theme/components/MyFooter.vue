<template>
  <div class="my-footer">
    <template v-for="(item, index) in  footers">
      <span
        class="footer-item"
        v-if="!item.link"
      >
        {{item.text}}
      </span>

      <a
        class="footer-item"
        :href="item.link"
        target="_blank"
        v-else
      >
        {{item.text}}
      </a>
      <span class="split-colum">|</span>
    </template>
  </div>
</template>

<script>
export default {
  name: 'MyFooter',
  props: ['footers'],

  mounted () {
    // console.log(this.footers)
  }
}
</script>

<style lang="less">
  @import '../styles/palette.less';

  .my-footer {
    color: #b0b0b0;
    // width: calc(100% - 5rem);
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    font-size: .875rem;
    line-height: 2rem;

    .footer-item:last-of-type + .split-colum {
      display: none;
    }


    a {
      color: #b0b0b0;
      font-weight: normal;

      &:hover {
        color: @accentColor;
        text-decoration: underline;
      }
    }

    .split-colum {
      display: block;
      margin: 0 0.5rem;
    }
  }
</style>