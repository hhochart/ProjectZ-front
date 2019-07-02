<template>
  <div id="app">
    <sidebar ref="sidebar" />

    <section class="flex flex-col bg-purple-100">
      <div class="container mx-auto p-5 flex-grow">
        <nuxt />
      </div>
    </section>
  </div>
</template>

<script>
import Sidebar from '@/components/nav/Sidebar'

export default {
  components: {
    Sidebar
  }
}
</script>

<style lang="postcss">
#app {
  @apply flex;
  & > section {
    @apply flex-grow;
  }
}
</style>
