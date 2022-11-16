<template>
    <div class="d-flex">
        <h3 class="mt-5 ms-5">Products</h3>
    </div>
    <div class="bg-light d-flex flex-wrap">
        <div v-for="(product, i) in inventory" :key="product.id" class="">
            <div class="me-3 ms-4 mt-3 pb-4 bg-white">
                <div class="pt-2 pe-2 d-flex justify-content-end">
                    <router-link :to="'/product-edit/' + product.id">
                        <img src="../../public/svg/edit.svg" alt="" width="15">
                    </router-link>
                   <button class=" border-0  bg-white " type="button" @click="deleteProduct(product.id, i)">
                       <img src="../../public/svg/delete.svg" alt="" width="15" class="me-2" >
                   </button> 
                </div>
                <img :src="('./img/' + product.photo)" :alt="product.name" height="300" />
                <div class="ms-4">
                    <p class="m-0 text-center text- "> <strong>{{ product.name }}</strong></p>
                    <p class="m-0 text-center">{{ product.category }}</p>
                    <p class="m-0 text-center"><small class="text-muted">${{ product.price.toFixed(2) }}</small></p>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import ProductDataService from '@/services/ProductDataService'

export default {
    props: ['inventory', 'removeInv'],
    
    methods: {
        deleteProduct (id, i) {
            ProductDataService.delete(id)
                .then(() => {
                    this.removeInv(i)
                })
        }
    },
    mounted () {
        ProductDataService.get(this.id)
            .then(response => {
                this.product = response.data
            })
    }
}
</script>
  