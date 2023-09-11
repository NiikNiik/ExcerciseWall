const express = require('express');
const cors = require('cors')
const app = express();
app.use(cors()) 
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
require('./config/mongoose.config'); 
require('./routes/excercise.routes')(app);   // We're importing the routes export. 
// These two lines are the long-hand notation of the code above. They better show what's going on.
    // const personRoutes = require("./routes/person.routes");  <-- assign the exported function to a const
    // personRoutes(app);     <-- invoke the function and pass in the express "app" server
app.listen(8000, () => {
    console.log("Listening at Port 8000")
})