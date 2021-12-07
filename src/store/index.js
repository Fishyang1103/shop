import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  // state 裡面的東西只能讀取
  state: {
    products: [
      { id: 1, name: '焦糖瑪奇朵', price: 155, image: 'https://d1ralsognjng37.cloudfront.net/59fb79eb-7c8a-4c41-9ae6-bad1ba7630a4.jpeg' },
      { id: 2, name: '可可碎片星冰樂', price: 165, image: 'https://d1ralsognjng37.cloudfront.net/30c3a98d-427a-4388-9365-ada3058278b4.jpeg' },
      { id: 3, name: '玫瑰蜜香茶那堤', price: 145, image: 'https://d1ralsognjng37.cloudfront.net/9dcbef63-8bba-412c-ac44-18532684f534.jpeg' },
      { id: 4, name: '那堤', price: 135, image: 'https://d1ralsognjng37.cloudfront.net/7ebd715b-f2bd-4fd5-a775-30b2e0c22f6d.jpeg' },
      { id: 5, name: '經典巧克力', price: 150, image: 'https://d1ralsognjng37.cloudfront.net/69c26cc7-7dfb-4d7a-a6bd-dd17c8a087d0.jpeg' },
      { id: 6, name: '每日精選', price: 95, image: 'https://d1ralsognjng37.cloudfront.net/c12d0a10-1895-4c8f-9e86-aa235900a904.jpeg' }
    ],
    cart: []
  },
  mutations: {
    // (state 是上面的 state , data 是傳入的資料)
    addCart (state, data) {
      // 找購物車裡面有沒有這個商品
      const idx = state.cart.findIndex(product => {
        return product.id === data
      })
      if (idx > -1) {
        // 有的話，數量+1
        state.cart[idx].count++
      } else {
        // 沒有的話，用 id 找出該商品的資料後 push
        const pidx = state.products.findIndex(product => {
          return product.id === data
        })
        state.cart.push({ ...state.products[pidx], count: 1 })
      }
    },
    delCart (state, data) {
      const idx = state.cart.findIndex(product => {
        return product.id === data
      })
      state.cart.splice(idx, 1)
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [
    createPersistedState({
      // localStorage 的 key，不設的話是 vuex
      key: 'shop-practice',
      // 指定只保存 state 裡的那個資料
      paths: ['cart']

    })
  ]
})
