require('dotenv').config();

const app = require('./app');

// declare database connection if needed

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}...`);
  console.log(`Access the server at http://localhost:${PORT}`);
});