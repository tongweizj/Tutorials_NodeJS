<template>
  <div id="app" class="font-roboto">
    <AppHeader />

    <div class="flex justify-between container mx-auto">
      <div class="w-full">
        <slot />
      </div>
    </div>

    <AppFooter />
  </div>
</template>
<style>
body {
  max-width: 640px;
  margin-left: auto;
  margin-right: auto;
}
</style>
