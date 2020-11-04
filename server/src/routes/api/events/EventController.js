import {Event} from '../../../models';

export const EventController = () => {
  const getAll = (req, res, next) => {
    Event.find({})
      .then(events => {
        res.send(events);
      })
      .catch(next);
  }

  return {
    getAll
  }
}