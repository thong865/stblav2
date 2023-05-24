
<script setup>
import {
  Popover,
  PopoverButton,
  PopoverPanel,
  TabGroup,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@headlessui/vue";
import { ChevronDownIcon } from "@heroicons/vue/20/solid";
const DatalistNav = ref(null);
const getLink = async () => {
  const listNav = await useAsyncData("menu", () =>
    queryContent("/lo/menus/navlist").findOne()
  );

  DatalistNav.value = listNav.data?.value?.menu.filter(
    (t) => t.category == "SUBNAV"
  );
};
onMounted(() => {
  getLink();
});
</script>

<style>
</style>
<template>
  <div
    class="
      py-3
      px-5
      lg:px-0
      md:px-0
      bg-slate-100 bg-opacity-50
      backdrop-blur backdrop-filter
      firefox:bg-opacity-90
    "
  >
    <div class="container lg:w-9/12 mx-auto flex">
      <div class="flex-1">
        <div class="flex">
          <NuxtLink to="/">
            <img src="/stb.svg" class="h-8" alt="" />
          </NuxtLink>
          <div class="flex-1 hidden lg:block md:block ml-5">
            <div class="flex gap-1">
              <Popover v-slot="{ open }" class="relative">
                <PopoverButton
                  :class="open ? '' : 'text-opacity-90'"
                  class="
                    group
                    inline-flex
                    items-center
                    rounded-md
                    px-3
                    py-2
                    text-base
                    font-medium
                    hover:text-opacity-100
                    focus:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-white
                    focus-visible:ring-opacity-75
                  "
                >
                  <span>ຜະລິດຕະພັນ</span>
                  <ChevronDownIcon
                    :class="open ? '' : 'text-opacity-70'"
                    class="
                      ml-2
                      h-5
                      w-5
                      text-orange-300
                      transition
                      duration-150
                      ease-in-out
                      group-hover:text-opacity-80
                    "
                    aria-hidden="true"
                  />
                </PopoverButton>

                <transition
                  enter-active-class="transition duration-200 ease-out"
                  enter-from-class="translate-y-1 opacity-0"
                  enter-to-class="translate-y-0 opacity-100"
                  leave-active-class="transition duration-150 ease-in"
                  leave-from-class="translate-y-0 opacity-100"
                  leave-to-class="translate-y-1 opacity-0"
                >
                  <PopoverPanel
                    class="
                      fixed
                      bg-slate-100 bg-opacity-90
                      backdrop-blur-xl backdrop-filter
                      firefox:bg-opacity-90
                      h-screen
                      left-0
                      right-0
                      z-10
                      mt-3
                      transform
                    "
                  >
                    <div
                      class="container lg:w-9/12 mx-auto overflow-hidden flex"
                    >
                      <TabGroup>
                        <TabList class="w-3/12">
                          <Tab as="template" v-slot="{ selected }">
                            <a
                              class="
                                flex
                                mt-2
                                items-center
                                p-2
                                corsor-pointer
                                transition
                                duration-150
                                ease-in-out
                                hover:bg-gray-50
                                focus:outline-none
                                focus-visible:ring
                                focus-visible:ring-orange-500
                                focus-visible:ring-opacity-50
                              "
                              :class="{
                                'bg-white text-white border-r-4 border-blue-500':
                                  selected,
                                '': !selected,
                              }"
                            >
                              <div
                                class="
                                  flex
                                  h-14
                                  w-14
                                  shrink-0
                                  items-center
                                  justify-center
                                  text-white
                                  sm:h-14 sm:w-14
                                "
                              >
                                <div class="backdrop-blur rounded-xl">
                                  <img src="/images/deposit.png" alt="" />
                                </div>
                              </div>
                              <div class="ml-4">
                                <p class="text-xl font-medium text-gray-900">
                                  ບັນຊີເງິນຝາກ
                                </p>
                                <p class="text-sm text-gray-500">
                                  ບັນຊີເງິນຝາກທີ່ຫຼາກຫຼາຍໃຫ້ທ່ານເລືອກ,
                                  ພ້ອມດອກເບ້ຍທີ່ເໝາະກັບທ່ານ
                                </p>
                              </div>
                            </a>
                          </Tab>
                          <Tab as="template" v-slot="{ selected }">
                            <a
                              class="
                                mt-2
                                flex
                                items-center
                                p-2
                                transition
                                duration-150
                                ease-in-out
                                hover:bg-gray-50
                                focus:outline-none
                                focus-visible:ring
                                focus-visible:ring-orange-500
                                focus-visible:ring-opacity-50
                              "
                              :class="{
                                'bg-white text-white border-r-4 border-blue-500':
                                  selected,
                                '': !selected,
                              }"
                            >
                              <div
                                class="
                                  flex
                                  h-10
                                  w-10
                                  shrink-0
                                  items-center
                                  justify-center
                                  text-white
                                  sm:h-12 sm:w-12
                                "
                              >
                                <div class="backdrop-blur rounded-xl">
                                  <img src="/images/loan.png" alt="" />
                                </div>
                              </div>
                              <div class="ml-4">
                                <p class="text-xl font-medium text-gray-900">
                                  ສິນເຊື່ອ
                                </p>
                                <p class="text-sm text-gray-500">ກຫັດັຫດກ</p>
                              </div>
                            </a>
                          </Tab>
                          <Tab as="template" v-slot="{ selected }">
                            <a
                              class="
                                mt-2
                                flex
                                items-center
                                rounded-lg
                                p-2
                                transition
                                duration-150
                                ease-in-out
                                hover:bg-gray-50
                                focus:outline-none
                                focus-visible:ring
                                focus-visible:ring-orange-500
                                focus-visible:ring-opacity-50
                              "
                              :class="{
                                'bg-white text-white border-r-4 border-blue-500':
                                  selected,
                                '': !selected,
                              }"
                            >
                              <div
                                class="
                                  flex
                                  h-10
                                  w-10
                                  shrink-0
                                  items-center
                                  justify-center
                                  text-white
                                  sm:h-12 sm:w-12
                                "
                              >
                                <div class="backdrop-blur rounded-xl">
                                  <img src="/images/insuarant.png" alt="" />
                                </div>
                              </div>
                              <div class="ml-4">
                                <p class="text-xl font-medium text-gray-900">
                                  ທອທ ປະກັນໄພ
                                </p>
                                <p class="text-sm text-gray-500">ກຫັດັຫດກ</p>
                              </div>
                            </a>
                          </Tab>
                        </TabList>
                        <TabPanels class="w-9/12">
                          <TabPanel class="px-5">
                            <div>
                              <h1 class="text-2xl">ບັນຊີເງິນຝາກທັງໝົດ</h1>
                            </div>
                            <div class="grid grid-cols-3 mt-5 gap-1">
                              <NuxtLink
                                to="/deposit/current"
                                class="card hover:shadow-xl"
                              >
                                <figure class="px-2 pt-2">
                                  <img
                                    src="https://placeimg.com/400/225/arch"
                                    alt="Shoes"
                                    class="rounded-xl"
                                  />
                                </figure>
                                <div class="card-body px-2">
                                  <h2 class="card-title -mt-6">
                                    ບັນຊີເງິນຝາກກະແສລາຍວັນ
                                  </h2>
                                </div>
                              </NuxtLink>
                              <NuxtLink
                                to="/deposit/saving"
                                class="card hover:shadow-xl"
                              >
                                <figure class="px-2 pt-2 h-[120px]">
                                  <div class="bg-slate-300 rounded-xl">
                                    <img
                                      src="/images/dep/saving.png"
                                      alt="Shoes"
                                      class="rounded-xl h-full"
                                    />
                                  </div>
                                </figure>
                                <div class="card-body px-2">
                                  <h2 class="card-title -mt-6">
                                    ບັນຊີເງິນຝາກປະຢັດ
                                  </h2>
                                </div>
                              </NuxtLink>
                              <NuxtLink
                                to="/deposit/fixed"
                                class="card hover:shadow-xl"
                              >
                                <figure class="px-2 pt-2 h-[120px]">
                                  <div>
                                    <img
                                      src="images/dep/nbg-fixed.png"
                                      alt="Shoes"
                                      class="rounded-xl"
                                    />
                                  </div>
                                </figure>
                                <div class="card-body px-2 ">
                                  <h2 class="card-title -mt-6">
                                    ບັນຊີເງິນຝາກປະຈຳ
                                  </h2>
                                </div>
                              </NuxtLink>
                            </div>
                            <div>
                              <h1 class="text-2xl mt-5">ແນະນຳ</h1>
                            </div>
                            <div class="flex gap-3">
                              <div
                                class="card bg-base-100 shadow-xl image-full"
                                v-for="i in 3"
                                :key="i"
                              >
                                <figure>
                                  <img
                                    src="https://placeimg.com/400/225/arch"
                                    alt="Shoes"
                                  />
                                </figure>
                                <div class="card-body">
                                  <h2 class="card-title">Shoes!</h2>
                                  <p>
                                    If a dog chews shoes whose shoes does he
                                    choose?
                                  </p>
                                  <div class="card-actions justify-end">
                                    <button class="btn btn-primary">
                                      Buy Now
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </TabPanel>
                          <TabPanel>
                            <div>
                              <h1 class="text-2xl">ສິນເຊື່ອທັງໝົດ</h1>
                            </div>
                            <div class="grid grid-cols-3 mt-5 gap-1">
                              <NuxtLink
                                to="/deposit/current"
                                class="card hover:shadow-xl"
                              >
                                <figure class="px-2 pt-2">
                                  <img
                                    src="https://placeimg.com/400/225/arch"
                                    alt="Shoes"
                                    class="rounded-xl"
                                  />
                                </figure>
                                <div class="card-body px-2">
                                  <h2 class="card-title -mt-6">
                                    ສິນເຊື່ອສ່ວນບຸກຄົນ
                                  </h2>
                                </div>
                              </NuxtLink>
                              <NuxtLink
                                to="/loans/saving"
                                class="card hover:shadow-xl"
                              >
                                <figure class="px-2 pt-2">
                                  <img
                                    src="https://placeimg.com/400/225/arch"
                                    alt="Shoes"
                                    class="rounded-xl"
                                  />
                                </figure>
                                <div class="card-body px-2">
                                  <h2 class="card-title -mt-6">
                                    ສິນເຊື່ອນິຕິບຸກຄົນ
                                  </h2>
                                </div>
                              </NuxtLink>
                              <NuxtLink
                                to="/loans/housing"
                                class="card hover:shadow-xl"
                              >
                                <figure class="px-2 pt-2">
                                  <img
                                    src="https://placeimg.com/400/225/arch"
                                    alt="Shoes"
                                    class="rounded-xl"
                                  />
                                </figure>
                                <div class="card-body px-2">
                                  <h2 class="card-title -mt-6">ສິນເຊື່ອບ້ານ</h2>
                                </div>
                              </NuxtLink>
                            </div>
                          </TabPanel>
                          <TabPanel>
                            <div class="grid grid-cols-3">
                              <div>
                                <img
                                  src="/images/insuarant.png"
                                  class="h-24"
                                  alt=""
                                />
                                <div class="w-full">
                                  <h1>ເງິນຝາກກະແສລາຍວັນ</h1>
                                </div>
                              </div>
                              <div>
                                <img
                                  src="/images/insuarant.png"
                                  class="h-24"
                                  alt=""
                                />
                                <div>
                                  <h1>ເງິນຝາກກະແສລາຍວັນ</h1>
                                </div>
                              </div>
                              <div>
                                <img
                                  src="/images/insuarant.png"
                                  class="h-24"
                                  alt=""
                                />
                                <div>
                                  <h1>ເງິນຝາກກະແສລາຍວັນ</h1>
                                </div>
                              </div>
                            </div>
                          </TabPanel>
                        </TabPanels>
                      </TabGroup>
                    </div>
                  </PopoverPanel>
                </transition>
              </Popover>
              <Popover v-slot="{ open }" class="relative">
                <PopoverButton
                  :class="open ? '' : 'text-opacity-90'"
                  class="
                    group
                    inline-flex
                    items-center
                    rounded-md
                    px-3
                    py-2
                    text-base
                    font-medium
                    hover:text-opacity-100
                    focus:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-white
                    focus-visible:ring-opacity-75
                  "
                >
                  <span>ບໍລິການ</span>
                  <ChevronDownIcon
                    :class="open ? '' : 'text-opacity-70'"
                    class="
                      ml-2
                      h-5
                      w-5
                      text-orange-300
                      transition
                      duration-150
                      ease-in-out
                      group-hover:text-opacity-80
                    "
                    aria-hidden="true"
                  />
                </PopoverButton>

                <transition
                  enter-active-class="transition duration-200 ease-out"
                  enter-from-class="translate-y-1 opacity-0"
                  enter-to-class="translate-y-0 opacity-100"
                  leave-active-class="transition duration-150 ease-in"
                  leave-from-class="translate-y-0 opacity-100"
                  leave-to-class="translate-y-1 opacity-0"
                >
                  <PopoverPanel
                    class="
                      fixed
                      bg-slate-100 bg-opacity-50
                      backdrop-blur backdrop-filter
                      firefox:bg-opacity-90
                      h-screen
                      left-0
                      right-0
                      z-10
                      mt-3
                      transform
                    "
                  >
                    <div
                      class="container lg:w-9/12 mx-auto overflow-hidden flex"
                    >
                      <div class="relative grid gap-8 p-7 lg:grid-cols-1 w-80">
                        <a
                          class="
                            -m-3
                            flex
                            items-center
                            rounded-lg
                            p-2
                            transition
                            duration-150
                            ease-in-out
                            hover:bg-gray-50
                            focus:outline-none
                            focus-visible:ring
                            focus-visible:ring-orange-500
                            focus-visible:ring-opacity-50
                          "
                        >
                          <div
                            class="
                              flex
                              h-10
                              w-10
                              shrink-0
                              items-center
                              justify-center
                              text-white
                              sm:h-12 sm:w-12
                            "
                          >
                            <div>
                              <img src="/images/deposit.png" alt="" srcset="" />
                            </div>
                          </div>
                          <div class="ml-4">
                            <p class="text-sm font-medium text-gray-900">
                              ບໍລິການໂອນເງິນ
                            </p>
                            <p class="text-sm text-gray-500">ກຫັດັຫດກ</p>
                          </div>
                        </a>
                        <a
                          class="
                            -m-3
                            flex
                            items-center
                            rounded-lg
                            p-2
                            transition
                            duration-150
                            ease-in-out
                            hover:bg-gray-50
                            focus:outline-none
                            focus-visible:ring
                            focus-visible:ring-orange-500
                            focus-visible:ring-opacity-50
                          "
                        >
                          <div
                            class="
                              flex
                              h-10
                              w-10
                              shrink-0
                              items-center
                              justify-center
                              text-white
                              sm:h-12 sm:w-12
                            "
                          >
                            <div></div>
                          </div>
                          <div class="ml-4">
                            <p class="text-sm font-medium text-gray-900">
                              ບໍລິການອີເລັກໂທຣນິກ
                            </p>
                            <p class="text-sm text-gray-500">ກຫັດັຫດກ</p>
                          </div>
                        </a>
                      </div>
                      <div class="p-4"></div>
                    </div>
                  </PopoverPanel>
                </transition>
              </Popover>
              <NuxtLink
                to="market"
                class="
                  group
                  inline-flex
                  items-center
                  rounded-md
                  px-3
                  py-2
                  text-base
                  font-medium
                  hover:text-opacity-100
                  focus:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-white
                  focus-visible:ring-opacity-75
                "
                >ປະກາດຂາຍ</NuxtLink
              >
              <Popover v-slot="{ open }" class="relative">
                <PopoverButton
                  :class="open ? '' : 'text-opacity-90'"
                  class="
                    group
                    inline-flex
                    items-center
                    rounded-md
                    px-3
                    py-2
                    text-base
                    font-medium
                    hover:text-opacity-100
                    focus:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-white
                    focus-visible:ring-opacity-75
                  "
                >
                  <span>ອື່ນໆ</span>
                  <ChevronDownIcon
                    :class="open ? '' : 'text-opacity-70'"
                    class="
                      ml-2
                      h-5
                      w-5
                      text-orange-300
                      transition
                      duration-150
                      ease-in-out
                      group-hover:text-opacity-80
                    "
                    aria-hidden="true"
                  />
                </PopoverButton>

                <transition
                  enter-active-class="transition duration-200 ease-out"
                  enter-from-class="translate-y-1 opacity-0"
                  enter-to-class="translate-y-0 opacity-100"
                  leave-active-class="transition duration-150 ease-in"
                  leave-from-class="translate-y-0 opacity-100"
                  leave-to-class="translate-y-1 opacity-0"
                >
                  <PopoverPanel
                    class="
                      fixed
                      bg-slate-100 bg-opacity-50
                      backdrop-blur backdrop-filter
                      firefox:bg-opacity-90
                      h-screen
                      left-0
                      right-0
                      z-10
                      mt-3
                      transform
                    "
                  >
                    <div
                      class="container lg:w-9/12 mx-auto overflow-hidden flex"
                    >
                      <div
                        class="relative grid gap-8 p-7 lg:grid-cols-4 w-full"
                      >
                        <a
                          class="
                            -m-3
                            items-center
                            rounded-lg
                            p-2
                            transition
                            duration-150
                            ease-in-out
                            hover:bg-gray-50
                            focus:outline-none
                            focus-visible:ring
                            focus-visible:ring-orange-500
                            focus-visible:ring-opacity-50
                          "
                          v-for="(t, i) in DatalistNav"
                          :key="i"
                        >
                          <div
                            class="
                              shrink-0
                              items-center
                              justify-center
                              text-white
                              sm:h-12 sm:w-12
                            "
                          >
                            <div>
                              <img src="/images/deposit.png" alt="" srcset="" />
                            </div>
                          </div>
                          <div class="ml-4">
                            <p class="text-xl font-medium text-gray-900">
                              {{ t.title }}
                            </p>
                          </div>
                        </a>
                      </div>
                      <div class="p-4"></div>
                    </div>
                  </PopoverPanel>
                </transition>
              </Popover>
            </div>

            <!-- <ul class="menu menu-horizontal p-0">
              <li tabindex="0">
                <a class="py-0">
                  ຜະລິດຕະພັນ
                  <svg
                    class="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
                    />
                  </svg>
                </a>
                <div
                  class="
                    fixed
                    h-[100vh]
                    z-[999999]
                    left-0
                    right-0
                    top-[56px]
                    bg-slate-100 bg-opacity-80
                    backdrop-blur backdrop-filter
                    firefox:bg-opacity-90
                  "
                >
                  <div class="container md:w-8/12 lg:w-8/12 mx-auto">
                    <div v-for="i in 4" :key="i" class="flex flex-cols">
                      <a
                        class="
                          flex
                          items-center
                          rounded-lg
                          p-2
                          transition
                          duration-150
                          ease-in-out
                          hover:bg-gray-50
                          focus:outline-none
                          focus-visible:ring
                          focus-visible:ring-orange-500
                          focus-visible:ring-opacity-50
                        "
                      >
                        <div
                          class="
                            flex
                            h-10
                            w-10
                            shrink-0
                            items-center
                            justify-center
                            text-white
                            sm:h-12 sm:w-12
                          "
                        >
                          <div></div>
                        </div>
                        <div class="ml-4">
                          <p class="text-sm font-medium text-gray-900">
                            Account Deposit
                          </p>
                          <p class="text-sm text-gray-500">Data</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            </ul> -->
          </div>
        </div>
      </div>

      <div class="flex">
        <div>
          <!-- <button class="btn px-5">O</button>
          <button class="btn px-5">LOGIN</button> -->
          <ModalCanel />
        </div>
      </div>
    </div>
  </div>
</template>
