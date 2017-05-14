var aboutController = {
  index: function(req, res) {
    res.render('about', {
      title: 'Exercise Lab 2',
      message: 'About',
      page: 'about',
    });
  }
}

module.exports = aboutController;
