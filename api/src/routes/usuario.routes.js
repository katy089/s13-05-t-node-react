const { Router } = require('express')
const {
  signUp,
  logIn,
  googleAuth,
  getUser,
  matchProfile,
  updateUser
} = require('../controller/usuario.controller.js')

const router = Router()

const {
  POST_SIGN_UP,
  POST_LOGIN,
  POST_GOOGLE
} = require('../../helpers/checks')

router.post('/sign-up', POST_SIGN_UP, signUp)
router.post('/login', POST_LOGIN, logIn)
router.post('/google', POST_GOOGLE, googleAuth)
router.get('/list/:id', getUser)
router.get('/match', matchProfile)
router.put('/:id', updateUser)



module.exports = router