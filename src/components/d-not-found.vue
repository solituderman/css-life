<template>
  <div class="d-not-found" @click="backHome">
    <p>404</p>
    <p>{{ nowtime }}s 后<span class="back-home">回到主页</span></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timer: null,
      nowtime: 5,
    }
  },
  created() {
    this.timer = setInterval(() => {
      if (--this.nowtime < 0) {
        this.backHome()
        clearInterval(this.timer)
      }
    }, 1000)
  },
  destroyed() {
    clearInterval(this.timer)
  },
  methods: {
    backHome() {
      this.$router.push('/')
    },
  },
}
</script>

<style lang="scss">
@import '@/styles/global';
.d-not-found {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 16px;
  text-align: center;
  color: #666;
  p:first-of-type {
    font-size: 24px;
  }

  .back-home {
    color: $color-default;
  }
}
</style>
