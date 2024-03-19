<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'
const panes = ref<{ title: string; content: string; key: string; closable?: boolean }[]>([
  { title: '应用中心', content: 'Content of Tab 1', key: '1', closable: false },
  { title: 'Tab 2', content: 'Content of Tab 2', key: '2' },
  { title: 'Tab 3', content: 'Content of Tab 3', key: '3' }
])

const activeKey = ref(panes.value[0].key)

const newTabIndex = ref(0)

const add = (event: PointerEvent) => {
  activeKey.value = `newTab${++newTabIndex.value}`
  panes.value.push({
    title: `New Tab ${activeKey.value}`,
    content: `Content of new Tab ${activeKey.value}`,
    key: activeKey.value
  })
}

const remove = (targetKey: string) => {
  let lastIndex = panes.value.length - 1
  let removeIndex = 0
  panes.value.forEach((pane, i) => {
    if (pane.key === targetKey) {
      removeIndex = i
    }
  })
  panes.value = panes.value.filter((pane) => pane.key !== targetKey)
  if (activeKey.value === targetKey) {
    if (removeIndex === lastIndex) {
      activeKey.value = panes.value[lastIndex - 1].key
    } else {
      activeKey.value = panes.value[removeIndex].key
    }
  }
}

const onEdit = (target: string | PointerEvent, action: string) => {
  switch (action) {
    case 'add':
      add(target as PointerEvent) // hideAdd=false
      break
    case 'remove':
      remove(target as string) // tab key
      break
    default:
      throw `操作异常: ${action}`
  }
}
</script>

<template>
  <div :style="{ marginBottom: '16px' }">
    <a-button @click="add">ADD</a-button>
  </div>
  <a-tabs v-model:activeKey="activeKey" type="editable-card" @edit="onEdit" :hideAdd="true">
    <a-tab-pane v-for="pane in panes" :key="pane.key" :tab="pane.title" :closable="pane.closable">
      {{ pane.content }}
    </a-tab-pane>
  </a-tabs>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/FormView/1">编辑表单1</RouterLink>
      <RouterLink to="/FormView/2">编辑表单2</RouterLink>
      <RouterLink to="/IframeView?src=https://www.leedarson.com">Leedarson</RouterLink>
      <RouterLink to="/IframeView?src=https://imp.leedarson.com">IMP</RouterLink>
    </nav>
  </header>

  <!-- <RouterView /> -->
  <!-- https://cn.vuejs.org/guide/built-ins/keep-alive -->
  <!-- 默认情况下，一个组件实例在被替换掉后会被销毁。这会导致它丢失其中所有已变化的状态——当这个组件再一次被显示时，会创建一个只带有初始状态的新实例。 -->
  <!-- <KeepAlive> 默认会缓存内部的所有组件实例 -->
  <!-- 当一个组件实例从 DOM 上移除但因为被 <KeepAlive> 缓存而仍作为组件树的一部分时，它将变为不活跃状态而不是被卸载。当一个组件实例作为缓存树的一部分插入到 DOM 中时，它将重新被激活。 -->
  <RouterView v-slot="{ Component, route }">
    <KeepAlive>
      <component :is="Component" :key="route.fullPath" v-if="route.meta.keepalive"></component>
    </KeepAlive>
    <component :is="Component" :key="route.fullPath" v-if="!route.meta.keepalive"></component>
    <pre>
      {{ route }}
    </pre>
  </RouterView>
</template>

<style scoped>
a {
  padding-right: 16px;
}
</style>
