<template>
  <div id="app">
    <sidebar />

    <section class="flex flex-col">
      <div class="container mx-auto bg-purple-100 p-5 flex-grow">
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
  display: flex;
  min-height: 100vh;
  & > section {
    flex-grow: 1;
  }
}
</style>
