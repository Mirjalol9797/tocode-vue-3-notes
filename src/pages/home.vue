<template>
  <div>
    <ul>
      <li v-for="user in getUsers" :key="user.id">
        <p>{{ user.id }}</p>
        <p>{{ user.name }}</p>
        <p>{{ user.admin }}</p>
      </li>
    </ul>
    <div>{{ getUsersLength }}</div>
    <input v-model="userId" type="text" />
    <div>
      {{ getUserById }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userId: 1
    }
  },
  computed: {
    getUsers() {
      return this.$store.getters.getUsers
    },
    getUsersLength() {
      return this.$store.getters.getUsersLength
    },
    getUserById() {
      return this.$store.getters.getUserById(this.userId) || 'user not found'
    }
  }
}
</script>
