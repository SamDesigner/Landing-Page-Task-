<template>
  <div>
      <NavSection />
      <HeroSection />
  </div>  
  
</template>

<script>
  import NavSection from './components/NavSection/NavSection.vue'
  import HeroSection from './components/HeroSection/HeroSection.vue'
export default {
  name: 'App',
  components: {
    NavSection,
    HeroSection
  }
}
</script>


