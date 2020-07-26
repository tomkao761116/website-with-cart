//參考範例程式碼完成
//取得商品列表
var obj = {
    data: {
        uuid: 'ea556ec5-4643-415e-96a7-36c78142eb82',
        apiPath: 'https://course-ec-api.hexschool.io/',
        products: [],
    },

    //使用關注點分離，先取得 API 回傳的資料
    getData: function () {
        var vm = this; // 把 this 限定在 obj
        var api = `${ vm.data.apiPath }api/${vm.data.uuid}/ec/products`;
        console.log(vm.data.products);
        //使用 axios 套件 call API
        axios.get(api)
            .then( res => {
                vm.data.products = res.data.data;
                vm.render();
            })
            .catch((err) => { console.error(err) })
    },

    // 渲染頁面
    render: function () {
        var vm = this; // 把 this 限定在 obj
        var productsList = document.getElementById('productsList'); // 取得商品列表的區塊
        var products = vm.data.products; // 取得getData的資料
        var str = '';
        products.forEach(item => {
            str += `
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm" data-id="${ item.id }">
                <img class="bd-placeholder-img card-img-top" width="100%" height="350px" src="${ item.imageUrl }"
                  alt="多肉植物">
                <div class="card-body">
                  <p class="productTitle text-sensaicha font-weight-bold">${ item.title }</p>
                  <p class="productDescription card-text text-muted">${ item.content }</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="price-group">
                      <small class="orignal-price text-muted ">NT. <span>${ item.origin_price }</span></small>
                      <span class="activity-price text-sensaicha">NT. <span>${ item.price }</span></span>
                    </div>
                    <div class="action-group">
                      <span data-toggle="tooltip" title="加入購物車"><a href="#" class="text-sensaicha p-1"><i
                            class="fas fa-shopping-cart"></i></a></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>`;
        });
        productsList.innerHTML = str;
    }
}
obj.getData();