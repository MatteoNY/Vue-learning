<template>
  <div class="hello">

<div class="ciao">
  <div class="vabene">
      Matteo was here!
  </div>

 <ul><li>
      <router-link tag="li" to="/">
  <a>Home</a>
</router-link>
      </li>
    </ul>


    <h1>{{ msg }}</h1>
 
    
  </div>
  </div>
</template>

<script>
export default {
  name: 'mioCiao',
  data () {
    return {
      msg: 'Welcome Matteo! your component is here :-)'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
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
