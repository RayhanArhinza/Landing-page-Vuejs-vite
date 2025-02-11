<template>
  <section id="home" class="min-h-screen flex items-center pt-16 bg-gradient-to-r from-indigo-50 to-blue-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row items-center justify-between">
        <div class="md:w-1/2 mb-8 md:mb-0">
          <h1
            v-motion
            :initial="{ opacity: 0, y: 100 }"
            :enter="{ opacity: 1, y: 0 }"
            class="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            Discover Amazing Products
          </h1>
          <p
            v-motion
            :initial="{ opacity: 0, y: 100 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 200 } }"
            class="text-xl text-gray-600 mb-8"
          >
            Experience innovation and quality in every product we offer.
          </p>
          <button
            v-motion
            :initial="{ opacity: 0, y: 100 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 400 } }"
            class="bg-primary text-white px-8 py-3 rounded-lg hover:bg-indigo-600 transition-colors"
          >
            Shop Now
          </button>
        </div>
        <div
          v-motion
          :initial="{ opacity: 0, x: 100 }"
          :enter="{ opacity: 1, x: 0, transition: { delay: 600 } }"
          class="md:w-1/2"
        >
          <img src="/hero-image.svg" alt="Hero" class="w-full h-auto" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection' // Update component name
}
</script>
