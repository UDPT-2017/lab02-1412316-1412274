var usersController = {
  index: function(req, res) {
    res.render('users', {
      title: 'Exercise Lab 2',
      message: 'Users Page',
      page: 'users',
    });
  }
}

module.exports = usersController;
