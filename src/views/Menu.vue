<template>
  <div class="menu">
    <ul>
      <li>
        <a href="javascript:void(0);" @click="goto('/tinymce-demo')">tinymce</a>
      </li>
      <li>
        <a href="javascript:void(0);" @click="goto('/quill-demo')">quill</a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'Menu',
  methods: {
    goto(path) {
      this.$router.push(path);
    },
  },
}
</script>
