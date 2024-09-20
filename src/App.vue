<template>
  <div class="app-page">
    <div class="app-page-header">
      <div class="app-page-header-logo">
        Logo
      </div>
      <div class="app-page-header-link">
        <router-link to="/home">Home</router-link>
        <router-link to="/about">About</router-link>
      </div>
      <div class="app-page-header-user">
        {{ date }}
      </div>
    </div>

    <div class="app-page-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { dateFormatYMDHMS } from '@/utils/dateFormat'
export default {
  name: 'UseView',
  components: {},
  data() {
    return {
      date: ''
    }
  },
  computed: {},
  created() { },
  mounted() {
    setInterval(() => {
      this.date = dateFormatYMDHMS(new Date())
    }, 1000)
  },
};
</script>
<style lang='scss' scoped>
@import '@/styles/var.scss';

.app-page {
  &-header {
    $height: 40px;
    background: #2b3a42;
    display: flex;
    height: $height;
    color: #fff;
    padding: 0 10px;

    &-logo {
      width: 100px;
      line-height: $height;
    }

    &-user {
      line-height: $height;
      width: 200px;
      text-align: right;
    }

    &-link {
      flex: 1;
      text-align: center;
      justify-content: center;
    }

    a {
      font-size: 24px;
      color: #fff;
      margin: 0 20px;
      text-decoration: none;
    }
  }

  &-content {
    margin: 0 10px;
    padding: 10px;
    height: calc(100vh - 40px);
    box-sizing: border-box;
  }
}
</style>
