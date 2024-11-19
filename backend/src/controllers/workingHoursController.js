const { getFirestoreInstance } = require('../config/firebase');
const admin = require('firebase-admin');


exports.getAllHours = async (req, res) => {
    // Logic to retrieve all working hours from the database or data source
    const userId = req.query.userId;

    if(userId === null || userId === undefined) 
        return res.status(404).json({msg: "Invalid user"});

    let db = getFirestoreInstance();
    const userDoc = await db.collection('users').doc(userId).get();

    res.status(200).json({
        userId: userId,
        workHours: userDoc.data()["workHours"]
    });
};

exports.addHours = async (req, res) => {
    // Logic to add working hours based on request body data

    const userId = req.query.userId;
    res.status(404).json({msg:userId});
    if(userId === null || userId === undefined) 
        return res.status(404).json({msg: "Invalid user"});

    if(req.body.workHours === null || req.body.workHours === undefined) 
        return res.status(404).json({msg: "Missing parameters"})

    let db = getFirestoreInstance();
    const userDoc = await db.collection('users').doc(userId);

    let reqData = req.body;
    reqData.date = admin.firestore.Timestamp.fromDate(new Date(reqData.date ));

     let data = (await userDoc.get()).data();
        data["workHours"].push(reqData);


    await userDoc.set(data);

    res.status(200).json({
        userId: userId,
        workHours: (await userDoc.get()).data()["workHours"]
    });

};

exports.getHours = async (req, res) => {
    // Logic to retrieve all working hours from the database or data source
    const userId = req.query.userId;
    const id = req.params.id;

    if(userId === null || userId === undefined) 
        return res.status(404).json({msg: "Invalid user"});

    if(id === null || id === undefined) 
        return res.status(404).json({msg: "Invalid hour id"})

    let db = getFirestoreInstance();
    const userDoc = await db.collection('users').doc(userId).get();

    res.status(200).json({
        userId: userId,
        workHours: userDoc.data()["workHours"][id]
    });
};

exports.updateHours = async (req, res) => {
    const id = req.params.id;
    // Logic to update working hours for the given ID based on request body data

    const userId = req.query.userId;

    if(userId === null || userId === undefined) 
        return res.status(404).json({msg: "Invalid user"});

    if(id === null || id === undefined) 
        return res.status(404).json({msg: "Invalid hour id"})

    let db = getFirestoreInstance();
    const userDoc = await db.collection('users').doc(userId);

    let reqData = req.body;
    if("date" in reqData) {
        reqData.date = admin.firestore.Timestamp.fromDate(new Date(reqData.date));
    }
    let data = (await userDoc.get()).data();

    data["workHours"][id] = {...data["workHours"][id], ...reqData};

    await userDoc.set(data);

    res.status(200).json({
        userId: userId,
        workHours: data["workHours"][id]
    });

};

exports.deleteHours = async (req, res) => {
    const id = req.params.id;
    // Logic to delete working hours for the given ID

    const userId = req.query.userId;

    if(userId === null || userId === undefined) 
        return res.status(404).json({msg: "Invalid user"});

    if(id === null || id === undefined) 
        return res.status(404).json({msg: "Invalid hour id"})

    let db = getFirestoreInstance();
    const userDoc = await db.collection('users').doc(userId);

    let data = (await userDoc.get()).data();
    data["workHours"].splice(parseInt(id), 1);

    await userDoc.set(data);

    res.status(200).json({
        userId: userId,
        workHours: data["workHours"]
    });
};