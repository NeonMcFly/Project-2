const { Costume } = require('../models');

const costumeData = [
    {
        costume_name: 'pumpkin',
        costume_filename: './images/example1.jpg',
        scary_boolean: 'false'
    },
    {
        costume_name: 'Ghost',
        costume_filename: './images/example2.jpg',
        scary_boolean: 'true'
    },
    {
        costume_name: 'zombie',
        costume_filename:'./images/example3.jpg',
        scary_boolean: 'false'
    }
];

const seedCostume = () => Costume.bulkCreate(costumeData);

module.exports = seedCostume;