<template>
  <div class="title-bar">
    <span
      class="title-bar-icon iconfont icon-icon-test"
      @click="clickBackBtn"
    ></span>
    <span class="title">{{ title }}</span>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  methods: {
    clickBackBtn() {
      this.$router.back()
    },
  },
}
</script>

<style lang="scss">
$titleBarHeight: 48px;

.title-bar {
  position: relative;
  box-sizing: border-box;
  height: $titleBarHeight;
  width: 100%;
  color: #fff;
  background: #169fe6;
  padding: 0 16px;
}
.title-bar-icon {
  font-size: 24px !important;
  line-height: $titleBarHeight;
}
.title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
