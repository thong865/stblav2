<template>
  <div>
    <swiper @swiper="onSwiper" :centeredSlides="true" @slideChange="onSlideChange" cen :navigation="true" :modules="modules" :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }">
      <swiper-slide v-for="(t, i) in thumnail" :key="i">
        <nuxt-link :to="streamUrl+t.file" target="_blank">
          <img :src="streamUrl+t.file" class="w-full max-h-[420px] object-cover"
            :alt="t.title" />
        </nuxt-link>
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