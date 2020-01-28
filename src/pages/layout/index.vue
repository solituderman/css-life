<template>
  <div>
    <d-title-bar :title="title"></d-title-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import DTitleBar from '../../components/d-title-bar'

export default {
  data() {
    return {
      title: this.$route.query.title || '',
    }
  },
  components: {
    DTitleBar,
  },
  watch: {
    $route: {
      handler: function(newVal) {
        this.title = newVal.query.title
      },
    },
    immediate: true,
    deep: true,
  },
}
</script>

<style lang="scss"></style>
