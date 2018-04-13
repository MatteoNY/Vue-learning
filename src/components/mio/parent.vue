<template>
<section class="hello">
  <child v-for="item in 5" :key="item.id" ></child>
</section>
</template>

<script>
import Child from '@/components/mio/Child';

export default {
  name: "parent",
   components: {
    'child': Child
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
