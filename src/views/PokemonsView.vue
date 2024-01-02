<script lang="ts" setup>
import PokemonCard from '@/components/PokemonCard.vue'
import { usePokemonsCapture } from '../stores/pokemonsCapture'
import { storeToRefs } from 'pinia'

const pokemonsCapture = usePokemonsCapture()
const { pokemonsCaptureRef, pokemonName, rute } = storeToRefs(pokemonsCapture)
</script>
<template>
  <div>
    <input type="text" name="" id="" v-model="rute" placeholder="Ruta" />
    <input type="text" name="" id="" v-model="pokemonName" placeholder="Nombre pokemon" />
    <button @click="pokemonsCapture.createPokemon()">Add</button>
  </div>
  <div class="container">
    <PokemonCard v-for="pokemon in pokemonsCaptureRef" :key="pokemon.name" :pokemon="pokemon" />
  </div>
</template>

<style lang="css" scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  gap: 16px;
  margin-top: 24px;
}
</style>
