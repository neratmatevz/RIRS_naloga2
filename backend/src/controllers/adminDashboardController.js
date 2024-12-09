const { getFirestoreInstance } = require('../config/firebase');

exports.getAllWorkingHours = async (req, res) => {
    try {
        const db = getFirestoreInstance(); 
        const usersSnapshot = await db.collection('users').get();

        // Array to store results
        const result = [];

        usersSnapshot.forEach(doc => {
            const data = doc.data();
            const imePriimek = data.imePriimek;
            const workHours = data.workHours || [];

            // Calculate the sum of hours
            const totalHours = workHours.reduce((sum, workEntry) => {
                return sum + (parseInt(workEntry.hours, 10) || 0);
            }, 0);

            // Add the result for this user
            result.push({ imePriimek, hours: totalHours });
        });

        // Respond with the aggregated data
        res.status(200).json(result);

    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};