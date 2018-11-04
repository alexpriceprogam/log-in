import {updateUserName, updatePasswordConfirmation, updateUserPassword, updateUserEmail} from '../actions/index';

export function updateUsername(event) {
	return function(dispatch) {
		dispatch(updateUserName(event.target.value))
	}
}
export function updateUserpassword(event) {
	return function(dispatch) {
		dispatch(updateUserPassword(event.target.value))
	}
}
export function updatePasswordconfirmation(event) {
	return function(dispatch) {
		dispatch(updatePasswordConfirmation(event.target.value))
	}
}
export function updateUseremail(event) {
	return function(dispatch) {
		dispatch(updateUserEmail(event.target.value))
	}
}

export function userLoggedIn(user){

}