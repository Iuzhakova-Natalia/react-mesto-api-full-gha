const Card = require('../models/card');
const NotFoundError = require('../erorrs/NotFoundError');
const BadRequestError = require('../erorrs/BadRequestError');
const ForbiddenError = require('../erorrs/ForbiddenError');

const getCards = (req, res, next) => {
  Card
    .find({})
    .then((cards) => {
      res.send(cards);
    })
    .catch(next);
};

const createCard = (req, res, next) => {
  const { name, link } = req.body;
  const owner = req.user._id;
  Card
    .create({
      name,
      link,
      owner,
    })
    .then((card) => {
      res.status(201).send(card);
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(new BadRequestError(
          'Переданы некорректные данные в методы создания карточки',
        ));
      } else {
        next(err);
      }
    });
};

const deleteCard = (req, res, next) => {
  const { cardId } = req.params;

  Card.findById(cardId)
    .orFail(() => {
      throw new NotFoundError(`Карточка с id: ${cardId} не найдена`);
    })
    .then((card) => {
      if (card.owner.toString() === req.user._id) {
        Card.deleteOne(card).then(() => res.send(card));
      } else {
        throw new ForbiddenError('Нельзя удалять чужие карточки');
      }
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        next(new BadRequestError(
          `Передан некорректны id: ${cardId} в методы удаления карточки`,
        ));
      } else if (err.name === 'NotFoundError') {
        next(new NotFoundError(`Карточка с id: ${cardId} не найдена`));
      } else {
        next(err);
      }
    });
};

const likeCard = (req, res, next) => {
  const { cardId } = req.params;

  Card.findByIdAndUpdate(
    cardId,
    { $addToSet: { likes: req.user._id } },
    { new: true, runValidators: true },
  )
    .orFail(() => {
      throw new NotFoundError(`Карточка с id: ${cardId} не найдена`);
    })
    .then((card) => {
      res.status(201).send(card);
    })
    .catch((err) => {
      if (err.name === 'CastError' || err.name === 'ValidationError') {
        next(new BadRequestError(
          `Передан некорректный id: ${cardId} в методы постановки лайка карточки`,
        ));
      } else if (err.name === 'NotFoundError') {
        next(new NotFoundError(`Карточка с id: ${cardId} не найдена`));
      } else {
        next(err);
      }
    });
};

const dislikeCard = (req, res, next) => {
  const { cardId } = req.params;

  Card.findByIdAndUpdate(
    cardId,
    { $pull: { likes: req.user._id } },
    { new: true, runValidators: true },
  )
    .orFail(() => {
      throw new NotFoundError(`Карточка с id: ${cardId} не найдена`);
    })
    .then((card) => res.send(card))
    .catch((err) => {
      if (err.name === 'CastError') {
        next(new BadRequestError(
          `Передан некорректный id: ${cardId} в методы удаления лайка с карточки`,
        ));
      } else if (err.name === 'NotFoundError') {
        next(new NotFoundError(`Карточка с id: ${cardId} не найдена`));
      } else {
        next(err);
      }
    });
};

module.exports = {
  getCards,
  createCard,
  deleteCard,
  likeCard,
  dislikeCard,
};
