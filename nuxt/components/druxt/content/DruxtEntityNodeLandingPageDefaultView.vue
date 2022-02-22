<template>
  <div class="layout_builder">
    <component :section="section" :entity="entity" v-for="(section, index) of sections" :is="componentIs(section.layout_id)"
               :key="index">
    </component>
  </div>
</template>

<script>
import {pascalCase, upperFirst} from 'scule'
import Container from '@bit/wingsuit.wingsuit-vue.container';

export default {
  components: {Container},
  props: {
    entity: {
      type: Object,
      required: true,
    },
  },
  druxt: {
    query: {
      include: [
        'layout_builder__blocks',
        'layout_builder__blocks.field_media',
        'layout_builder__blocks.field_media.field_media_image',
      ],
    }
  },
  computed: {
    sections: ({entity}) => entity.attributes.layout_builder__layout,
  },

  methods: {
    componentIs(id) {
      const name = this.componentName(id)
      return this.$nuxt.$options.components[name] ? name : 'div'
    },

    componentName(id) {
      return `DruxtLayoutBuilder${pascalCase(id.split(':').map((s) => upperFirst(s)).join(''))}`
    },
  },
}
</script>
