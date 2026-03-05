<template>
  <div>
    <NuxtRouteAnnouncer />
    <AppHeader />
    <main>
      <NuxtPage />
    </main>
    <AppFooter />
    <WhatsAppButton />
  </div>
</template>

<script setup lang="ts">
const { init } = useDarkMode()
onMounted(() => init())
</script>
