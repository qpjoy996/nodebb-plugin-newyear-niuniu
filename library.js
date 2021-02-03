var plugin = {};
async function renderNewyear(req, res) {
  res.render("christmas", {});
}

plugin.init = async function (params) {
  console.log("Avatar info", `christmas init`);
  var app = params.router,
    middleware = params.middleware;

  app.get("/newyear", middleware.buildHeader, renderNewyear);
  // app.get('/api/essence', renderEssenced);
  app.get("/api/newyear", renderNewyear);
};

module.exports = plugin;
