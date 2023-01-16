<template>
      <div class="container mt-5 mb-3">
        <div class="row">
            <div class="col-12 text-center">
                <div class="dropdown">
                    <button class="cat-btn dropdown-toggle " type="button" id="dropdownMenuButton1" 
                    data-bs-toggle="dropdown" aria-expanded="false" >
                      See Product Categories
                    </button>
                    <div>
                      <ul class="dropdown-menu cat-menu" aria-labelledby="dropdownMenuButton1">
                        <li v-for="category in categories" :key="category">
                              <router-link to="/productCategoriesPage">
                                   <a class="dropdown-item" href="#">
                                     {{category}}
                                   </a>
                              </router-link>
                         </li>
                      </ul>
                    </div>
                  </div>
            </div>
        </div>
      </div>
</template>

<script>
   export default{
      name: 'CategoriesComp',
      mounted(){
        this.$store.dispatch('cat_button');
      },
      computed:{
        categories(){
          return this.$store.state.categories;
        },
        category(){
           return this.$store.state.category;
        }
      }
   }
</script>

<style scoped>
    .cat-btn{
        padding: 20px;
        color: #585239;
        background-color: white;
        font-size: 1.5rem;
    }
    .cat-menu{
        width: 315px;
    }
</style>