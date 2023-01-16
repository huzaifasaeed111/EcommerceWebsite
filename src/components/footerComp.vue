<template>
    <div class="container-fluid mt-4 footer">
        <div class="row">
            <div class="col-lg-4 col-sm-12">
                <div class="col-12 text-center mt-3">
                    <h3 class="logo-text"><i class="fa-brands fa-shopify"></i>&nbsp;ShopHub</h3>
                </div>
                <div class="col-12">
                    <p class="text-center p-3">
                        "Fashion as we knew it is over; people wear now
                    exactly what they feel like wearing." 
                    </p>
                </div>
            </div>

            <div class="col-lg-4 col-sm-12">
                <div class="col-12">
                    <h2 class="text-center py-1 text-color">Pages</h2>
                </div>
                <div class="col-12 text-center">
                    <li class="list-styling">Home</li>
                    <li class="list-styling">Collections</li>
                    <li class="list-styling">About Us</li>
                    <li class="list-styling">Contact Us</li>
                </div>
            </div>

            <div class="col-lg-4 p-3">
                <div class="col-12">
                    <h2 class=" text-color">Contact Us</h2>
                </div>
                <i class="fa-solid fa-location-dot icon-styling"></i>&nbsp;Khyaban e firdousi, Johar Town, Lahore,pk.<br>
                <i class="fa-solid fa-envelope icon-styling"></i>&nbsp;shophub@gmail.com
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-lg-12 text-center">
                &copy; 2023 | <a href="#" class="footer-bottom"> shophub.com</a>             
            </div>
        </div>
    </div>
</template>

<script>
  export default{
     name:'footerComp',
  }
</script>

<style scoped>
.footer{
    background-color: #f5f3f2;
  position: relative;
  bottom:0;
  z-index: 100;
}
.logo-text{
    color:#b8ae86;
    font-family: 'Dancing Script', cursive;
    font-weight: 1500;
  }
  .text-color{
    color:#b8ae86;
  }
  .list-styling{
      list-style-type: none;
      font-weight: 2000;
  }
  .icon-styling{
      font-size: 20px;
      color:#b8ae86;
      margin-top: 8px;
  }
  .footer-bottom{
    text-decoration: none;
    color: #b8ae86;
    font-weight: bolder;
  }
</style>