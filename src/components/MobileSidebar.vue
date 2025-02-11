<template>
  <div v-if="isOpen" class="fixed inset-0 z-50 md:hidden">
    <div class="fixed inset-0 bg-black bg-opacity-50" @click="closeSidebar"></div>
    <div class="fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-xl">
      <div class="flex flex-col h-full">
        <div class="p-4 bg-gradient-to-r from-purple-600 to-pink-600">
          <button @click="closeSidebar" class="text-white">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div class="flex-1 pt-5 pb-4 overflow-y-auto">
          <div class="px-2 space-y-1">
            <a href="#" class="block px-3 py-2 rounded-md text-purple-600 hover:bg-purple-100">Home</a>
            <a href="#" class="block px-3 py-2 rounded-md text-purple-600 hover:bg-purple-100">Products</a>
            <a href="#" class="block px-3 py-2 rounded-md text-purple-600 hover:bg-purple-100">About</a>
            <a href="#" class="block px-3 py-2 rounded-md text-purple-600 hover:bg-purple-100">Contact</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MobileSidebar',
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    closeSidebar() {
      this.isOpen = false
    }
  }
}
</script>
