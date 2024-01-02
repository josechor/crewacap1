import type { Pokemon } from '@/types/types'
import { defineStore } from 'pinia'
import { ref, type Ref } from 'vue'

export const usePokemonsCapture = defineStore('pokemonsCapture', () => {
  const pokemonsCaptureRef: Ref<Pokemon[]> = ref(
    JSON.parse(localStorage.getItem('pokemons') || '[]')
  )

  const pokemonName = ref('')
  const rute = ref('')
  const url = ref('')

  const createPokemon = async () => {
    if (!pokemonName.value) {
      alert('Ingrese un nombre bobo')
      return
    }
    if (!rute.value) {
      alert('Ingrese una ruta bobo')
      return
    }
    const pokemon: Pokemon = {
      name: pokemonName.value,
      url: await pokemonImg(),
      rute: rute.value,
      alive: true
    }
    addPokemon(pokemon)
    reset()
  }

  const pokemonImg = async () => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.value}`)
      const data = await response.json()
      return data.sprites.other['official-artwork']['front_default']
    } catch (error) {
      console.log(error)
    }
  }

  const addPokemon = (pokemon: Pokemon) => {
    pokemonsCaptureRef.value.push(pokemon)
    localStorage.setItem('pokemons', JSON.stringify(pokemonsCaptureRef.value))
  }

  const reset = () => {
    rute.value = ''
    pokemonName.value = ''
  }

  const deletePokemon = (pokemon: Pokemon) => {
    const index = pokemonsCaptureRef.value.indexOf(pokemon)
    if (index === -1) return
    pokemonsCaptureRef.value.splice(index, 1)
    localStorage.setItem('pokemons', JSON.stringify(pokemonsCaptureRef.value))
  }

  const matarRevivirPokemon = (pokemon: Pokemon) => {
    const index = pokemonsCaptureRef.value.indexOf(pokemon)
    if (index === -1) return
    pokemonsCaptureRef.value[index].alive = !pokemonsCaptureRef.value[index].alive
    localStorage.setItem('pokemons', JSON.stringify(pokemonsCaptureRef.value))
  }

  return {
    matarRevivirPokemon,
    deletePokemon,
    createPokemon,
    pokemonName,
    rute,
    url,
    pokemonsCaptureRef,
    addPokemon
  }
})
