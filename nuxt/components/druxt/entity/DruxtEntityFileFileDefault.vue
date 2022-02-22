<template>
  <div>
    <img :src="entity.attributes.uri.url">
  </div>
</template>

<script>
import { DruxtEntityMixin } from 'druxt-entity';

export default {
  mixins: [DruxtEntityMixin],
}
</script>
