const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(express.json());

//mongodb
mongoose.connect('mongodb://localhost:27017/adminDashboard')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));


const AdminSchema = new mongoose.Schema({
  email: String,
  password: String,
  role: String
});

const Admin = mongoose.model('Admin', AdminSchema);

//login api
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const admin = await Admin.findOne({ email, password });

    if (admin) {
      res.json({ success: true, role: admin.role });
    } else {
      res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

//dashboard api
app.get('/api/dashboard', (req, res) => {
  res.json({
    totalUsers: 1200,
    activeUsers: 850,
    totalSales: 250000,
    newSignups: 75
  });
});

//server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
