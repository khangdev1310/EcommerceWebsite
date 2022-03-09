import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
  AsyncDeleteCategories,
  AsyncGetAllCategories,
  setDeleteCategory,
} from '../../../features/Category/CategorySlice'
import Swal from 'sweetalert2'
import {formatDateTime} from '../../../untils/formatDateTime'

export default function CategoryList() {
  const navigate = useNavigate()
  const { categories } = useSelector((state) => state.category)
  const dispatch = useDispatch()

  // Search item with the name\
  const [searchTerm, setSearchTerm] = useState('')

  // View category
  const handleViewCategory = (id) => {
    const viewCategory = categories.find((item) => item.id === id)
    navigate('/admin/category/view', { state: viewCategory })
  }

  // Delete category
  const handleDeleteCategory = (item) => {
   
    dispatch(setDeleteCategory(item))

    Swal.fire({
      title: 'Lưu ý',
      text: 'Bạn có muốn xóa danh mục này không',
      icon: 'warning',
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(AsyncDeleteCategories({ id: item.id }))
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


  // Start Update category 
  const handleEditCategory = (item) => {
    const editCategory = categories.find((c) => c.id === item.id)
    navigate('/admin/category/edit', { state: editCategory })
  }
  // End Update category 
  

  useEffect(() => {
    dispatch(AsyncGetAllCategories())
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
            <span className="breadcrumb-item active">Danh mục sản phẩm</span>
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
                      placeholder="Tìm kiếm sản phẩm"
                      onChange={(e) => {
                        setSearchTerm(e.target.value)
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 text-right">
              <button
                className="btn btn-primary"
                onClick={() => {
                  navigate('/admin/category/create')
                }}
              >
                <i className="anticon anticon-plus-circle m-r-5" />
                <span>Thêm danh mục</span>
              </button>
            </div>
          </div>

          <div className="table-responsive">
            <table className="table table-hover e-commerce-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Tên danh mục </th>
                  <th>Hình ảnh</th>
                  <th>Mô tả ngắn</th>
                  <th>Ngày tạo</th>
                  <th>Ngày cập nhật</th>
                </tr>
              </thead>
              <tbody>
                {categories &&
                  categories
                    .filter((val) => {
                      if (searchTerm === '') {
                        return val
                      } else if (
                        val.name
                          .toLowerCase()
                          .includes(searchTerm.toLowerCase())
                      ) {
                        return val
                      }
                    })
                    .map((item, index) => {
                      return (
                        <tr key={item.id}>
                          <td>{index + 1}</td>
                          <td>{item.name}</td>
                          <td>
                            <div className="d-flex align-items-center">
                              <img
                                className="img-fluid rounded"
                                src={item.imageUrl}
                                style={{ maxWidth: 60 }}
                                alt="imageAlternative"
                              />
                            </div>
                          </td>
                          <td>{item.desc}</td>
                          <td>{new Date(item.createdDate).toLocaleDateString()}</td>
                          <td>{new Date(item.updatedDate).toLocaleDateString()}</td>

                          <td className="text-right">
                            <button
                              className="btn btn-tone btn-primary m-r-5"
                              onClick={() => handleViewCategory(item.id)}
                            >
                              <i className="anticon anticon-eye"></i>
                            </button>
                            <button className="btn btn-tone btn-secondary m-r-5"
                            onClick={() => handleEditCategory(item)}>
                              <i className="anticon anticon-edit" />
                            </button>
                            <button
                              className="btn btn-tone btn-success m-r-5"
                              onClick={() => handleDeleteCategory(item)}
                            >
                              <i className="anticon anticon-delete" />
                            </button>
                          </td>
                        </tr>
                      )
                    })}
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
