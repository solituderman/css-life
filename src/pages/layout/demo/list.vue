<template>
  <div class="list-wrap">
    <div
      class="list-item"
      v-for="(item, index) in lists"
      :key="index"
      @click="viewLayoutDetail(item)"
    >
      {{ index + 1 }}.{{ item.label }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lists: [
        {
          path: '/layout/layout-001',
          label: '实现五个元素水平排列且始终左右间距为10px',
        },
        {
          path: '/layout/layout-001',
          label: '实现五个元素水平排列且始终左右间距为10px',
        },
      ],
    }
  },
  methods: {
    viewLayoutDetail(item) {
      this.$router.push({ path: item.path, query: { title: item.label } })
    },
  },
}
</script>

<style lang="scss">
.list-wrap {
  padding: 32px 16px;
}
.list-item {
  padding: 8px 0;
  margin-bottom: 6px;
}
</style>
