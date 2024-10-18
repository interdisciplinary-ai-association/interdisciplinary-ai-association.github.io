/*
*
*   A template for middleware of IAIA request handler
*   To be used for: future expansion & management of web workflows
*
*/

module.exports = (req, res, next) => {
    // console.log(`${req.method} ${req.path}`);
    next();
}