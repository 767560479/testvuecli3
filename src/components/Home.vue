<template>
  <div>
    <v-header ref="header" :title="title" :run="run"></v-header>
    <h1>首页</h1>
    <br />
    <span>{{$store.state.counter}}</span>
    <button @click="addition()">增加</button>
    <button @click="subtracion()()">减少</button>
    <button @click="testHeaderMethod()">获取子组件方法</button>
    <button @click="testEvent()">广播</button>
  </div>
</template>

<script>
import Header from "./Header";
import VueEvent from "../model/vueEvent";

export default {
  name: "Home",

  data() {
    return {
      title: "头部首页"
    };
  },
  components: {
    "v-header": Header
  },
  methods: {
    run(value) {
      alert("我是home组件的run方法" + value);
    },
    testHeaderMethod() {
      this.$refs.header.headerRun();
    },
    testEvent() {
      VueEvent.$emit("to-header", this.title);
    },
    addition() {
      this.$store.commit("increment");
    },
    subtracion() {
      this.$store.commit("decrement");
    }
  }
};
</script>

<style scoped>
</style>
