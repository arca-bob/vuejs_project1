<template>

    <button 
    v-bind:type="data.type ? data.type:'button'" 
    v-bind:class ="'button ' + (data.class ? data.class : 'default-class')"
    >{{data.id}}</button>
    
    
</template>
    
    <script setup lang="ts">
    
        interface ButtonComponentProperties {
            data: {
                id: string,
                type?: 'button' | 'submit' | 'reset';
                class?: string
            
            }
        }
    
    defineProps<ButtonComponentProperties>();
    
    </script>