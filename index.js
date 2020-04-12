const express = require('express');
require('./services/passport.js');
const authRoutes = require('./routes/authRoutes.js');

const app = express();

/*app.get('/', (req,res)=>{
    res.send({hi: 'there'});
});
*/

authRoutes(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT);