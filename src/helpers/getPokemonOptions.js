import pokemonApi from "../api/pokemonApi"

export const getPokemons=()=>{
  const pokemosArr = Array.from( Array(650))
  return pokemosArr.map((_ ,index )=>index+1)
}

const getPokemonOptions=async()=>{
  const mixedPokemons = getPokemons().sort(()=> Math.random() - 0.5);
  const pokemons = await getPokemonsNames(mixedPokemons.splice(0,4));
  return pokemons;
}

export const getPokemonsNames=async ([p1,p2,p3,p4]=[])=>{
  const promiseArr = [
    pokemonApi.get(`/${p1}`),
    pokemonApi.get(`/${p2}`),
    pokemonApi.get(`/${p3}`),
    pokemonApi.get(`/${p4}`),
  ]
  const [poke1,poke2,poke3,poke4] = await Promise.all(promiseArr);
  
  const pokearr =[
    {name: poke1.data.name,id:poke1.data.id},
    {name: poke2.data.name,id:poke2.data.id},
    {name: poke3.data.name,id:poke3.data.id},
    {name: poke4.data.name,id:poke4.data.id},
  ]
  return pokearr
}

export default getPokemonOptions;