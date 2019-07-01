<template>
  <div class="game-banner-container">
    <div class="left-banner-container">
      <div class="left-banner">
        <h1 class="title">{{ banner.kills }}</h1>
        <h2 class="subtitle">kills</h2>
      </div>
    </div>
    <div class="top-banner-container">
      <div class="top-banner">
        <h1 class="title">{{ banner.wins }}</h1>
        <h2 class="subtitle">wins</h2>
      </div>
    </div>
    <div class="right-banner-container">
      <div class="right-banner">
        <h1 class="title">{{ banner.maxPoints }}</h1>
        <h2 class="subtitle">points</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GameBanner',
  props: {
    banner: {
      type: Object,
      default: null
    }
  }
}
</script>

<style lang="postcss" scoped>
.game-banner-container {
  width: 750px;
  height: 500px;
  @apply flex justify-center;

  & .left-banner-container {
    align-self: center;
    & .left-banner {
      width: 150px;
      height: 300px;
      margin: 100px;
      @apply bg-red-500 flex flex-col items-center justify-center;
    }
  }
  & .top-banner-container {
    & .top-banner {
      width: 150px;
      height: 300px;
      @apply bg-red-500 flex flex-col items-center justify-center;
    }
  }
  & .right-banner-container {
    @apply self-center;
    & .right-banner {
      width: 150px;
      height: 300px;
      margin: 100px;
      @apply bg-red-500 flex flex-col items-center justify-center;
    }
  }
}
</style>
