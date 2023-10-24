<template>
  <div class="common-layout">
    <el-container style="height: 97vh;">
      <el-aside width="200px">

        <el-menu :default-active="activeIndex" active-text-color="#ffd04b" background-color="#545c64" class="el-menu-demo"
          mode="vertical" :ellipsis="false" @select="handleSelect" router="true">
          <el-sub-menu  v-for="(item, index) in this.$router.options.routes" :key="index">

            <template #title>
              <!-- <el-icon><location /></el-icon> -->
              <span>{{ item.name }}</span>
            </template>
            <el-menu-item style="caret-color: transparent;" v-for="(child, index) in item.children" 
            :key="index" :index="child.path + ''">
              {{ child.name }}
            </el-menu-item>
          </el-sub-menu>
          
        </el-menu>

      </el-aside>
      <el-main style="margin-left: 10px;">
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>
<script setup>

</script>


<style>
.meun {
  border: 1px solid gray;
}

.el-menu-demo {
  height: 100%;
}
</style>



