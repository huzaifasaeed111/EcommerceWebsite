import {createStore} from 'vuex';
import axios from 'axios';
const store = createStore({
   state:{
      products: [],
      categories : [],
      smartphones:[],
      category:[],
   },

   mutations:{
       set_products(state,prod){
          state.products=prod;
          console.log(state.products,'muatation data');
       },

       set_product_categories(state, categ){
            state.categories=categ;
       },
       set_categories(state,productId){
            state.category=productId;
       }
   },

   actions:{
    // ############################# Fetch Data From API #######################
    GetProducts({commit}){
        axios.get('https://dummyjson.com/products').then((response)=>{
              commit("set_products", response.data.products);
              console.log(response.data.products, ',,,,,');
        });
    },
    cat_button({commit}){
        axios.get('https://dummyjson.com/products/categories').then((resp)=>{
            commit("set_product_categories", resp.data);
            console.log(resp.data, ',,,,kkkkk');
        })
     },
    Product_categories({commit},categ){
        axios.get(`https://dummyjson.com/products/categories/${categ}`).then((resp)=>{
            commit("set_categories", resp.data);
            console.log(resp.data, ',,,,/////');
        })
    }
   },


   getters:{

   }
});

export default store;