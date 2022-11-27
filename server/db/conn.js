const mongoose = require('mongoose');

const DB = process.env.DATABASE;


/*mongoose.connect(DB,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
},()=>{
    console.log(`connection successful`);
})
catch((err) => console.log(`no connection`));
*/
/*try {
    // Connect to the MongoDB cluster
     mongoose.connect(
      DB,
      { useNewUrlParser: true, 
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false},
      () => console.log(" Mongoose is connected")
    );

  } catch (err) {
    console.log("could not connect");
  }*/

/*
mongoose.connect(DB, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify:false
}).then(() => {
    console.log(`connnection successful`);
}).catch((err) => console.log(`no connection`));
*/

mongoose.connect(DB);
mongoose.connection.on('connected', () => console.log('Connected'));
<<<<<<< HEAD
mongoose.connection.on('error', () => console.log('Connection failed with - ',err));
=======
mongoose.connection.on('error', () => console.log('Connection failed with - ',err));
>>>>>>> 3e41964 (commits)
