const prisma = require("../prisma/client");


class RecordRepository {
    async getBorrowedBookRecord({ bookId, userId }) {
        const record = await prisma.record.findFirst({
            where: {
                bookId,
                userId,
                status: "BORROW"
            }
        });

        return record;
    }

    async update(id, updateData) {
        try {
            const updatedRecord = await prisma.record.update({
                where: { id },
                data: updateData
            });
            return true;
        } catch(error) {
            return false;
        }
    }

}


module.exports = RecordRepository;