
<script setup>
const route = useRoute();
const config = useRuntimeConfig()
const { data, pending, error } = await useAsyncData("postDetail", () =>
  $fetch(`/api/blogDetail`, { query: { id: route.params.id } })
);
</script>

<template>
  <div>
    <section class="py-10">
      <div class="md:w-9/12 px-5 md:px-0 mx-auto flex-col lg:flex-row-reverse">
        <img
          :src="`${config.public.streamBase}${data?.background}`"
          class="w-full max-h-[420px] object-cover rounded-xl"
          :alt="data?.title"
        />
        <div v-html="data?.content" class="mt-5"></div>
      </div>
    </section>
  </div>
</template>