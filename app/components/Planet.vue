<script setup lang="ts">
import { useLoader } from '@tresjs/core';
import { BackSide, TextureLoader } from 'three';

const planetTexture = await useLoader(TextureLoader, '/3d/makemake.jpg');
const galaxyTexture = await useLoader(TextureLoader, '/3d/milky-way.jpg');

const { onBeforeRender } = useLoop();

const planet = shallowRef();
const galaxy = shallowRef();

onBeforeRender(() => {
  if (!planet.value || !galaxy.value)
    return;

  planet.value.rotation.y -= 0.0025;
  planet.value.rotation.x += 0.0005;
  galaxy.value.rotation.z += 0.0005;
});
</script>

<template>
  <TresMesh ref="planet" :rotation-z="Math.PI / 2">
    <TresSphereGeometry :args="[1, 32, 32]" />
    <TresMeshStandardMaterial :map="planetTexture" />
  </TresMesh>
  <TresMesh ref="galaxy">
    <TresSphereGeometry :args="[4, 64, 64]" :scale="[1.2, 1.2, 1.2]" />
    <TresMeshBasicMaterial :side="BackSide" :map="galaxyTexture" />
  </TresMesh>
</template>
