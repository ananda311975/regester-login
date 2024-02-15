const bcrypt = require('bcryptjs')
const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

const password = bcrypt.hashSync('11223344')
const userData = [
  { username : 'andy', password, email: 'andy@ggg.mail',phone : '' },
  
]


const run = async () => {
  try {
    await prisma.user.createMany({
      data: userData,
    });
    console.log('Seed successful!');
  } catch (error) {
    console.error('Seed failed with error:', error);
  } finally {
    await prisma.$disconnect(); 
  }
};

run();