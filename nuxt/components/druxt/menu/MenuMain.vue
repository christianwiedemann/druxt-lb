<template #default="{ items }">
  <div class="flex justify-between items-center max-w-5xl mx-auto">
    <div>
      <NuxtLink to="/">
      <img class="max-w-[180px]" src="/images/logo.png" width="180" height="90">
      </NuxtLink>
    </div>
    <div class="flex items-center space-x-8">
      <ul class="flex items-center space-x-2">
        <li v-for="item in items" :key="item.entity.id" :item="item">
          <component class="text-sm text-gray-500 uppercase list-none rounded-sm px-4 py-2" v-bind="linkProps(item.entity.attributes.url)">
            {{ item.entity.attributes.title }}
          </component>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },

  methods: {
    linkProps (url) {
      if (url.match(/^(http(s)?|ftp):\/\//)) {
        return {
          is: 'a',
          href: url,
          target: '_blank',
          rel: 'noopener'
        }
      }
      return {
        is: 'router-link',
        to: url
      }
    }
  }
}
</script>

<style>
.nuxt-link-active {
  @apply bg-blue-500;
  color: #fff;
}
</style>
