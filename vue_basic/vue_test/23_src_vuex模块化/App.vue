<template>
  <div class="container">
    <Count></Count>
    <hr>
    <person></person>
  </div>
</template>

<script>
import Count from "@/components/Count";
import person from "@/components/person";

export default {
  name: "App",
  components: {Count,person},
}
</script>

<style>

</style>