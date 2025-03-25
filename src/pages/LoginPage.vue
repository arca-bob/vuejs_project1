<template>
    <FormComponent :data="formData" />
    <small class="login-choice">Pas encore inscirt(e) ? Inscrivez-vous</small>

</template>
<script setup lang="ts">
    import { reactive } from "vue"
    import FormComponent from "../components/FormComponents.vue"

    const formData = reactive({
        fields: [
            {
                id: 'Email',
                type: 'Email',
                placeholder: 'Entrez Votre Email',
                class: '',
                name: 'Email'
            },

            {
                id: 'password',
                type: 'password ',
                placeholder: 'Entrez Votre Mot de passe',
                class: '',
                name: 'Mot de passe'
            }
        ],
        buttons: [
            {
                id:'Validez',
                type:'submit',
                class:'is-primary'
            },
            {
                id:'Reset',
                type:'reset',
                class:'button is-danger'
            }
        ]
})
</script>
<style>

</style>