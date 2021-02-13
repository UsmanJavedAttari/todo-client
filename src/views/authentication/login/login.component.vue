<template>
    <v-row align="center" justify="center">
        <v-col cols="12" sm="6" md="4">
            <v-card>
                <v-card-title>Login</v-card-title>
                <v-card-text>
                    <base-form @submit="login" #default="{ invalid }">
                        <base-text-field
                            label="Email"
                            v-model="LoginData.Email"
                            rules="required|email"
                        />
                        <base-text-field
                            type="password"
                            label="Password"
                            v-model="LoginData.Password"
                            rules="required|min:8|max:36"
                        />
                        <base-btn block type="submit" :disabled="invalid">
                            Login
                        </base-btn>
                    </base-form>
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
