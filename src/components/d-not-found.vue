<template>
  <div class="d-not-found" @click="backHome">
    <p>404</p>
    <p>回到主页</p>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    backHome() {
      this.$router.push('/')
    },
  },
}
</script>

<style lang="scss">
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
}
</style>
