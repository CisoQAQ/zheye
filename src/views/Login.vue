<template>
    <div class="loginBox">
        <video muted autoplay="true" loop="true">
            <source src="../assets/imgs/login.mp4" type="video/mp4"/>
        </video>
        <el-form :model="emailRef" 
            label-width="120px" 
            label-position="top" 
            size="large" 
            ref="ruleFormRef"  
            status-icon :rules="rules">
            <h1 style="color:#409EFF">Login</h1>
            <el-form-item label="邮箱地址" prop="email">
                <el-input v-model="emailRef.email"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password"> 
                <el-input v-model="emailRef.password"></el-input>
            </el-form-item>
            <el-button  style="display: block;width: 100%;"  @click="submitForm(ruleFormRef)">确认</el-button>
        </el-form>
    </div>
</template>
<script lang="ts">
    import { defineComponent, reactive,ref } from 'vue'
    import {useStore} from 'vuex'
    import {useRouter} from 'vue-router'
    const emailReg = /^[a-zA-Z0-9][a-zA-Z0-9_]+\@[a-zA-Z0-9]+\.[a-zA-Z]{2,5}(\.[a-zA-Z]{2,5})*$/i
    import type { FormInstance } from 'element-plus'
    import { ElMessage } from 'element-plus'
    export default defineComponent({
        setup() {
            const store = useStore()
            const router = useRouter()
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
            const emailRef = reactive({
                email: '',
                password: ''
            })
            const rules = reactive({
                email: [{ validator: checkEmail, trigger: 'blur' }],
                password:[
                    {
                        required:true,
                        message:'密码不能为空',
                        trigger:'blur'
                    },{
                        min:6,
                        max:18,
                        message:'密码长度需要在6-18位之间',
                        trigger:'change'
                    }
                ]
            })
            const submitForm = (formEl: FormInstance | undefined) => {
                if (!formEl) return
                formEl.validate((valid) => {
                    if (valid) {
                        router.push('/')
                        store.commit('login')
                    } else {
                        ElMessage.error('错了哦，这是一条错误消息')
                    return false
                    }
                })
            }
            return {
                emailRef,
                rules,
                ruleFormRef,
                submitForm
            }
        },
    })
</script>
<style lang="less">
.loginBox {
    width: 100%;
    height: 100%;
    video{
        width: 50%;
        margin-right: 5%;
        display: inline-block;
        vertical-align: middle;
        height: 100%;
    }
    .el-form{
        width:40%;
        height: 100%;
        vertical-align: middle;
        display: inline-block;
    }

}
</style>