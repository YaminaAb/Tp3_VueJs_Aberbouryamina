<template>
  <div class="d-flex">
    <div class="w-10 bg-primary bg-opacity-25 d-flex flex-column text-center sticky-top vh-100">
      <div>
        <img src="../public/svg/logo.svg" alt="">
      </div>
      <div class="p-2 d-flex flex-column bg-secondary mt-3">
        <img src="../public/svg/dashboard.svg" class="w-30 align-self-center" alt="">
        <span class="fs-6">DASHBOARD</span>
      </div>
      <div class="p-2 d-flex flex-column ">
        <img src="../public/svg/table.svg" class="w-30 align-self-center" alt="">
        <span class="fs-6">ORDERS</span>
      </div>
      <div class="p-2 d-flex flex-column ">
        <img src="../public/svg/users.svg" class="w-30 align-self-center" alt="">
        <span class="fs-6">CUSTOMERS</span>
      </div>
      <div class="p-2 d-flex flex-column  ">
        <img src="../public/svg/box-.svg" class="w-30 align-self-center" alt="">
        <span class="fs-6">INVENTORY</span>
      </div>
      <div class="p-2 d-flex flex-column ">
        <img src="../public/svg/marketing.svg" class="w-30 align-self-center" alt="">
        <span class="fs-6">MARKETING</span>
      </div>
      <div class="p-2 d-flex flex-column ">
        <img src="../public/svg/report.svg" class="w-30 align-self-center" alt="">
        <span class="fs-6">REPORTS</span>
      </div>
      <div class="p-2 d-flex flex-column ">
        <img src="../public/svg/setting.svg" class="w-30 align-self-center" alt="">
        <span class="fs-6">SETTINGS</span>
      </div>
    </div>
    <div class="w-20 bg-secondary ps-3 pt-5 sticky-top vh-100">
      <h4 class="border-bottom pb-2">Dashboard </h4>
      <ul class="list-group list-group-flush mt-4 ">
        <router-link class="list-group-item text-black " to="/"> Products </router-link>
        <router-link class="list-group-item  text-black" to="/product-add"> Add Product </router-link>
        <router-link class="list-group-item text-black " to="/présentation"> Presentation </router-link>       
      </ul>
    </div>
    <div class="w-70">     
      <router-view :inventory="inventory" :addInv="addInventory" :removeInv="removeInventory" :updateInv="updateInventory" />
    </div>
  </div>
</template>

<script>
import ProductDataService from '@/services/ProductDataService'
export default {
  data() {
    return {
      inventory: []
    }
  },
  methods: {
    addInventory(data) {
      this.inventory.push(data)
    },
    removeInventory(index) {
      this.inventory.splice(index, 1)
    },
    updateInventory(index, data) {
      this.inventory[index].name = data.name
      this.inventory[index].photo = data.photo
      this.inventory[index].price = data.price
      this.inventory[index].description = data.description
      this.inventory[index].category = data.category
    }
  },
  mounted() {
    ProductDataService.getAll()
      .then(response => {
        this.inventory = response.data
        console.log(response.data)
      })
  }
}
</script>
