<template>
  <div class="container">
    <header class="jumbotron">
      <h3>Profile</h3>
      <h3>
        <strong>{{currentUser.username}}</strong>
      </h3>
      <p>
        <strong>Id:</strong>
        {{currentUser.id}}
      </p>
      <p>
        <strong>Email:</strong>
        {{currentUser.email}}
      </p>
      <p>
        <strong>Member Since:</strong>
        {{currentUser.created_at | formatDate}}
      </p>
      <p>
        <strong>Token:</strong>
        {{currentUser.accessToken.substring(0, 20)}} ... {{currentUser.accessToken.substr(currentUser.accessToken.length - 20)}}
      </p>
    </header>
  </div>
</template>

<script>
  export default {
    name: 'Profile',
    computed: {
      currentUser() {
        return this.$store.state.auth.user;
      }
    },
    mounted() {
      if (!this.currentUser) {
        this.$router.push('/login');
      }
    }
  };
</script>
