<template>
  <div class="d-menu">
    <div
      v-for="(item, index) in menu"
      :key="index"
      @click="clickMenu(item.path)"
      class="d-menu-item"
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

<style lang="scss">
.d-menu {
  padding-top: 12px;
  .d-menu-item {
    padding: 16px 0;
    width: 78%;
    margin: 16px auto;
    text-align: center;
    border-radius: 6px;
    &:first-of-type {
      background: linear-gradient(to bottom, #ffd9c4, #fff4e5);
    }
    &:nth-of-type(2) {
      background: linear-gradient(to bottom, #e1f0ff, #ebf4fc);
    }
  }
}
</style>
