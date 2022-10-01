const { Router } = require('express');
const authController = require('../controllers/authControllers');

const router = Router();

router.get('/signup', authController.signup_get);
router.post('/signup', authController.signup_post);
router.get('/login', authController.login_get);
router.post('/login', authController.login_post);
router.get('/logout', authController.logout_get);

router.get('/', authController.home);
router.get('/add', authController.add_get);
router.post('/add', authController.add_post);

router.get('/read/:id', authController.read_get);
router.delete('/read/:id', authController.read_delete);

module.exports = router;