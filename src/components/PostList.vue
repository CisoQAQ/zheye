<template>
    <div class="postList">
        <el-card  shadow="hover" v-for="post in list" :key="post.id">
            <img v-if="post.image" :src="post?.image"  class="img">
            <div :class="post.image?'rightBox':'rightBoxNoImg'">
                <h2>{{ post?.title }}</h2>
                <p>{{ post?.content }}</p>
                <p class="time"> 创建时间：{{  post.createdAt}}</P>
            </div>
        </el-card>
    </div>
</template>
<script lang="ts">
import { defineComponent, PropType, ref } from 'vue'
import { PostProps } from '@/testData';
export default defineComponent({
    name:'PostList',
    props:{
        list:{
            requered: true,
            type: Array as PropType<PostProps[]>
        }
    },
    setup() {
        return {

        }
    }
})
</script>
<style lang="less">
@import "../assets/less/columnDetail.less";
</style>