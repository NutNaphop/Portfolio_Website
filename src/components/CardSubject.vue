<template>
    <transition name="fade" mode="out-in">
        <div class="card mb-4">
            <div class="card-body">
                <h5 class="card-title">ID: {{ subject.id }}</h5>
                <h6 class="card-subtitle mb-2 text-muted">Name: {{ subject.SName }}</h6>
                <p class="card-text">Grade: {{ subject.Grade }}</p>
            </div>
        </div>
    </transition>
</template>

<script>
export default{
    name : "CardSubject.vue" , 
    props : ['subject'] 
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>