
<script setup>
const route = useRoute()
import { ref } from "vue";
const config = useRuntimeConfig()
const Contracts = ref();
const { data } = await useAsyncData("productDetail", () =>
  $fetch(`/api/productDetail`, { query: { id: route.params.id } })
);
const { data: stbCts } = await useAsyncData("listStbContract", () =>
  $fetch(`/api/stbcontract`)
);
useSeoMeta({
  title: 'ປະກາດຂາຍ ດິນ ແລະ ເຮືອນ ຂອງ ທະນາຄານເອັສທີ ຈຳກັດ',
  ogTitle: 'ທະນາຄານ ເອັສທີ ຈຳກັດ',
  description: data.value.title,
  ogDescription: data.value?.title,
  ogImage: config.public.streamBase+ data.value?.thumails[0]?.file ,
})
Contracts.value = {
  title: data.value.title,
  village: data.value.village,
  district: data.value.city.title,
  province: data.value.city.province.title,
  price: data.value.price,
  ccy: data.value.ccy,
  category: data.value.category.title,
  area: data.value.area,
};
const locations = reactive({
  map_lon: data.value.map_lon,
  map_lat: data.value.map_lat,
})
const count = ref(100);
const increment = () => count.value++;


const pView = ref(computed(() => {
  return data.value?.actions?.find(t => t.ac_type == 'V')?.count || 0
}))
const pLike = ref(computed({
  get() {
    return data.value?.actions?.find(t => t.ac_type == 'L')?.count || 0
  },
  set(newValue) {
    return newValue
  }
}))
const MeLike = () => {
  pLike.value = Number(pLike.value) + 1
}
</script>

<style></style>
<template>
  <div>
    <ContractFormCract />
    <section>
      <div class="md:w-9/12 mx-auto md:flex relative">
        <div class="md:w-8/12 mx-auto pb-10">
          <CarouselMkfull :thumnail="data.thumails" />
          <div class="flex-1 px-5 md:px-0">
            <div class="flex justify-between">
              <p class="text-xl md:text-2xl py-3">{{ data?.title }}</p>
              <div class="flex gap-1 py-3">
                <button class="btn gap-2 btn-sm">{{ pView }} <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </button>
                <button class="btn gap-2 btn-sm" @click="pLike = pLike++">{{ pLike }} <svg
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
                  </svg>
                </button>
                
              </div>
            </div>
            <div class="flex gap-3">
              <div class="stats">
                <div class="stat">
                  <div class="stat-title">ເນື້ອທີ່</div>
                  <div class="stat-value text-[20pt]">{{ data.area }}</div>
                </div>
              </div>
              <div class="stats">
                <div class="stat">
                  <div class="stat-title">ທີ່ຢູ່</div>
                  <div class="stat-desc text-[12pt]">{{ Contracts.village }} {{ Contracts.district }} {{
                    Contracts.province }}</div>
                </div>
              </div>
            </div>
            <div class="py-4 px-2">
              <div v-html="data.content"></div>
              <ProductLocation :data="locations" class="mt-10" />
            </div>
          </div>
        </div>
        <ProductViewContract :data="Contracts" :stbcon="stbCts" class="sticky top-[100px]" />
      </div>
    </section>
  </div>
</template>
