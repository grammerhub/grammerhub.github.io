<template>
  <section class="relative">
    <div class="relative z-10 max-w-screen-xl mx-auto px-4 py-28 md:px-8">
      <div class="space-y-12 max-w-4xl mx-auto text-center">
        <h2 class="text-4xl mx-auto md:text-6xl lg:text-8xl font-mono">
          <slot />
        </h2>
        <p class="max-w-2xl mx-auto">
          <ContentSlot :use="$slots.description" unwrap="p" />
        </p>
        <div class="">
          <slot name="cta" />
        </div>

      </div>
    </div>
    <div class="absolute inset-0 m-auto max-w-xs h-[357px] blur-[118px] sm:max-w-md md:max-w-lg" style="
            background: linear-gradient(
              106.89deg,
              rgba(192, 132, 252, 0.11) 15.73%,
              rgba(14, 165, 233, 0.41) 15.74%,
              rgba(232, 121, 249, 0.26) 56.49%,
              rgba(79, 70, 229, 0.4) 115.91%
            );
          ">
    </div>
  </section>
</template>