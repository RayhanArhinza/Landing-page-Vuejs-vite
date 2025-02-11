<template>
  <section id="about" class="py-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row items-center justify-between">
        <div
          v-motion
          :initial="{ opacity: 0, x: -100 }"
          :enter="{ opacity: 1, x: 0 }"
          class="md:w-1/2 mb-8 md:mb-0"
        >
          <img src="/assets/burger.png" alt="About Us" class="w-full h-auto rounded-lg shadow-lg" />
        </div>
        <div class="md:w-1/2 md:pl-12">
          <h2
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :enter="{ opacity: 1, y: 0 }"
            class="text-3xl md:text-4xl font-bold mb-6"
          >
            About Us
          </h2>
          <p
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 200 } }"
            class="text-gray-600 mb-6"
          >
            We are passionate about delivering high-quality products that enhance your life. Our commitment to innovation and customer satisfaction drives everything we do.
          </p>
          <div
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 400 } }"
            class="grid grid-cols-2 gap-6"
          >
            <div class="text-center">
              <h3 class="text-2xl font-bold text-primary mb-2">1000+</h3>
              <p class="text-gray-600">Happy Customers</p>
            </div>
            <div class="text-center">
              <h3 class="text-2xl font-bold text-primary mb-2">50+</h3>
              <p class="text-gray-600">Products</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
