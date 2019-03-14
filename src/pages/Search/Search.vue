<!--  -->
<template>
  <div>
    <!--??-->
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand myown-navbar-brand" href="#">
            <img class="logoimg" alt="Minicare" src="../../common/images/logo.png">
          </a>
        </div>
      </div>
    </nav>
    <!--??-->
    <div class="input-group">
      <div class="input-group-btn">
        <!-- Button and dropdown menu -->
          <button type="button" class="btn btn-danger">Action</button>
          <button
            type="button"
            class="btn btn-danger dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <span class="caret"></span>
            <span class="sr-only">Toggle Dropdown</span>
          </button>
          <ul class="dropdown-menu">
            <li>
              <a href="#">Action</a>
            </li>
            <li>
              <a href="#">Another action</a>
            </li>
            <li>
              <a href="#">Something else here</a>
            </li>
            <li role="separator" class="divider"></li>
            <li>
              <a href="#">Separated link</a>
            </li>
          </ul>
      </div>
      <input type="text" class="form-control" aria-label="...">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  components: {}
};
</script>
<style>
.myown-navbar-brand {
  padding: 5px 15px;
}
.logoimg {
  width: 40px;
  height: 40px;
}
</style>
