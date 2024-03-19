<script setup lang="ts">
import { useRouter } from 'vue-router'
import { Button } from 'ant-design-vue'
const router = useRouter()
</script>

<template>
  <h1>关于我们</h1>
  <Button type="primary" @click="router.replace('/')">Go Home Page</Button>
</template>
