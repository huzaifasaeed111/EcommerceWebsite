<template>
    <div class="container banner mt-5">
        <div class="row text-bg">
            <!-- ################## Banner Image ##################### -->
            <div class="col-lg-6 col-md-6 text-center col-sm-6 col-xs-6" >
                <img src="../assets/banner.jpg" class="w-100 ml-5 banner-img img-fluid" alt="">
            </div>
            <!-- ################## Banner Text ##################### -->
           <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
              <div class=" text-center">
                <p class="px-3 py-2 h4 banner-text">"Fashion as we knew it is over; people wear now
                    exactly what they feel like wearing."<br>
                    <span style="font-weight:bolder;color:gray;">– Mary Quant</span>
                </p>
                <p class="sub-text">For buying quality of product click shop button now.</p>
              </div>
              <div class="col-12  text-center mb-3">
                 <button class="banner-btn">
                    Shop Now
                 </button>
              </div> 
           </div>

        </div>
    </div>
</template>

<script>
   export default{
    name: 'bannerComp'
   }
</script>

<style scoped>
.banner-img{
    margin-left: -23px;
    clip-path: polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%);
}
.text-bg{
    background-color: #dbcc8f;
}
.banner-text{
    font-size: 1.6rem;
    font-weight: 500;
    margin-top: 100px;
    font-family: 'Dancing Script', cursive;
}
.banner-btn{
    padding: 10px;
    color: black;
    font-size: 20px;
    border: 1px solid rgb(131, 128, 128);
    font-family: 'Dancing Script', cursive;
    background-color: white;
  } 
.banner-btn:hover{
    background-color: rgb(131, 128, 128);
    color: white;
}


@media(max-width:1200px){
   .banner-text{
    font-size: .8rem;
    margin-top: 40px;
   }
   .banner-btn{
     padding: 5px;
     font-size: 10px;
   }
   .sub-text{
      font-size: 8px;
   }
}

@media(max-width:768px){
    .banner-text{
        font-size: .6rem;
        margin-top: 20px;
       }
}

@media(max-width:576px){
    .banner-text{
        font-size: .5rem;
    }
    .banner-img{
        clip-path: polygon(0% 0%, 100% 0, 100% 50%, 100% 100%, 0% 100%);
        margin-right: -30px;
        width: 100%;
        height: 200px;
    }
    .text-bg{
        background-color: white;
    }
}
</style>