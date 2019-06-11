<template>
  <div id="app">
    <header-component />

    <section class="main-content columns">
      <sidebar />
      <div class="container column is-10">
        <nuxt />
      </div>
    </section>
  </div>
</template>

<script>
import HeaderComponent from '@/components/nav/Header'
import Sidebar from '@/components/nav/Sidebar'

export default {
  components: {
    HeaderComponent,
    Sidebar
  }
}
</script>

<style lang="postcss">
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  & > section {
    flex-grow: 1;
    &.columns {
      margin-bottom: 0;
      margin-top: 0;
    }
  }
}
</style>
