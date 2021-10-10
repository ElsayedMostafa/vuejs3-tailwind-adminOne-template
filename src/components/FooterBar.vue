<template>
  <footer class="xl:pl-60 bg-white z-30 h-14 w-screen border-t border-gray-200 py-3 px-6 bottom-0 fixed">
    <div>
        <b>&copy; {{ year }}, te.eg</b> &mdash; We Config Demo
      </div>
    
  </footer>
</template>

<script>
import { computed } from "vue";

export default {
  name: "FooterBar",
  components: {
  },
  setup() {

    const year = computed(() => new Date().getFullYear());


    return {
      year,
    };
  },
};
</script>
