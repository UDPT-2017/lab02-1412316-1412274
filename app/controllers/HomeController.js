var homepageController = {
  index: function(req, res) {
    res.render('homepage', {
      title: 'Exercise Lab 2',
      message: 'Hello HBS page',
      page: 'homepage',
    });
  }
};

module.exports = homepageController;
