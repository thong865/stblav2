<script setup>
const props = defineProps({
    data:Object
})
</script>

<template>
    <div>
        <div class="text-xl md:text-2xl">ແຜນທີ່</div>
        <iframe class="w-full h-[400px]" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"
            :src='`https://maps.google.com/maps?q=${props.data.map_lat}%2c${props.data.map_lon}&hl=en&z=14&output=embed`'></iframe>
    </div>
</template>