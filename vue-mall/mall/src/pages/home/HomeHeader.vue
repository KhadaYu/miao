<!--  -->
<template>
  <me-navbar class="header" :title="title" v-show="visible">
    <i class="iconfont icon-scan" slot="left"></i>
    <div slot="center">????ù</div>
    <i class="iconfont icon-msg" slot="right"></i>
  </me-navbar>
</template>

<script>
  import MeNavbar from 'base/navbar/MeNavbar';
  export default {
    name: 'HomeHeader',
    components: {
      MeNavbar
    },
    methods: {
      show() {
        this.visible = true;
      },
      hide() {
        this.visible = false;
      }
    },
    data() {
      return {
        title: '',
        visible: true
      };
    }
  };
</script>
<style lang='scss' scoped>
  @import "~assets/scss/mixins";

  .header {
    &.mine-navbar {
      background-color: transparent;
      transition: background-color 0.5s;
    }

    &.header-transition {
      background-color: $header-bgc-translucent;
    }

    .iconfont {
      color: $icon-color-default;
      font-size: $icon-font-size;
    }
  }
</style>
