<template lang="pug">
b-card.card-product(:title='product.name' :img-src='product.image')
  b-card-text {{ product.price }} 元
  b-button(variant='primary' @click="addCart")
    font-awesome-icon(:icon="['fas','cart-arrow-down']")
    | &nbsp;加入購物車
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      default () {
        return {
          id: 0,
          name: '',
          prcie: 0,
          image: ''
        }
      }
    }
  },
  methods: {
    addCart () {
      // commit ('對應到 index 裡面的 mutations 裡面的 addCart')
      this.$store.commit('addCart', this.product.id)
      this.$swal({
        icon: 'success',
        title: '成功',
        text: '新增成功'
      })
    }
  }
}
</script>
