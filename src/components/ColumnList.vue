<template>
  <el-row :gutter="40" class="columnList">
    <el-col :span="8" v-for="column in  columnList" :key="column.id">
      <el-card shadow="hover"> 
        <img :src="column.avatar" :alt="column.title">
        <h5>{{ column.title }}</h5>
        <p>{{ column.description }}</p>
        <router-link :to="`/column/${column.id}`">
          <el-button type="primary" plain size="large">进入专栏</el-button>
        </router-link>
      </el-card>
    </el-col>
  </el-row>
</template>
<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
export interface ColumnProps {
  id: number;
  title: string;
  avatar?: string;
  description: string;
}
export default defineComponent({
  name: 'ColumnList',
  props: {
    list: {
      type: Array as PropType<ColumnProps[]>,
      required: true
    }
  },
  setup(props) {
    const columnList = computed( () =>{
      return props.list.map(column =>{
        if(!column.avatar){
          column.avatar = require('@/assets/logo.png')
        }
        return column
      })
    })
    return {
      columnList
    }
  }
})
</script>
<style lang="less">
.columnList{
  .el-card{
    margin-bottom: 20px;
    height: 350px;
    .el-card__body{
      padding: 42px 32px;
    }
  }
  img{
    width:82px;
    height: 82px;
    border-radius: 100%;
  }
  h5{
    font-size: 20px;
    margin: 15px;
  }
  p{
    margin-bottom: 30px;
    text-align: left;
    line-height: 24px;
    letter-spacing: 1px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
  .el-button{
    font-size: 16px;
    font-weight: 700;
    width: 130px;
  }
}
</style>
