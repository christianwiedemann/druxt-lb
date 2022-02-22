<template>
  <div>
    <DruxtWebformElement
      v-for="[key, element] in elements"
      :key="key"
      :element="element"
      :name="key"
    />
  </div>

</template>

<script>
import DruxtWebformElementMixin from '~/mixins/webform'

export default {
  computed: {
    elements: ({ element }) =>  {
      const elements = Object.entries(element).filter(([key, item])=> { return !key.startsWith('#') })
      console.log(Object.keys(elements));
      return elements;
    },
  },
  mixins: [DruxtWebformElementMixin],
}
</script>
