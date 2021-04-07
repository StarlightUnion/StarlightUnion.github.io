<template>
  <div class="person-info">
    <img
      class="person-image"
      v-if="data.logo"
      :src="$withBase(data.logo)"
      :alt="data.logoAlt || 'logo'"
    />

    <div class="person-desc" v-if="description !== null">
      {{ description }}
    </div>

    <div
      class="contact-info"
      v-if="data.contactInfo.length > 0"
      v-for="item in data.contactInfo"
    >
      <template v-if="item.isMail">
        <span :class="item.icon"></span>
        <span>
          <a :href="`mailto:${item.text}`">{{ item.text }}</a>
        </span>
      </template>
      <template v-else>
        <span :class="item.icon"></span>
        <span>{{ item.text }}</span>
      </template>
    </div>

    <div class="platform-info" v-if="data.platformInfo.length > 0">
      <template v-for="item in data.platformInfo">
        <a
          :href="item.link"
          :title="item.title"
          :style="{
            'background-image': 'url(' + $withBase(item.imgPath) + ')',
          }"
          target="_blank"
        >
        </a>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "PersonInfo",
  computed: {
    data() {
      return this.$site.themeConfig;
    },
    description() {
      return this.$description;
    },
  },
};
</script>

<style lang="less">
@import "../styles/palette.less";

.person-info {
  // width: 25rem;
  display: flex;
  flex-direction: column;
  padding: 2rem;

  .person-image {
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
    align-self: center;
    // border: 0.25rem solid #eee;

    &:hover {
      transform: rotate(360deg);
      transition: all 1.5s linear;
    }
  }

  .person-desc {
    font-size: 1rem;
    line-height: 2rem;
    margin-top: 1rem;
    color: #999;
    text-align: center;
    cursor: pointer;

    &:hover {
      color: @accentColor;
    }
  }

  .contact-info {
    width: 100%;
    line-height: 2rem;
    display: flex;
    justify-content: center;

    &:first-of-type {
      margin-top: 1rem;
    }

    .iconfont {
      font-size: 1.2rem;
      margin-right: 0.5rem;
    }

    // span:not(.iconfont):hover {
    //   cursor: pointer;
    //   color: @accentColor;
    // }

    .icon-location {
      font-size: 1.5rem;
    }

    a {
      color: rgba(0, 0, 0, 0.8);
    }
  }

  .platform-info {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    margin: 1rem 0;
    // border-botto: 1px solid #eaecef;
    box-sizing: border-box;

    & > a {
      display: block;
      width: 2.5rem;
      height: 2.5rem;
      margin: 0.5rem;
      border-radius: 50%;
      text-align: center;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      background-attachment: scroll;
    }
  }
}

@media (max-width: @MQMobile) {
  // 719
  .person-info {
    display: flex;
    flex-direction: column;
    padding: 0;
    border-bottom: 1px solid #eaecef;
    width: 100%;

    .person-desc {
      width: 100%;
      box-sizing: border-box;
      padding: 0 4rem;
    }
  }
}
</style>