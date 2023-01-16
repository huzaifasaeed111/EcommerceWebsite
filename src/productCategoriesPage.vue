<template>
    <categoriesComp/>
    <CategoriesProducts/>
</template>

<script>
  import categoriesComp from './components/CategoriesComp.vue';
  import CategoriesProducts from './components/categoriesProducts.vue';
  export default{
    name: 'productCategoriesPage',
    components:{
    categoriesComp,
    CategoriesProducts
    }
  }

</script>