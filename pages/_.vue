<template>
  <div class="flex items-center flex-col text-3xl">
    <div>
      Are you lost ?
    </div>
    <nuxt-link
      tag="div"
      :to="{ name: 'index' }"
      class="text-xl cursor-pointer bg-purple-500 px-3 py-1 mt-5 rounded text-white"
    >
      Yes ! Bring me home
    </nuxt-link>
  </div>
</template>
