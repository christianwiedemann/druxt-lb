<template>
  <div>FOO {{count}}</div>
</template>

<script>
export default {
  data() {
    return {
      count: 0
    }
  },
}
</script>

<style scoped>
div {
  @apply w-11 h-11 bg-green-900 text-white text-center;
}
</style>
