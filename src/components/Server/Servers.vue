<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <li
                    class="list-group-item"
                    v-for="index in 5" :key="index.id">
                Server #{{ index }}
            </li>
        </ul>

     <router-link tag="li" to="/">
  <a>Home</a>
</router-link>

    </div>
</template>

<script>
</script>

<style>

</style>
