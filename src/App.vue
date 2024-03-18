<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </header>

  <!-- <RouterView /> -->
  <!-- https://cn.vuejs.org/guide/built-ins/keep-alive -->
  <!-- 默认情况下，一个组件实例在被替换掉后会被销毁。这会导致它丢失其中所有已变化的状态——当这个组件再一次被显示时，会创建一个只带有初始状态的新实例。 -->
  <!-- <KeepAlive> 默认会缓存内部的所有组件实例 -->
  <!-- 当一个组件实例从 DOM 上移除但因为被 <KeepAlive> 缓存而仍作为组件树的一部分时，它将变为不活跃状态而不是被卸载。当一个组件实例作为缓存树的一部分插入到 DOM 中时，它将重新被激活。 -->
  <RouterView v-slot="{ Component }">
    <KeepAlive>
      <component :is="Component" :key="$route.name" v-if="$route.meta.keep"></component>
    </KeepAlive>
    <component :is="Component" :key="$route.name" v-if="!$route.meta.keep"></component>
  </RouterView>
</template>
