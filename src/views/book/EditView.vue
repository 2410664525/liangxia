<template>
    <el-steps :active="active1" finish-status="success">
      <el-step title="Step 1" />
      <el-step title="Step 2" />
      <el-step title="Step 3" />
    </el-steps>

    <el-card v-if="asss.ass1">
        asdasd
    </el-card>
    <el-card v-if="asss.ass2">
        asdasdasdas1
    </el-card>
    <el-card v-if="asss.ass3">
        asdasdaa2312
    </el-card>
  
    <el-button style="margin-top: 12px" @click="next">Next step</el-button>
  </template>
  
  <script  setup>
  import { reactive,ref } from 'vue'
  
  const active1 = ref(0)

  const asss = reactive({
    ass1:false,
    ass2:false,
    ass3:false,
    ss:0
  })

  function next(){
    asss.ss ++;
    console.log(asss.ss);

    if(active1.value++ > 2) active1.value = 0

    if (asss.ss == 1) {
        asss.ass1 = true
    }
    if (asss.ss == 2) {
        asss.ass2 = true
        asss.ass1 = false
    }
  }
  
//    next = () => {
//     if (active.value++ > 2) active.value = 0
//   }
  </script>
  