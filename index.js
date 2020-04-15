const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/User.js');
require('./services/passport.js');

const authRoutes = require('./routes/authRoutes.js');

mongoose.connect(keys.mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
            }).then(()=>{console.log('Connected to MongoDB');}).catch(err=> console.log('Error on start: ' + err.stack));

const app = express();

/*app.get('/', (req,res)=>{
    res.send({hi: 'there'});
});
*/

authRoutes(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT);