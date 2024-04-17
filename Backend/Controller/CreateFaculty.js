const CreateFacultyModel = require('../Model/Faculty');

const CreateFaculty = async (req, res) => {
    try {
        const { Name, Department, OfficeNumber, BuildingNo, ContactInformation, OfficeHours, AdditionalNotes, OfficeImage } = req.body;
        if (!Name || !Department || !OfficeNumber || !BuildingNo) {
            return res.status(400).json({ "msg": "Fill Required Data" });
        } else {
            const existingFaculty = await CreateFacultyModel.findOne({ Name, Department, OfficeNumber, BuildingNo });
            if (!existingFaculty) {
                const newFaculty = await CreateFacultyModel.create({ Name, Department, OfficeNumber, BuildingNo, ContactInformation, OfficeHours, AdditionalNotes, OfficeImage });
                return res.status(200).json({ "msg": "New Faculty Created Successfully", data: newFaculty });
            } else {
                return res.status(200).json({ "msg": "Faculty Already Present" });
            }
        }
    } catch (err) {
        console.error(err);
        return res.status(500).json({ "msg": "Error While Creating Faculty" });
    }
}

module.exports = CreateFaculty;
