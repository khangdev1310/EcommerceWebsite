import Swal from 'sweetalert2'

export const SweetAlert = (icon, title, timer) => {
  return Swal.fire({
    position: 'center',
    icon: icon,
    title: title,
    showConfirmButton: false,
    timer: timer,
  })
}
