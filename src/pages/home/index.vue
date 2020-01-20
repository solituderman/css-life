<template>
  <div class="home-index">
    <div class="home-title">CSS LIFE</div>
    <d-menu class="home-menu"></d-menu>
  </div>
</template>

<script>
import DMenu from './components/d-menu'

export default {
  data() {
    return {}
  },
  components: {
    DMenu,
  },
}
</script>

<style lang="scss">
.home-index {
  padding: 36px 0;
  .home-title {
    text-align: center;
    font-size: 26px;
  }
}
</style>
