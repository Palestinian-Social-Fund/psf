import { combineReducers } from 'redux'
import changePwdFormReducer from './changePwdFormReducer'
import loginFormReducer from './loginFormReducer'
import memListReducer from './memListReducer'
import pmFormReducer from './pmFormReducer'
import profileFormReducer from './profileFormReducer'
import resetPwdFormReducer from './resetPwdFormReducer'
import signupFormReducer from './signupFormReducer'
import userReducer from './userReducer'

export default combineReducers({
  changePwdForm: changePwdFormReducer,
  loginForm: loginFormReducer,
  memList: memListReducer,
  pmForm: pmFormReducer,
  // pmList: pmListReducer,
  profileForm: profileFormReducer,
  resetPwdForm: resetPwdFormReducer,
  signupForm: signupFormReducer,
  user: userReducer
})