<template lang="pug">
#home
  b-container
    b-row
      b-col(cols='12')
        h1.text-center 熱門商品 &nbsp;
          font-awesome-icon(:icon="['fas','fire-alt']")
      b-col(cols='12' md='6' lg='3' v-for='product in products' :key='product.id')
        ProductCard(:product='product')
        //- :product 的這個 product 是對應 ProductCard 裡面的 props 的 product
</template>

<script>
import ProductCard from '@/components/ProductCard.vue'

export default {
  components: {
    ProductCard
  },
  computed: {
    products () {
      return this.$store.state.products.slice(0, 4)
    }
  }
}
</script>
