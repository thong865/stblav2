<script setup>
import { ref } from "vue";
const route = useRoute();
const uida = ref({ i: "suer.cmk=sa54df5as4g5a", like: 1, view: 1 });

onMounted(() => {
  localStorage.setItem("_UIDA", JSON.stringify(uida));
});
</script>
<template>
  <div>
    <div id="app">
      <NuxtLoadingIndicator />
      <navbarmarket />
      <div class="hero bg-base-200">
        <div class="hero-content w-9/12 mx-auto flex-col lg:flex-row-reverse">
          <div class="flex-1">
            <h1 class="text-xl">ປະກາດຂາຍ ຊັບສິນອື່ນໆ ຂອງ ທອທ</h1>
            <p>
              ຊັບສິນຕ່າງໆ ທີ່ທາງ ທອທ ລົງລາຍການຂາຍ
              ແມ່ນມີເອກະສານຖືກຕ້ອງຄົບຖ້ວນສົມບູນ ບໍ່ກ່ຽວຂ້ອງກັບບຸກໃດໆ.
            </p>
          </div>
        </div>
      </div>
      <NuxtPage />
      <modalSearch />
      <Footer></Footer>
    </div>
  </div>
</template>
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>