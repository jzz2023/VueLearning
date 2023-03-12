<template>
  <div class="container">
    <category title="游戏">
      <template scope="test">
        <ul slot="center">
          <li v-for="(g,index) of test.games" :key="index">
            {{g}}
          </li>
        </ul>
      </template>
    </category>
    <category title="游戏">
      <template scope="test">
        <ol slot="center">
          <li v-for="(g,index) of test.games" :key="index">
            {{g}}
          </li>
        </ol>
      </template>
    </category>
    <category title="游戏">
      <template scope="{games}">
          <h4 v-for="(g,index) of games" :key="index">
            {{g}}
          </h4>
      </template>
    </category>
  </div>

</template>

<script>
import category from "@/components/Count";

export default {
  name: "App",
  components: {category},

}
</script>

<style>
.container,.foot{
  display: flex;
  justify-content: space-around;
}
h4{
  text-align: center;
}
</style>