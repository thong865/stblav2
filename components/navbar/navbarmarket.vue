
<script setup>
const route = useRoute()
const { provinces } = await useCity()
const provinceTitle = await provinces
</script>

<style>
</style>
<template>
  <div
    class="py-3 px-5 lg:px-0 md:px-0 bg-slate-100 bg-opacity-50 backdrop-blur backdrop-filter firefox:bg-opacity-90 sticky top-0 z-[999]"
  >
    <div class="container lg:w-9/12 mx-auto flex">
      <div>
        <div class="flex">
          <NuxtLink to="/" class="flex gap-3">
            <img src="/stb.svg" class="h-9 mt-2" alt="" />
            <div class="font-bold text-md text-primary">ຂາຍດິນ<br/>ຂາຍເຮືອນ</div>
          </NuxtLink>
          <div class="flex-1 hidden lg:block md:block ml-5"></div>
        </div>
      </div>
      
      <div class="flex-1 px-10">
        <div class="rounded-xl border flex p-2 relative">
            <label for="mdsearch" class="btn btn-sm absolute">ຕົວເລືອກຄົ້ນຫາ</label>
            <label for="mdsearch" class="flex-1 flex gap-2 input input-sm pl-[120px] bg-transparent truncate">
              <div class="badge badge-info gap-2 mt-1 py-2" v-if="route.query.province && route.query.province != 0">
                {{ provinceTitle.find((t)=> t.id == route.query.province)?.title }}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-4 h-4 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </div>
              <div class="badge badge-info gap-2 mt-1 py-2" v-if="route.query.district && route.query.district != 0">
                {{ (provinceTitle.find((t)=> t.id == route.query.province).districts).find((dt)=>dt.id == route.query.district)?.title }}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-4 h-4 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </div>
              <div class="badge badge-info gap-2 mt-1 py-2" v-if="route.query.cat && route.query.cat != 0">
                {{route.query.cat}}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-4 h-4 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </div>
              <div v-if="route.query.keyword">{{ route.query.keyword || '' }}</div>
            </label>
            <label for="mdsearch" class="btn btn-sm absolute right-2">ຄົ້ນຫາ</label>
          </div>
      </div>

      <div class="flex">
        <div class="flex">
          <!-- <div class="dropdown dropdown-bottom">
            <label tabindex="0" class="btn gap-2 btn-sm">{{ActiveLocales.name}}</label>
            <ul
              tabindex="0"
              class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li v-for="(ilang,index) in availableLocales" :key="index"><NuxtLink :to="switchLocalePath(ilang.code)">{{ilang.name}}</NuxtLink></li>
            </ul>
          </div> -->
          <!-- <button class="btn px-5">O</button>
          <button class="btn px-5">LOGIN</button> -->
          <!-- <ModalCanel /> -->
        </div>
      </div>
    </div>
  </div>
</template>
