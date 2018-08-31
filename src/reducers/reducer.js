//reducers/reducer.js
import { ADD_USER, DELETE_DINNER } from '../actions/user'
import mario from '../images/Mario.png'
import anna from '../images/Anna.png'
import bart from '../images/Bart.png'
import claire from '../images/Claire.png'
import patrick from '../images/patrick.png'

const UserList = [
  {
  id: 1,
  name: 'Anna',
  address: 'Het torentje, Den Haag',
  dish: 'Bolognese',
  convoTopic: 'Music',
  time: '18:00 - 21:00',
  photo: anna,
  price: 25
  },
  {
  id: 2,
  name: 'Bart',
  address: 'Larenseweg, Hilversum',
  dish: 'Carpaccio',
  convoTopic: 'Politics',
  time: '18:00 - 23:00',
  photo: bart,
  price: 23.50
  },
  {
  id: 3,
  name: 'Claire',
  address: 'Burgerweeshuispad, Amsterdam',
  dish: 'Hutspot',
  convoTopic: 'Life',
  time: '19:00 - 22:00',
  photo: claire,
  price: 2
  },
  {
  id: 4,
  name: 'Mario',
  address: 'Kikkerstraat, Rotterdam',
  dish: 'Kikkerbilletjes',
  convoTopic: 'Food',
  time: '17:00 - 20:00',
  photo: mario,
  price: 40
  },
  {
  id: 5,
  name: 'Patrick',
  address: 'De Bijlmer, Amsterdam',
  dish: 'Foie gras',
  convoTopic: 'Dogs',
  time: '18:30 - 21:15',
  photo: patrick,
  price: 26
  }
]

const userReducer = (state = UserList, action = {}) => {
    switch (action.type) {
      case ADD_USER:
        return state.concat({...action.payload})
      case DELETE_DINNER:
        return state.filter(dinners => dinners.id !== parseInt(action.payload) )
    default:
      return state
    }
  }

  export default userReducer
