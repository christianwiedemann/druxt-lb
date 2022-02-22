import { ref, onMounted, onUnmounted } from 'vue-demi'

export default {
  setup() {
    const query = ref("");
    return {query};
  },
}
