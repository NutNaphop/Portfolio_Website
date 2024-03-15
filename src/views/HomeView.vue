<template>
  <section class="container-fluid">
    <CoverWebsite></CoverWebsite>
  </section>
  <section class="container-fluid bg-dark text-light">
    <PersonDetail></PersonDetail>
  </section>
  <section class="container-fluid p-5" data-aos="fade-in">
    <HobbySkill></HobbySkill>
  </section>
</template>


<script>
import CoverWebsite from '../components/CoverWebsite'
import PersonDetail from '../components/PersonDetail'
import HobbySkill from '../components/HobbieSkill'
import AOS from 'aos';
import 'aos/dist/aos.css'
AOS.init();
export default {
  components: {
    CoverWebsite,
    PersonDetail,
    HobbySkill
  }
}
</script>