exports.root = function(req, res) {
  res.redirect('/index');
}

exports.view = function(req, res) {
	res.render('index');
}

exports.game = function(req, res) {
  res.render('game');
}

exports.video = function(req, res) {
  console.log("Request recieved for youtube video id " + req.params.id);
  res.render('video', {videoId: req.params.id});
}

exports.pong = function(req, res) {
  res.render('pong');
}