import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { formatDateTime } from '../../../untils/formatDateTime'

export default function ViewProduct() {
  const { state } = useLocation()
  const navigate = useNavigate()
  console.log(state)
  return (
    <div className="main-content">
      <div className="page-header no-gutters has-tab">
        <div className="d-md-flex m-b-15 align-items-center justify-content-between">
          <div className="media align-items-center m-b-15">
            <div
              className="avatar avatar-image rounded"
              style={{ height: 70, width: 70 }}
            >
              <img src={state.productImages[0].imageUrl} alt="temp" />
            </div>
            <div className="m-l-15">
              <h4 className="m-b-0">{state.name}</h4>
              <p className="text-muted m-b-0">#{state.id.slice(0, 7)}</p>
            </div>
          </div>
          <div className="m-b-15">
            <button
              className="btn btn-primary"
              onClick={() => {
                navigate('/admin/product')
              }}
            >
              <i className="anticon anticon-edit" />
              <span>Trở về danh sách sản phẩm</span>
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
              Chi tiết
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#product-images">
              Hình ảnh sản phẩm
            </a>
          </li>
        </ul>
      </div>
      <div className="container-fluid">
        <div className="tab-content m-t-15">
          <div className="tab-pane fade show active" id="product-overview">
            <div className="row">
              <div className="col-md-3">
                <div className="card">
                  <div className="card-body">
                    <div className="media align-items-center">
                      <i className="font-size-40 text-success anticon anticon-smile" />
                      <div className="m-l-15">
                        <p className="m-b-0 text-muted">10 ratings</p>
                        <div className="star-rating m-t-5">
                          <input
                            type="radio"
                            id="star3-5"
                            name="rating-3"
                            defaultValue={5}
                            defaultChecked
                            disabled
                          />
                          <label htmlFor="star3-5" title="5 star" />
                          <input
                            type="radio"
                            id="star3-4"
                            name="rating-3"
                            defaultValue={4}
                            disabled
                          />
                          <label htmlFor="star3-4" title="4 star" />
                          <input
                            type="radio"
                            id="star3-3"
                            name="rating-3"
                            defaultValue={3}
                            disabled
                          />
                          <label htmlFor="star3-3" title="3 star" />
                          <input
                            type="radio"
                            id="star3-2"
                            name="rating-3"
                            defaultValue={2}
                            disabled
                          />
                          <label htmlFor="star3-2" title="2 star" />
                          <input
                            type="radio"
                            id="star3-1"
                            name="rating-3"
                            defaultValue={1}
                            disabled
                          />
                          <label htmlFor="star3-1" title="1 star" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card">
                  <div className="card-body">
                    <div className="media align-items-center">
                      <i className="font-size-40 text-primary anticon anticon-shopping-cart" />
                      <div className="m-l-15">
                        <p className="m-b-0 text-muted">Sales</p>
                        <h3 className="m-b-0 ls-1">1,521</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card">
                  <div className="card-body">
                    <div className="media align-items-center">
                      <i className="font-size-40 text-primary anticon anticon-message" />
                      <div className="m-l-15">
                        <p className="m-b-0 text-muted">Reviews</p>
                        <h3 className="m-b-0 ls-1">27</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card">
                  <div className="card-body">
                    <div className="media align-items-center">
                      <i className="font-size-40 text-primary anticon anticon-stock" />
                      <div className="m-l-15">
                        <p className="m-b-0 text-muted">Số lượng</p>
                        <h3 className="m-b-0 ls-1">{state.quantity}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Thông tin cơ bản</h4>
                <div className="table-responsive">
                  <table className="product-info-table m-t-20">
                    <tbody>
                      <tr>
                        <td>Giá:</td>
                        <td className="text-dark font-weight-semibold">
                          ${state.price}
                        </td>
                      </tr>
                      <tr>
                        <td>Danh mục:</td>
                        <td>{state.category.name}</td>
                      </tr>
                      <tr>
                        <td>Trạng thái:</td>
                        <td>
                          <span className="badge badge-pill badge-cyan">
                            {state.status}
                          </span>
                        </td>
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

            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Miêu tả sản phẩm</h4>
              </div>
              <div className="card-body">
                <p>{state.desc}</p>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="product-images">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  {state.productImages &&
                    state.productImages.map((item, index) => (
                      <div className="col-md-3" key={index}>
                        <img src={item.imageUrl} alt="temp" />
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
