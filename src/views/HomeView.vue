<template>
  <div class="home">
    <el-card class="box-card" v-if="states.states1">
      <template #header>
        <div class="card-header">
          <span>xxxxxx</span>
          <span>心有梅拉</span>
        </div>
      </template>
      <div style="border-bottom: 0.5px solid grey;">
        <el-form ref="formRef" label-width="120px" class="demo-dynamic">
          <el-form-item porp="text" label="admin" :rules="[
            {
              required: true,
              message: 'Please input email address',
              trigger: 'blur',
            },
            {
              type: 'number',
              message: 'Please input correct email address',
              trigger: ['blur', 'change'],
            },
          ]">
            <el-input v-model="loginName" style="margin-right: 60px;" />
          </el-form-item>


          <el-form-item prop="password" label="password" :rules="[
            {
              required: true,
              message: 'Please input email address',
              trigger: 'blur',
            },
            {
              type: 'string',
              message: 'Please input correct email address',
              trigger: ['blur', 'change'],
            },
          ]">
            <el-input type="password" v-model="passwords" style="margin-right: 60px;" />
          </el-form-item>


        </el-form>
      </div>
      <div style="width: 100%; display: flex; justify-content: center;align-items: center;">
        <div style="margin-top: 20px;">
          <el-button type="primary" plain style="width: 100px;" @click="dologin()">登录</el-button>
          <el-button type="primary" plain style="width: 100px;" @click="regits()">注册</el-button>
        </div>
      </div>
    </el-card>


    <el-card class="box-card" v-if="states.states2">
      <template #header>
        <el-steps :active="active" finish-status="success">
          <el-step />
          <el-step />
          <el-step />
        </el-steps>
      </template>
      <div style="border-bottom: 0.5px solid grey; ">
        <el-form ref="formRef1" label-width="120px" class="demo-dynamic" v-if="states.states3">
          <el-form-item porp="text" label="请输入手机号" :rules="[
            {
              required: true,
              message: 'Please input email address',
              trigger: 'blur',
            },
            {
              type: 'text',
              message: 'Please input correct email address',
              trigger: ['blur', 'change'],
            },
          ]">
            <el-input v-model="loginName"  style="margin-right: 60px;"/>
          </el-form-item>


          <el-form-item prop="password" label="好听的昵称" :rules="[
            {
              required: true,
              message: 'Please input email address',
              trigger: 'blur',
            },
            {
              type: 'password',
              message: 'Please input correct email address',
              trigger: ['blur', 'change'],
            },
          ]">
            <el-input type="password" v-model="passwords" style="margin-right: 60px;"/>
          </el-form-item>
        </el-form>

        <el-form ref="formRef2" label-width="120px" class="demo-dynamic" v-if="states.states4">
          <el-form-item porp="text" label="密码" :rules="[
            {
              required: true,
              message: 'Please input email address',
              trigger: 'blur',
            },
            {
              type: 'text',
              message: 'Please input correct email address',
              trigger: ['blur', 'change'],
            },
          ]">
            <el-input type="password" v-model="loginName" style="margin-right: 60px;" />
          </el-form-item>


          <el-form-item prop="password" label="确认密码" :rules="[
            {
              required: true,
              message: 'Please input email address',
              trigger: 'blur',
            },
            {
              type: 'password',
              message: 'Please input correct email address',
              trigger: ['blur', 'change'],
            },
          ]">
            <el-input type="password" v-model="passwords" style="margin-right: 60px;" />
          </el-form-item>


        </el-form>


        <el-form ref="formRef3" label-width="120px" class="demo-dynamic" v-if="states.states5">
          <el-form-item porp="text" label="角色" :rules="[
            {
              required: true,
              message: 'Please input email address',
              trigger: 'blur',
            },
            {
              type: 'text',
              message: 'Please input correct email address',
              trigger: ['blur', 'change'],
            },
          ]">
            <el-input v-model="loginName"  style="margin-right: 30px;"/>
          </el-form-item>


          <el-form-item prop="password" label="验证码" :rules="[
            {
              required: true,
              message: 'Please input email address',
              trigger: 'blur',
            },
            {
              type: 'password',
              message: 'Please input correct email address',
              trigger: ['blur', 'change'],
            },
          ]" style="display: flex;">
            <div style="display: flex;">
              <el-input type="password" v-model="passwords" />
              <el-button>发送验证码</el-button>
            </div>
          </el-form-item>


        </el-form>
      </div>
      <div style="width: 100%; display: flex; justify-content: center;align-items: center;">
        <div style="margin-top: 20px;">
          <el-button type="primary" plain style="width: 100px;" @click="next(formRef)" v-if="active <= 2">下一步</el-button>
          <el-button type="primary" plain style="width: 100px;">注册</el-button>
          <el-button type="primary" plain style="width: 100px;">取消</el-button>
        </div>
      </div>
    </el-card>
  </div>
</template>





<script setup>
// import { ref } from "vue";
import { ElLoading } from 'element-plus'
import {ElMessage} from 'element-plus'
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router'
const router = useRouter()

/**
 * vue3注册组件的写法
 */
// export default {
//   name: 'HomeView',
//   components: {
//     HelloWorld
//   }
// }
// const hello = ref("qiqiguaiguai");

/**
 * 路由
 */
function login() {

  const loading = ElLoading.service({
    lock: true,
    text: '登录中.....',
    background: 'rgba(0, 0, 0, 0.7)',
  })
  setTimeout(() => {
    loading.close()
    router.push("/about")
  }, 2000)

}


const states = reactive({
  states1: true,
  states2: false,
  states3: false,
  states4: false,
  states5: false,
})

function regits() {
  states.states1 = false;
  states.states2 = true
  states.states3 = true
}


const formRef = ref();
function dologin(){
  formRef.value.validate((valid) => {
    if (valid) {
      ElMessage.success('login successfully !')
      console.log(111);
    } else {
      ElMessage.error('error submit !')
      return false
    }
  })
}
const active = ref(0)
const next = () => {
  if (active.value++ > 2) active.value = 3

  if (active.value == 1) {
    states.states3 = false;
    states.states4 = true;
  }
  if (active.value == 2) {
    states.states4 = false;
    states.states5 = true
  }  
}


const loginName = ref();
const passwords = ref();


</script>
<style>
.home {
  background-image: url(../assets/bg1.jpg);
  background-size: 100%;
  width: 100%;
  height: 97vh;
  /* background-color: transparent; */
  filter: opacity(85%);
  display: flex;
  justify-content: center;
  align-items: center;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  width: 480px;
}
</style>
