import React from 'react'
import { Link, Outlet } from 'react-router-dom'

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
                      <div>
                        <i className="anticon opacity-04 font-size-16 anticon-logout" />
                        <span className="m-l-10">Logout</span>
                      </div>
                      <i className="anticon font-size-10 anticon-right" />
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
                    <Link to="/admin/product">Danh sách sản phẩm</Link>
                  </li>
                  <li>
                    <Link to="/admin/category">Danh mục sản phẩm</Link>
                  </li>

                </ul>
              </li>
              {/* Quản lý sản phẩm END */}
              
              <li className="nav-item dropdown">
                <a className="dropdown-toggle" href="javascript:void(0);">
                  <span className="icon-holder">
                    <i className="anticon anticon-build" />
                  </span>
                  <span className="title">UI Elements</span>
                  <span className="arrow">
                    <i className="arrow-icon" />
                  </span>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="avatar.html">Avatar</a>
                  </li>
                  <li>
                    <a href="alert.html">Alert</a>
                  </li>
                  <li>
                    <a href="badge.html">Badge</a>
                  </li>
                  <li>
                    <a href="buttons.html">Buttons</a>
                  </li>
                  <li>
                    <a href="cards.html">Cards</a>
                  </li>
                  <li>
                    <a href="icons.html">Icons</a>
                  </li>
                  <li>
                    <a href="lists.html">Lists</a>
                  </li>
                  <li>
                    <a href="typography.html">Typography</a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="dropdown-toggle" href="javascript:void(0);">
                  <span className="icon-holder">
                    <i className="anticon anticon-hdd" />
                  </span>
                  <span className="title">Components</span>
                  <span className="arrow">
                    <i className="arrow-icon" />
                  </span>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="accordion.html">Accordion</a>
                  </li>
                  <li>
                    <a href="carousel.html">Carousel</a>
                  </li>
                  <li>
                    <a href="dropdown.html">Dropdown</a>
                  </li>
                  <li>
                    <a href="modals.html">Modals</a>
                  </li>
                  <li>
                    <a href="toasts.html">Toasts</a>
                  </li>
                  <li>
                    <a href="popover.html">Popover</a>
                  </li>
                  <li>
                    <a href="slider-progress.html">Slider &amp; Progress</a>
                  </li>
                  <li>
                    <a href="tabs.html">Tabs</a>
                  </li>
                  <li>
                    <a href="tooltips.html">Tooltips</a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="dropdown-toggle" href="javascript:void(0);">
                  <span className="icon-holder">
                    <i className="anticon anticon-form" />
                  </span>
                  <span className="title">Forms</span>
                  <span className="arrow">
                    <i className="arrow-icon" />
                  </span>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="form-elements.html">Form Elements</a>
                  </li>
                  <li>
                    <a href="form-layouts.html">Form Layouts</a>
                  </li>
                  <li>
                    <a href="form-validation.html">Form Validation</a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="dropdown-toggle" href="javascript:void(0);">
                  <span className="icon-holder">
                    <i className="anticon anticon-table" />
                  </span>
                  <span className="title">Tables</span>
                  <span className="arrow">
                    <i className="arrow-icon" />
                  </span>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="basic-table.html">Basic Table</a>
                  </li>
                  <li>
                    <a href="data-table.html">Data Table</a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="dropdown-toggle" href="javascript:void(0);">
                  <span className="icon-holder">
                    <i className="anticon anticon-pie-chart" />
                  </span>
                  <span className="title">Charts</span>
                  <span className="arrow">
                    <i className="arrow-icon" />
                  </span>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="chartist.html">Chartist</a>
                  </li>
                  <li>
                    <a href="chartjs.html">ChartJs</a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="dropdown-toggle" href="javascript:void(0);">
                  <span className="icon-holder">
                    <i className="anticon anticon-file" />
                  </span>
                  <span className="title">Pages</span>
                  <span className="arrow">
                    <i className="arrow-icon" />
                  </span>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="profile.html">Profile</a>
                  </li>
                  <li>
                    <a href="invoice.html">Invoice</a>
                  </li>
                  <li>
                    <a href="members.html">Members</a>
                  </li>
                  <li>
                    <a href="pricing.html">Pricing</a>
                  </li>
                  <li>
                    <a href="setting.html">Setting</a>
                  </li>
                  <li className="nav-item dropdown">
                    <a href="javascript:void(0);">
                      <span>Blog</span>
                      <span className="arrow">
                        <i className="arrow-icon" />
                      </span>
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a href="blog-grid.html">Blog Grid</a>
                      </li>
                      <li>
                        <a href="blog-list.html">Blog List</a>
                      </li>
                      <li>
                        <a href="blog-post.html">Blog Post</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="dropdown-toggle" href="javascript:void(0);">
                  <span className="icon-holder">
                    <i className="anticon anticon-lock" />
                  </span>
                  <span className="title">Authentication</span>
                  <span className="arrow">
                    <i className="arrow-icon" />
                  </span>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="login-1.html">Login 1</a>
                  </li>
                  <li>
                    <a href="login-2.html">Login 2</a>
                  </li>
                  <li>
                    <a href="login-3.html">Login 3</a>
                  </li>
                  <li>
                    <a href="sign-up-1.html">Sign Up 1</a>
                  </li>
                  <li>
                    <a href="sign-up-2.html">Sign Up 2</a>
                  </li>
                  <li>
                    <a href="sign-up-3.html">Sign Up 3</a>
                  </li>
                  <li>
                    <a href="error-1.html">Error 1</a>
                  </li>
                  <li>
                    <a href="error-2.html">Error 2</a>
                  </li>
                </ul>
              </li>
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
