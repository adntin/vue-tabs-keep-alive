<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
// 外链页面路由
// `/IframeView?src=${src}`
const route = useRoute()
const src = computed(() => route.query.src as string)
</script>

<template>
  <h1>{{ src }}</h1>
  <iframe :src="src"></iframe>
</template>

<style scoped>
iframe {
  display: block;
  width: 100%;
  height: 600px;
  border: none;
  background-color: #ccc;
  border: 1px solid #ccc;
}
</style>
