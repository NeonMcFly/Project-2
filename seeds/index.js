const sequelize = require('../config/connection');
const seedCostume = require('./costumeData');
const seedUserCostume = require('./userCostumeData');

const seedAll = async () => {
    await sequelize.sync({ force: true});

    await seedCostume();

    await seedUserCostume();

    process.exit(0);
};

seedAll();