
<script setup>
import { useSearchStore } from '@/stores/storeSearch'
const StoreSearch = useSearchStore()
const route = useRoute();
const { provinces } = await useCity()
const keysearch = ref(computed(()=> {
  let keyword = `keyword=${route.query.keyword}`;
  return keyword
}))
const { data, pending, error, refresh } = await useAsyncData(
  'searQuery',
  () => $fetch('/api/mksearch',{query:{keyword:route.query.keyword,province: route.query.province,district:route.query.district,cat:route.query.cat}})
)

const resultLength = computed(() => {
  return data && data?.value.length || 0
})
watch(()=> route.query, ()=> {
  refresh()
})
</script>
<style></style>
<template>
  <div>
    <div class="hero bg-base-200">
      <div class="hero-content w-9/12 mx-auto flex-col lg:flex-row-reverse">
        <div class="flex-1">
          <h1 class="text-xl" v-if="route?.query?.keyword">ຜົນການຄົ້ນຫາ: {{ route?.query?.keyword }}</h1>
          <p>ຜົນລັບທັງໝົດ: {{ resultLength }} ລາຍການ</p>
        </div>
      </div>
    </div>
    <section class="mt-10 pb-10">
      <div class="w-full px-5 md:px-0 md:w-9/12 mx-auto flex-col lg:flex-row-reverse">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-2">
          <CardProductCard :items="t" v-for="(t, i) in data" :key="i" />
        </div>
      </div>
    </section>
  </div>
</template>
