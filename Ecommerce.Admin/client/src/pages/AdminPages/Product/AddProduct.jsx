import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { AsyncGetAllCategories } from '../../../features/Category/CategorySlice'
import { createProductAsync } from '../../../features/Product/ProductSlice'
import { uploadImageToFirebaseAsync } from '../../../untils/firebase'
import { SweetAlert } from '../../../untils/SweetAlert'

export default function AddProduct() {
  const [productForm, setProductForm] = useState({
    name: '',
    desc: '',
    price: 0,
    categoryId: '',
    quantity: 0,
    isFeatured: false,
    status: 'InStock',
    productImageDtos: [],
  })
  // Get category
  const { categories } = useSelector((state) => state.category)
  const [file, setFile] = useState(null)
  const [previewUrl, setPreviewUrl] = useState('')

  const [selectedFiles, setSelectedFiles] = useState([])
  const [previewFiles, setPreviewFiles] = useState([])

  const navigate = useNavigate()
  const dispatch = useDispatch()
  // Start Form
  const handleChangeForm = (e) => {
    setProductForm({ ...productForm, [e.target.name]: e.target.value })
  }

  const handleSubmitForm = (e) => {
    e.preventDefault()
    if (selectedFiles.length == 0) {
      SweetAlert('error', 'Bạn chưa chọn hình ảnh để upload', 1500)
      return
    } else if (
      !productForm.name ||
      !productForm.desc ||
      !productForm.price ||
      !productForm.quantity ||
      !productForm.categoryId
    ) {
      SweetAlert('error', 'Bạn chưa điền đủ thông tin', 1500)
    } else {
      const ImgUrls = []
      selectedFiles.forEach((file) => {
        ImgUrls.push(uploadImageToFirebaseAsync(file))
      })
      Promise.all(ImgUrls).then((urls) => {
        dispatch(
          createProductAsync({
            ...productForm,
            productImageDtos: urls.map((item) => ({
              imageUrl: item,
            })),
          }),
        )
        navigate('/admin/product')
      })
    }
  }
  // End Form

  // Start IMG File
  const types = ['image/png', 'image/jpeg', 'image/jpg']
  const convertImgtoArray = (items) => {
    const array = []
    for (let i = 0; i < items.length; i++) {
      array.push(items.item(i))
    }
    return array
  }
  const handleFileChange = (e) => {
    const files = convertImgtoArray(e.target.files)
    if (files.length > 5) {
      SweetAlert('error', 'Không thể upload quá 5 hình', 1500)
      return
    }

    if (files.map((file) => file.type).some((item) => !types.includes(item))) {
      setPreviewFiles([])
      SweetAlert('error', 'Không đúng định dạng ảnh', 1000)
      return
    }
    files.forEach((item) => {
      const reader = new FileReader()
      reader.onload = () => {
        setPreviewFiles((previewFiles) => [...previewFiles, reader.result])
      }
      reader.readAsDataURL(item)
    })
    setSelectedFiles(files)
  }
  // End IMG File

  useEffect(() => {
    dispatch(AsyncGetAllCategories())
  }, [])
  console.log(productForm)

  return (
    <div className="main-content">
      <form>
        <div className="page-header no-gutters has-tab">
          <div className="d-md-flex m-b-15 align-items-center justify-content-between">
            <div className="m-b-15">
              <button className="btn btn-primary" onClick={handleSubmitForm}>
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
                Tạo sản phẩm
              </a>
            </li>
          </ul>
        </div>
        <div className="tab-content m-t-15">
          <div className="tab-pane fade show active" id="product-edit-basic">
            <div className="card">
              <div className="card-body">
                <div className="form-group">
                  <label className="font-weight-semibold" htmlFor="productName">
                    Tên sản phẩm
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="productName"
                    placeholder="Nhập tên sản phẩm"
                    name="name"
                    onChange={handleChangeForm}
                  />
                </div>
                <div className="form-group">
                  <label className="font-weight-semibold" htmlFor="productDesc">
                    Mô tả ngắn
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="productDesc"
                    placeholder="Nhập tên mô tả sản phẩm"
                    name="desc"
                    onChange={handleChangeForm}
                  />
                </div>
                <div className="form-group">
                  <label
                    className="font-weight-semibold"
                    htmlFor="productPrice"
                  >
                    Price
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="productPrice"
                    placeholder="Price"
                    defaultValue="0"
                    name="price"
                    onChange={handleChangeForm}
                  />
                </div>
                <div className="form-group">
                  <label
                    className="font-weight-semibold"
                    htmlFor="productCategory"
                  >
                    Danh mục sản phẩm
                  </label>

                  <select
                    className="custom-select"
                    name="categoryId"
                    id="productCategory"
                    onChange={handleChangeForm}
                  >
                    <option value="">Chọn danh mục</option>
                    {categories.map((item) => (
                      <option key={item.id} value={item.id}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label
                    className="font-weight-semibold"
                    htmlFor="productQuantity"
                  >
                    Nhập số lượng
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="productQuantity"
                    placeholder="Brand"
                    defaultValue="10"
                    name="quantity"
                    onChange={handleChangeForm}
                  />
                </div>
                <div className="form-group">
                  <label
                    className="font-weight-semibold"
                    htmlFor="productFeatures"
                  >
                    Sản phẩm đặc trưng
                  </label>
                  <div className="switch m-r-10">
                    <input
                      type="checkbox"
                      id="productFeatures"
                      name="isFeatured"
                      checked={productForm.isFeatured}
                      onChange={(e) =>
                        setProductForm({
                          ...productForm,
                          isFeatured: e.target.checked,
                        })
                      }
                    />
                    <label htmlFor="productFeatures" />
                  </div>
                </div>
                <div className="form-group">
                  <label
                    className="font-weight-semibold"
                    htmlFor="productStatus"
                  >
                    Trạng thái sản phẩm
                  </label>
                  <select
                    className="custom-select"
                    id="productStatus"
                    name="status"
                    onChange={handleChangeForm}
                  >
                    <option value="InStock" defaultValue>
                      Còn hàng
                    </option>
                    <option value="OutOfStock">Hết hàng</option>
                  </select>
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
                    name="productImageDtos"
                    multiple
                    onChange={handleFileChange}
                  />
                  <div>
                    {previewFiles.length > 0 && (
                      <>
                        {previewFiles.map((item, index) => {
                          return (
                            <img
                              src={item}
                              key={index}
                              alt="preview"
                              width={100}
                              height={100}
                            />
                          )
                        })}
                      </>
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
