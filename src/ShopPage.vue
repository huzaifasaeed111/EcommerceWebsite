<template>
    <CategoriesComp/>
    <AllProducts/>
</template>

<script>
  import CategoriesComp from './components/CategoriesComp.vue';
  import AllProducts from './components/AllProducts.vue';
   export default{
     name: 'ShopPage',
     components:{
        CategoriesComp,
        AllProducts
     }
   }
</script>

<style scoped>

</style>