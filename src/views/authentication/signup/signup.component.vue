<template>
    <v-row align="center" justify="center">
        <v-col cols="12" sm="6" md="4">
            <v-card>
                <v-card-title>Signup</v-card-title>
                <v-card-text>
                    <form @submit.prevent="signup">
                        <v-text-field label="Name" v-model="SignupData.Name" />
                        <v-text-field
                            label="Email"
                            v-model="SignupData.Email"
                        />
                        <v-text-field
                            label="Password"
                            v-model="SignupData.Password"
                        />
                        <v-btn block type="submit" color="primary">
                            Signup
                        </v-btn>
                    </form>
                </v-card-text>
                <v-card-actions class="justify-center">
                    New here?
                    <router-link :to="{ name: 'Login' }">Login</router-link>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
</template>

<script lang="ts" src="./signup.component.ts" />
