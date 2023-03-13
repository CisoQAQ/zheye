<template>
    <img src="../assets/imgs/login.svg" style="width:800px;margin-bottom:80px">
    <h1 style="margin-bottom: 20px;">发现精彩</h1>
    <column-list :list="list"></column-list>
</template>
<script lang="ts">
    import { defineComponent, computed,ref } from 'vue'
    import { useStore } from 'vuex'
    import { GlobalDataProps } from '../store'
    import ColumnList from '../components/ColumnList.vue'
    export default defineComponent({
        components: {
            ColumnList
        },
        setup() {
            const store = useStore<GlobalDataProps>()
            const list = computed(() => store.state.columns)
            // const biggerColumnLen = computed(() => store.getters.biggerColumnLen)
            // console.log('ddddd',biggerColumnLen)
            return {
                list,
                // biggerColumnLen
            }
        },
    })
</script>
<style>

</style>