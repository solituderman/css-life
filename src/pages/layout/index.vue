<template>
  <div class="layout">
    <div class="layout-list-wrap">
      <div v-for="(item, index) in lists" :key="index" @click="viewLayoutDetail(item.path)">
        {{ index + 1 }}.{{item.label}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lists: [
        {
          path: '/layout/001-demo',
          label: 'xxx'
        }
      ]
    }
  },
  methods: {
    viewLayoutDetail(path) {
      this.$router.push(path)
    }
  }
}
</script>

<style lang="scss"></style>
