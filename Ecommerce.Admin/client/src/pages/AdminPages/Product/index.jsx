import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function ProductList() {
  const navigate = useNavigate()
  return (
    <div className="main-content">
      <div className="page-header">
        <h2 className="header-title">Danh sách sản phẩm</h2>
        <div className="header-sub-title">
          <nav className="breadcrumb breadcrumb-dash">
            <Link to="/admin/dashboard" className="breadcrumb-item">
              <i className="anticon anticon-home m-r-5" />
              Trang Chủ
            </Link>
            <span className="breadcrumb-item active">Danh sách sản phẩm</span>
          </nav>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <div className="row m-b-30">
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-6">
                  <div className="input-affix m-v-10">
                    <i className="prefix-icon anticon anticon-search opacity-04" />
                    <input
                      id="keyword"
                      name="keyword"
                      type="text"
                      className="form-control"
                      placeholder="tìm kiếm sản phẩm"
                    />
                  </div>
                </div>

                {/* Chọn danh mục sản phẩm START*/}
                <div className="col-md-6">
                  <div className="input-affix m-v-10">
                    <select className="custom-select" style={{ minWidth: 180 }}>
                      <option selected>Chọn danh mục</option>
                      <option value="all">Thịt</option>
                      <option value="inStock">Cá</option>
                      <option value="outOfStock">Trứng</option>
                    </select>
                  </div>
                </div>
                {/* Chọn danh mục sản phẩm END */}
              </div>
            </div>

            <div className="col-lg-4 text-right">
              <button
                className="btn btn-primary"
                onClick={() => {
                  navigate('/admin/product/create')
                }}
              >
                <i className="anticon anticon-plus-circle m-r-5" />
                <span>Thêm sản phẩm</span>
              </button>
            </div>
          </div>

          <div className="table-responsive">
            <table className="table table-hover e-commerce-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Tên sản phẩm</th>
                  <th>Hình ảnh</th>
                  <th>Danh mục</th>
                  <th>Mô tả ngắn</th>
                  <th>Giá</th>
                  <th>Tồn kho</th>
                  <th>Trạng thái</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#1</td>
                  <td>Home Decoration</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <img
                        className="img-fluid rounded"
                        src="/images/others/thumb-9.jpg"
                        style={{ maxWidth: 60 }}
                        alt
                      />
                      <h6 className="m-b-0 m-l-10">Gray Sofa</h6>
                    </div>
                  </td>
                  <td>Đồ trang trí nội thất</td>
                  <td>Cực xịn</td>
                  <td>$912.00</td>
                  <td>20</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <div className="badge badge-success badge-dot m-r-10" />
                      <div>In Stock</div>
                    </div>
                  </td>
                  <td className="text-right">
                    <button className="btn btn-tone btn-secondary m-r-5">
                      <i className="anticon anticon-edit" />
                    </button>
                    <button className="btn btn-tone btn-success m-r-5">
                      <i className="anticon anticon-delete" />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="row">
              <ul className="pagination">
                <li
                  className="paginate_button page-item previous disabled"
                  id="DataTables_Table_0_previous"
                >
                  <a
                    href="#"
                    aria-controls="DataTables_Table_0"
                    data-dt-idx={0}
                    tabIndex={0}
                    className="page-link"
                  >
                    Previous
                  </a>
                </li>
                <li className="paginate_button page-item active">
                  <a
                    href="#"
                    aria-controls="DataTables_Table_0"
                    data-dt-idx={1}
                    tabIndex={0}
                    className="page-link"
                  >
                    1
                  </a>
                </li>
                <li
                  className="paginate_button page-item next disabled"
                  id="DataTables_Table_0_next"
                >
                  <a
                    href="#"
                    aria-controls="DataTables_Table_0"
                    data-dt-idx={2}
                    tabIndex={0}
                    className="page-link"
                  >
                    Next
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
