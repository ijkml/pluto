<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `ML – ${titleChunk}` : 'ML';
  },
});
</script>

<template>
  <LayoutWrapper>
    <NuxtLoadingIndicator />
    <NuxtPage />
  </LayoutWrapper>
</template>
