<template>
  <div>
    <br>
    <!--<center><img :src="'images/tapcheck.png'" width="300px"></center>-->
    <div class="row" id="login">
      <div id="loading" v-if="loader">
      </div>
      <div class="col s12">
        <div class="card-panel">
          <center><h6>Inicio de sesión</h6></center>
          <form autocomplete="off" @submit.prevent="login">
            <div class="row">
              <div class="input-field col s12">
                <input id="username" type="text" class="validate" v-model="username">
                <label for="username">Usuario</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <input id="password" type="password" class="validate" v-model="password">
                <label for="password">Contraseña</label>
              </div>
            </div>
            <center>
              <a class="waves-effect waves-light btn green darken-2" href="javascript:void(0)"
                 v-on:click="login">Iniciar Sesión</a>
            </center>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Login",
    data() {
      return {
        username: null,
        password: null,
        error: false,
        loader: false
      }
    },
    created() {
      var _this = this;
      console.log(this.$route.path);
    },
    methods: {
      login: function () {
        var app = this;
        this.$auth.login({
          params: {
            username: app.username,
            password: app.password
          },
          success: function (resp) {
            console.log(resp);
            /*  console.log(resp.data.access_token);
              this.$auth.user(resp.data.access_token);*/
          },
          error: function (resp) {
            console.log(resp);
            // alert(resp)
          },
          rememberMe: true,
          redirect: '/register',
          fetchUser: true,
        });
      }
    }
  }
</script>

<style scoped>

</style>
