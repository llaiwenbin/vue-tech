<template>
    <label>
        <span>
            <input
                v-if="group"
                type="checkbox"
                :disabled="disabled"
                :value="label"
                v-model="model"
                @change="change"
            />
            <input
                v-else
                type="checkbox"
                :disabled="disabled"
                :checked="currentValue"
                @change="change"
            />
        </span>
        <slot></slot>
    </label>
</template> <script>
import { findNearUpperComponent } from "@/utils.js";
export default {
    name: "iCheckbox",
    props: { label: { type: [String, Number, Boolean] } },
    data() {
        return {
            model: [],
            group: false,
            parent: null,
        };
    },
    mounted() {
        this.parent = findNearUpperComponent(this, "iCheckboxGroup");
        if (this.parent) {
            this.group = true;
        }
        if (this.group) {
            this.parent.updateModel(true);
        } else {
            this.updateModel();
        }
    },
};
</script>