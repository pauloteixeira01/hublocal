const express = require('express')
const cors = require('cors');
const server = express();
server.use(cors());
server.use(express.json());

const BusinessRoutes = require('./routes/BusinessRoutes'); 
server.use('/task', BusinessRoutes);

server.listen(3333, () => {
	console.log('API online in port 3333');
})