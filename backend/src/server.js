const express = require('express');
const cors = require('cors');
const {initializeFirestore} = require('./config/firebase.js');
const authRoutes = require('./routes/authenticationRoutes.js');
const workHoursRoutes = require('./routes/workingHoursRoutes.js');
const sickAbsenceRoutes = require('./routes/sickAbsenceRoutes.js');
const vacationAbsenceRoutes = require('./routes/vacationAbsenceRoutes.js');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

initializeFirestore();

app.use('/api/auth', authRoutes);
app.use('/api/workHours', workHoursRoutes);
app.use('/api/sickAbsence', sickAbsenceRoutes);
app.use('/api/vacationAbsence', vacationAbsenceRoutes);



app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;