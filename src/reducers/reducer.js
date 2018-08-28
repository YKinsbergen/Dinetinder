//reducers/reducer.js
const UserList = [
  {
  id: 1,
  name: 'Mark',
  address: 'Het torentje, Den Haag',
  dish: 'Bolognese'
  },
  {
  id: 2,
  name: 'Rita',
  address: 'Larenseweg, Hilversum',
  dish: 'Carpaccio'
  },
  {
  id: 3,
  name: 'Job',
  address: 'Burgerweeshuispad, Amsterdam',
  dish: 'Hutspot'
  },
  {
  id: 4,
  name: 'Alexander',
  address: 'Kikkerstraat, Rotterdam',
  dish: 'Kikkerbilletjes'
  },
  {
  id: 5,
  name: 'Geert',
  address: 'De Bijlmer, Amsterdam',
  dish: 'Foie gras'
  }
]

const userReducer = (state = UserList, action = {}) => {
    switch (action.type) {
    default:
      return state
    }
  }
  
  export default userReducer