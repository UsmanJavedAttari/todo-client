<template>
    <v-tooltip
        :top="direction == 'top'"
        :bottom="direction == 'bottom'"
        :left="direction == 'left'"
        :right="direction == 'right'"
        :color="!!msg ? color : 'transparent'"
    >
        <template #activator="{ on }">
            <slot :on="on" />
        </template>
        <span v-html="msg" class="d-block text-center no-select" style="max-width: 300px" />
    </v-tooltip>
</template>

<script lang="ts" src="./base-tooltip.ts" />
