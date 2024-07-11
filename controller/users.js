const { db } = require("../config/admin");

exports.getUsers = async (req, res) => {
    const usersRef = db.collection('USERS');

    try {
        usersRef.get().then((snapshot) => {
            const data = snapshot.docs.map((doc) => ({
                id: doc.id, 
                ...doc.data(),
            }));
            console.log({data});
            return res.status(201).json(data);
        });
    } catch (error) {
        return res.status(500).json({ message: "Something went wrong, please try again later."});
    }
};

exports.updateUser = async (req, res) => {
    const userId = req.params.id;
    const updatedData = req.body;

    const usersRef = db.collection('USERS').doc(userId);

    try {
        await usersRef.update(updatedData);

        return res.status(200).json({ message: "Successfully updated." });s
    } catch (error) {
        return res.status(500).json({ 
            message: "Something went wrong, please try again later"
        });
    }
}