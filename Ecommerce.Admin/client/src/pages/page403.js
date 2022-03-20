import React from 'react'
import { Link } from 'react-router-dom'

export default function page403() {
  return (
    <div className="container-fluid">
      <div className="d-flex full-height p-v-20 flex-column justify-content-between">
        <div className="d-none d-md-flex p-h-40">
          <img src="assets/images/logo/logo.png" alt />
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="p-v-30">
                <h2 className="font-weight-light font-size-30">
                  Whoops! Looks like you got lost
                </h2>
                <p className="lead m-b-30">
                  We couldnt find what you were looking for.
                </p>
                <Link to="/admin/dashboard" className="btn btn-primary btn-tone">
                  Go Back
                </Link>
              </div>
            </div>
            <div className="col-md-6 m-l-auto">
              <img
                className="img-fluid"
                src="/images/http-403-error-http-404-http-cookie-forbidden-0aafae671098fd383cf39a053f7354fb.png"
                alt
              />
            </div>
          </div>
        </div>
        <div className="d-none d-md-flex  p-h-40 justify-content-between">
          <span className>© 2019 ThemeNate</span>
          <ul className="list-inline">
            <li className="list-inline-item">
              <a className="text-dark text-link" href>
                Legal
              </a>
            </li>
            <li className="list-inline-item">
              <a className="text-dark text-link" href>
                Privacy
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
