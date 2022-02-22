<template>
  <div class="w-full">
    <label v-text="element['#title']" class="font-bold"/>:
    <div class="mb-6">
      <input type="text" :name="name" class="w-full"/>
    </div>
  </div>
</template>

<script>
import DruxtWebformElementMixin from '~/mixins/webform'

export default {
  mixins: [DruxtWebformElementMixin],
}
</script>
