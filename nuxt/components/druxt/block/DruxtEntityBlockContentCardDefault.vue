<template>
  <Card
    :variant="entity.attributes.field_card_variant"
    :headline="entity.attributes.field_title"
  >
    <template #headline>
      <slot name="field_title"></slot>
    </template>
    <template #text>
      <slot name="body"></slot>
    </template>
    <template #image>
      <slot name="field_card_image"></slot>
    </template>
  </Card>
</template>

<script>
import { DruxtEntityMixin } from 'druxt-entity';
import Card from '@bit/wingsuit.wingsuit-vue.card';


export default {
  mixins: [DruxtEntityMixin],
  components: {Card},
}
</script>
