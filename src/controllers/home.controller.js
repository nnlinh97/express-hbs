const home = (req, res) => {
    res.render('home', { message: 'Đây là Trang chủ' });
}

module.exports = {
    home
}