//Return all cards
//res={cards: Array(40), cardCount: 3092, pageCount: 78, page: 1}
const getCards = (req, res) => {
  console.log(cards, "ALL CARDS");
  res.status(200).json({
    status: 200,
    message: "Request for getting all cards success",
    data: { ...cards },
  });
};

//Return one card

const getCardDetail = (req, res) => {
  let card = cards.find((card) => card.id == req.params.id);
  console.log(card, "ONE CARD");
  if (card) {
    res.status(200).json({
      status: 200,
      data: { ...cards },
      message: "Request for getting one card success",
    });
  } else {
    res.status(404).json({
      status: 404,
      error: "card not found",
    });
  }
};

module.exports = {
  getCards,
  getCardDetail,
};
