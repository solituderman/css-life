<template>
  <div class="d-menu">
    <div
      v-for="(item, index) in menu"
      :key="index"
      @click="clickMenu(item.path)"
    >
      {{ item.label }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        { path: '/layout', name: 'layout', label: '布局' },
        { path: '/animation', name: 'animation', label: '动画' },
      ],
    }
  },
  methods: {
    clickMenu(path) {
      this.$router.push(path)
    },
  },
}
</script>

<style lang="scss"></style>
