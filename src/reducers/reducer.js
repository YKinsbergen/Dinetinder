//reducers/reducer.js
import dog from '../images/dog.png'

const UserList = [
  {
  id: 1,
  name: 'Mark',
  address: 'Het torentje, Den Haag',
  dish: 'Bolognese',
  price: 25,
  dishPhoto: dog
  },
  {
  id: 2,
  name: 'Rita',
  address: 'Larenseweg, Hilversum',
  dish: 'Carpaccio',
  price: 23.50,
  dishPhoto: dog
  },
  {
  id: 3,
  name: 'Job',
  address: 'Burgerweeshuispad, Amsterdam',
  dish: 'Hutspot',
  price: 2,
  dishPhoto: dog
  },
  {
  id: 4,
  name: 'Alexander',
  address: 'Kikkerstraat, Rotterdam',
  dish: 'Kikkerbilletjes',
  price: 40,
  dishPhoto: dog
  },
  {
  id: 5,
  name: 'Geert',
  address: 'De Bijlmer, Amsterdam',
  dish: 'Foie gras',
  price: 26,
  dishPhoto: dog
  }
]

const userReducer = (state = UserList, action = {}) => {
    switch (action.type) {
    default:
      return state
    }
  }
  
  export default userReducer