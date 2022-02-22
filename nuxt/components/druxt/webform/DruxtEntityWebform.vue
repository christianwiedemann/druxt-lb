
<template>
  <div>
    <DruxtWebformElement
      v-for="[key, element] in activeElements"
      :key="key"
      :element="element"
      :name="key"

    />
    <div class="flex">
      <div @click="prev()" v-if="hasPrev"><Button text="Zurueck"></Button></div>
      <div @click="next()"><Button text="Weiter"></Button></div>
    </div>
  </div>
</template>

<script>
import yaml from 'js-yaml'
import Button from "@bit/wingsuit.wingsuit-vue.button";
export default {
  components: {Button},
  data() {
    return {
      elements: [],
      webform: {}
    }
  },

  computed: {

    activeElements () {
      let page = -1;
      return Object.entries(this.elements).filter(([key, item])=> { page++; return page === this.activePage  });
    },
    hasNext() {
      return this.activePage < this.maxPages;
    },
    hasPrev() {
      return this.activePage > 0
    },
    activePage() {
      return this.$store.state.webform.activePage;
    },
  },
  methods: {
    next () {
      this.$store.commit('webform/next')
    },
    prev () {
      this.$store.commit('webform/prev')
    }
  },
  async fetch() {
    const webformId = this.$attrs.entity.webform_id;
    const baseURL = this.$store.$druxt.axios.defaults.baseURL;
    const webforms = await fetch(
      `${baseURL}/en/jsonapi/webform/webform`
    ).then(res => res.json());
    webforms.data.forEach((element)=>{
      if (element.attributes.drupal_internal__id === webformId) {
        this.elements = yaml.load(element.attributes.elements);
        this.maxPages = Object.keys(this.elements).length;
        this.webform = element;
      }
    });
  }
}
</script>

