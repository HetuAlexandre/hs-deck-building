const getOneCard = (req, res) => {
  res.status(200).json({
    status: 200,
    message: "request for one card fulfilled",
    data: {},
  });
};

module.exports = {
  getOneCard,
};
