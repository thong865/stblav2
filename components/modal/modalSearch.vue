<script setup>
import { ref } from "vue";
import { useSearchStore } from '@/stores/storeSearch'
const StoreSearch = useSearchStore()
const route = useRoute();
const { data: provinces } = await useAsyncData("searchProvicne", () =>
  $fetch(`/api/city`)
);
const { data: categories } = await useAsyncData("searchCategory", () =>
  $fetch(`/api/categories`)
);
const modalSearch = ref(false)
const selectDistrict = ref(Object);

const qersearch = ref({
  keyword: ref(''),
  priceMin: ref(0),
  priceMax: ref(56646664),
  cat: ref(0),
  province: ref(0),
  district: ref(0),
});
watchEffect(()=> {
  if(qersearch.value?.province){
    const districts = provinces.value?.find((t) => t.id == qersearch.value?.province);
    qersearch.value.district.value = ref(0);
    selectDistrict.value = districts?.districts;
    // qersearch.value.provinceTitle = ref(districts?.title)
    qersearch.value.districtTitle = ref('')
  }
})

onMounted(() => {
  getDistricts()
})

const getDistricts = () => {
  const districts = provinces.value.find((t) => t.id == route.query?.province || 1);
  qersearch.value.district = route.query?.district || ref(0);
  qersearch.value.cat = route.query?.cat || ref(0);
  selectDistrict.value = districts.districts;
  // qersearch.value.provinceTitle = ref(districts?.title)
}

const buidQuery = async () => {
  StoreSearch.keyword = ref(qersearch.value)
  await navigateTo({ path: "/market/search", query: qersearch.value });
  modalSearch.value = false
};
</script>
<template>
  <div>
    <input type="checkbox" id="mdsearch" class="modal-toggle" v-model="modalSearch" />
    <div class="modal modal-middle">
      <div class="modal-box sm:w-full modal-bottom">
        <label for="mdsearch" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
        <form class="mt-5" v-on:submit.prevent="buidQuery">
          <div class="relative">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor"
                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
            <input type="search" name="q" id="default-search" v-model="qersearch.keyword"
              class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              placeholder="ຄົ້ນຫາສິນຄ້າ" />
            <button type="submit"
              class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">
              {{$t('button.search')}}
            </button>
            
          </div>
        </form>
        <div class="flex flex-col space-y-3">
          <label for="selprovice">{{$t('form.search_province')}}</label>
          <select class="select w-full select-bordered" id="selprovice" v-model="qersearch.province">
            <option value="0" selected>{{$t('form.search_all')}}</option>
            <option v-for="(pv, pin) in provinces" :key="pin" :value="pv.id">
              {{ pv.title }}
            </option>
          </select>
          <label for="seldistrict">{{$t('form.search_district')}}</label>
          <select class="select w-full select-bordered" id="seldistrict" v-model="qersearch.district">
            <option value="0" selected>{{$t('form.search_all')}}</option>
            <option v-for="(tp, is) in selectDistrict" :key="is" :value="tp.id">
              {{ tp.title }}
            </option>
          </select>
          <label for="selcategory">{{$t('form.search_category')}}</label>
          <select class="select w-full select-bordered" id="selcategory" v-model="qersearch.cat">
            <option value="0" selected>{{$t('form.search_all')}}</option>
            <option v-for="(ct, ci) in categories" :key="ci" :value="ct.id">
              {{ ct.title }}
            </option>
          </select>
        </div>
        <label class="mt-5 py-3 sr-only">ຊ່ວງລາຄາ(LAK)</label>
        <div class="flex sr-only">
          <div class="flex-1">
            <div>
              <span>{{
                Number(Number(qersearch.priceMin)-100).toLocaleString("en-US")
              }}</span>
            </div>
            <input type="range" min="0" max="100" v-model="qersearch.priceMin"
              class="range range-xs transform rotate-180" />
          </div>
          <div class="flex-1">
            <div class="flex justify-between">
              <div></div>
              <span>{{
                Number(qersearch.priceMax).toLocaleString("en-US")
              }}</span>
            </div>
            <input type="range" min="0" max="100" v-model="qersearch.priceMax" class="range range-xs" />
          </div>
        </div>
        <!-- <div class="modal-action">
          <label for="mdsearch" class="btn">Yay!</label>
        </div> -->
      </div>
    </div>
  </div>
</template>