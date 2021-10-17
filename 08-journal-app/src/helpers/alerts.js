import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';

export const uploadAlert = () => {
	Swal.fire({
		title: 'Uploading...',
		text: 'Wait a second',
		allowOutsideClick: false,
		showConfirmButton: false,
    willOpen: () => {
      Swal.showLoading();
    }
	});
};

export const savedAlert = () => {
	Swal.fire({
		title: 'Saved',
		icon: 'success',
    confirmButtonColor: '#D98F07',
	});
};

export const errorAlert = (errorMessage) => {
	Swal.fire({
		title: 'Error :(',
		text: errorMessage,
		icon: 'error',
		confirmButtonText: 'Let me try again!',
		confirmButtonColor: '#D98F07',
	});
};
