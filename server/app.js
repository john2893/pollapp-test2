const express = require("express");
const http = require("http");
const _ = require('underscore');
const socketIo = require("socket.io");
const axios = require("axios");
const port = process.env.PORT || 4001;
const index = require("./routes/index");
const app = express();
app.use(index);
const server = http.createServer(app);
const io = socketIo(server);

//storing data
var connections = [];
var title = "Poll Name from Server" // admin can set this
var audience = [];
var administrator = {};


io.on("connection", socket => {
    socket.once('disconnect', function(){
        var user = _.findWhere(audience, {id: this.id});
        if (user) {
          audience.splice(audience.indexOf(user), 1)
          io.sockets.emit('audience', audience);
          console.log(' %s left now (%s members remaining)', user.name, audience.length)
        }
        connections.splice(connections.indexOf(socket), 1);
        socket.disconnect();
        console.log('Disconnect : %s members remaining' , connections.length)
    });

    socket.on('join', function(dataFromClient){
      var newMember = {
        id: this.id,
        name:dataFromClient.name,
        type:'member'
      };
      this.emit('joined', newMember) //sending this obj to client  sever received.
      audience.push(newMember); //into the array
      io.sockets.emit('audience', audience); // sending this to the client
      console.log( " %s joined the poll", dataFromClient.name);
    });


    socket.on('start', function(dataAboutAdmin){
      administrator.name = dataAboutAdmin.name;
      administrator.id = this.id;
      title = dataAboutAdmin.title;
      administrator.type = 'administrator'
      this.emit('joined', administrator); //sending this back to client/console
      io.sockets.emit('start', { title: title, administrator: administrator.name });
      console.log(" '%s' admin joined, %s : title", administrator.name, title);
    });

    socket.emit('welcome', {
        title:title
    });
    connections.push(socket)

    console.log("Connected : %s sockets connected", connections.length);


  socket.on("disconnect", () => console.log("Client disconnected"));
});

// const getApiAndEmit = async socket => {
//   try {
//     const res = await axios.get(
//       "https://pokeapi.co/api/v2/pokemon/"
//     );
//     socket.emit("FromAPI", res.data.results[0].name);
//   } catch (error) {
//     console.error(`Error: ${error.code}`);
//   }
// };
server.listen(port, () => console.log(`Listening on port ${port}`));