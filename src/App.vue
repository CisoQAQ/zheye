<template>
  <global-header :user="currentUser"></global-header>
  <div class="el-container">
    <!-- <column-list :list="list"></column-list> -->
    <login></login>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ColumnList, { ColumnProps } from './components/ColumnList.vue'
import GlobalHeader, { UserProps } from './components/GlobalHeader.vue'
import Login from './views/Login.vue'

const currentUser: UserProps = {
  isLogin:true,
  name:'ciso',
  id:1
}
const testData:ColumnProps[] = [
  {
    id: 1,
    title: 'test1的专栏',
    description: '这是第一个专栏的内容介绍，后续更新，关注~这是第一个专栏的内容介绍，后续更新，关注这是第一个专栏的内容介绍，后续更新，关注',
  },
  {
    id: 2,
    title: 'test2的专栏',
    description: '这是第二个专栏的内容介绍，后续更新，关注~这是第三个专栏的内容介绍，后续更新，关注~这是第三个专栏的内容介绍，后续更新，关注~',
    avatar: 'https://images.dog.ceo/breeds/pembroke/n02113023_6312.jpg'
  },
  {
    id: 3,
    title: 'test3的专栏',
    description: '这是第三个专栏的内容介绍，后续更新，关注~这是第三个专栏的内容介绍，后续更新，关注~这是第三个专栏的内容介绍，后续更新，关注~',
    avatar: 'https://images.dog.ceo/breeds/spitz-japanese/tofu.jpg'
  },
  {
    id: 4,
    title: 'test4的专栏',
    description: '这是第四个专栏的内容介绍，后续更新，关注~这是第三个专栏的内容介绍，后续更新，关注~这是第三个专栏的内容介绍，后续更新，关注~',
    avatar: 'https://images.dog.ceo/breeds/pug/n02110958_9505.jpg'
  }
]
export default defineComponent({
  name: 'App',
  components: {
    ColumnList,
    GlobalHeader,
    Login
  },
  setup() {
    return {
      list: testData,
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
</style>
