<template>
  <div class="bg-grey-100 p-3 flex items-center">
    <img
      src="https://via.placeholder.com/150"
      class="rounded-full w-10 h-10 mr-2"
    />
    <span>{{ name }}</span>
  </div>
</template>

<script>
export default {
  data: () => ({
    name: 'Oliiiiiiiviiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiier'
  })
}
</script>

<style lang="postcss" scoped>
span {
  max-width: 90px;
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>
