import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, NavLink } from 'react-router-dom'
import { AsyncCreateCategories } from '../../../features/Category/CategorySlice'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { storage } from '../../../untils/firebase'
import { SweetAlert } from '../../../untils/SweetAlert'


export default function AddCategory() {
  const [categoryForm, setCategoryForm] = useState({
    name: '',
    desc: '',
    imageUrl: 'string',
  })

  const dispatch = useDispatch()
  const navigate = useNavigate()

  // Start IMG file
  
  const types = ['image/png', 'image/jpeg', 'image/jpg']
  const [file, setFile] = useState(null)
  const [previewUrl, setPreviewUrl] = useState('')

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
      SweetAlert("error","Không đúng định dạng ảnh",1500)
      setPreviewUrl("");
    }
  }

  // Submit form create category
  const handleCreateCategory = (e) => {
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
        // if failed upload img
        (error) => {
          
        },

        // Handle success upload on complete
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log('File available at', downloadURL)
            dispatch(
              AsyncCreateCategories({ ...categoryForm, imageUrl: downloadURL }),
            )
            navigate('/admin/category')
          })
        },
      )
    } else {
      if (categoryForm.name && categoryForm.desc) {
        dispatch(AsyncCreateCategories({ ...categoryForm, imageUrl: null }))
        navigate('/admin/category')
      }
    }
  }
  // End IMG file

  // Start FORM
  const handleChangeValueForm = (e) => {
    console.log(categoryForm)
    setCategoryForm({ ...categoryForm, [e.target.name]: e.target.value })
  }
  //End FORM

  

  return (
    <div className="main-content">
      <form>
        <div className="page-header no-gutters has-tab">
          <div className="d-md-flex m-b-15 align-items-center justify-content-between">
            <div className="m-b-15">
              <button
                className="btn btn-primary"
                onClick={handleCreateCategory}
              >
                <i className="anticon anticon-save" />
                <span>Lưu</span>
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
                Tạo danh mục
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link"
                data-toggle="tab"
                href="#product-edit-description"
              >
                Chi tiết danh mục
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

          <div className="tab-pane fade" id="product-edit-description">
            <div className="card">
              <div className="card-body">
                <div id="productDescription">
                  <p>
                    Special cloth alert. The key to more success is to have a
                    lot of pillows. Surround yourself with angels, positive
                    energy, beautiful people, beautiful souls, clean heart,
                    angel. They will try to close the door on you, just open it.
                    A major key, never panic. Don’t panic, when it gets crazy
                    and rough, don’t panic, stay calm. They key is to have every
                    key, the key to open every door.The other day the grass was
                    brown, now it’s green because I ain’t give up. Never
                    surrender. Lion! I’m up to something. Always remember in the
                    jungle there’s a lot of they in there, after you overcome
                    they, you will make it to paradise.
                  </p>
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
