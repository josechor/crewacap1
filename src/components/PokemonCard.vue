<script lang="ts" setup>
import type { Pokemon } from '../types/types'
import type { PropType } from 'vue'
import { usePokemonsCapture } from '../stores/pokemonsCapture'

defineProps({
  pokemon: {
    type: Object as PropType<Pokemon>,
    required: true
  }
})

const pokemonsCapture = usePokemonsCapture()
</script>
<template>
  <div class="pokemon" :key="pokemon.name" @click="pokemonsCapture.matarRevivirPokemon(pokemon)">
    <span class="rute">{{ pokemon.rute.toUpperCase() }}</span>
    <img :src="pokemon.url" :alt="pokemon.name" />
    <div class="name">
      <span class="name">{{ pokemon.name.toUpperCase() }}</span>
    </div>
    <span class="close" @click="pokemonsCapture.deletePokemon(pokemon)">X</span>
    <div class="muerte" v-if="!pokemon.alive"><span> Muerto </span></div>
  </div>
</template>

<style lang="css" scoped>
.pokemon {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 200px;
  height: 200px;
  padding: 1rem;
  border: 1px solid #ccc;
  align-items: center;
  border-radius: 0.5rem;
  background-color: #fff;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
  position: relative;
  cursor: pointer;
}

.pokemon img {
  width: 100px;
  height: 100px;
}

.name,
.rute {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  text-align: center;
  font-weight: bold;
}
.rute {
  padding-right: 20px;
  font-size: 0.8rem;
}
.name {
  font-size: 1.2rem;
}

.close {
  z-index: 3;
  position: absolute;
  top: 0;
  right: 0;
  padding: 0.5rem;
  cursor: pointer;
  color: #fff;
  background-color: #dc2626;
  border-radius: 0 0 0 0.5rem;
}

.muerte {
  z-index: 2;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: row;
  justify-items: center;
  align-items: center;
  border-radius: 0.5rem;
  background-color: #dc262680;
  color: white;
  text-align: center;
}
.muerte span {
  width: 100%;
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
}
</style>
