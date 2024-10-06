<script setup lang="ts">
import { OrbitControls } from '@tresjs/cientos';
</script>

<template>
  <TresCanvas
    alpha shadows
    clear-color="black"
    class="cursor-grab"
  >
    <TresPerspectiveCamera
      :position="[3, 3, 3]"
      :look-at="[0, 0, 0]"
    />

    <Suspense>
      <Planet />
    </Suspense>

    <TresHemisphereLight :intensity="0.7" />

    <OrbitControls :enable-zoom="false" :enable-pan="false" />
  </TresCanvas>
</template>

<style scoped lang="scss">
// ...
</style>
