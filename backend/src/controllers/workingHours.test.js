const { getAllHours, addHours, getHours, updateHours, deleteHours } = require('../controllers/workingHoursController');

describe('Hours Controller - If Statement Success', () => {
    const mockRes = () => {
        const res = {};
        res.status = jest.fn().mockReturnThis();
        res.json = jest.fn();
        return res;
    };

    describe('getAllHours', () => {
        it('should return 404 if userId is null or undefined', async () => {
            const req = { query: { userId: null } }; // Invalid userId
            const res = mockRes();

            await getAllHours(req, res);

            // Check for 404 status when userId is null
            expect(res.status).toHaveBeenCalledWith(404);
            expect(res.json).toHaveBeenCalledWith({ msg: "Invalid user" });
        });

        it('should return 404 if userId is undefined', async () => {
            const req = { query: { userId: undefined } }; // Invalid userId
            const res = mockRes();

            await getAllHours(req, res);

            // Check for 404 status when userId is undefined
            expect(res.status).toHaveBeenCalledWith(404);
            expect(res.json).toHaveBeenCalledWith({ msg: "Invalid user" });
        });
    });

    describe('addHours', () => {
        it('should return 404 if userId is null or undefined', async () => {
            const req = { 
                query: { userId: null },  // Invalid userId
                body: { workHours: 8 }
            };
            const res = mockRes();

            await addHours(req, res);

            // Expect 404 for null userId
            expect(res.status).toHaveBeenCalledWith(404);
            expect(res.json).toHaveBeenCalledWith({ msg: "Invalid user" });
        });

        it('should return 404 if workHours is null or undefined', async () => {
            const req = { 
                query: { userId: 'validUserId' }, // Valid userId
                body: { workHours: null }  // Invalid workHours
            };
            const res = mockRes();

            await addHours(req, res);

            // Expect 404 for null workHours
            expect(res.status).toHaveBeenCalledWith(404);
            expect(res.json).toHaveBeenCalledWith({ msg: "Missing parameters" });
        });

        it('should return 404 if workHours is undefined', async () => {
            const req = { 
                query: { userId: 'validUserId' }, // Valid userId
                body: {}  // Missing workHours in body
            };
            const res = mockRes();

            await addHours(req, res);

            // Expect 404 for missing workHours
            expect(res.status).toHaveBeenCalledWith(404);
            expect(res.json).toHaveBeenCalledWith({ msg: "Missing parameters" });
        });
    });

    describe('getHours', () => {
        it('should return 404 if userId is null or undefined', async () => {
            const req = {
                query: { userId: null }, // Invalid userId
                params: { id: 'validId' }
            };
            const res = mockRes();

            await getHours(req, res);

            // Expect 404 for null userId
            expect(res.status).toHaveBeenCalledWith(404);
            expect(res.json).toHaveBeenCalledWith({ msg: "Invalid user" });
        });

        it('should return 404 if id is null or undefined', async () => {
            const req = {
                query: { userId: 'validUserId' },
                params: { id: null } // Invalid id
            };
            const res = mockRes();

            await getHours(req, res);

            // Expect 404 for null id
            expect(res.status).toHaveBeenCalledWith(404);
            expect(res.json).toHaveBeenCalledWith({ msg: "Invalid hour id" });
        });
    });

    describe('updateHours', () => {
        it('should return 404 if userId is null or undefined', async () => {
            const req = {
                query: { userId: null }, // Invalid userId
                params: { id: 'validId' },
                body: { workHours: 10 }
            };
            const res = mockRes();

            await updateHours(req, res);

            // Expect 404 for null userId
            expect(res.status).toHaveBeenCalledWith(404);
            expect(res.json).toHaveBeenCalledWith({ msg: "Invalid user" });
        });

        it('should return 404 if id is null or undefined', async () => {
            const req = {
                query: { userId: 'validUserId' }, // Valid userId
                params: { id: null }, // Invalid id
                body: { workHours: 10 }
            };
            const res = mockRes();

            await updateHours(req, res);

            // Expect 404 for null id
            expect(res.status).toHaveBeenCalledWith(404);
            expect(res.json).toHaveBeenCalledWith({ msg: "Invalid hour id" });
        });
    });

    describe('deleteHours', () => {
        it('should return 404 if userId is null or undefined', async () => {
            const req = {
                query: { userId: null }, // Invalid userId
                params: { id: 'validId' }
            };
            const res = mockRes();

            await deleteHours(req, res);

            // Expect 404 for null userId
            expect(res.status).toHaveBeenCalledWith(404);
            expect(res.json).toHaveBeenCalledWith({ msg: "Invalid user" });
        });

        it('should return 404 if id is null or undefined', async () => {
            const req = {
                query: { userId: 'validUserId' }, // Valid userId
                params: { id: null } // Invalid id
            };
            const res = mockRes();

            await deleteHours(req, res);

            // Expect 404 for null id
            expect(res.status).toHaveBeenCalledWith(404);
            expect(res.json).toHaveBeenCalledWith({ msg: "Invalid hour id" });
        });
    });
});