<template>
    <v-row align="center" justify="center">
        <v-col cols="12" sm="6" md="4">
            <v-card>
                <v-card-title>Signup</v-card-title>
                <v-card-text>
                    <base-form @submit="signup" #default="{ invalid }">
                        <base-text-field
                            label="Name"
                            v-model="SignupData.Name"
                            rules="required"
                        />
                        <base-text-field
                            label="Email"
                            v-model="SignupData.Email"
                            rules="required|email"
                        />
                        <base-text-field
                            type="password"
                            label="Password"
                            v-model="SignupData.Password"
                            rules="required|min:8|max:36"
                        />
                        <base-btn block type="submit" :disabled="invalid">
                            Signup
                        </base-btn>
                    </base-form>
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
