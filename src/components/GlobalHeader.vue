<template>
    <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        :ellipsis="false"
        @select="handleSelect"
    >
        <el-menu-item index="0">者也专栏</el-menu-item>
        <div class="flex-grow" />
        <el-menu-item index="1" v-if="!user.isLogin">登录</el-menu-item>
        <el-menu-item index="2" v-if="!user.isLogin">注册</el-menu-item>
        <el-sub-menu index="3" v-if="user.isLogin" >
            <template #title >你好 {{ user.name }}</template>
            <el-menu-item index="3-1" >新建文章</el-menu-item>
            <el-menu-item index="3-2">管理账户</el-menu-item>
            <el-menu-item index="3-3">退出登录</el-menu-item>
        </el-sub-menu>
    </el-menu>
</template>
<script lang="ts">
import { defineComponent, PropType, ref } from 'vue'
export interface UserProps {
    isLogin: boolean;
    name?: string;
    id?: number;
}
export default defineComponent({
    name:'GlobalHeader',
    props:{
        user:{
            type:Object as PropType<UserProps>,
            required:true
        }
    },
    setup(props) {
        const activeIndex = ref('')
        const handleSelect = (key: string, keyPath: string[]) => {
        console.log(key, keyPath)
        }
        return {
            activeIndex,
            handleSelect
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