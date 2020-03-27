<!--  -->
<template>
  <div>
    我是头部组件---{{title}}
    <button @click="run('123')">执行父组件方法</button>
  </div>
</template>

<script>
import VueEvent from "../model/vueEvent";

export default {
  data() {
    return {};
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {
    VueEvent.$on("to-header", function(data) {
      console.log(data);
    });
  },

  methods: {
    headerRun() {
      alert("headerRun方法");
    }
  },
  props: ["title", "run"]
};
</script>
<style scoped>
/* @import url(); 引入css类 */
</style>