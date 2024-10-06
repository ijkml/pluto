<script setup lang="ts">
</script>

<template>
  <div class="root-box">
    <Scene />
    <Transition name="fade-out">
      <div v-if="!isReady" class="splash">
        <div class="loader" />
        <div>Setting course for Pluto</div>
      </div>
    </Transition>
  </div>
</template>

<style scoped lang="scss">
.root-box {
  @apply w-full h-100dvh grid of-hidden;

  > * {
    grid-area: 1 / 1;
  }
}

.splash {
  @apply bg-black/100 size-inherit z-1 flex flex-col items-center
    justify-center gap-4 font-mono select-none cursor-default;
}

.loader {
  width: 80px;
  aspect-ratio: 1;
  border: 10px solid #0000;
  padding: 5px;
  box-sizing: border-box;
  background:
    radial-gradient(farthest-side, #fff 98%, #0000) 0 0/20px 20px no-repeat,
    conic-gradient(from 90deg at 10px 10px, #0000 90deg, #fff 0) content-box,
    conic-gradient(from -90deg at 40px 40px, #0000 90deg, #fff 0) content-box,
    #000;
  filter: blur(4px) contrast(10);
  animation: l11 2s infinite;
}

@keyframes l11 {
  0% {
    background-position: 0 0;
  }
  25% {
    background-position: 100% 0;
  }
  50% {
    background-position: 100% 100%;
  }
  75% {
    background-position: 0% 100%;
  }
  100% {
    background-position: 0% 0;
  }
}
</style>
