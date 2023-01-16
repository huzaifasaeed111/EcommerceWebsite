<template>
  <div class="container">
     <div class="row">
        <div class="col-12 text-center mt-4 mb-5">
            <h1 class="title">
                Feature Products 
            </h1>
        </div>
     </div>

     <div class="row mb-5">
        <!-- ######################### card-1 ###################### -->
        <div class="col-lg-4 card-border">
            <div class="col-12 text-center">
                <img src="../assets/alabaster_sofa.jpg" class="img-fluid" alt="" width="300px" height="300px">
            </div>
            <div class="col-12 text-center">
                <h4>Albaster pierin sofa view 2</h4>
            </div>
            <div class="col-12 text-center">
                <h4>$2000</h4>
            </div>
            <div class="col-12 text-center mb-5">
                <button class="product-btn">Add to Cart</button>
            </div>
        </div>
         <!-- ######################### card-2 ###################### -->
         <div class="col-lg-4 card-border">
            <div class="col-12 text-center">
                <img src="../assets/alabaster_sofa.jpg" class="img-fluid" alt="" width="300px" height="300px">
            </div>
            <div class="col-12 text-center">
                <h4>Albaster pierin sofa view 2</h4>
            </div>
            <div class="col-12 text-center">
                <h4>$2000</h4>
            </div>
            <div class="col-12 text-center mb-5">
                <button class="product-btn">Add to Cart</button>
            </div>
        </div>
         <!-- ######################### card-3 ###################### -->
         <div class="col-lg-4 card-border">
            <div class="col-12 text-center">
                <img src="../assets/alabaster_sofa.jpg" class="img-fluid" alt="" width="300px" height="300px">
            </div>
            <div class="col-12 text-center">
                <h4>Albaster pierin sofa view 2</h4>
            </div>
            <div class="col-12 text-center">
                <h4>$2000</h4>
            </div>
            <div class="col-12 text-center mb-5">
                <button class="product-btn">Add to Cart</button>
            </div>
        </div>
        <!-- ######################### card-3 ###################### -->
        <div class="col-lg-4 card-border">
            <div class="col-12 text-center">
                <img src="../assets/alabaster_sofa.jpg" class="img-fluid" alt="" width="300px" height="300px">
            </div>
            <div class="col-12 text-center">
                <h4>Albaster pierin sofa view 2</h4>
            </div>
            <div class="col-12 text-center">
                <h4>$2000</h4>
            </div>
            <div class="col-12 text-center mb-5">
                <button class="product-btn">Add to Cart</button>
            </div>
        </div>
     </div>
    <div class="row mb-4">
        <div class="col-lg-12 text-center">
           <router-link to="/ShopPage"><button class="product-btn">See More Products</button></router-link> 
        </div>
    </div>

  </div>
</template>

<script>

</script>

<style scoped>
   .title{
    display:inline-block;
    border-bottom: 5px solid #797259;
    font-family: 'Dancing Script', cursive;
   }
   .card-border{
      border: 2px solid rgb(133, 130, 130);
      width:320px;
      margin-left: 4px;
   }
   .product-btn{
      background-color: white;
      border: 2px solid black;
      padding: 10px;
   }
   .product-btn:hover{
    background-color: #797259;
    color:white;
   }
</style>