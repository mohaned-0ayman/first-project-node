const {express} = require("../../../../index");
const postsAPIRouter = express.Router();
const { query_runner, query_error } = require("../../../helpers/mysql_helpers");

postsAPIRouter.get("/", (req, res) => {
        res.status(200).json({})
});

postsAPIRouter.post("/", (req, res) => {
        res.status(200).json({})
});

module.exports = postsAPIRouter;
