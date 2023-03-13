<template>
  <global-header :user="currentUser"></global-header>
  <div class="el-container">
    <router-view></router-view>
    <!-- <home></home> -->
    <!-- <login></login> -->
  </div>
</template>

<script lang="ts">
import { defineComponent,computed } from 'vue'
import { useStore } from 'vuex'
import GlobalHeader from './components/GlobalHeader.vue'
import Home from './views/Home.vue'
import Login from './views/Login.vue'

export default defineComponent({
  name: 'App',
  components: {
    GlobalHeader,
    Home,
    Login
  },
  setup() {
    const store = useStore()
    const currentUser = computed(() => store.state.user)
    return {
      currentUser
    }
  }
})
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
::-webkit-scrollbar{
  display: none;
}
.el-container{
  padding: 0 120px;
  margin-top: 30px;
  .formBox{
    width: 100%;
    label{
      font-size: 18px;
    }
  }
}
*{
  margin: 0;
  padding: 0;
}
.el-container{
  display: block;
}
a{
  text-decoration: none;
}
</style>
