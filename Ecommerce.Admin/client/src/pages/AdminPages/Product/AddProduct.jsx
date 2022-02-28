import React, { useState } from 'react'

export default function AddProduct() {
  const [productForm, setProductForm] = useState({
    name: '',
    desc: '',
    price: 0,
    categoryId: null,
    quantity: 0,
    isFeatured: false,
    status: '',
  })

  const handleChangeForm = () => {
      console.log(productForm);
  }
  return (
    <div className="main-content">
      <form onChange={handleChangeForm}>
        <div className="page-header no-gutters has-tab">
          <div className="d-md-flex m-b-15 align-items-center justify-content-between">
            <div className="m-b-15">
              <button className="btn btn-primary">
                <i className="anticon anticon-save" />
                <span>Lưu</span>
              </button>
            </div>
          </div>
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <a
                className="nav-link active"
                data-toggle="tab"
                href="#product-edit-basic"
              >
                Tạo sản phẩm
              </a>
            </li>
           
            <li className="nav-item">
              <a
                className="nav-link"
                data-toggle="tab"
                href="#product-edit-description"
              >
                Chi tiết sản phẩm
              </a>
            </li>
          </ul>
        </div>
        <div className="tab-content m-t-15">
          <div className="tab-pane fade show active" id="product-edit-basic">
            <div className="card">
              <div className="card-body">
                <div className="form-group">
                  <label className="font-weight-semibold" htmlFor="productName">
                    Tên sản phẩm
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="productName"
                    placeholder="Nhập tên sản phẩm"
                  />
                </div>
                <div className="form-group">
                  <label className="font-weight-semibold" htmlFor="productDesc">
                    Mô tả ngắn
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="productDesc"
                    placeholder="Nhập tên mô tả sản phẩm"
                  />
                </div>
                <div className="form-group">
                  <label
                    className="font-weight-semibold"
                    htmlFor="productPrice"
                  >
                    Price
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="productPrice"
                    placeholder="Price"
                    defaultValue="$ 199"
                  />
                </div>
                <div className="form-group">
                  <label
                    className="font-weight-semibold"
                    htmlFor="productCategory"
                  >
                    Danh mục sản phẩm
                  </label>
                  <select className="custom-select" id="productCategory">
                    <option value="meat" selected>
                      Chọn danh mục
                    </option>
                    <option value="meat">Thịt</option>
                    <option value="fruit">Hoa quả</option>
                    <option value="vegetable">Rau củ</option>
                  </select>
                </div>
                <div className="form-group">
                  <label
                    className="font-weight-semibold"
                    htmlFor="productQuantity"
                  >
                    Nhập số lượng
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="productQuantity"
                    placeholder="Brand"
                    defaultValue="10"
                  />
                </div>
                <div className="form-group">
                  <label
                    className="font-weight-semibold"
                    htmlFor="productFeatures"
                  >
                    Sản phẩm đặc trưng
                  </label>
                  <div className="switch m-r-10">
                    <input
                      type="checkbox"
                      id="productFeatures"
                      onChange={(e) => {
                        console.log(e.target.checked)
                      }}
                    />
                    <label htmlFor="productFeatures" />
                  </div>
                </div>
                <div className="form-group">
                  <label
                    className="font-weight-semibold"
                    htmlFor="productStatus"
                  >
                    Trạng thái sản phẩm
                  </label>
                  <select className="custom-select" id="productStatus">
                    <option value="inStock" selected>
                      In Stock
                    </option>
                    <option value="outOfStock">Out of Stock</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          
          <div className="tab-pane fade" id="product-edit-description">
            <div className="card">
              <div className="card-body">
                <div id="productDescription">
                  <p>
                    Special cloth alert. The key to more success is to have a
                    lot of pillows. Surround yourself with angels, positive
                    energy, beautiful people, beautiful souls, clean heart,
                    angel. They will try to close the door on you, just open it.
                    A major key, never panic. Don’t panic, when it gets crazy
                    and rough, don’t panic, stay calm. They key is to have every
                    key, the key to open every door.The other day the grass was
                    brown, now it’s green because I ain’t give up. Never
                    surrender. Lion! I’m up to something. Always remember in the
                    jungle there’s a lot of they in there, after you overcome
                    they, you will make it to paradise.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
