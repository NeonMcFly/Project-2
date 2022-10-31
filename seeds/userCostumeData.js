const {UserCostume} = require('../models');

const userCostumeData = [
   /* {
        scary_boolean: 'false',
    },
    {
        scary_boolean: 'true',
    },
    {
        scary_boolean: 'false',
    }*/
];

const seedUserCostume = () => UserCostume.bulkCreate(userCostumeData);

module.exports = seedUserCostume;