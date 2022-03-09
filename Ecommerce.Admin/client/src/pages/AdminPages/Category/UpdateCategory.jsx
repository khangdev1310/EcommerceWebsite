import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from 'firebase/storage'
import React, { useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { storage, uploadImageToFirebaseAsync } from '../../../untils/firebase'
import { SweetAlert } from '../../../untils/SweetAlert'
import exactFirebaseLink from '../../../untils/getFirebaseLink'
import {
  AsyncUpdateCategories,
  setUpdateCategory,
} from '../../../features/Category/CategorySlice'
import { useDispatch, useSelector } from 'react-redux'

export default function UpdateCategory() {
  const { state } = useLocation()
  const navigate = useNavigate()

  //   State initial
  const [file, setFile] = useState(null)
  const [previewUrl, setPreviewUrl] = useState(state?.imageUrl)
  const types = ['image/png', 'image/jpeg', 'image/jpg']
  const { category } = useSelector((state) => state.category)

  const dispatch = useDispatch()

  //   Start Form
  const handleFileChange = (e) => {
    const file = e.target.files[0]

    if (file && types.includes(file.type)) {
      setFile(file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreviewUrl(reader.result)
      }
      reader.readAsDataURL(file)
    } else {
      SweetAlert('error', 'Không đúng định dạng ảnh', 1500)
    }
  }
  const handleChangeValueForm = (e) => {
    dispatch(
      setUpdateCategory({ ...category, [e.target.name]: e.target.value }),
    )
  }

  const handleEditCategory = (e) => {
    e.preventDefault()
    if (file) {
      const storageRef = ref(
        storage,
        Date.now().toString(36) +
          Math.random().toString(36).substring(2) +
          file.name,
      )
      const uploadTask = uploadBytesResumable(storageRef, file)
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        },
        (error) => {
          console.log(error)
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
            const beforeUrlLink = exactFirebaseLink(state?.imageUrl)
            if (beforeUrlLink != null) {
              const desertRef = ref(storage, beforeUrlLink)
              deleteObject(desertRef)
                .then(() => {
                  console.log('success')
                })
                .catch((error) => {
                  console.log(error)
                })
            }

            dispatch(
              AsyncUpdateCategories({
                id: category.id,
                name: category.name,
                desc: category.desc,
                imageUrl: downloadUrl,
              }),
            )

            dispatch(setUpdateCategory({ ...category, imageUrl: downloadUrl }))
            navigate('/admin/category')
          })
        },
      )
    } else if (category.name && category.desc) {
      dispatch(
        AsyncUpdateCategories({
          id: category.id,
          name: category.name,
          desc: category.desc,
          imageUrl: category.imageUrl,
        }),
      )
      navigate('/admin/category')
    } else {
      SweetAlert('error', 'Vui lòng nhập đầy đủ thông tin', 1500)
    }
  }
  //   End Form

  return (
    <div className="main-content">
      <form>
        <div className="page-header no-gutters has-tab">
          <div className="d-md-flex m-b-15 align-items-center justify-content-between">
            <div className="m-b-15">
              <button className="btn btn-primary" onClick={handleEditCategory}>
                <i className="anticon anticon-save" />
                <span>Chỉnh sửa</span>
              </button>
            </div>
          </div>
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <a
                className="nav-link active"
                data-toggle="tab"
                href="#product-edit-basic"
              >
                Chỉnh sửa danh mục
              </a>
            </li>
          </ul>
        </div>
        <div className="tab-content m-t-15">
          <div className="tab-pane fade show active" id="product-edit-basic">
            <div className="card">
              <div className="card-body">
                <div className="form-group">
                  <label
                    className="font-weight-semibold"
                    htmlFor="categoryName"
                  >
                    Tên danh mục
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="categoryName"
                    placeholder="Nhập tên danh mục"
                    name="name"
                    defaultValue={state.name}
                    onChange={handleChangeValueForm}
                  />
                </div>
                <div className="form-group">
                  <label
                    className="font-weight-semibold"
                    htmlFor="categoryDesc"
                  >
                    Mô tả ngắn
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="categoryDesc"
                    placeholder="Nhập mô tả"
                    name="desc"
                    defaultValue={state.desc}
                    onChange={handleChangeValueForm}
                  />
                </div>

                <div className="form-group">
                  <label
                    className="font-weight-semibold m-r-5"
                    htmlFor="productDesc"
                  >
                    Chọn hình ảnh
                  </label>
                  <input
                    type="file"
                    name="imageUrl"
                    id="categoryDesc"
                    onChange={handleFileChange}
                  />
                  <div>
                    {previewUrl && (
                      <img
                        src={previewUrl}
                        alt="preview"
                        width={100}
                        height={100}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <NavLink to="/admin/category" style={{ padding: '0.5rem' }}>
          Back to category
        </NavLink>
      </form>
    </div>
  )
}
