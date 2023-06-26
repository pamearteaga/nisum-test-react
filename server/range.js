module.exports = (req, res, next) => {
  res.header('Content-Range', 'books 0-10/20')
  next()
}