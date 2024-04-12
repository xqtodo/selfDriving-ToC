<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { registerAPI } from '@/apis/user'

const router = useRouter()
// do not use same name with ref
const form = reactive({
    name: '',
    password: '',
    email: '',
    phone: ''
})

const onSubmit = () => {
    console.log(form)
    registerAPI(form.name, form.password, form.email, form.phone).then((res) => {
        router.push('/login')
    })
}

</script>

<template>
    <el-row >
        <el-col :span="12" :offset="6">
            <el-form :model="form" label-width="auto" style="max-width: 600px">
                <div align="center" >
                    用户注册
                </div>
                <el-form-item label="用户名">
                    <el-input v-model="form.name" />
                </el-form-item>
                <el-form-item label="密码">
                    <el-input v-model="form.password" />
                </el-form-item>
                <el-form-item label="邮箱">
                    <el-input v-model="form.email" />
                </el-form-item>
                <el-form-item label="手机号">
                    <el-input v-model="form.phone" />
                </el-form-item>
                <el-form-item :offset="8">
                    <span style="position: relative; left: 100px;">
                        <el-button type="primary" @click="onSubmit">点击注册</el-button>
                    </span>
                </el-form-item>
            </el-form>
        </el-col>
    </el-row>
</template>

<style scoped lang='scss'></style>