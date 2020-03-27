<template>
  <div>
    用户界面
    <h2>{{$route.params.userId}}</h2>
  </div>
</template>

<script>
export default {
  name: "User",
  computed: {
    userId() {
      return this.$route.params.userId;
    }
  }
};
</script>

<style scoped>
</style>
