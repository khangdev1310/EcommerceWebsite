import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { deleteProductAsync, getAllProductsAsync, setDeleteProduct } from '../../../features/Product/ProductSlice'


export default function ProductList() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  // Get products
  const { products } = useSelector((state) => state.product)

  // View product
  const handleViewProduct = (id) => {
    const newProduct = products.find(p => p.id === id);
    navigate('/admin/product/view', { state: newProduct })
  }

  // Delete product
  const handleDeleteProduct = (item) => {
    console.log(item);
    dispatch(setDeleteProduct(item));
    Swal.fire({
      title: 'Lưu ý',
      text: 'Bạn có muốn xóa sản phẩm này không',
      icon: 'warning',
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteProductAsync({ id: item.id }))
      }
      else {
        Swal.fire({
          title: "Hủy bỏ",
          icon: "info",
          timer: 1000
        })
      }
    })
  }
  
  useEffect(() => {
    dispatch(getAllProductsAsync({ currentPage: 1, limit: 10 }))
  }, [])

  
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
                  <th>Danh mục</th>
                  <th>Mô tả ngắn</th>
                  <th>Giá</th>
                  <th>Tồn kho</th>
                  <th>Trạng thái</th>
                  <th>Đặc điểm</th>
                </tr>
              </thead>
              <tbody>
                {products && products.map((item, index) => (
                    <tr key={item.id}>
                      <td>#{index + 1}</td>
                      <td>{item.name}</td>

                      <td>{item?.category?.name}</td>
                      <td>{item.desc}</td>
                      <td>${item.price}</td>
                      <td>{item.quantity}</td>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="badge badge-success badge-dot m-r-10" />
                          <div>{item.status}</div>
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="badge badge-warning badge-dot m-r-10" />
                          {item.isFeatured ? (
                            <div>Hàng đặc biệt</div>
                          ) : (
                            <div>Bình thường</div>
                          )}
                        </div>
                      </td>

                      <td className="text-right">
                        <button className="btn btn-tone btn-primary m-r-5" onClick={() => handleViewProduct(item.id)}>
                        <i className="anticon anticon-eye"></i>
                        </button>
                        <button className="btn btn-tone btn-secondary m-r-5">
                          <i className="anticon anticon-edit" />
                        </button>
                        <button className="btn btn-tone btn-success m-r-5" onClick={() => handleDeleteProduct(item)}>
                          <i className="anticon anticon-delete" />
                        </button>
                      </td>
                    </tr>
                  ))}
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
