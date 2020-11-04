import {Event} from '../../../models';

export const EventController = () => {
  const getAll = (req, res, next) => {
    Event.find({})
      .then(events => {
        res.send(events);
      })
      .catch(next);
  }

  const create = (req, res, next) => {
    Event.create(req.body)
      .then(event => {
        res.send(event);
      })
      .catch(next);
  }

  return {
    getAll,
    create
  }
}