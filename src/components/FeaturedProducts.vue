<template>
  <section id="products" class="py-20 bg-gradient-to-r from-blue-100 via-teal-100 to-indigo-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2
        v-motion
        :initial="{ opacity: 0, y: 50 }"
        :enter="{ opacity: 1, y: 0 }"
        class="text-3xl md:text-4xl font-extrabold text-center mb-24 text-indigo-900"
      >
        Our Featured Products
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
        <div
          v-for="(product, index) in products"
          :key="index"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: index * 200 } }"
          class="relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-shadow transform hover:scale-105 card"
        >
          <!-- Image container -->
          <div class="relative -top-16 w-34 h-34 mx-auto mb-[-8px]">
            <img
              :src="`/assets/${product.image}`"
              :alt="product.name"
              class="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
            />
          </div>
          <!-- Card content -->
          <div class="p-6 pt-0">
            <h3 class="text-xl font-semibold text-indigo-900 mb-4 text-center">
              {{ product.name }}
            </h3>
            <p class="text-gray-600 mb-4 text-center">{{ product.description }}</p>
            <div class="flex justify-between items-center">
              <span class="text-primary font-bold">${{ product.price }}</span>
              <button class="bg-gradient-to-r from-teal-500 to-indigo-500 text-white px-4 py-2 rounded-full hover:bg-teal-600 transition-colors">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const products = [
  {
    name: "Premium Product 1",
    description: "High-quality product with amazing features.",
    price: "99.99",
    image: "burger.png"
  },
  {
    name: "Premium Product 2",
    description: "Innovative design with superior performance.",
    price: "149.99",
    image: "burger.png"
  },
  {
    name: "Premium Product 3",
    description: "Ultimate solution for your needs.",
    price: "199.99",
    image: "burger.png"
  }
];
</script>

<style scoped>
/* Image container styling */
.relative img {
  transition: transform 0.3s ease;
  margin-bottom: -50px;
}

.relative img:hover {
  transform: scale(1.1);
}

/* Card hover effects */
button:hover {
  background-color: #2b6cb0;
  transition: background-color 0.3s ease;
}

/* Media query to adjust card padding on mobile */
@media (max-width: 767px) {
  .card {
    padding-top: 10px;
  }
}
</style>
