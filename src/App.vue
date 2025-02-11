<script setup>
import MainNavbar from './components/MainNavbar.vue'
import FeaturedProducts from './components/FeaturedProducts.vue'
import AboutUs from './components/AboutUs.vue'
import SiteFooter from './components/SiteFooter.vue'
import MainHeader from './components/MainHeader.vue'
</script>

<template>
  <div class="min-h-screen">
    <MainNavbar /> <!-- Add this line to use Navbar -->
    <MainHeader />
    <main>
      <HeroSection />
      <FeaturedProducts />
      <AboutUs />
    </main>
    <SiteFooter />
  </div>
</template>
