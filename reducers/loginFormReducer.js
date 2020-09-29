import { actionTypes } from 'actions/loginFormActions'

const initialState = {
  email: '',
  password: '',
  loading: false,
  success: null,
  error: null,
}

function reducer(state = initialState, action) {
  switch (action.type) {

    case actionTypes.LOGIN_FORM_EDIT:
      return {
        ...state,
        ...{
          email: action.email,
          password: action.password,
        }
      }

    case actionTypes.LOGIN_FORM_SUBMIT:
      return {
        ...state,
        ...{
          loading: true,
          error: initialState.error
        }
      }

    case actionTypes.LOGIN_FORM_SUCCESS:
      return {
        ...state,
        ...{
          loading: false,
          success: action.success
        }
      }

    case actionTypes.LOGIN_FORM_ERROR:
      return {
        ...state,
        ...{
          loading: false,
          error: action.error
        }
      }

    default:
      return { ...state }
  }
}

export default reducer
