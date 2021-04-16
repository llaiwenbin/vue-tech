<template>
    <div>
        <input v-model="inputData" />
        <div class="w200">
            <popover row="1" width="200">
                <span slot="reference">
                    {{ inputData }}
                </span>
                <span>{{ inputData }}</span>
            </popover>
        </div>
    </div>
</template>

<script>
import popover from "../../globalComponent/popover/index.vue";
export default {
    data() {
        return {
            inputData: "",
        };
    },
    components: {
        popover,
    },
};
</script>

<style>
.w200 {
    width: 200px;
}
</style>