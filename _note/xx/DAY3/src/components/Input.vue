<template>
  <div>
    <input type="text" v-model="v1" />
    <br />
    <input type="text" v-model="v2" />
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      v1: "",
      v2: ""
    };
  },
  methods: {
    formatValue() {
      let [v1 = "", v2 = ""] = this.value.split(" ");
      this.v1 = v1;
      this.v2 = v2;
    },
    changeText() {
      let { v1, v2 } = this;
      this.$emit("input", `${v1} ${v2}`);
    }
  },
  // 第一次加载组件
  created() {
    this.formatValue();
  },
  // 监听传递的属性变化
  watch: {
    value() {
      this.formatValue();
    },
    v1() {
      this.changeText();
    },
    v2() {
      this.changeText();
    }
  }
};
</script>