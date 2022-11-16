<template>
  <div class="">
    <form class="py-5" method="post">
      <div class="container px-4 px-lg-5 mt-5">
        <div class=" row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-2 justify-content-center ">
          <div class="col-sm-12">
            <h4 class="mb-3  text-center" >Add new product</h4>
            <div class="needs-validation" novalidate>
              <div class="row g-2">
                
                  <div class="col-12">                   
                    <input type="text" class="form-control" id="productName" placeholder=" Product Name" v-model="product.name" required /> 
                  </div>
                  <div class="col-12">
                    <input type="text" class="form-control" id="productPhoto" placeholder="Product Photo" v-model='product.photo' required />
                  </div>
                  <div class="col-12">
                    <input type="text" class="form-control" id="productPrice" placeholder=" Price"  v-model.number='product.price' required />
                    </div>
                  
                  <div class="col-12">
                    <textarea class="form-control" id="productDescription" v-model="product.description" placeholder="Product Description"></textarea>
                  </div>
                  <div class="col-12">
                    <select class="form-control" id="productType" placeholder="" v-model='product.category' required>
                      <option value="">Category</option>
                      <option value="Kitchen">Kitchen</option>
                      <option value="Living room">Living room</option>
                      <option value="Bedroom">Bedroom</option>
                      <option value="Bathroom">Bathroom</option>
                    </select>
                  </div>
                  <button class="w-100 btn bg-primary btn-lg mt-3" type="button" @click="saveProduct">Save </button>
                <hr class="my-4">
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import ProductDataService from '@/services/ProductDataService'

export default {
  props: ['addInv'],
  data() {
    return {
      product: {
        name: '',
        photo: '',
        price: '',
        description: '',
        category: ''
      }
    }
  },
  methods: {
    saveProduct() {
      ProductDataService.create(this.product)
        .then(response => {
          console.log(response.data.id)
          this.product.id = response.data.id
          this.addInv(this.product)
         this.$router.push({ name: 'home' })
        })
    }
  }
}

</script>
