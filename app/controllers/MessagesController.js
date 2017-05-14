var messagesController = {
  index: function(req, res) {
    res.render('messages', {
      title: 'Exercise Lab 2',
      message: 'Messages Page',
      page: 'messages',
    });
  }
};

module.exports = messagesController;
