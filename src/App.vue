<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <div class="container">
        <a href class="navbar-brand" @click.prevent>
          <img alt="Vue logo" src="./assets/logo.png" width="32">
          VUE LOGIN JWT
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">

              <li class="nav-item">
                <router-link to="/home" class="nav-link">
                  <!-- <font-awesome-icon icon="home" /> -->
                  Home
                </router-link>
              </li>
              <li v-if="!currentUser" class="nav-item">
                <router-link to="/register" class="nav-link">
                  <!-- <font-awesome-icon icon="user-plus" /> -->
                  Register
                </router-link>
              </li>
              <li v-if="!currentUser" class="nav-item">
                <router-link to="/login" class="nav-link">
                  <!-- <font-awesome-icon icon="sign-in-alt" /> -->
                  Login
                </router-link>
              </li>

              <li v-if="currentUser" class="nav-item">
                <router-link to="/profile" class="nav-link">
                  <font-awesome-icon icon="user" />
                  {{ currentUser.username }}
                </router-link>
              </li>
              <li v-if="currentUser" class="nav-item">
                <a class="nav-link" href @click.prevent="logOut">
                  <!-- <font-awesome-icon icon="sign-out-alt" /> -->
                  LogOut
                </a>
              </li>

            </ul>
  
        </div>
      </div>
    </nav>

    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      currentUser() {
        return this.$store.state.auth.user;
      }
    },
    methods: {
      logOut() {
        this.$store.dispatch('auth/logout');
        this.$router.push('/login');
      }
    }
  };
</script>