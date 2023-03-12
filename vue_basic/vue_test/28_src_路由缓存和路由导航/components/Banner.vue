<template>
  <div class="page-header">
    <h2>Vue Router Demo</h2>
    <button @click="forward">后退</button>
    <button @click="back">前进</button>
  </div>
</template>

<script>
export default {
  name: "Banner",
  methods:{
    forward(){
      this.$router.forward()
    },
    back(){
      this.$router.back()
    }
  }
}
</script>

<style scoped>

</style>