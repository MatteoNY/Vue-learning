<template>
  <div class="hello">

    <ul>
      <li>
      <router-link tag="li" to="/ciao">
        <a>Ciao Dude link</a>
      </router-link>
      </li>
       <li>
      <router-link tag="li" to="/status">
        <a>Status</a>
      </router-link>
      </li>
  <li>
      <router-link tag="li" to="/parent">
        <a>Parent</a>
      </router-link>
      </li>

      <li>
                <router-link tag="li" to="/user">
        <a>User</a>
      </router-link>
      </li>
    </ul>

<div class="ciao">
  <div class="vabene">
      Matteo was here!
  </div>

    <h1>{{ msg }}</h1>


  </div>
  </div>
</template>

<script>
export default {
  name: "Tutti",
  data() {
    return {
      msg: "Ciao Tutti your component is here :-)"
    };
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
