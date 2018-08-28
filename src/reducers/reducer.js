//reducers/reducer.js
import alexander from '../images/alexander.png'
import mark from '../images/mark.png'
import rita from '../images/rita.png'
import job from '../images/job.png'
import geert from '../images/geert.png'

const UserList = [
  {
  id: 1,
  name: 'Mark',
  address: 'Het torentje, Den Haag',
  dish: 'Bolognese',
  dishPhoto: mark
  },
  {
  id: 2,
  name: 'Rita',
  address: 'Larenseweg, Hilversum',
  dish: 'Carpaccio',
  dishPhoto: rita
  },
  {
  id: 3,
  name: 'Job',
  address: 'Burgerweeshuispad, Amsterdam',
  dish: 'Hutspot',
  dishPhoto: job
  },
  {
  id: 4,
  name: 'Alexander',
  address: 'Kikkerstraat, Rotterdam',
  dish: 'Kikkerbilletjes',
  dishPhoto: alexander
  },
  {
  id: 5,
  name: 'Geert',
  address: 'De Bijlmer, Amsterdam',
  dish: 'Foie gras',
  dishPhoto: geert
  }
]

const userReducer = (state = UserList, action = {}) => {
    switch (action.type) {
    default:
      return state
    }
  }

  export default userReducer
