<template>
  <section class="container-fluid">
    <p class="text-center display-5 fw-bold mt-3">
      ENROLLMENT
    </p>
    <h3 class="text-center py-3">{{ semesters }}</h3>
    <div class="d-flex justify-content-center">
      <div class="col-md-3 pb-3">
        <select class="form-select" v-model="selectSem" @change="reqData(selectSem)">
          <option value="0" selected>Year 1 , Semester 1</option>
          <option value="1">Year 1 , Semester 2</option>
          <option value="2">Year 2 , Semester 1</option>
          <option value="3">Year 2 , Semester 2</option>
        </select>
      </div>

    </div>
  </section>
  <div class="d-flex justify-content-center mt-2 gap-3 mb-4">
    <SubjectAdd></SubjectAdd>
    <button class="btn btn-warning" @click="isEdit=!isEdit">Edit</button>
    <button class="btn btn-danger" @click="isDelete=!isDelete">Delete</button>
  </div>
  <section class="container-fluid">
    <div class="container">
      <div class="row">
        <div class="col-md-4" v-for="(subjectItem, id ) in subject" :key="id" data-aos="fade-in">
          <CardSubject :subject="subjectItem" :key="id" :isEdit="isEdit" :isDelete="isDelete"></CardSubject>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import CardSubject from '../components/CardSubject'
import SubjectAdd from '../components/SubjectAdd'

AOS.init();
export default {
  components: {
    CardSubject ,
    SubjectAdd , 
  },
  data() {
    return {
      subject: [] ,
      selectSem : 0 ,
      year : "" ,
      semestersList: [
        'Year 1 , Semester 1',
        'Year 1 , Semester 2',
        'Year 2 , Semester 1',
        'Year 2 , Semester 2'
      ],
      semesters : "Year 1 , Semester 1" ,
      isEdit : false ,
      isDelete : false ,
      buttonState : 0 
    }
  },
  methods: {
    reqData(semIndex) {
      console.log(semIndex)
      const sem = ['First2565', 'Second2565', 'First2566', 'Second2566']
      this.semesters = this.semestersList[semIndex]
      this.getData(sem[semIndex])
    } ,
    async getData(endpoint){
      const res = await fetch("http://localhost:3000/"+endpoint)
      const data = await res.json()
      this.subject = data
    }
  }
  ,
  async mounted() {

    const res = await fetch("http://localhost:3000/First2565")
    const data = await res.json()
    this.subject = data

  }
}
</script>
