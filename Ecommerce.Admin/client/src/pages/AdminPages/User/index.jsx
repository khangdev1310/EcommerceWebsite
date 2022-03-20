import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {useDispatch, useSelector } from 'react-redux';
import { getAllUsersAsync } from '../../../features/User/userSlice';

export default function User() {
    const navigate = useNavigate()
    const {users} = useSelector(state => state.user);
    const dispatch = useDispatch()
    console.log(users);

    useEffect(() => {
        dispatch(getAllUsersAsync({ currentPage: 1, limit: 10 }))
    },[])

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
                          placeholder="tìm kiếm user"
                        />
                      </div>
                    </div>
                  </div>
                </div>
    
              </div>
    
              <div className="table-responsive">
                <table className="table table-hover e-commerce-table">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Email</th>
                      <th>Phone Number</th>
                      <th>Street</th>
                      <th>Province</th>
                      <th>Roles</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users && users.map(((item,index) => (
                      <tr key={item.id}>
                      <td>#{index + 1}</td>
                      <td>{item.firstName}</td>
                      <td>{item.lastName}</td>
                      <td>{item.email}</td>
                      <td>{item.phoneNumber}</td>
                      <td>{item.line1}</td>
                      <td>{item.province}</td>
                      <td>{item.roles["$values"][0]}</td>    
                    </tr>
                    )))}
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
