// Import required modules
const express = require('express');
const mongoose = require('mongoose');
const tollRoutes = require('./backend/tollRoutes');

// Create an Express application
const app = express();

mongoose.connect('mongodb+srv://krishnakowshik:SVnWDYJxivQhuKOA@cluster0.iqpnaai.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});

const db = mongoose.connection.useDb('tollgatedb');
const LoginDetails=db.collection('login');

app.use('/tolls', tollRoutes);

app.use(express.static('C:/Toll-gate-management-system/TollGate Management System/public'));



app.use(express.json());
// Define a route for the home page
app.get('/', (req, res) => {
    res.send('Welcome to the Toll Charge Details Page');
});

// Define a route for the toll charge details page
app.get('/tollcharges', (req, res) => {
    // This is where you can put the HTML content of your toll charge details table
    res.sendFile("C://Toll-gate-management-system/TollGate Management System/tollrecords.html");
});

// Start the server on port 3000
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
    
});

app.post('/login', async (req, res) => {
    try {
      const { username, password } = req.body;
      try {
        const user = await LoginDetails.findOne({ username, password });
        console.log(username);
        console.log(password);
        console.log(user);
        if (user) {
          res.status(200).json({ message: 'Login successful', user });
        } else {
          res.status(401).json({ error: 'Invalid username or password' });
        }
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Something went wrong' });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Something went wrong' });
    }
});

app.get('/login', async(req, res) => {
  res.set('Content-Type', 'application/javascript').sendFile("C://Toll-gate-management-system/TollGate Management System/loginpage.html");
})