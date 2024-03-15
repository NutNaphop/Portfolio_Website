<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div class="container-fluid justify-content-center">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link text-danger" href="#">
                  <router-link to='/' class="text-light fs-4">HOME</router-link>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <router-link to='/enroll' class="text-light fs-4">ENROLLMENT</router-link>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
</template>
<script>
    export default{
        name : "NavBar" 
    }
</script>