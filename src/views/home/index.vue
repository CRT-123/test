<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const handleClick = async () => {
  router.push("/about"); // 路由跳转示例
};
</script>
<template>
  <div>
    <el-button @click="handleClick">Click Me</el-button>
  </div>
</template>
