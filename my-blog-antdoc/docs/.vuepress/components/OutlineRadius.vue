<template>
  <div class="outline-radius">
    <button class="first" @click="ShowTip">检索</button>
    <button class="second" @click="ShowTip">检索</button>
  </div>
</template>

<script>
export default {
  name: "OutlineRadius",
  data () {
    return {}
  },
  methods: {
    ShowTip () {
      this.$message.info("点击成功");
    }
  }
}
</script>

<style lang="less">
  .outline-radius {
    height: 6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem 0;
    border: 1px dashed #ccc;

    button {
      cursor: pointer;
      height: 2rem;
      font-size: 1rem;
      padding: 0 1.2rem;
      line-height: 2rem;
      text-align: center;
      user-select: none;
      border-radius: 4px;
      transition: all .3s cubic-bezier(.645,.045,.355,1);
      background: #1676FE;
      color: #fff;
      border: none;
      box-shadow: none;

      &:hover {
        background: #005fe6;
      }

      &.first {
        margin-right: 1rem;

        &:focus, &:focus-within {
          outline: 4px solid rgba(22, 118, 254, .13);
        }
      }

      &.second:focus, &.second:focus-within {
        outline: none;
        box-shadow: 0 0 0 4px rgba(22, 118, 254, .13);
      }
    }
  }
</style>