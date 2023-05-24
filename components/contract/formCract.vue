<script setup>
import { ref } from 'vue'
const dtContract = ref()
const contract = ref({
    fullname: ref(''),
    mobile: ref(''),
    email: ref(''),
    message: ref(''),
    isContract: ref(true)
})
</script>

<template>
    <div>
        <input type="checkbox" id="modal-mkcontract" class="modal-toggle" />
        <div class="modal">
            <div class="modal-box">
                <form>
                    <h3 class="font-bold text-lg">ຝາກຂໍ້ມູນຕິດຕໍ່ຂອງທ່ານເພື່ອໃຫ້ພະນັກງານຕິດຕໍ່ກັບ</h3>
                    <div class="flex flex-col gap-3 mt-5">
                        <input type="text" placeholder="ຊື່ ແລະ ນາມສະກຸນ"
                            class="input w-full input-bordered input-primary py-2" v-model="contract.fullname" />
                        <input type="text" placeholder="ເບີໂທລະສັບ" class="input w-full input-bordered input-primary py-2"
                            v-model="contract.mobile" />
                        <input type="text" placeholder="ອີເມວ" class="input w-full input-bordered input-primary py-2"
                            v-model="contract.email" />

                        <textarea class="textarea textarea-bordered textarea-primary w-full" placeholder="ຄຳອະທິບາຍ"
                            v-model="contract.message"></textarea>
                        <div class="form-control">
                            <label class="cursor-pointer label">
                                <input type="checkbox" checked="checked" class="checkbox checkbox-primary"
                                    v-model="contract.isContract" />
                                <span class="label-text">ອານຸຍາດໃຫ້ພະນັກງານຕິດຕໍ່ກັບ</span>
                            </label>
                        </div>
                    </div>
                    <div class="modal-action">
                        <button for="modal-mkcontract" class="btn">ສົ່ງດຽວນີ້</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>