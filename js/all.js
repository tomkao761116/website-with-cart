import zh from './zh_TW.js';

// 自定義設定檔案，錯誤的 className
VeeValidate.configure({
  classes: {
    valid: 'is-valid',
    invalid: 'is-invalid',
  },
});

// 載入自訂規則包
VeeValidate.localize('tw', zh);

// 將 VeeValidate input 驗證工具載入 作為全域註冊
Vue.component('ValidationProvider', VeeValidate.ValidationProvider);
// 將 VeeValidate 完整表單 驗證工具載入 作為全域註冊
Vue.component('ValidationObserver', VeeValidate.ValidationObserver);

new Vue({
  el:'#app',
  data:{
    products:[],
    tempProduct:{
      num:0,
    },
    form:{
      name: '',
      email: '',
      tel: '',
      address: '',
      payment: '',
      message: '',
    },
    cart: {},
    cartTotal: 0,
    UUID: 'ea556ec5-4643-415e-96a7-36c78142eb82',
    APIPATH: 'https://course-ec-api.hexschool.io',
  }
})