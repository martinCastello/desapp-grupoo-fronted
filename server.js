//Install express server    
const express = require('express');

const path = require('path');   

const app = express();   

app.use(express.static('./src/app'));

app.get('/*', function(req, res) {
    res.sendFile('app.component.html', {root: 'src/app/'}
  );
}); 

// Start the app by listening on the default Heroku port    
app.listen(process.env.PORT || 9090);