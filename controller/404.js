const AppBase = require("../common/Base");
class _404 extends AppBase {
    constructor(req, res) {
        super(req, res);
        this.makeResponse(
            "Success to connect to the server", 
            404, 
            "Path didn't exist!"
        );
    }
}
module.exports = _404