<template>
<h1 v-if="!pokemon" >Por favor Espera</h1>

<div v-else >
    <h1>Quien es este pokemon?</h1>  
    <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon"/>
    <PokemonOptions :pokemons="pokemonsArr" @selection="checkAnswer" />

  <template v-if="showAnswer">
    <h2>{{message}}</h2>
    <button
      @click="newGame"
    >Nuevo Juego</button>
  </template>
</div>

</template>

<script>
import PokemonPicture from '../components/PokemonPicture.vue';
import PokemonOptions from '../components/PokemonOptions.vue';
import getPokemonOptions from '../helpers/getPokemonOptions';

export default {
  name:'PokemonPage',
  components:{
    PokemonPicture,
    PokemonOptions,
  },
  data(){
    return{
      pokemonsArr:[],
      pokemon:null,
      showPokemon:false,
      showAnswer:false,
      message:''
    }
  },
  methods:{
    async mixPokemonArray(){
      this.pokemonsArr = await getPokemonOptions();
      const rndInt = Math.floor(Math.random()*4);
      this.pokemon = this.pokemonsArr[rndInt]
    },
    checkAnswer(selectedId){
      this.showPokemon = true;
      this.showAnswer= true;
      if(selectedId=== this.pokemon.id){
        this.message = `Correcto ${this.pokemon.name}`
      }else{
        this.message = `Incorrecto el pokemon correcto era ${this.pokemon.name}`
      }
    },
    newGame(){
      this.pokemon=null
      this.showPokemon=false
      this.showAnswer = false
      this.pokemonsArr=[];
      this.mixPokemonArray();
    }
  },
  mounted(){
    this.mixPokemonArray();
  }

}
</script>

