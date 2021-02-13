<template>
    <validation-provider :rules="rules" v-slot="{ errors }">
        <v-combobox
            :error-messages="errors"
            v-bind="$attrs"
            v-on="$listeners"
            :value="value"
            @input="$emit('update:value', $event)"
            small-chips
            :outlined="outlined"
            dense
            @keyup="pageModified"
        >
            <template #label v-if="!!$attrs.label">
                <span class="error--text" v-if="rules.includes('required')">*</span>
                {{ $attrs.label }}
            </template>
            <slot v-for="slot in Object.keys($slots)" :name="slot" :slot="slot" />
            <template v-for="(_, slot) of $scopedSlots" #[slot]="scope">
                <slot :name="slot" v-bind="scope" />
            </template>
        </v-combobox>
    </validation-provider>
</template>

<script lang="ts" src="./base-combobox.ts" />
