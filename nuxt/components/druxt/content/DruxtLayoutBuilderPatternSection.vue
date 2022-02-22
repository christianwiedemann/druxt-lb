<template>
    <Container>
      <Grid :columns="columns" :cells="cells" :gutter="gutter" :equalHeight="equalHeight">
        <template v-slot:cell="{ cell }">
          <template v-for="component of cell" >
            <DruxtEntity
              v-if="component.entity"
              :value="component.entity"
              :type="componentType(component)"
              :wrapper="{
                class: ['relative h-full'],
              }"
            />
          </template>
        </template>
      </Grid>
    </Container>
</template>

<script>
import {pascalCase, upperFirst} from 'scule'

import Grid from '@bit/wingsuit.wingsuit-vue.grid';
import Container from '@bit/wingsuit.wingsuit-vue.container';

export default {
  name: 'DruxtLayoutBuilderPatternSection',
  components: {Grid, Container},
  computed: {
    settings() {
      return this.section.layout_settings.pattern.settings;
    },
    components() {
      return this.section.components;
    },
    columns() {
      const columns = parseInt(this.section.layout_settings.pattern.variant.replace('_column', ''))
      return columns;
    },
    cells() {
      const regions = {};
      const blocks = {};
      const cells = [];

      this.entity.included.forEach((includedEntity)=>{
        if (includedEntity.type.split('--')[0] === 'block_content') {
          blocks[includedEntity.id] = includedEntity;
        }
      });

      Object.values(this.components).forEach((component) =>{
        if (!regions[component.region]) {
          regions[component.region] = [];
        }
        if (blocks[component.configuration.uuid]) {
          component.entity = blocks[component.configuration.uuid];
        } else if (component.configuration.id === 'webform_block') {
          component.entity = {type: 'webform', ...component.configuration}
        } else {
          console.warn('No block found for ');
          console.warn(component.configuration);
        }
        regions[component.region].push(component);
      })
      for (let column = 1; column <= this.columns + 1; column++) {
        if (regions['column_' + column]) {
          cells.push (regions['column_' + column])
        } else {
          cells.push ({})
        }
      }
      return cells;
    },
    gutter() {
      const gutter = this.section.layout_settings.pattern.settings.gutter
      return gutter;
    },
    equalHeight() {
      const equalHeight = this.section.layout_settings.pattern.settings.equal_height
      return equalHeight;
    }
  },
  methods: {
    componentType(component) {
      return component.entity.type;
    },
  },
  props: {
    section: {
      type: Object,
      required: true
    },
    entity: {
      type: Object,
      required: true
    },
  },
}
</script>
