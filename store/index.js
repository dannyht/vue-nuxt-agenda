import Vuex from 'vuex';
import _ from "lodash";

export const store = new Vuex.Store({
  state: {
    errors: {},
    contacts: [
      {
        name: 'Al Pacino',
        phone: '0123456783',
        group: 'Friends'
      },
      {
        name: 'Antony Hopkins',
        phone: '0123456782',
        group: 'Friends'
      },
      {
        name: 'Brad Pitt',
        phone: '0123456781',
        group: 'Friends'
      },
      {
        name: 'Tommy Lee Jones',
        phone: '0123456780',
        group: 'Friends'
      }
    ]
  },

  getters: {
    errors(state) {
      return state.errors;
    },
    contacts(state) {
      return state.contacts && state.contacts.length > 0 ? state.contacts : [];
    },
    grouped(state) {
      return _.groupBy(state.contacts, (item) => {
        return item.name.charAt(0);
      })
    },
  },

  mutations: {
    SET_ERRORS(state, data) {
      state.errors = data;
    }
  },

  actions: {
    setErrors({ commit }, errors) {
      commit("SET_ERRORS", errors);
    }
  }
});
