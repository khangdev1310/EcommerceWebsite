import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Home() {
  return (
    <div className="main-content">
      <div className="row">
        <div className="col-md-6 col-lg-3">
          <div className="card">
            <div className="card-body">
              <div className="media align-items-center">
                <div className="avatar avatar-icon avatar-lg avatar-blue">
                  <i className="anticon anticon-dollar" />
                </div>
                <div className="m-l-15">
                  <h2 className="m-b-0">$23,523</h2>
                  <p className="m-b-0 text-muted">Profit</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="card">
            <div className="card-body">
              <div className="media align-items-center">
                <div className="avatar avatar-icon avatar-lg avatar-cyan">
                  <i className="anticon anticon-line-chart" />
                </div>
                <div className="m-l-15">
                  <h2 className="m-b-0">+ 17.21%</h2>
                  <p className="m-b-0 text-muted">Growth</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="card">
            <div className="card-body">
              <div className="media align-items-center">
                <div className="avatar avatar-icon avatar-lg avatar-gold">
                  <i className="anticon anticon-profile" />
                </div>
                <div className="m-l-15">
                  <h2 className="m-b-0">3,685</h2>
                  <p className="m-b-0 text-muted">Orders</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="card">
            <div className="card-body">
              <div className="media align-items-center">
                <div className="avatar avatar-icon avatar-lg avatar-purple">
                  <i className="anticon anticon-user" />
                </div>
                <div className="m-l-15">
                  <h2 className="m-b-0">1,832</h2>
                  <p className="m-b-0 text-muted">Customers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 col-lg-8">
          <div className="card">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <h5>Total Revenue</h5>
                <div>
                  <div className="btn-group">
                    <button className="btn btn-default active">
                      <span>Month</span>
                    </button>
                    <button className="btn btn-default">
                      <span>Year</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="m-t-50" style={{ height: 330 }}>
                <canvas className="chart" id="revenue-chart" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-12 col-lg-4">
          <div className="card">
            <div className="card-body">
              <h5 className="m-b-0">Customers</h5>
              <div className="m-v-60 text-center" style={{ height: 200 }}>
                <canvas className="chart" id="customers-chart" />
              </div>
              <div className="row border-top p-t-25">
                <div className="col-4">
                  <div className="d-flex justify-content-center">
                    <div className="media align-items-center">
                      <span className="badge badge-success badge-dot m-r-10" />
                      <div className="m-l-5">
                        <h4 className="m-b-0">350</h4>
                        <p className="m-b-0 muted">New</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="d-flex justify-content-center">
                    <div className="media align-items-center">
                      <span className="badge badge-secondary badge-dot m-r-10" />
                      <div className="m-l-5">
                        <h4 className="m-b-0">450</h4>
                        <p className="m-b-0 muted">Returning</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="d-flex justify-content-center">
                    <div className="media align-items-center">
                      <span className="badge badge-warning badge-dot m-r-10" />
                      <div className="m-l-5">
                        <h4 className="m-b-0">100</h4>
                        <p className="m-b-0 muted">Others</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 col-lg-4">
          <div className="card">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h2 className="m-b-0">$17,267</h2>
                  <p className="m-b-0 text-muted">Avg.Profit</p>
                </div>
                <div>
                  <span className="badge badge-pill badge-cyan font-size-12">
                    <span className="font-weight-semibold m-l-5">+5.7%</span>
                  </span>
                </div>
              </div>
              <div className="m-t-50" style={{ height: 375 }}>
                <canvas className="chart" id="avg-profit-chart" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-12 col-lg-8">
          <div className="card">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <h5>Top Product</h5>
                <div>
                  <a
                    href="javascript:void(0);"
                    className="btn btn-sm btn-default"
                  >
                    View All
                  </a>
                </div>
              </div>
              <div className="m-t-30">
                <div className="table-responsive">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th>Sales</th>
                        <th>Earning</th>
                        <th style={{ maxWidth: 70 }}>Stock Left</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="media align-items-center">
                            <div className="avatar avatar-image rounded">
                              <img src="/images/others/thumb-9.jpg" alt />
                            </div>
                            <div className="m-l-10">
                              <span>Gray Sofa</span>
                            </div>
                          </div>
                        </td>
                        <td>81</td>
                        <td>$1,912.00</td>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="progress progress-sm w-100 m-b-0">
                              <div
                                className="progress-bar bg-success"
                                style={{ width: '82%' }}
                              />
                            </div>
                            <div className="m-l-10">82</div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="media align-items-center">
                            <div className="avatar avatar-image rounded">
                              <img
                                src="/images/others/thumb-10.jpg"
                                alt
                              />
                            </div>
                            <div className="m-l-10">
                              <span>Gray Sofa</span>
                            </div>
                          </div>
                        </td>
                        <td>26</td>
                        <td>$1,377.00</td>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="progress progress-sm w-100 m-b-0">
                              <div
                                className="progress-bar bg-success"
                                style={{ width: '61%' }}
                              />
                            </div>
                            <div className="m-l-10">61</div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="media align-items-center">
                            <div className="avatar avatar-image rounded">
                              <img
                                src="/images/others/thumb-11.jpg"
                                alt
                              />
                            </div>
                            <div className="m-l-10">
                              <span>Wooden Rhino</span>
                            </div>
                          </div>
                        </td>
                        <td>71</td>
                        <td>$9,212.00</td>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="progress progress-sm w-100 m-b-0">
                              <div
                                className="progress-bar bg-danger"
                                style={{ width: '23%' }}
                              />
                            </div>
                            <div className="m-l-10">23</div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="media align-items-center">
                            <div className="avatar avatar-image rounded">
                              <img
                                src="/images/others/thumb-12.jpg"
                                alt
                              />
                            </div>
                            <div className="m-l-10">
                              <span>Red Chair</span>
                            </div>
                          </div>
                        </td>
                        <td>79</td>
                        <td>$1,298.00</td>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="progress progress-sm w-100 m-b-0">
                              <div
                                className="progress-bar bg-warning"
                                style={{ width: '54%' }}
                              />
                            </div>
                            <div className="m-l-10">54</div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="media align-items-center">
                            <div className="avatar avatar-image rounded">
                              <img
                                src="/images/others/thumb-13.jpg"
                                alt
                              />
                            </div>
                            <div className="m-l-10">
                              <span>Wristband</span>
                            </div>
                          </div>
                        </td>
                        <td>60</td>
                        <td>$7,376.00</td>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="progress progress-sm w-100 m-b-0">
                              <div
                                className="progress-bar bg-success"
                                style={{ width: '76%' }}
                              />
                            </div>
                            <div className="m-l-10">76</div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 col-lg-4">
          <div className="card">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="m-b-0">Latest Upload</h5>
                <div>
                  <a
                    href="javascript:void(0);"
                    className="btn btn-sm btn-default"
                  >
                    View All
                  </a>
                </div>
              </div>
              <div className="m-t-30">
                <div className="m-b-25">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="media align-items-center">
                      <div className="font-size-35">
                        <i className="anticon anticon-file-word text-primary" />
                      </div>
                      <div className="m-l-15">
                        <h6 className="m-b-0">
                          <a className="text-dark" href="javascript:void(0);">
                            Documentation.doc
                          </a>
                        </h6>
                        <p className="text-muted m-b-0">1.2MB</p>
                      </div>
                    </div>
                    <div className="dropdown dropdown-animated scale-left">
                      <a
                        className="text-gray font-size-18"
                        href="javascript:void(0);"
                        data-toggle="dropdown"
                      >
                        <i className="anticon anticon-ellipsis" />
                      </a>
                      <div className="dropdown-menu">
                        <button className="dropdown-item" type="button">
                          <i className="anticon anticon-eye" />
                          <span className="m-l-10">View</span>
                        </button>
                        <button className="dropdown-item" type="button">
                          <i className="anticon anticon-download" />
                          <span className="m-l-10">Download</span>
                        </button>
                        <button className="dropdown-item" type="button">
                          <i className="anticon anticon-delete" />
                          <span className="m-l-10">Remove</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="m-b-25">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="media align-items-center">
                      <div className="font-size-35">
                        <i className="anticon anticon-file-excel text-success" />
                      </div>
                      <div className="m-l-15">
                        <h6 className="m-b-0">
                          <a className="text-dark" href="javascript:void(0);">
                            Expensess.xls
                          </a>
                        </h6>
                        <p className="text-muted m-b-0">518KB</p>
                      </div>
                    </div>
                    <div className="dropdown dropdown-animated scale-left">
                      <a
                        className="text-gray font-size-18"
                        href="javascript:void(0);"
                        data-toggle="dropdown"
                      >
                        <i className="anticon anticon-ellipsis" />
                      </a>
                      <div className="dropdown-menu">
                        <button className="dropdown-item" type="button">
                          <i className="anticon anticon-eye" />
                          <span className="m-l-10">View</span>
                        </button>
                        <button className="dropdown-item" type="button">
                          <i className="anticon anticon-download" />
                          <span className="m-l-10">Download</span>
                        </button>
                        <button className="dropdown-item" type="button">
                          <i className="anticon anticon-delete" />
                          <span className="m-l-10">Remove</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="m-b-25">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="media align-items-center">
                      <div className="font-size-35">
                        <i className="anticon anticon-file-text text-secondary" />
                      </div>
                      <div className="m-l-15">
                        <h6 className="m-b-0">
                          <a className="text-dark" href="javascript:void(0);">
                            Receipt.txt
                          </a>
                        </h6>
                        <p className="text-muted m-b-0">355KB</p>
                      </div>
                    </div>
                    <div className="dropdown dropdown-animated scale-left">
                      <a
                        className="text-gray font-size-18"
                        href="javascript:void(0);"
                        data-toggle="dropdown"
                      >
                        <i className="anticon anticon-ellipsis" />
                      </a>
                      <div className="dropdown-menu">
                        <button className="dropdown-item" type="button">
                          <i className="anticon anticon-eye" />
                          <span className="m-l-10">View</span>
                        </button>
                        <button className="dropdown-item" type="button">
                          <i className="anticon anticon-download" />
                          <span className="m-l-10">Download</span>
                        </button>
                        <button className="dropdown-item" type="button">
                          <i className="anticon anticon-delete" />
                          <span className="m-l-10">Remove</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="m-b-25">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="media align-items-center">
                      <div className="font-size-35">
                        <i className="anticon anticon-file-word text-primary" />
                      </div>
                      <div className="m-l-15">
                        <h6 className="m-b-0">
                          <a className="text-dark" href="javascript:void(0);">
                            Project Requirement.doc
                          </a>
                        </h6>
                        <p className="text-muted m-b-0">1.6MB</p>
                      </div>
                    </div>
                    <div className="dropdown dropdown-animated scale-left">
                      <a
                        className="text-gray font-size-18"
                        href="javascript:void(0);"
                        data-toggle="dropdown"
                      >
                        <i className="anticon anticon-ellipsis" />
                      </a>
                      <div className="dropdown-menu">
                        <button className="dropdown-item" type="button">
                          <i className="anticon anticon-eye" />
                          <span className="m-l-10">View</span>
                        </button>
                        <button className="dropdown-item" type="button">
                          <i className="anticon anticon-download" />
                          <span className="m-l-10">Download</span>
                        </button>
                        <button className="dropdown-item" type="button">
                          <i className="anticon anticon-delete" />
                          <span className="m-l-10">Remove</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="m-b-25">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="media align-items-center">
                      <div className="font-size-35">
                        <i className="anticon anticon-file-pdf text-danger" />
                      </div>
                      <div className="m-l-15">
                        <h6 className="m-b-0">
                          <a className="text-dark" href="javascript:void(0);">
                            App Flow.pdf
                          </a>
                        </h6>
                        <p className="text-muted m-b-0">19.8MB</p>
                      </div>
                    </div>
                    <div className="dropdown dropdown-animated scale-left">
                      <a
                        className="text-gray font-size-18"
                        href="javascript:void(0);"
                        data-toggle="dropdown"
                      >
                        <i className="anticon anticon-ellipsis" />
                      </a>
                      <div className="dropdown-menu">
                        <button className="dropdown-item" type="button">
                          <i className="anticon anticon-eye" />
                          <span className="m-l-10">View</span>
                        </button>
                        <button className="dropdown-item" type="button">
                          <i className="anticon anticon-download" />
                          <span className="m-l-10">Download</span>
                        </button>
                        <button className="dropdown-item" type="button">
                          <i className="anticon anticon-delete" />
                          <span className="m-l-10">Remove</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="media align-items-center">
                      <div className="font-size-35">
                        <i className="anticon anticon-file-ppt text-warning" />
                      </div>
                      <div className="m-l-15">
                        <h6 className="m-b-0">
                          <a className="text-dark" href="javascript:void(0);">
                            Presentation.ppt
                          </a>
                        </h6>
                        <p className="text-muted m-b-0">2.7MB</p>
                      </div>
                    </div>
                    <div className="dropdown dropdown-animated scale-left">
                      <a
                        className="text-gray font-size-18"
                        href="javascript:void(0);"
                        data-toggle="dropdown"
                      >
                        <i className="anticon anticon-ellipsis" />
                      </a>
                      <div className="dropdown-menu">
                        <button className="dropdown-item" type="button">
                          <i className="anticon anticon-eye" />
                          <span className="m-l-10">View</span>
                        </button>
                        <button className="dropdown-item" type="button">
                          <i className="anticon anticon-download" />
                          <span className="m-l-10">Download</span>
                        </button>
                        <button className="dropdown-item" type="button">
                          <i className="anticon anticon-delete" />
                          <span className="m-l-10">Remove</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-12 col-lg-4">
          <div className="card">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="m-b-0">Latest Upload</h5>
                <div>
                  <a
                    href="javascript:void(0);"
                    className="btn btn-sm btn-default"
                  >
                    View All
                  </a>
                </div>
              </div>
              <div className="m-t-30">
                <div
                  className="overflow-y-auto scrollable relative"
                  style={{ height: 437 }}
                >
                  <ul className="timeline p-t-10 p-l-10">
                    <li className="timeline-item">
                      <div className="timeline-item-head">
                        <div className="avatar avatar-text avatar-sm bg-primary">
                          <span>V</span>
                        </div>
                      </div>
                      <div className="timeline-item-content">
                        <div className="m-l-10">
                          <h5 className="m-b-5">Virgil Gonzales</h5>
                          <p className="m-b-0">
                            <span className="font-weight-semibold">
                              Complete task{' '}
                            </span>
                            <span className="m-l-5"> Prototype Design</span>
                          </p>
                          <span className="text-muted font-size-13">
                            <i className="anticon anticon-clock-circle" />
                            <span className="m-l-5">10:44 PM</span>
                          </span>
                        </div>
                      </div>
                    </li>
                    <li className="timeline-item">
                      <div className="timeline-item-head">
                        <div className="avatar avatar-text avatar-sm bg-success">
                          <span>L</span>
                        </div>
                      </div>
                      <div className="timeline-item-content">
                        <div className="m-l-10">
                          <h5 className="m-b-5">Lilian Stone</h5>
                          <p className="m-b-0">
                            <span className="font-weight-semibold">
                              Attached file{' '}
                            </span>
                            <span className="m-l-5"> Mockup Zip</span>
                          </p>
                          <span className="text-muted font-size-13">
                            <i className="anticon anticon-clock-circle" />
                            <span className="m-l-5">8:34 PM</span>
                          </span>
                        </div>
                      </div>
                    </li>
                    <li className="timeline-item">
                      <div className="timeline-item-head">
                        <div className="avatar avatar-text avatar-sm bg-warning">
                          <span>E</span>
                        </div>
                      </div>
                      <div className="timeline-item-content">
                        <div className="m-l-10">
                          <h5 className="m-b-5">Erin Gonzales</h5>
                          <p className="m-b-0">
                            <span className="font-weight-semibold">
                              Commented
                            </span>
                            <span className="m-l-5">
                              {' '}
                              'This is not our work!'
                            </span>
                          </p>
                          <span className="text-muted font-size-13">
                            <i className="anticon anticon-clock-circle" />
                            <span className="m-l-5">8:34 PM</span>
                          </span>
                        </div>
                      </div>
                    </li>
                    <li className="timeline-item">
                      <div className="timeline-item-head">
                        <div className="avatar avatar-text avatar-sm bg-primary">
                          <span>R</span>
                        </div>
                      </div>
                      <div className="timeline-item-content">
                        <div className="m-l-10">
                          <h5 className="m-b-5">Riley Newman</h5>
                          <p className="m-b-0">
                            <span className="font-weight-semibold">
                              Commented
                            </span>
                            <span className="m-l-5">
                              {' '}
                              'Hi, please done this before tommorow'
                            </span>
                          </p>
                          <span className="text-muted font-size-13">
                            <i className="anticon anticon-clock-circle" />
                            <span className="m-l-5">8:34 PM</span>
                          </span>
                        </div>
                      </div>
                    </li>
                    <li className="timeline-item">
                      <div className="timeline-item-head">
                        <div className="avatar avatar-text avatar-sm bg-danger">
                          <span>P</span>
                        </div>
                      </div>
                      <div className="timeline-item-content">
                        <div className="m-l-10">
                          <h5 className="m-b-5">Pamela Wanda</h5>
                          <p className="m-b-0">
                            <span className="font-weight-semibold">
                              Removed
                            </span>
                            <span className="m-l-5"> a file</span>
                          </p>
                          <span className="text-muted font-size-13">
                            <i className="anticon anticon-clock-circle" />
                            <span className="m-l-5">8:34 PM</span>
                          </span>
                        </div>
                      </div>
                    </li>
                    <li className="timeline-item">
                      <div className="timeline-item-head">
                        <div className="avatar avatar-text avatar-sm bg-secondary">
                          <span>M</span>
                        </div>
                      </div>
                      <div className="timeline-item-content">
                        <div className="m-l-10">
                          <h5 className="m-b-5">Marshall Nichols</h5>
                          <p className="m-b-0">
                            <span className="font-weight-semibold">
                              Create{' '}
                            </span>
                            <span className="m-l-5"> this project</span>
                          </p>
                          <span className="text-muted font-size-13">
                            <i className="anticon anticon-clock-circle" />
                            <span className="m-l-5">5:21 PM</span>
                          </span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-12 col-lg-4">
          <div className="card">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="m-b-0">Task</h5>
                <div>
                  <a
                    href="javascript:void(0);"
                    className="btn btn-sm btn-default"
                  >
                    View All
                  </a>
                </div>
              </div>
            </div>
            <div className="m-t-10">
              <ul className="nav nav-tabs">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    data-toggle="tab"
                    href="#tab-today"
                  >
                    Today
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-toggle="tab" href="#tab-week">
                    Week
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-toggle="tab" href="#tab-month">
                    Month
                  </a>
                </li>
              </ul>
              <div className="tab-content m-t-15">
                <div
                  className="tab-pane card-body fade show active"
                  id="tab-today"
                >
                  <div className="m-b-15">
                    <div className="d-flex align-items-center">
                      <div className="checkbox">
                        <input id="task-today-1" type="checkbox" />
                        <label
                          htmlFor="task-today-1"
                          className="d-flex align-items-center"
                        >
                          <span className="inline-block m-l-10">
                            <span className="text-dark font-weight-semi-bold font-size-16">
                              Define users and workflow
                            </span>
                            <span className="m-b-0 text-muted font-size-13 d-block">
                              A cheeseburger is more than sandwich
                            </span>
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="m-b-15">
                    <div className="d-flex align-items-center">
                      <div className="checkbox">
                        <input
                          id="task-today-2"
                          type="checkbox"
                          defaultChecked
                        />
                        <label
                          htmlFor="task-today-2"
                          className="d-flex align-items-center"
                        >
                          <span className="inline-block m-l-10">
                            <span className="text-dark font-weight-semi-bold font-size-16">
                              Schedule jobs
                            </span>
                            <span className="m-b-0 text-muted font-size-13 d-block">
                              I'm gonna build me an airport
                            </span>
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="m-b-15">
                    <div className="d-flex align-items-center">
                      <div className="checkbox">
                        <input
                          id="task-today-3"
                          type="checkbox"
                          defaultChecked
                        />
                        <label
                          htmlFor="task-today-3"
                          className="d-flex align-items-center"
                        >
                          <span className="inline-block m-l-10">
                            <span className="text-dark font-weight-semi-bold font-size-16">
                              Extend the data model
                            </span>
                            <span className="m-b-0 text-muted font-size-13 d-block">
                              Let us wax poetic about cheeseburger
                            </span>
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="m-b-15">
                    <div className="d-flex align-items-center">
                      <div className="checkbox">
                        <input id="task-today-4" type="checkbox" />
                        <label
                          htmlFor="task-today-4"
                          className="d-flex align-items-center"
                        >
                          <span className="inline-block m-l-10">
                            <span className="text-dark font-weight-semi-bold font-size-16">
                              Change interface
                            </span>
                            <span className="m-b-0 text-muted font-size-13 d-block">
                              Efficiently unleash cross-media information
                            </span>
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="m-b-15">
                    <div className="d-flex align-items-center">
                      <div className="checkbox">
                        <input id="task-today-5" type="checkbox" />
                        <label
                          htmlFor="task-today-5"
                          className="d-flex align-items-center"
                        >
                          <span className="inline-block m-l-10">
                            <span className="text-dark font-weight-semi-bold font-size-16">
                              Create databases
                            </span>
                            <span className="m-b-0 text-muted font-size-13 d-block">
                              Here's the story of a man named Brady
                            </span>
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane card-body fade" id="tab-week">
                  <div className="m-b-15">
                    <div className="d-flex align-items-center">
                      <div className="checkbox">
                        <input id="task-week-1" type="checkbox" />
                        <label
                          htmlFor="task-week-1"
                          className="d-flex align-items-center"
                        >
                          <span className="inline-block m-l-10">
                            <span className="text-dark font-weight-semi-bold font-size-16">
                              Verify connectivity
                            </span>
                            <span className="m-b-0 text-muted font-size-13 d-block">
                              Bugger bag egg's old boy willy jolly
                            </span>
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="m-b-15">
                    <div className="d-flex align-items-center">
                      <div className="checkbox">
                        <input id="task-week-2" type="checkbox" />
                        <label
                          htmlFor="task-week-2"
                          className="d-flex align-items-center"
                        >
                          <span className="inline-block m-l-10">
                            <span className="text-dark font-weight-semi-bold font-size-16">
                              Order console machines
                            </span>
                            <span className="m-b-0 text-muted font-size-13 d-block">
                              Value proposition alpha crowdsource
                            </span>
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="m-b-15">
                    <div className="d-flex align-items-center">
                      <div className="checkbox">
                        <input
                          id="task-week-3"
                          type="checkbox"
                          defaultChecked
                        />
                        <label
                          htmlFor="task-week-3"
                          className="d-flex align-items-center"
                        >
                          <span className="inline-block m-l-10">
                            <span className="text-dark font-weight-semi-bold font-size-16">
                              Customize Template
                            </span>
                            <span className="m-b-0 text-muted font-size-13 d-block">
                              Do you see any Teletubbies in here
                            </span>
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="m-b-15">
                    <div className="d-flex align-items-center">
                      <div className="checkbox">
                        <input
                          id="task-week-4"
                          type="checkbox"
                          defaultChecked
                        />
                        <label
                          htmlFor="task-week-4"
                          className="d-flex align-items-center"
                        >
                          <span className="inline-block m-l-10">
                            <span className="text-dark font-weight-semi-bold font-size-16">
                              Batch schedule
                            </span>
                            <span className="m-b-0 text-muted font-size-13 d-block">
                              Trillion a very small stage in a vast
                            </span>
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="m-b-15">
                    <div className="d-flex align-items-center">
                      <div className="checkbox">
                        <input
                          id="task-week-5"
                          type="checkbox"
                          defaultChecked
                        />
                        <label
                          htmlFor="task-week-5"
                          className="d-flex align-items-center"
                        >
                          <span className="inline-block m-l-10">
                            <span className="text-dark font-weight-semi-bold font-size-16">
                              Prepare implementation
                            </span>
                            <span className="m-b-0 text-muted font-size-13 d-block">
                              Drop in axle roll-in rail slide
                            </span>
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane card-body fade" id="tab-month">
                  <div className="m-b-15">
                    <div className="d-flex align-items-center">
                      <div className="checkbox">
                        <input id="task-month-1" type="checkbox" />
                        <label
                          htmlFor="task-month-1"
                          className="d-flex align-items-center"
                        >
                          <span className="inline-block m-l-10">
                            <span className="text-dark font-weight-semi-bold font-size-16">
                              Create user groups
                            </span>
                            <span className="m-b-0 text-muted font-size-13 d-block">
                              Nipperkin run a rig ballast chase
                            </span>
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="m-b-15">
                    <div className="d-flex align-items-center">
                      <div className="checkbox">
                        <input
                          id="task-month-2"
                          type="checkbox"
                          defaultChecked
                        />
                        <label
                          htmlFor="task-month-2"
                          className="d-flex align-items-center"
                        >
                          <span className="inline-block m-l-10">
                            <span className="text-dark font-weight-semi-bold font-size-16">
                              Design Wireframe
                            </span>
                            <span className="m-b-0 text-muted font-size-13 d-block">
                              Value proposition alpha crowdsource
                            </span>
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="m-b-15">
                    <div className="d-flex align-items-center">
                      <div className="checkbox">
                        <input id="task-month-3" type="checkbox" />
                        <label
                          htmlFor="task-month-3"
                          className="d-flex align-items-center"
                        >
                          <span className="inline-block m-l-10">
                            <span className="text-dark font-weight-semi-bold font-size-16">
                              Customize Template
                            </span>
                            <span className="m-b-0 text-muted font-size-13 d-block">
                              I'll be sure to note that
                            </span>
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="m-b-15">
                    <div className="d-flex align-items-center">
                      <div className="checkbox">
                        <input id="task-month-4" type="checkbox" />
                        <label
                          htmlFor="task-month-4"
                          className="d-flex align-items-center"
                        >
                          <span className="inline-block m-l-10">
                            <span className="text-dark font-weight-semi-bold font-size-16">
                              Management meeting
                            </span>
                            <span className="m-b-0 text-muted font-size-13 d-block">
                              Hand-crafted exclusive finest
                            </span>
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="m-b-15">
                    <div className="d-flex align-items-center">
                      <div className="checkbox">
                        <input
                          id="task-month-5"
                          type="checkbox"
                          defaultChecked
                        />
                        <label
                          htmlFor="task-month-5"
                          className="d-flex align-items-center"
                        >
                          <span className="inline-block m-l-10">
                            <span className="text-dark font-weight-semi-bold font-size-16">
                              Extend data model
                            </span>
                            <span className="m-b-0 text-muted font-size-13 d-block">
                              European minnow priapumfish mosshead
                            </span>
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
