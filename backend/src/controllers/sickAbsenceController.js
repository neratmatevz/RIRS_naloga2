const { getFirestoreInstance } = require('../config/firebase');


exports.getAllSickAbsenceHours = async (req, res) => {
    const userId = req.query.userId;
    console.log(userId)

    try {
        // Fetch the user's document by userId
        let db = getFirestoreInstance();
        const userDoc = await db.collection('users').doc(userId).get();

        if (!userDoc.exists) {
            return res.status(404).json({ message: 'User not found' });
        }

        const userData = userDoc.data();
        const sickLeaves = userData.sickLeave;
        const sickLeaveWithHours = [];

        // Calculate leave hours for each sick leave period
        if (Array.isArray(sickLeaves)) {
            sickLeaves.forEach((leave) => {
                // Convert Firestore Timestamp to JavaScript Date
                const startDate = leave.startDate.toDate();  // Convert to JS Date
                const endDate = leave.endDate.toDate();      // Convert to JS Date

                const differenceInMs = endDate - startDate;
                const leaveHours = Math.round((differenceInMs / (1000 * 60 * 60 * 24)) * 8);

                // Add the leave hours to each sick leave object
                sickLeaveWithHours.push({
                    ...leave,
                    leaveHours: leaveHours,
                    startDate: startDate, // Add the startDate as JS Date
                    endDate: endDate      // Add the endDate as JS Date
                });
            });
        }

        // Respond with the array of sick leave objects, each with leaveHours added
        res.status(200).json({
            userId: userId,
            sickLeave: sickLeaveWithHours,
        });
    } catch (error) {
        console.error('Error fetching sick absence hours:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

exports.addSickAbsenceHours = (req, res) => {

};

exports.updateSickAbsenceHours = (req, res) => {
    const id = req.params.id;
};

exports.deleteSickAbsenceHours = (req, res) => {
    const id = req.params.id;
};