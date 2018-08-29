//reducers/reducer.js

import alexander from '../images/Mario.png'
import mark from '../images/Anna.png'
import rita from '../images/Bart.png'
import job from '../images/Claire.png'
import geert from '../images/patrick.png'

const UserList = [
  {
  id: 1,
  name: 'Anna',
  address: 'Het torentje, Den Haag',
  dish: 'Bolognese',
  convoTopic: 'Music',
  time: '18:00 - 21:00',
  dishPhoto: mark,
  price: 25
  },
  {
  id: 2,
  name: 'Rita',
  address: 'Larenseweg, Hilversum',
  dish: 'Carpaccio',
  convoTopic: 'Politics',
  time: '18:00 - 23:00',
  dishPhoto: rita,
  price: 23.50
  },
  {
  id: 3,
  name: 'Job',
  address: 'Burgerweeshuispad, Amsterdam',
  dish: 'Hutspot',
  convoTopic: 'Life',
  time: '19:00 - 22:00',
  dishPhoto: job,
  price: 2
  },
  {
  id: 4,
  name: 'Alexander',
  address: 'Kikkerstraat, Rotterdam',
  dish: 'Kikkerbilletjes',
  convoTopic: 'Food',
  time: '17:00 - 20:00',
  dishPhoto: alexander,
  price: 40
  },
  {
  id: 5,
  name: 'Geert',
  address: 'De Bijlmer, Amsterdam',
  dish: 'Foie gras',
  convoTopic: 'Dogs',
  time: '18:30 - 21:15',
  dishPhoto: geert,
  price: 26
  }
]

const userReducer = (state = UserList, action = {}) => {
    switch (action.type) {
    default:
      return state
    }
  }

  export default userReducer
