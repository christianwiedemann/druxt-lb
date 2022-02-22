<template>
  <Hero
    :preheadline="entity.attributes.field_preheadline"
    :headline="entity.attributes.field_title"
    :text="entity.attributes.field_text.processed"
  />
</template>

<script>
import { DruxtEntityMixin } from 'druxt-entity'
import Hero from '@bit/wingsuit.wingsuit-vue.hero';

export default {
  components: {Hero},
  mixins: [DruxtEntityMixin],
}
</script>
