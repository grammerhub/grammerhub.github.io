<template>
  <NuxtLink :href="href"
    class="text-sm md:text-base px-10 py-5 uppercase font-bold border-2 inline-block transition-colors"
    :class="variant[type]">
    <ContentSlot :use="$slots.default" unwrap="p" />
  </NuxtLink>
</template>

<script setup>
defineProps(
  {
    href: String,
    type: {
      type: String,
      default: 'primary',
    }
  }
)

const variant = {
  primary: 'border-indigo-800 text-indigo-800 hover:bg-indigo-800 hover:text-white',
  secondary: 'text-white  bg-transparent border-white hover:bg-white hover:text-indigo-800',
}
</script>