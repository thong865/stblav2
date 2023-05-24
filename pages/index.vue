
<script setup>
const config = useRuntimeConfig();
const {
  data: Category,
  pending: PdCategory,
  error: ErCategory,
} = await useAsyncData("CategoryMarkets", () => $fetch("/api/existCategories"));
const {
  data: Carousel,
  pending: PdCarousel,
  error: ErCarousel,
} = await useAsyncData("CarouelMarkets", () =>
  $fetch("/api/carousel",{query:{cat:'MARK'}})
);
const { data, pending, error } = await useAsyncData("markets", () =>
  $fetch("/api/productsList")
);
</script>
<template>
  <div>
    <CarouselMkhome :thumnail="Carousel" />
    <section class="py-10">
      <div class="md:w-9/12 px-5 md:px-0 mx-auto flex-col lg:flex-row-reverse">
        <div>
          <div class="stats shadow" v-for="(tt, index) in Category" :key="index">
            <div class="stat">
              <div class="stat-title">{{ tt.title }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="py-10">
      <div class="md:w-9/12 px-5 md:px-0 mx-auto flex-col lg:flex-row-reverse">
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          <CardProductCard :items="t" v-for="(t, i) in data?.data" :key="i" />
        </div>
      </div>
    </section>
  </div>
</template>
<style></style>
