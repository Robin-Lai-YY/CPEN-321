const port1 = process.env.PORT || 3001;

const app = require("./app");

var server_get_data = app.listen(port1, function(){
    var port = server_get_data.address().port;
    console.log("Listening at %s", port); 
});
