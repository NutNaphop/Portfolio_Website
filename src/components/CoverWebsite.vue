<template>
  <div class="d-flex align-items-center bg-light">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-md-4">
          <div class="d-inline-block animate__animated animate__fadeIn">
            <img src="../../static/person2_crop.png" alt="Profile" class="w-100 h-auto">
          </div>
        </div>
        <div class="text-lg-start text-center col-lg-6 col-md-4 d-flex align-items-center">
          <div class="slide-in-right">
            <h1 class="display-1">HI ! !</h1>
            <h2 class="display-4 fw-2">I'm Naphop Khumchawna</h2>
            <h2 class="display-4">From Computer Science</h2>
          </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CoverWebsite'
}
</script>

<style>
@keyframes fadeIn {
  0% {opacity: 0;}
  100% {opacity: 1;}
}

.animate__animated.animate__fadeIn {
  animation-name: fadeIn;
  animation-duration: 2s;
}

@keyframes slideInRight {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

.slide-in-right {
  animation: slideInRight 2s forwards;
}
</style>