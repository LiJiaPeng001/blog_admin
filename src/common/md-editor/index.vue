<template>
  <div class="md-outer">
    <div class="md-action">
      <div>
        <span class="balloon" data-balloon="切换预览">
          <i @click="visible = !visible" class="icon-eye iconfont"></i>
        </span>
        <span class="balloon" data-balloon="复制html">
          <i @click="copy" class="icon-file-copy iconfont"></i>
        </span>
      </div>
    </div>
    <div class="md-frame">
      <textarea v-show="visible" :value="v" @input="change" ref="editor" class="editor"></textarea>
      <div ref="preview" class="preview md-body" v-html="transfer"></div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { defineProps, watchEffect, onMounted, ref } from 'vue'
import MarkdowIt from 'markdown-it';
import hljs from './utils/hljs';
import SyncScroll from './utils/SyncScroll';
import copyText from './utils/copy';

import './style/index.less';

const props = defineProps({
  value: {
    type: String,
    default: '',
  },
  sync: {
    type: Boolean,
    default: true,
  },
  multiple: {
    type: Boolean,
    default: false,
  },
})

const { value = '' } = props

const emits = defineEmits(['copy', 'update:value'])

let v = ref(value)
let transfer = ref("")
let visible = ref(true)
let editor = ref()
let preview = ref()
let syncScroll
let md: any

watchEffect(() => {
  if (v.value == props.value) return;
  v.value = props.value;
  transferValue();
})

onMounted(() => {
  if (props.sync) {
    syncScroll = new SyncScroll(editor.value, preview.value);
  }
  init();
  transferValue();
})
let init = () => {
  md = new MarkdowIt({
    highlight(str: string, lang: string) {
      if (lang && hljs.getLanguage(lang)) {
        console.log(hljs.highlight(lang, str, true).value)
        try {
          return `<pre class="hljs"><code>${hljs.highlight(lang, str, true).value
            }</code></pre>`;
        } catch (e) {
          console.error('highlight.js:', e);
        }
      }
      return ''; // use external default escaping
    },
  });
}
let transferValue = () => {
  if (!v) {
    return (transfer.value = '');
  }
  transfer.value = md.render(v.value);
}
let change = (e: Event) => {
  const { value = '' } = e.target as HTMLTextAreaElement;
  v.value = value;
  emits('update:value', value);
}
let copy = () => {
  copyText(transfer.value)
  emits('copy', transfer.value);
  alert('复制HTML成功');
}
</script> 

<style lang="less" scoped>
@import "./style/mixins.less";

.md-outer {
  min-height: 300px;
  border-radius: 3px;
  border: 1px solid #dbdbdb;
}
.md-action {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 30px;
  background-color: #fff;
  padding: 0 6px;
  .balloon {
    .balloon(top);
  }
  .iconfont {
    cursor: pointer;
    margin: 0 4px;
  }
}
.md-frame {
  background-color: #e7e7ef;
  padding: 6px 4px;
  min-height: 400px;
  height: calc(100% - 30px);
  display: flex;
  font-size: 14px;
  line-height: 1.3;
  box-sizing: border-box;
}
.editor {
  flex: 1;
  padding: 10px;
  box-sizing: border-box;
  border: none;
  resize: none;
  outline: none;
  font-size: 14px;
  line-height: 1.3;
  background-color: #fff;
  margin-right: 1px;
}
.preview {
  flex: 1;
  background-color: #fff;
  padding: 10px;
  box-sizing: border-box;
  overflow: auto;
}
.editor,
.preview {
  &::-webkit-scrollbar {
    width: 6px; /*高宽分别对应横竖滚动条的尺寸*/
    background: #efefef;
    &:hover {
      background: #e5e5e5;
    }
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 3px;
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.1);
    background: rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }
}
</style>