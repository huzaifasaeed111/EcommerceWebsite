<template>
    <div class="container">
        <div class="row mt-5">
            <div class="col-lg-4 text-center mb-3" v-for="category in Products_categ" :key="category">
                <div>
                  <img src="../assets/alabaster_sofa.jpg" class="img-fluid" alt="">
                </div>
                <h5>{category.title}</h5>
                <h5>{category.price}</h5>
                <button class="show-detail-btn">View Detail</button>
            </div>
        </div>
    </div>
</template>

<script>
   export default{
      name: 'categoriesProducts',
     computed:{
        Products_categ(){
            return this.$store.state.category;   
        }
      }
   }

</script>

<style scoped>
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