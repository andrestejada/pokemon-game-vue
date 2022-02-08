<template>
  <div class="options-container">
    <ul>
      <li 
        v-for="pokemon in pokemons" 
        :key="pokemon.id"
        @click="$emit('selection',pokemon.id)"
        >
        {{ pokemon.name }}        
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    pokemons: {
      type: Array,
      required: true,
    },
  },
  name: "PokemonOptions",
};
</script>

<style scoped>
/* Pokemon Options */
ul {
  list-style-type: none;
}
li {
  background-color: #ffd756;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  cursor: pointer;
  margin-bottom: 10px;
  width: 250px;
  text-transform: capitalize;
}

li:hover {
  background-color: #ffc400;
}

.options-container {
  display: flex;
  justify-content: center;
}
</style>
