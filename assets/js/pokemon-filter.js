document.addEventListener('DOMContentLoaded', function() {
    const pokemonList = document.getElementById('pokemonList');
    const filterCheckboxes = document.querySelectorAll('.filter');
    let allPokemons = []; // Array para armazenar todos os pokémons carregados
    let filteredPokemons = []; // Array para armazenar os pokémons filtrados

    // Função para carregar Pokémons (substitua pela função real que carrega os pokémons)
    function loadPokemons() {
        // Exemplo de Pokémons com tipos
        allPokemons = [
            { name: 'Charmander', types: ['fire'] },
            { name: 'Squirtle', types: ['water'] },
            { name: 'Bulbasaur', types: ['grass', 'poison'] },
            { name: 'Pikachu', types: ['electric'] },
            { name: 'Geodude', types: ['rock', 'ground'] }
            // Continue com mais pokémons
        ];

        // Exibir todos os Pokémons inicialmente
        displayPokemons(allPokemons);
    }

    // Função para exibir os Pokémons na lista
    function displayPokemons(pokemons) {
        pokemonList.innerHTML = ''; // Limpar a lista
        pokemons.forEach(pokemon => {
            const li = document.createElement('li');
            li.textContent = pokemon.name + ' - Tipos: ' + pokemon.types.join(', ');
            pokemonList.appendChild(li);
        });
    }

    // Função para aplicar o filtro de tipos
    function filterPokemons() {
        const selectedTypes = Array.from(filterCheckboxes)
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.value);

        if (selectedTypes.length === 0) {
            // Se nenhum filtro estiver selecionado, exibe todos os Pokémons
            filteredPokemons = allPokemons;
        } else {
            // Filtrar Pokémons pelos tipos selecionados
            filteredPokemons = allPokemons.filter(pokemon => 
                pokemon.types.some(type => selectedTypes.includes(type))
            );
        }

        displayPokemons(filteredPokemons);
    }

    // Adicionar evento de mudança aos checkboxes para filtrar a lista
    filterCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', filterPokemons);
    });

    // Carregar Pokémons ao iniciar
    loadPokemons();
});
