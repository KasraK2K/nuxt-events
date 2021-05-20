<template>
  <div>
    <h1>Events</h1>

    <EventCard
      v-for="(event, index) in events"
      :key="index"
      :event="event"
      :data-index="index"
    />
  </div>
</template>

<script>
import EventCard from '@/components/EventCard'

export default {
  head() {
    return {
      title: 'Event Listing',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Where you can find all the events in your neighborhood',
        },
      ],
    }
  },
  asyncData({ $axios, error }) {
    return $axios
      .get('http://localhost:3500/events')
      .then((response) => {
        return {
          events: response.data,
        }
      })
      .catch((e) => {
        error({
          statusCode: 503,
          message: 'Unable to Fetch events at this time. Please try again.',
        })
      })
  },
  components: {
    EventCard,
  },
}
</script>
