<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router'
import { Button } from 'ant-design-vue'
const route = useRoute()
const router = useRouter()
// /a/b?keyword=123
</script>

<template>
  <h1>未找到路径: {{ route.fullPath }}</h1>
  <Button type="primary" @click="router.push('/')">Go Home Page</Button>
</template>
