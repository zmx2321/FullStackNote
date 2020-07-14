<template>
  <div>
    <!-- 
      :value="text" 
      @input="text=$event.target.value" 

      传递给当前组件一个叫做value的属性
      给当前组件设置了一个自定义事件 input   $emit('input','xxx')
    -->
    <my-input v-model="text"></my-input>
    <br />

    {{text}}
    <!--  <input type="text" :value="text" @input="change" />
    {{text}}-->
  </div>
</template>

<script>
import Input from "../components/Input.vue";

export default {
  components: {
    "my-input": Input
  },
  data() {
    return {
      text: "珠峰培训 周啸天"
    };
  },
  methods: {
    change(ev) {
      this.text = ev.target.value;
    }
  },
  mounted() {
    setTimeout(_ => {
      this.text = "哈哈哈 呵呵呵";
    }, 1000);
  }
};
</script>