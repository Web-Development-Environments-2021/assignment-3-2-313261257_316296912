var express = require("express");
var router = express.Router();
const DButils = require("./utils/DButils");
const team_utils = require("./utils/team_utils");

/**
 * This path gets teamId and returns the team full details
 */
router.get("/teamFullDetails/:teamId", async (req, res, next) => {
  //get details about the teamID
  let team_details = [];
  try {
    team_details = await team_utils.getAllteamDetails(
      req.params.teamId
    );
    res.send(team_details);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
