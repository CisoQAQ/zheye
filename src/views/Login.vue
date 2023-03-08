<template>
    <el-form :model="emailRef" 
      label-width="120px" 
      class="formBox" 
      label-position="top" 
      size="large" 
      ref="ruleFormRef"  
      status-icon :rules="rules">
      <el-form-item label="邮箱地址" prop="email">
        <el-input v-model="emailRef.email"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password"> 
        <el-input v-model="emailRef.password"></el-input>
      </el-form-item>
      <el-button type="primary" style="display: block;">确认</el-button>
    </el-form>

  </template>
  
<script lang="ts">
    import { defineComponent, reactive,ref } from 'vue'
    const emailReg = /^[a-zA-Z0-9][a-zA-Z0-9_]+\@[a-zA-Z0-9]+\.[a-zA-Z]{2,5}(\.[a-zA-Z]{2,5})*$/i
    import type { FormInstance } from 'element-plus'
    export default defineComponent({
      setup() {
        const ruleFormRef = ref<FormInstance>()
        const checkEmail = (rule: any, value: any, callback: any) => {
          if (value === '') {
            callback(new Error('邮箱不能为空'))
          }else if(!emailReg.test(emailRef.email)) {
            callback(new Error('请输入有效邮箱地址'))
          }else {
            callback()
          }
        }
        const checkPassword = (rule: any, value: any, callback: any) => {
          if (value === '') {
            callback(new Error('密码不能为空'))
          }else {
            callback()
          }
        }
        const emailRef = reactive({
          email: '',
          password: ''
        })
        const rules = reactive({
          email: [{ validator: checkEmail, trigger: 'blur' }],
          password: [{ validator: checkPassword, trigger: 'blur' }],
        })
        return {
          emailRef,
          rules,
          ruleFormRef
        }
      },
    })
</script>