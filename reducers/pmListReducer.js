import { actionTypes } from 'actions/pmListActions'

const initialState = {
  pms: [],
  loading: false,
  success: null,
  error: null
}

function reducer(state = initialState, action) {
  switch (action.type) {

    case actionTypes.PMLIST_POPULATE:
      return {
        ...state,
        ...{
          pms: action.mems
        }
      }

    case actionTypes.PMLIST_FETCH:
      return {
        ...state,
        ...{
          loading: true
        }
      }

    case actionTypes.PMLIST_SUBMIT:
      return {
        ...state,
        ...{
          loading: true
        }
      }

    case actionTypes.PMLIST_SUCCESS:
      return {
        ...state,
        ...{
          loading: false,
          success: action.success
        }
      }

    case actionTypes.PMLIST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      }

    default:
      return { ...state }
  }
}

export default reducer
