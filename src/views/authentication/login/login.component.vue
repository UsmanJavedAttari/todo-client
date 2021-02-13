<template>
    <v-row align="center" justify="center">
        <v-col cols="12" sm="6" md="4">
            <v-card>
                <v-card-title>Login</v-card-title>
                <v-card-text>
                    <form @submit.prevent="login">
                        <v-text-field label="Email" v-model="LoginData.Email" />
                        <v-text-field
                            label="Password"
                            v-model="LoginData.Password"
                        />
                        <v-btn block type="submit" color="primary">Login</v-btn>
                    </form>
                </v-card-text>
                <v-card-actions class="justify-center">
                    New here?
                    <router-link :to="{ name: 'Signup' }">Signup</router-link>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
</template>

<script lang="ts" src="./login.component.ts" />
