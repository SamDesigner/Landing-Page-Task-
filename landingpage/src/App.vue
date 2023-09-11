<template>
  <div class="relative">
      <div class="fixed w-full">
        <NavSection />
      </div>
     <div>
        <HeroSection />
     </div>
     <div>
        <BrandSection />
     </div>
     <div>
        <ColabPage />
     </div>
     <div>
        <QuotesSection />
     </div>
     <div>
        <AdSection />
     </div>
     <div>
      <BrainstormPage />
     </div>
     <div>
        <StatsSection />
     </div>
     <div>
      <TestimonialPage />
     </div>
     <div>
      <FooterPage />
     </div>
  </div>    
  
</template>

<script>
  import NavSection from './components/NavSection/NavSection.vue'
  import HeroSection from './components/HeroSection/HeroSection.vue'
  import BrandSection from './components/BrandSection/BrandSection.vue'
  import ColabPage from './components/ColabPage/ColabPage.vue'
  import QuotesSection from './components/QuotesSection/QuotesSection.vue'
  import AdSection from './components/AdSection/AdSection.vue'
  import BrainstormPage from './components/BrainstormPage/BrainstormPage.vue'
  import StatsSection from './components/StatsSection/StatsSection.vue'
  import TestimonialPage from './components/TestimonialPage/TestimonialPage.vue'
  import FooterPage from './components/FooterPage/FooterPage.vue'
export default {
  name: 'App',
  components: {
    NavSection,
    HeroSection,
    BrandSection,
    ColabPage,
    QuotesSection,
    AdSection,
    BrainstormPage,
    StatsSection,
    TestimonialPage,
    FooterPage
  }
}
</script>


