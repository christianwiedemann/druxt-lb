<template>
  <DruxtSite theme="wingsuit">
    <template #default="{ props, regions }">
      <header>
        <DruxtBlockRegion
          v-if="regions.includes('primary_menu')"
          v-bind="props.primary_menu"
          :wrapper="{
            class: ['bg-white py-2 px-4'],
              propsData: {
                sticky: true,
                toggleable: 'lg',
              },
            }"
        />
      </header>
      <div class="pt-10">
      <DruxtBlockRegion
        v-if="regions.includes('content')"
        v-bind="props.content"
      />
      </div>
    </template>
  </DruxtSite>
</template>

<script>
export default {
  components: {}
}
</script>

