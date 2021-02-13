<template>
    <validation-provider :rules="rules" v-slot="{ errors }" :vid="vid">
        <v-text-field
            :error-messages="errors"
            v-bind="$attrs"
            v-on="$listeners"
            :value="value"
            @input="$emit('update:value', $event)"
            @blur="handleBlur"
            :outlined="outlined"
            :dense="dense"
            @keyup="pageModified"
            @keydown="$attrs['type'] === 'password' ? checkCapsLock($event) : undefined"
        >
            <template #label v-if="!!$attrs.label">
                <span class="error--text" v-if="rules.includes('required')">*</span>
                {{ $attrs.label }}
            </template>
            <template v-if="IsCapsLockOn && $attrs['type'] === 'password'" #append>
                <base-tooltip #default="{ on }" msg="Caps Lock ON">
                    <v-icon color="warning" v-on="on">mdi-alert-circle-outline</v-icon>
                </base-tooltip>
            </template>
            <slot v-for="slot in Object.keys($slots)" :name="slot" :slot="slot" />
        </v-text-field>
    </validation-provider>
</template>

<script lang="ts" src="./base-text-field.ts" />
