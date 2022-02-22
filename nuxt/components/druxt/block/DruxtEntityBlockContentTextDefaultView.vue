<template>
  <div>
    <RichText>
      <slot name="body"/>
    </RichText>
    <MyDoom></MyDoom>
    TEST
  </div>
</template>

<script>
import {DruxtEntityMixin} from 'druxt-entity'
import RichText from '@bit/wingsuit.wingsuit-vue.richtext';
import {MyDoom} from '../../../../ds-vue/dist/MyDoom/MyDoom.es';

export default {
  mixins: [DruxtEntityMixin],
  components: { RichText, MyDoom },
}
</script>
