<template>
  <div>
    <NavbarComp/>
    <router-view></router-view>
    <footerComp/>
  </div>
</template>

<script>

import NavbarComp from './components/NavbarComp.vue';
import footerComp from './components/footerComp.vue';

export default {
  name: 'App',
  components: {
    NavbarComp,
    footerComp
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600&display=swap');
</style>
