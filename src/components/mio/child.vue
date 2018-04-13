<template>
<section class="hello">

  <ul><li>
      <router-link tag="li" to="/">
         <a>Ciao </a>
         <p> status: {{status}} </p>
         <button @click="changeStatus">Change status</button>
     </router-link>
      </li>
  </ul>

<div class="ciao">
    <h1>{{ msg }}</h1>
</div>
<hr/>
</section>

</template>

<script>
export default {
  name: "child",
  data() {
    return {
      count: 0,
      status: "System...",
      msg: "Child wha ;-)"
    };
  },
  methods: {
    changeStatus() {
      
      this.status = "Fini " + this.count++;
    }
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
