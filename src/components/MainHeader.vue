<template>
  <header id="home" class="min-h-screen flex items-center bg-gradient-to-r from-yellow-100 via-orange-100 to-red-100 pt-16 relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row items-center justify-between">
        <!-- Text Section -->
        <div class="md:w-1/2 text-center md:text-left" v-motion-slide-visible-once-left>
          <h1 class="text-5xl md:text-7xl font-extrabold text-orange-900 mb-6">
            Indulge in Delicious Delights
          </h1>
          <p class="text-lg text-orange-600 mb-8">
            Treat yourself to the best flavors crafted with passion and care.
          </p>
          <a href="#menu" class="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-full shadow-lg transform hover:scale-110 hover:shadow-2xl transition-transform ease-in-out duration-300">
            Order Now
          </a>
        </div>
        <!-- Image Section -->
        <div class="md:w-1/2 mt-8 md:mt-0 relative" v-motion-slide-visible-once-right>
          <!-- Decorative Elements -->
          <div class="absolute top-0 -left-10 w-64 h-64 bg-yellow-300 rounded-full opacity-30 animate-pulse"></div>
          <img src="/assets/burger.png" alt="Delicious Burger" class="w-full max-w-lg mx-auto transform hover:scale-110 transition-transform relative z-10" />
          <div class="absolute bottom-0 -right-10 w-48 h-48 bg-red-400 rounded-full opacity-20 animate-bounce-slow"></div>
        </div>
      </div>
    </div>
    <!-- Floating Elements -->
    <div class="absolute top-10 left-1/3 w-12 h-12 bg-orange-400 rounded-full opacity-50 animate-float"></div>
    <div class="absolute bottom-20 right-1/4 w-16 h-16 bg-red-300 rounded-full opacity-40 animate-float-reverse"></div>
    <div class="absolute top-32 right-10 w-20 h-20 bg-yellow-200 rounded-full opacity-60 animate-float"></div>
  </header>
</template>

<style scoped>
/* Custom Animations */
@keyframes bounceSlow {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-15px);
  }
}

.animate-bounce-slow {
  animation: bounceSlow 4s infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 0.3;
  }
  50% {
    opacity: 0.6;
  }
}

.animate-pulse {
  animation: pulse 2s infinite;
}

@keyframes spinSlow {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.animate-spin-slow {
  animation: spinSlow 8s linear infinite;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.animate-float {
  animation: float 5s ease-in-out infinite;
}

@keyframes floatReverse {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(10px);
  }
}

.animate-float-reverse {
  animation: floatReverse 5s ease-in-out infinite;
}
</style>
