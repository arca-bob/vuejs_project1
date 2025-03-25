<template>
    <article>
         <label v-bind:for="data.id"></label>
         <input
             :id="data.id" 
             @input="(event:any) => $emit('fieldChange', { 
                 id: data.id, 
                 val: event.target!.value  
             })"
             v-bind:type="data.type ? data.type : 'text'" 
             v-bind:placeholder="data.placeholder"
             v-bind:class="'input ' + (data.class ? data.class : '')"
         />
     </article>
 </template>
 <script setup lang="ts">
 import type FieldInterface from '../interface/FieldInterface';
 
 
 interface FieldComponentProperties {
     data: FieldInterface
 }
 
 defineProps<FieldComponentProperties>()
 defineEmits(['fieldChange'])
 

 
 
 
 </script>