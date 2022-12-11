<template>
  <div id="app">
    <ContainerC></ContainerC>
  </div>
</template>

<script>
import ContainerC from './components/entrance/ContainerC.vue';
export default {
  name: 'App',
  components: {
    ContainerC,
  }
}
</script>

<style>
#app{
  width:100%;
  height: 100%;
  margin: -8px -8px auto;
}

</style>
