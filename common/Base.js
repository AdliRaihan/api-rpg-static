class AppBase {
    res; // Response
    req; // Requests
    constructor(req, res) {
        this.res = res
        this.req = req
    }
    makeResponse(status, code, message, data = null) {
        this.res.status(code).json({
            code: code,
            status: status,
            message: message,
            data: data
        })
    }
}
module.exports = AppBase;