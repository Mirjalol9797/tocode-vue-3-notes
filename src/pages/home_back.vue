<template>
  <div>
    <Form @onSubmitForm="handleSubmit" />
    <List :items="notes" @onRemoveList="handleRemove" />
  </div>
</template>

<script>
import Form from '../components/Notes/Form.vue'
import List from '../components/Notes/List.vue'
export default {
  data() {
    return {
      notes: [
        {
          title: 'Learn vue3',
          tags: ['work']
        },
        {
          title: 'Finish course',
          tags: ['work', 'home']
        }
      ]
    }
  },
  mounted() {
    this.getNotes()
  },
  watch: {
    notes: {
      handler(updatedList) {
        localStorage.setItem('notes', JSON.stringify(updatedList))
      },
      deep: true // что бы сохранит действия
    }
  },
  methods: {
    getNotes() {
      const localNotes = localStorage.getItem('notes')
      if (localNotes) {
        this.notes = JSON.parse(localNotes)
      }
    },
    handleSubmit(note) {
      const item = {
        title: note,
        tags: []
      }
      this.notes.push(item)
    },
    handleRemove(index) {
      this.notes.splice(index, 1)
    }
  },
  components: {
    Form,
    List
  }
}
</script>

<style></style>
