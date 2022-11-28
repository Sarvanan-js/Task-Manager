const express = require('express');
const app = express();
const tasks = require('./routes/tasks'); 
const connectDB = require('./db/connect'); // done
// require('dotenv').config();
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

// middleware

app.use(express.static('./public'));
app.use(express.json());

// routes

app.use('/api/v1/tasks', tasks);

app.use(notFound);
app.use(errorHandlerMiddleware);
const port = 5001;

const start = async () => {
  try {

    const connectString = "mongodb+srv://saravananjs3:Saran1113js@nodeexpressprojects.wfzi8k0.mongodb.net/03-TASK-MANAGER?retryWrites=true&w=majority"

    await connectDB(connectString);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
