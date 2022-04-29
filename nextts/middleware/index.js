
const restrictAccess = (req, res, next) => {
  return next()
}
module.exports = {
  restrictAccess
}