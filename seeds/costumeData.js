const { Costume } = require('../models');

const costumeData = [
    {
        costume_name: 'pumpkin',
        costume_filename: 'example1.jpg'
    },
    {
        costume_name: 'Ghost',
        costume_filename: 'example2.jpg'
    },
    {
        costume_name: 'zombie',
        costume_filename:'example.jpg'
    }
];

const seedCostume = () => Costume.bulkCreate(costumeData);

module.exports = seedCostume;