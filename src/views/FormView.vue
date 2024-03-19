<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { Input } from 'ant-design-vue'

const route = useRoute()
const value = ref<string>('')
watch(value, () => {
  console.log(value.value)
})
</script>

<template>
  <h1>表单编辑: {{ route.params.id }}</h1>
  <h3>{{ Date.now() }}</h3>
  <Input v-model:value="value" placeholder="请输入名称" />
</template>
