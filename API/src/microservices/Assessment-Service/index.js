const Assessment = require(`../../routes/Assessment`);
const { Assessments } = require(`../Database`);

exports.submit = async (assessment) => {
  // use the bookshelf model Assessments from API/src/microservices/Database to save
  // the assessment data in the PostgreSQL database
  assessment.created_at = new Date();
  assessment.score = parseInt(assessment.PreviousContact) + parseInt(assessment.PhysicalAltercationsWithOtherCats) +
  parseInt(assessment.PhysicalAltercationsWithOwner) + parseInt(assessment.PlaysWellWithDogs) +
  parseInt(assessment.HissesAtStrangers);

  assessment.riskLevel = assessment.score > 3 ? `high` :
    assessment.score > 1 ? `medium` :
      `low`;
  Assessments.forge({
    score: assessment.score,
    risk_level: assessment.riskLevel,
    cat_name: assessment.CatName,
    cat_date_of_birth: assessment.CatDateOfBirth,
    created_at: assessment.created_at,
  }).save();
};

exports.getList = () =>
  // use the bookshelf model Assessments from API/src/microservices/Database to fetch
  // the assessment data from the PostgreSQL database
  Assessments.fetchAll().then((resData) =>
    resData.serialize());
