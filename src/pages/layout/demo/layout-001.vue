<template>
  <div class="layout-demo-001">
    <div class="demo-title">{{ title }}</div>
    <div>效果</div>
    <div class="example">
      <div>
        <div></div>
      </div>
      <div>
        <div></div>
      </div>
      <div>
        <div></div>
      </div>
      <div>
        <div></div>
      </div>
      <div>
        <div></div>
      </div>
    </div>
    <div>实现思路</div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      title: this.$route.query.title,
    }
  },
}
</script>

<style lang="scss">
@import '@/styles/demo.scss';

.layout-demo-001 {
  .example:after {
    content: '';
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
  }
  .example {
    padding-left: 10px;
  }
  .example > div {
    float: left;
    height: 100px;
    width: 20%;
    box-sizing: border-box;
    padding: 10px 10px 10px 0;
  }
  .example > div > div {
    width: 100%;
    height: 100%;
    background: lightblue;
  }
}
</style>
