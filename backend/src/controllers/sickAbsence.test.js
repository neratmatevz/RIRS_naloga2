const { deleteSickAbsenceHours } = require('../controllers/sickAbsenceController');

describe('deleteSickAbsenceHours - if Statements', () => {
    it('should return 404 if id is null', async () => {
        const req = { params: { id: null } };
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };

        await deleteSickAbsenceHours(req, res);

        expect(res.status).toHaveBeenCalledWith(404);
        expect(res.json).toHaveBeenCalledWith({ message: 'That hour doesnt exist' });
    });

    it('should return 404 if id is undefined', async () => {
        const req = { params: {} }; // Simulate undefined id
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };

        await deleteSickAbsenceHours(req, res);

        expect(res.status).toHaveBeenCalledWith(404);
        expect(res.json).toHaveBeenCalledWith({ message: 'That hour doesnt exist' });
    });

    it('should not return 404 if id is valid', async () => {
        const req = { params: { id: '123' } }; // Simulate valid id
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };

        await deleteSickAbsenceHours(req, res);

        // Assuming no further logic for valid IDs, we don't expect 404 here
        expect(res.status).not.toHaveBeenCalledWith(404);
    });
});