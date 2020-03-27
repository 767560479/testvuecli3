<template>
  <div id="app">
    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <router-link v-bind:to="'/user/'+userId">用户</router-link>
    <router-link to="/todoList">todoList</router-link>
    <router-link to="/test">测试</router-link>
    <router-view></router-view>
    <hr />
    <br />
    <v-header>/</v-header>
    <V-home></V-home>
  </div>
</template>

<script>
import Home from "./components/Home";
import Header from "./components/Header";

export default {
  name: "App",
  data() {
    return { userId: "lisi" };
  },
  components: {
    "v-header": Header,
    "V-home": Home
  }
};
</script>

<style>
</style>
