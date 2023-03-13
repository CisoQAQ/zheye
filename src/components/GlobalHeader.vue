<template>
    <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        :ellipsis="false"
        @select="handleSelect">
        <el-menu-item index="0">
            <router-link to="/">者也专栏</router-link></el-menu-item>
        <div class="flex-grow" />
        <el-menu-item index="1" v-if="!user.isLogin">
            <router-link to="/login">登录</router-link></el-menu-item>
        <el-menu-item index="2" v-if="!user.isLogin">
            <router-link to="/login">注册</router-link></el-menu-item>
        <el-sub-menu index="3" v-if="user.isLogin" >
            <template #title >你好 {{ user.name }}</template>
            <el-menu-item index="3-1" >新建文章</el-menu-item>
            <el-menu-item index="3-2">管理账户</el-menu-item>
            <el-menu-item index="3-3">退出登录</el-menu-item>
        </el-sub-menu>
    </el-menu>
</template>
<script lang="ts">
import { defineComponent, PropType, ref,computed } from 'vue'
import {useStore} from 'vuex'

export default defineComponent({
    name:'GlobalHeader',
  
    setup(props) {
        const activeIndex = ref('')
        const store = useStore()
        const user = computed(() => store.state.user)
        const handleSelect = (key: string, keyPath: string[]) => {
        console.log(key, keyPath)
        }
        return {
            activeIndex,
            handleSelect,
            user
        }
    }
})
</script>
<style lang="less">
.flex-grow {
    flex-grow: 1;
}
.el-menu-demo{
    padding: 0 30px;
}
.el-menu--popup{
    min-width: 150px;
}
.el-menu-item {
    align-items: center;
    justify-content: center;
}
</style>