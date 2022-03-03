import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { formatDateTime } from '../../../untils/formatDateTime'
export default function ViewCategory() {
  const navigate = useNavigate()
  const { state } = useLocation()

  return (
    <div className="main-content">
      <div className="page-header no-gutters has-tab">
        <div className="d-md-flex m-b-15 align-items-center justify-content-between">
          <div className="media align-items-center m-b-15">
            <div
              className="avatar avatar-image rounded"
              style={{ height: 70, width: 70 }}
            >
              <img src={state.imageUrl} alt />
            </div>
            <div className="m-l-15">
              <h4 className="m-b-0">{state.name}</h4>
              <p className="text-muted m-b-0">Code: {state.id.slice(0, 7)}</p>
            </div>
          </div>
          <div className="m-b-15">
            <button
              className="btn btn-primary"
              onClick={() => {
                navigate('/admin/category')
              }}
            >
              <span>Trở về danh mục sản phẩm</span>
            </button>
          </div>
        </div>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a
              className="nav-link active"
              data-toggle="tab"
              href="#product-overview"
            >
              Overview
            </a>
          </li>
        </ul>
      </div>
      <div className="container-fluid">
        <div className="tab-content m-t-15">
          <div className="tab-pane fade show active" id="product-overview">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Thông tin chi tiết</h4>
                <div className="table-responsive">
                  <table className="product-info-table m-t-20">
                    <tbody>
                      <tr>
                        <td>Tên:</td>
                        <td className="text-dark font-weight-semibold">
                          {state.name}
                        </td>
                      </tr>
                      <tr>
                        <td>Mô tả ngắn:</td>
                        <td>{state.desc}</td>
                      </tr>
                      <tr>
                        <td>Ngày tạo:</td>
                        <td>{formatDateTime(state.createdDate)}</td>
                      </tr>
                      <tr>
                        <td>Ngày cập nhật:</td>
                        <td>{formatDateTime(state.updatedDate)}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
