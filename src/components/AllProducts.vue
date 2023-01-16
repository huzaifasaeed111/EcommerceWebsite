<template>
   <div class="container">
       <div class="row">
          <div class="col-12 text-center">
              <h1 class="product-header">All Products</h1>
          </div>
       </div>
       <div class="row mt-5">
           <div class="col-lg-4 text-center mb-3" v-for="product in prodc" :key="product.id">
               <div>
                 <img :src="product.thumbnail" class="img-fluid" alt="">
               </div>
               <h5>{{product.title}}</h5>
               <h5>{{product.price}}</h5>
               <button class="show-detail-btn">View Detail</button>
           </div>
       </div>
   </div>
</template>

<script>
   export default{
      name: 'AllProducts',
      computed:{
           prodc(){
             return this.$store.state.products;
           }, 
      },
      mounted(){
        this.$store.dispatch('GetProducts');
      },
   }

</script>

<style scoped>
    .product-header{
        display: inline;
        border-bottom: 5px solid #5f5b4c;
        font-family: 'Dancing Script', cursive;
        color:#5f5b4c;
    }
    .show-detail-btn{
        background-color: white;
        padding: 10px;
        font-size: 20px;
        font-family: 'Dancing Script', cursive;
    }
    .show-detail-btn:hover{
        background-color: #5f5b4c;
        color: white;
    }
    img{
        width: 300px;
        height: 300px;
    }
</style>