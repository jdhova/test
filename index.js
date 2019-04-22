
const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();



const port = process.env.PORT || 5000;


app.use(cors());


app.use('/api', require('./routes/api'))

app.use(express.static(path.join(__dirname, "client/build")));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});



//   if(process.env.NODE_ENV === 'production') {
//     app.use(express.static('client/build'))

//     app.get('!', (req,res) => {
//         res.sendFile(path.resolve(__dirname,'client', 'build','index.html'))
//     })
// }


  if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))

    app.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname,'/client/build/index.html'));
});
    
}

// app.get('*', (req,res) =>{
//   res.sendFile(path.join(__dirname+'/client/build/index.html'));
// });


// if(process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, 'client/build')));
//   //
//   app.get('*', (req, res) => {
//     res.sendfile(path.join(__dirname = 'client/build/index.html'));
//   })
// }



app.listen(port, () => {
  console.log(` portfolioserver back end working and running on port ${port}`);
});