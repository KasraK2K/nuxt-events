import EventService from '@/services/EventService'

export const state = () => ({
  events: [],
  event: {},
})

export const mutations = {
  SET_EVENTS(state, events) {
    state.events = events
  },
  SET_EVENT(state, event) {
    state.event = event
  },
}

export const actions = {
  fetchEvents({ commit, state }, refresh = false) {
    if (refresh || !state.events.length)
      return EventService.getEvents().then((response) => {
        commit('SET_EVENTS', response.data)
      })
  },
  fetchEvent({ commit }, id) {
    return EventService.getEvent(id).then((response) => {
      commit('SET_EVENT', response.data)
    })
  },
}
