import Vue from 'vue/dist/vue.js';
import Button from '@bit/wingsuit.wingsuit-vue.button';
import Card from '@bit/wingsuit.wingsuit-vue.card';

Drupal.behaviors.button = {
  vue: null,
  attach() {
    const wrappers = window.document.querySelectorAll('.vue-root');
    wrappers.forEach((wrapper) => {
      if (wrapper) {
        if (!wrapper.classList.contains('vue--processed')) {
          wrapper.classList.add('vue--processed');
          Drupal.behaviors.button.vue = new Vue({
            el: wrapper,
            components: {
              'ws-button': Button,
              'ws-card': Card,
            },
          });
        } else {
          Drupal.behaviors.button.vue = new Vue({
            el: wrapper,
            components: {
              'ws-button': Button,
            },
          });
        }
      }
    });
  },
}
