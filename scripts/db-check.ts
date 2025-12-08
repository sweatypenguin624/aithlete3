import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    console.log('Testing Database Connection...');
    try {
        await prisma.$connect();
        console.log('Successfully connected to MongoDB!');

        const userCount = await prisma.user.count();
        console.log(`Connection Verified. Found ${userCount} users.`);

    } catch (error) {
        console.error('Connection FAILED:', error);
    } finally {
        await prisma.$disconnect();
    }
}

main();
