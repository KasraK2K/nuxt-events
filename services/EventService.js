import { apiClient } from '@/services/Service'

export default {
  getEvents() {
    return apiClient.get('/events')
  },

  getEvent(id) {
    return apiClient.get(`/events/${id}`)
  },
}
