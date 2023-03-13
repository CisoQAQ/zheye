<template>
    <div class="columnDetail">
        <div class="top">
            <img :src="column?.avatar" alt="" class="avatar">
            <div class="rightBox">
                <h1>{{ column?.title }}</h1>
                <p>{{ column?.description }}</p>
            </div>
        </div>
        <post-list :list="list"></post-list>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useRoute } from 'vue-router';
 import { useStore} from 'vuex';
import PostList from '@/components/PostList.vue';
import { GlobalDataProps } from '@/store';
export default defineComponent({  
    components: {
        PostList
    },
    setup(){
        const route = useRoute();
        const store = useStore<GlobalDataProps>();
        const currentId = +route.params.id
        const column = computed(() => store.getters.getColumnById(currentId));
        const list = computed(() => store.getters.getPostsByCid(currentId));
        return {
            route,
            column,
            list
        }
    }
})
</script>
<style lang="less" scoped>
.el-container{
    padding: 0!important;
}
@import "../assets/less/columnDetail.less";
</style>