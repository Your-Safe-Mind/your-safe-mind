import crypto from 'crypto'
import Swal from 'sweetalert2';


export const generateBookingId = () => {
    // Generate an 8-character alphanumeric ID
    return crypto.randomBytes(4).toString('hex').toUpperCase();
  };

  export const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: false,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });