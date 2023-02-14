import { createStore } from 'vuex'

export const store = createStore({
  state: {
    users: [
      {
        id: 1,
        name: 'jon',
        admin: true
      },
      {
        id: 2,
        name: 'alex',
        admin: false
      },
      {
        id: 3,
        name: 'lolo',
        admin: false
      }
    ]
  },
  getters: {
    getAllUsers(state) {
      return state.users
    },
    getUsers(state) {
      return state.users.filter(user => !user.admin)
    },
    getUserById: state => id => state.users.find(user => user.id == id),
    // первый вариант работы с getters
    //  getUsersLength(state) {
    //    const suffix = 'Count users:'
    //    return `${suffix} ${state.users.length}`
    //  }
    // второй вариант работы с getters
    getUsersLength(state, getters) {
      const suffix = 'Count users:'
      return `${suffix} ${getters.getAllUsers.length}`
    }
  }
})
