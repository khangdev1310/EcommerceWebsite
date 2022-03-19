import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import userManager from '../../untils/userManager';

export default function Dashboard() {

  return (
    <div className="app">
      <div className="layout">
        {/* Header START */}
        <div className="header">
          <div className="logo logo-dark">
            <Link to="/admin/dashboard">
              <img src="/images/logo/logo.png" alt="Logo" />
              <img
                className="logo-fold"
                src="/images/logo/logo-fold.png"
                alt="Logo"
              />
            </Link>
          </div>
          <div className="logo logo-white">
            <Link to="/admin/dashboard">
              <img src="/images/logo/logo-white.png" alt="Logo" />
              <img
                className="logo-fold"
                src="/images/logo/logo-fold-white.png"
                alt="Logo"
              />
            </Link>
          </div>
          <div className="nav-wrap">
            <ul className="nav-left">
              <li className="desktop-toggle">
                <a href="javascript:void(0);">
                  <i className="anticon" />
                </a>
              </li>
              <li className="mobile-toggle">
                <a href="javascript:void(0);">
                  <i className="anticon" />
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0);"
                  data-toggle="modal"
                  data-target="#search-drawer"
                >
                  <i className="anticon anticon-search" />
                </a>
              </li>
            </ul>
            <ul className="nav-right">
              <li className="dropdown dropdown-animated scale-left">
                <a href="javascript:void(0);" data-toggle="dropdown">
                  <i className="anticon anticon-bell notification-badge" />
                </a>
                <div className="dropdown-menu pop-notification">
                  <div className="p-v-15 p-h-25 border-bottom d-flex justify-content-between align-items-center">
                    <p className="text-dark font-weight-semibold m-b-0">
                      <i className="anticon anticon-bell" />
                      <span className="m-l-10">Notification</span>
                    </p>
                    <a
                      className="btn-sm btn-default btn"
                      href="javascript:void(0);"
                    >
                      <small>View All</small>
                    </a>
                  </div>
                  <div className="relative">
                    <div
                      className="overflow-y-auto relative scrollable"
                      style={{ maxHeight: 300 }}
                    >
                      <a
                        href="javascript:void(0);"
                        className="dropdown-item d-block p-15 border-bottom"
                      >
                        <div className="d-flex">
                          <div className="avatar avatar-blue avatar-icon">
                            <i className="anticon anticon-mail" />
                          </div>
                          <div className="m-l-15">
                            <p className="m-b-0 text-dark">
                              You received a new message
                            </p>
                            <p className="m-b-0">
                              <small>8 min ago</small>
                            </p>
                          </div>
                        </div>
                      </a>
                      <a
                        href="javascript:void(0);"
                        className="dropdown-item d-block p-15 border-bottom"
                      >
                        <div className="d-flex">
                          <div className="avatar avatar-cyan avatar-icon">
                            <i className="anticon anticon-user-add" />
                          </div>
                          <div className="m-l-15">
                            <p className="m-b-0 text-dark">
                              New user registered
                            </p>
                            <p className="m-b-0">
                              <small>7 hours ago</small>
                            </p>
                          </div>
                        </div>
                      </a>
                      <a
                        href="javascript:void(0);"
                        className="dropdown-item d-block p-15 border-bottom"
                      >
                        <div className="d-flex">
                          <div className="avatar avatar-red avatar-icon">
                            <i className="anticon anticon-user-add" />
                          </div>
                          <div className="m-l-15">
                            <p className="m-b-0 text-dark">System Alert</p>
                            <p className="m-b-0">
                              <small>8 hours ago</small>
                            </p>
                          </div>
                        </div>
                      </a>
                      <a
                        href="javascript:void(0);"
                        className="dropdown-item d-block p-15 "
                      >
                        <div className="d-flex">
                          <div className="avatar avatar-gold avatar-icon">
                            <i className="anticon anticon-user-add" />
                          </div>
                          <div className="m-l-15">
                            <p className="m-b-0 text-dark">
                              You have a new update
                            </p>
                            <p className="m-b-0">
                              <small>2 days ago</small>
                            </p>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </li>
              <li className="dropdown dropdown-animated scale-left">
                <div className="pointer" data-toggle="dropdown">
                  <div className="avatar avatar-image  m-h-10 m-r-15">
                    <img src="/images/avatars/thumb-3.jpg" alt />
                  </div>
                </div>
                <div className="p-b-15 p-t-20 dropdown-menu pop-profile">
                  <div className="p-h-20 p-b-15 m-b-10 border-bottom">
                    <div className="d-flex m-r-50">
                      <div className="avatar avatar-lg avatar-image">
                        <img src="/images/avatars/thumb-3.jpg" alt />
                      </div>
                      <div className="m-l-10">
                        <p className="m-b-0 text-dark font-weight-semibold">
                          Marshall Nichols
                        </p>
                        <p className="m-b-0 opacity-07">UI/UX Desinger</p>
                      </div>
                    </div>
                  </div>
                  <a
                    href="javascript:void(0);"
                    className="dropdown-item d-block p-h-15 p-v-10"
                  >
                    <div className="d-flex align-items-center justify-content-between">
                      <div>
                        <i className="anticon opacity-04 font-size-16 anticon-user" />
                        <span className="m-l-10">Edit Profile</span>
                      </div>
                      <i className="anticon font-size-10 anticon-right" />
                    </div>
                  </a>
                  <a
                    href="javascript:void(0);"
                    className="dropdown-item d-block p-h-15 p-v-10"
                  >
                    <div className="d-flex align-items-center justify-content-between">
                      <div>
                        <i className="anticon opacity-04 font-size-16 anticon-lock" />
                        <span className="m-l-10">Account Setting</span>
                      </div>
                      <i className="anticon font-size-10 anticon-right" />
                    </div>
                  </a>
                  <a
                    href="javascript:void(0);"
                    className="dropdown-item d-block p-h-15 p-v-10"
                  >
                    <div className="d-flex align-items-center justify-content-between">
                      <div>
                        <i className="anticon opacity-04 font-size-16 anticon-project" />
                        <span className="m-l-10">Projects</span>
                      </div>
                      <i className="anticon font-size-10 anticon-right" />
                    </div>
                  </a>
                  <a
                    href="javascript:void(0);"
                    className="dropdown-item d-block p-h-15 p-v-10"
                  >
                    <div className="d-flex align-items-center justify-content-between">
                      <div onClick={ async () => {
                        
                          const user = await userManager.getUser();
                          localStorage.removeItem("user");
                          userManager.signoutRedirect({id_token_hint: user.id_token})
                          userManager.removeUser();
                        }}>
                        <i className="anticon opacity-04 font-size-16 anticon-logout" />
                        <span className="m-l-10" >Logout</span>
                      </div>
                    </div>
                  </a>
                </div>
              </li>
              <li>
                <a
                  href="javascript:void(0);"
                  data-toggle="modal"
                  data-target="#quick-view"
                >
                  <i className="anticon anticon-appstore" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* Header END */}
        {/* Side Nav START */}
        <div className="side-nav">
          <div className="side-nav-inner">
            <ul className="side-nav-menu scrollable">
              <li className="nav-item">
                <Link className="dropdown-toggle" to="/admin/dashboard">
                  <span className="icon-holder">
                    <i className="anticon anticon-dashboard" />
                  </span>
                  <span className="title">Dashboard</span>
                </Link>
              </li>

              {/* Quản lý sản phẩm START */}
              <li className="nav-item dropdown">
                <a className="dropdown-toggle" href="javascript:void(0);">
                  <span className="icon-holder">
                    <i className="anticon anticon-appstore" />
                  </span>
                  <span className="title">Quản lý sản phẩm</span>
                  <span className="arrow">
                    <i className="arrow-icon" />
                  </span>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/admin/category">Danh mục sản phẩm</Link>
                  </li>
                  <li>
                    <Link to="/admin/product">Danh sách sản phẩm</Link>
                  </li>

                </ul>
              </li>
              {/* Quản lý sản phẩm END */}
              
            </ul>
          </div>
        </div>
        {/* Side Nav END */}
        {/* Page Container START */}
        <div className="page-container">
          {/* Content Wrapper START */}


          <Outlet/>

          
          {/* Content Wrapper END */}
          {/* Footer START */}
          <footer className="footer">
            <div className="footer-content">
              <p className="m-b-0">
                Copyright © 2019 Theme_Nate. All rights reserved.
              </p>
              <span>
                <a href className="text-gray m-r-15">
                  Term &amp; Conditions
                </a>
                <a href className="text-gray">
                  Privacy &amp; Policy
                </a>
              </span>
            </div>
          </footer>
          {/* Footer END */}
        </div>
        {/* Page Container END */}
        {/* Search Start*/}
        <div className="modal modal-left fade search" id="search-drawer">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header justify-content-between align-items-center">
                <h5 className="modal-title">Search</h5>
                <button type="button" className="close" data-dismiss="modal">
                  <i className="anticon anticon-close" />
                </button>
              </div>
              <div className="modal-body scrollable">
                <div className="input-affix">
                  <i className="prefix-icon anticon anticon-search" />
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search"
                  />
                </div>
                <div className="m-t-30">
                  <h5 className="m-b-20">Files</h5>
                  <div className="d-flex m-b-30">
                    <div className="avatar avatar-cyan avatar-icon">
                      <i className="anticon anticon-file-excel" />
                    </div>
                    <div className="m-l-15">
                      <a
                        href="javascript:void(0);"
                        className="text-dark m-b-0 font-weight-semibold"
                      >
                        Quater Report.exl
                      </a>
                      <p className="m-b-0 text-muted font-size-13">
                        by Finance
                      </p>
                    </div>
                  </div>
                  <div className="d-flex m-b-30">
                    <div className="avatar avatar-blue avatar-icon">
                      <i className="anticon anticon-file-word" />
                    </div>
                    <div className="m-l-15">
                      <a
                        href="javascript:void(0);"
                        className="text-dark m-b-0 font-weight-semibold"
                      >
                        Documentaion.docx
                      </a>
                      <p className="m-b-0 text-muted font-size-13">
                        by Developers
                      </p>
                    </div>
                  </div>
                  <div className="d-flex m-b-30">
                    <div className="avatar avatar-purple avatar-icon">
                      <i className="anticon anticon-file-text" />
                    </div>
                    <div className="m-l-15">
                      <a
                        href="javascript:void(0);"
                        className="text-dark m-b-0 font-weight-semibold"
                      >
                        Recipe.txt
                      </a>
                      <p className="m-b-0 text-muted font-size-13">
                        by The Chef
                      </p>
                    </div>
                  </div>
                  <div className="d-flex m-b-30">
                    <div className="avatar avatar-red avatar-icon">
                      <i className="anticon anticon-file-pdf" />
                    </div>
                    <div className="m-l-15">
                      <a
                        href="javascript:void(0);"
                        className="text-dark m-b-0 font-weight-semibold"
                      >
                        Project Requirement.pdf
                      </a>
                      <p className="m-b-0 text-muted font-size-13">
                        by Project Manager
                      </p>
                    </div>
                  </div>
                </div>
                <div className="m-t-30">
                  <h5 className="m-b-20">Members</h5>
                  <div className="d-flex m-b-30">
                    <div className="avatar avatar-image">
                      <img src="/images/avatars/thumb-1.jpg" alt />
                    </div>
                    <div className="m-l-15">
                      <a
                        href="javascript:void(0);"
                        className="text-dark m-b-0 font-weight-semibold"
                      >
                        Erin Gonzales
                      </a>
                      <p className="m-b-0 text-muted font-size-13">
                        UI/UX Designer
                      </p>
                    </div>
                  </div>
                  <div className="d-flex m-b-30">
                    <div className="avatar avatar-image">
                      <img src="/images/avatars/thumb-2.jpg" alt />
                    </div>
                    <div className="m-l-15">
                      <a
                        href="javascript:void(0);"
                        className="text-dark m-b-0 font-weight-semibold"
                      >
                        Darryl Day
                      </a>
                      <p className="m-b-0 text-muted font-size-13">
                        Software Engineer
                      </p>
                    </div>
                  </div>
                  <div className="d-flex m-b-30">
                    <div className="avatar avatar-image">
                      <img src="/images/avatars/thumb-3.jpg" alt />
                    </div>
                    <div className="m-l-15">
                      <a
                        href="javascript:void(0);"
                        className="text-dark m-b-0 font-weight-semibold"
                      >
                        Marshall Nichols
                      </a>
                      <p className="m-b-0 text-muted font-size-13">
                        Data Analyst
                      </p>
                    </div>
                  </div>
                </div>
                <div className="m-t-30">
                  <h5 className="m-b-20">News</h5>
                  <div className="d-flex m-b-30">
                    <div className="avatar avatar-image">
                      <img src="/images/others/img-1.jpg" alt />
                    </div>
                    <div className="m-l-15">
                      <a
                        href="javascript:void(0);"
                        className="text-dark m-b-0 font-weight-semibold"
                      >
                        5 Best Handwriting Fonts
                      </a>
                      <p className="m-b-0 text-muted font-size-13">
                        <i className="anticon anticon-clock-circle" />
                        <span className="m-l-5">25 Nov 2018</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Search End*/}
        {/* Quick View START */}
        <div className="modal modal-right fade quick-view" id="quick-view">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header justify-content-between align-items-center">
                <h5 className="modal-title">Theme Config</h5>
              </div>
              <div className="modal-body scrollable">
                <div className="m-b-30">
                  <h5 className="m-b-0">Header Color</h5>
                  <p>Config header background color</p>
                  <div className="theme-configurator d-flex m-t-10">
                    <div className="radio">
                      <input
                        id="header-default"
                        name="header-theme"
                        type="radio"
                        defaultChecked
                        defaultValue="default"
                      />
                      <label htmlFor="header-default" />
                    </div>
                    <div className="radio">
                      <input
                        id="header-primary"
                        name="header-theme"
                        type="radio"
                        defaultValue="primary"
                      />
                      <label htmlFor="header-primary" />
                    </div>
                    <div className="radio">
                      <input
                        id="header-success"
                        name="header-theme"
                        type="radio"
                        defaultValue="success"
                      />
                      <label htmlFor="header-success" />
                    </div>
                    <div className="radio">
                      <input
                        id="header-secondary"
                        name="header-theme"
                        type="radio"
                        defaultValue="secondary"
                      />
                      <label htmlFor="header-secondary" />
                    </div>
                    <div className="radio">
                      <input
                        id="header-danger"
                        name="header-theme"
                        type="radio"
                        defaultValue="danger"
                      />
                      <label htmlFor="header-danger" />
                    </div>
                  </div>
                </div>
                <hr />
                <div>
                  <h5 className="m-b-0">Side Nav Dark</h5>
                  <p>Change Side Nav to dark</p>
                  <div className="switch d-inline">
                    <input
                      type="checkbox"
                      name="side-nav-theme-toogle"
                      id="side-nav-theme-toogle"
                    />
                    <label htmlFor="side-nav-theme-toogle" />
                  </div>
                </div>
                <hr />
                <div>
                  <h5 className="m-b-0">Folded Menu</h5>
                  <p>Toggle Folded Menu</p>
                  <div className="switch d-inline">
                    <input
                      type="checkbox"
                      name="side-nav-fold-toogle"
                      id="side-nav-fold-toogle"
                    />
                    <label htmlFor="side-nav-fold-toogle" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Quick View END */}
      </div>
      
    </div>
  )
}
