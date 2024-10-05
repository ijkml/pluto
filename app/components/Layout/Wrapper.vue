<template>
  <div class="page-layout" data-page-anchor>
    <!-- <LayoutHeader /> -->

    <main>
      <slot />
    </main>

    <!-- <LayoutCTA /> -->
    <!-- <LayoutNavBar /> -->
    <!-- <LayoutFooter /> -->
  </div>
</template>

<style scoped lang="scss">
.page-layout {
  @apply flex flex-col justify-start min-h-(100vh 100dvh);
}
</style>
