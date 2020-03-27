<!--  -->
<template>
  <!-- 所有的内容要被根节点包含起来 -->
  <div id="home">
    首页组件
    <button @click="getData()">请求数据</button>
    <hr />
    <br />

    <ul>
      <li v-for="item in list" :key="item.id">{{item.title}}</li>
    </ul>
  </div>
</template>

<script>
import Axios from "axios";
export default {
  data() {
    return {
      list: []
    };
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      var api =
        "http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1";
      Axios.get(api)
        .then(response => {
          this.list = response.data.result;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
<style scoped>
/* @import url(); 引入css类 */
</style>