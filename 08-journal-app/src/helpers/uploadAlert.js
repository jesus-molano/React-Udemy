import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';

export const uploadAlert = () => {
	Swal.fire({
		title: 'Uploading...',
		text: 'Wait a second',
		icon: 'info',
    allowOutsideClick: false,
    confirmButtonColor: '#D98F07',
    onBeforeOpen: () => {
      Swal.showLoading();
    }
	});
};


