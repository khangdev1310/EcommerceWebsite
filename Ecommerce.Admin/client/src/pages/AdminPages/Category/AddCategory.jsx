import React from 'react'

export default function AddCategory() {
  return (
    <div className="main-content">
      <form>
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
                Tạo danh mục
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link"
                data-toggle="tab"
                href="#product-edit-description"
              >
                Chi tiết danh mục
              </a>
            </li>
          </ul>
        </div>
        <div className="tab-content m-t-15">
          <div className="tab-pane fade show active" id="product-edit-basic">
            <div className="card">
              <div className="card-body">
                <div className="form-group">
                  <label className="font-weight-semibold" htmlFor="categoryName">
                    Tên danh mục
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="categoryName"
                    placeholder="Nhập tên danh mục"
                  />
                </div>
                <div className="form-group">
                  <label className="font-weight-semibold" htmlFor="categoryDesc">
                    Mô tả ngắn
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="categoryDesc"
                    placeholder="Nhập mô tả"
                  />
                </div>

                <div className="form-group">
                  <label className="font-weight-semibold m-r-5" htmlFor="productDesc">
                    Chọn hình ảnh
                  </label>
                  <input type="file" id="categoryDesc" />
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
