<template>
  <div class="note-form__wrapper">
    <form class="note-form" @submit.prevent="onSubmit">
      <textarea required v-model="value" placeholder="Type ur note" />
      <TagsList :items="tags" @onItemClick="handleTagClick" />
      <button class="btn btnPrimary" type="submit">Add new note</button>
    </form>
  </div>
</template>

<script>
import TagsList from '../UI/TagsList.vue'
export default {
  data() {
    return {
      value: '',
      tags: ['home', 'work', 'travel']
    }
  },
  methods: {
    onSubmit() {
      this.$emit('onSubmitForm', this.value)
      this.value = ''
    },
    handleTagClick(tag) {}
  },
  components: {
    TagsList
  }
}
</script>

<style lang="scss">
.note-form__wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.note-form {
  max-width: 600px;
  textarea {
    margin-bottom: 0;
  }
}
</style>
