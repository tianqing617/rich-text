<template>
  <div class="quill-demo">
    <!-- bidirectional data binding（双向数据绑定） -->
    <div class="auto">
      <quill-editor v-model="content"
        ref="myQuillEditor"
        :options="editorOption"
        @blur="onEditorBlur($event)"
        @focus="onEditorFocus($event)"
        @ready="onEditorReady($event)">
      </quill-editor>
    </div>

    <!-- Or manually control the data synchronization（或手动控制数据流） -->
    <div class="manual">
      <quill-editor :content="content2"
        :options="editorOption"
        @change="onEditorChange($event)">
      </quill-editor>
    </div>
  </div>
</template>

<script>
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import { quillEditor } from 'vue-quill-editor'

export default {
  name: 'QuillDemo',
  components: {
    quillEditor
  },
  data () {
    return {
      content: '<h2>I am Example</h2>',
      content2: '',
      editorOption: {
        // some quill options
      }
    }
  },
  // 如果需要手动控制数据同步，父组件需要显式地处理changed事件
  methods: {
    onEditorBlur(quill) {
      console.log('editor blur!', quill)
    },
    onEditorFocus(quill) {
      console.log('editor focus!', quill)
    },
    onEditorReady(quill) {
      console.log('editor ready!', quill)
    },
    onEditorChange({ quill, html, text }) {
      console.log('editor change!', quill, html, text);
      this.content2 = html;
    }
  },
  computed: {
    editor() {
      return this.$refs.myQuillEditor.quill
    }
  },
  mounted() {
    console.log('this is current quill instance object', this.editor);
  }
}
</script>

<style lang="scss" scoped>
.auto, .manual {
  height: 260px;
  ::v-deep .quill-editor {
    height: 100%;
  }
}
.manual {
  margin-top: 100px;
}
</style>
