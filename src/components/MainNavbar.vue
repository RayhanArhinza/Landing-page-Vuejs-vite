<template>
  <nav class="fixed w-full bg-white shadow-lg z-50">
    <div class="max-w-7xl mx-auto px-4">
      <div class="flex justify-between items-center h-16">
        <div class="flex items-center">
          <img src="../assets/logo.svg" alt="Logo" class="h-8 w-auto" />
        </div>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center space-x-8">
          <a href="#home" class="text-gray-700 hover:text-primary transition-colors">Home</a>
          <a href="#products" class="text-gray-700 hover:text-primary transition-colors">Products</a>
          <a href="#about" class="text-gray-700 hover:text-primary transition-colors">About</a>
          <a href="#contact" class="text-gray-700 hover:text-primary transition-colors">Contact</a>
        </div>

        <!-- Mobile menu button -->
        <button @click="isOpen = !isOpen" class="md:hidden">
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path v-if="!isOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="transform -translate-x-full"
      enter-to-class="transform translate-x-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="transform translate-x-0"
      leave-to-class="transform -translate-x-full"
    >
      <div v-if="isOpen" class="fixed inset-0 z-40">
        <div class="fixed inset-0 bg-black bg-opacity-50" @click="isOpen = false"></div>
        <div class="fixed inset-y-0 left-0 w-64 bg-white shadow-lg">
          <div class="flex flex-col py-6 space-y-4">
            <a href="#home" @click="isOpen = false" class="px-6 py-2 text-gray-700 hover:bg-gray-100">Home</a>
            <a href="#products" @click="isOpen = false" class="px-6 py-2 text-gray-700 hover:bg-gray-100">Products</a>
            <a href="#about" @click="isOpen = false" class="px-6 py-2 text-gray-700 hover:bg-gray-100">About</a>
            <a href="#contact" @click="isOpen = false" class="px-6 py-2 text-gray-700 hover:bg-gray-100">Contact</a>
          </div>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
</script>
