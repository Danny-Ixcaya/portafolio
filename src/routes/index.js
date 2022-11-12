const { Router }  = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.render('inicio');
});

router.get('/proyecto', (req, res) => {
    res.render('proyecto');
});

router.get('/servicio', (req, res) => {
    res.render('servicio');
});

router.get('/sobremi', (req, res) => {
    res.render('sobremi');
});






module.exports = router;