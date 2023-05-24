<template>
    <div>
      <swiper @swiper="onSwiper" :centeredSlides="true" @slideChange="onSlideChange" :navigation="true" :modules="modules" :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }">
        <swiper-slide v-for="(t, i) in thumnail" :key="i">
          <div class="relative">
            <nuxt-link :to="`/details/${t.id}`" type="button" class="btn absolute right-2 top-2">ເບິ່ງລາຍລະອຽດ</nuxt-link>
            <img :src="streamUrl+t.background" :alt="t.title" class="lazy w-full max-h-[650px] object-cover"/>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </template>
  <script>
  import { Swiper, SwiperSlide } from "swiper/vue";
  import { Autoplay, Pagination, Navigation } from "swiper";
  import "swiper/css";
  export default {
    props: {
      thumnail: {
        type: Object,
      },
    },
    components: {
    Swiper,
    SwiperSlide,
},
    setup() {
      const onSwiper = (swiper) => {
        // console.log(swiper);
      };
      const onSlideChange = () => {
        // console.log("slide change");
      };
      return {
        onSwiper,
        modules: [Autoplay, Pagination, Navigation],
        onSlideChange,
        streamUrl: useRuntimeConfig().public.streamBase
      };
    },
  };
  </script>