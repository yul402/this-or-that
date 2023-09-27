const db = require('../config/connection');
const { Survey } = require('../models');

const survetData = require('./surveyData.json');

db.once('open', async () => {
  await Survey.deleteMany({});

  const technologies = await Survey.insertMany(survetData);

  console.log('Survey seeded!');
  process.exit(0);
});
