<template>
  <div class="editor-wrapper">
    <tinymce ref="editor" v-model="content" />
  </div>
</template>

<script>
import { Tinymce } from '@/components';

export default {
  name: 'TinymceDemo',
  components: {
    Tinymce,
  },
  data() {
    return {
      content: '',
    }
  },
}
</script>

<style scoped>
.editor-wrapper {
  width: 990px;
  margin: auto;
  margin-top: 90px;
}
</style>
