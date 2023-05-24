<script setup>
const prop = defineProps({
    data: { type: Object },
    stbcon: { type: Object },
});
</script>
<template>
    <div class="w-[300px] pl-4 sticky top-0 relative">
        <div class="rounded-xl shadow-md px-3 py-3">
            <h1 class="text-xl pt-2">ຂໍ້ມູນລາຍການ</h1>
            <p class="mt-3">
                ທີ່ຢູ່ ບ. {{ prop.data.village }}, ມ. {{ data.district }},
                {{ prop.data.province }}
            </p>
            <div class="py-2 flex justify-between">
                <div>ປະເພດ:</div>
                <div>{{ prop.data.category }}</div>
            </div>
            <div class="py-2 flex justify-between">
                <div>ເນື້ອທີ່:</div>
                <div>{{ prop.data?.area }}</div>
            </div>
            <div class="py-2 flex justify-between">
                <div>ລາຄາລວມ:</div>
                <div>
                    {{ Number(prop.data?.price).toLocaleString("en-US") || 0 }}
                    {{ data.ccy }}
                </div>
            </div>
            <div class="py-2">
                <div></div>
                <label class="btn w-full" for="modal-mkcontract">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                        <path fill-rule="evenodd"
                            d="M12 2.25c-2.429 0-4.817.178-7.152.521C2.87 3.061 1.5 4.795 1.5 6.741v6.018c0 1.946 1.37 3.68 3.348 3.97.877.129 1.761.234 2.652.316V21a.75.75 0 001.28.53l4.184-4.183a.39.39 0 01.266-.112c2.006-.05 3.982-.22 5.922-.506 1.978-.29 3.348-2.023 3.348-3.97V6.741c0-1.947-1.37-3.68-3.348-3.97A49.145 49.145 0 0012 2.25zM8.25 8.625a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zm2.625 1.125a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z"
                            clip-rule="evenodd" />
                    </svg>
                    <span class="pl-2">ໃຫ້ຝ່າຍຂາຍຕິດຕໍ່ກັບ</span>
                </label>
            </div>
        </div>
        <div class="rounded-xl px-3 py-3">
            <h1 class="text-1xl pt-2">ຂໍ້ມູນຕິດຕໍ່ຝ່າຍຂາຍ</h1>
            <div class="flex mt-3" v-for="(ct, i) in stbcon" :key="i">
                <template v-if="ct.type == 'phone'">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="icon w-6 h-6" style="" width="1em" height="1em" viewBox="0 0 24 24" data-v-4fa0a2a1=""><path fill="currentColor" d="M19.44 13c-.22 0-.45-.07-.67-.12a9.44 9.44 0 0 1-1.31-.39a2 2 0 0 0-2.48 1l-.22.45a12.18 12.18 0 0 1-2.66-2a12.18 12.18 0 0 1-2-2.66l.42-.28a2 2 0 0 0 1-2.48a10.33 10.33 0 0 1-.39-1.31c-.05-.22-.09-.45-.12-.68a3 3 0 0 0-3-2.49h-3a3 3 0 0 0-3 3.41a19 19 0 0 0 16.52 16.46h.38a3 3 0 0 0 2-.76a3 3 0 0 0 1-2.25v-3a3 3 0 0 0-2.47-2.9Zm.5 6a1 1 0 0 1-.34.75a1.05 1.05 0 0 1-.82.25A17 17 0 0 1 4.07 5.22a1.09 1.09 0 0 1 .25-.82a1 1 0 0 1 .75-.34h3a1 1 0 0 1 1 .79q.06.41.15.81a11.12 11.12 0 0 0 .46 1.55l-1.4.65a1 1 0 0 0-.49 1.33a14.49 14.49 0 0 0 7 7a1 1 0 0 0 .76 0a1 1 0 0 0 .57-.52l.62-1.4a13.69 13.69 0 0 0 1.58.46q.4.09.81.15a1 1 0 0 1 .79 1Z"></path></svg>
                </template>
                <template v-if="ct.type == 'envelope'">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="icon w-6 h-6" style="" width="1em" height="1em" viewBox="0 0 24 24" data-v-4fa0a2a1=""><path fill="currentColor" d="M19 4H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Zm-.41 2l-5.88 5.88a1 1 0 0 1-1.42 0L5.41 6ZM20 17a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7.41l5.88 5.88a3 3 0 0 0 4.24 0L20 7.41Z"></path></svg>
                </template>
                <template v-if="ct.type == 'whatsapp'">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="icon w-6 h-6" style="" width="1em" height="1em" viewBox="0 0 24 24" data-v-4fa0a2a1=""><path fill="currentColor" d="M16.6 14c-.2-.1-1.5-.7-1.7-.8c-.2-.1-.4-.1-.6.1c-.2.2-.6.8-.8 1c-.1.2-.3.2-.5.1c-.7-.3-1.4-.7-2-1.2c-.5-.5-1-1.1-1.4-1.7c-.1-.2 0-.4.1-.5c.1-.1.2-.3.4-.4c.1-.1.2-.3.2-.4c.1-.1.1-.3 0-.4c-.1-.1-.6-1.3-.8-1.8c-.1-.7-.3-.7-.5-.7h-.5c-.2 0-.5.2-.6.3c-.6.6-.9 1.3-.9 2.1c.1.9.4 1.8 1 2.6c1.1 1.6 2.5 2.9 4.2 3.7c.5.2.9.4 1.4.5c.5.2 1 .2 1.6.1c.7-.1 1.3-.6 1.7-1.2c.2-.4.2-.8.1-1.2l-.4-.2m2.5-9.1C15.2 1 8.9 1 5 4.9c-3.2 3.2-3.8 8.1-1.6 12L2 22l5.3-1.4c1.5.8 3.1 1.2 4.7 1.2c5.5 0 9.9-4.4 9.9-9.9c.1-2.6-1-5.1-2.8-7m-2.7 14c-1.3.8-2.8 1.3-4.4 1.3c-1.5 0-2.9-.4-4.2-1.1l-.3-.2l-3.1.8l.8-3l-.2-.3c-2.4-4-1.2-9 2.7-11.5S16.6 3.7 19 7.5c2.4 3.9 1.3 9-2.6 11.4"></path></svg>
                </template>
                <span class="pl-2">{{ ct.value }}</span>
            </div>
        </div>
    </div>
</template>