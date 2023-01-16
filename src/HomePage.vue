<template>
    <bannerComp/>
    <offerComp/>
    <NewCollection/>
</template>

<script>
  import bannerComp from './components/bannerComp.vue';
  import OfferComp from './components/OfferComp.vue';
  import NewCollection from './components/NewCollection.vue';
  export default{
    name: 'HomePage',
    components:{
       bannerComp,
       OfferComp,
       NewCollection,
    }
  }

</script>

<style>

</style>