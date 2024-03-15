<template>
    <transition name="fade" mode="out-in">
        <div class="card mb-4">
            <div class="card-body">
                <h5 class="card-title">ID: {{ subject.id }}</h5>
                <h6 class="card-subtitle mb-2 text-muted">Name: {{ subject.SName }}</h6>
                <h6 class="card-subtitle mb-2 text-muted">Credit : {{ subject.Credit}}</h6>
                <p class="card-text">Grade: {{ subject.Grade }}</p>
                <div class="d-flex gap-2">
                    <div v-if="isEdit">
                        <SubjectEdit></SubjectEdit>
                        <!-- <button class="btn btn-warning">Edit</button> -->
                    </div>
                    <div v-if="isDelete">
                        <button class="btn btn-danger">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
import SubjectEdit from '../components/SubjectEdit'
export default{
    name : "CardSubject.vue" , 
    props : ['subject' , 'buttonState' , 'isEdit' , 'isDelete'] ,
    components : {
        SubjectEdit
    } , 
    data(){
        return{
  
        }
    }
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