
<script setup>
const { locale } = useI18n()
</script>

<style>
</style>
<template>
  <div class="bg-primary hidden lg:block md:block">
    <div class="flex container lg:w-9/12 mx-auto text-sm">
      <div class="flex-1">
        <select v-model="locale">
        <option value="lo">lo</option>
        <option value="en">en</option>
      </select>
        <ul class="menu menu-horizontal p-0">
          <!-- <li v-for="(t,i) in $t('top-nav-left')" :key="i"><a class="py-1 text-slate-200">{{t.title}}</a></li> -->
        </ul>
      </div>
      <div class="flex-none">
        <ul class="menu menu-horizontal p-0">
          <li><NuxtLink to="" class="py-1 text-slate-200">ສາຂາ / ໜ່ວຍບໍລິການ</NuxtLink></li>
          <li>
            <NuxtLink to="/careers" class="py-1 text-slate-200"
              >ສະໝັກວຽກ</NuxtLink
            >
          </li>
          <li><NuxtLink to="/about" class="py-1 text-slate-200">ກ່ຽວກັບ ທອທ</NuxtLink></li>
          <li tabindex="0">
            <a class="py-1 text-slate-200">
              ພາສາລາວ
              <!-- <svg
                class="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path
                  d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
                />
              </svg> -->
            </a>
            <ul class="p-2 bg-base-100">
              <li><a class="py-1">Submenu 1</a></li>
              <li><a class="py-1">Submenu 2</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
