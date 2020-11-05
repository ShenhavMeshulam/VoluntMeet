import axios from 'axios';

export const useEvent = () => {
  const url = '/api/events';

  return {
    getAll: () =>  axios.get(url).then(res => res.data),
    create: (entity) => axios.post(url, entity).then(res => res.data)
  }
}