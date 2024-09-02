import { useState, useEffect } from "react";

import { Link } from 'react-router-dom';

import { recipeData } from "../../assets/ricette/Recipes.js";

import { 
  SearchFormContainer,
  SearchForm,
  SearchInput,
  SearchButton,
  ResultDropdown,
  DropdownItemContainer,
} from './Searchbox.styles.jsx';

/* Barra di ricerca */
const Searchbox = () => {
  // Otteniamo oggetto contenente ogni oggetto ricetta
  const dataRecipe = recipeData(); 
  // Inizializziamo state per il testo da ricercare
  const [searchInput, setSearchInput] = useState('');
  // Inizializziamo state per le ricette filtrare in base alla ricerca
  const [filteredRecipes, setfilteredRecipes] = useState(dataRecipe); 
  const [searchError, setSearchError] = useState('');
  /* Se l'input è vuoto resettiamo lo state searchInput, altrimenti cerchiamo nei dati delle ricette
     se è presente il nome della ricetta o un ingrediente della suddetta.
     Utilizziamo useEffect quando cambiano il searchInput o recipeData */
  useEffect(() => {
    const searchInputClean = searchInput.trim().toLocaleLowerCase();
    if (!searchInputClean) {
      setfilteredRecipes([]);
    } else {
      //Object.entries(dataRecipe).filter(([key, recipe]) => key.toLowerCase().includes(searchInput.toLowerCase())
      const results =  dataRecipe.filter(recipe => recipe.title.toLocaleLowerCase() === searchInputClean ||
      recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(searchInputClean)));
      setfilteredRecipes(results);
    }
  }, [searchInput]);

  // Limitiamo l'input a solo lettere così da avere una ricerca pulita
  const handleInputChange = (e) => {
    const input = e.target.value;
    // Verifica il pattern
    if (!/^[a-zA-Z\s']*$/i.test(input)) {
      setSearchError('Inserire solo caratteri alfabetici, spazi e apostrofi.');
    } else {
      setSearchError('');
      setSearchInput(input);
    }
  };

  /* Quando un utente clicca su un risultato resetta i due states */
  const handleResultClick = () => {
    setSearchInput('');
    setfilteredRecipes([]);
  };
  

  return (
    <SearchFormContainer>
      <SearchForm>
        <SearchInput
          type="search"
          placeholder="Cerca ricetta o ingrediente..."
          title="Cerca per nome della ricetta o ingrediente. I risultati includeranno ricette con nomi o ingredienti corrispondenti."
          className="search-input"
          value={searchInput}
          onChange={handleInputChange}
        />
        <SearchButton type="submit" className="search-button" aria-label="Cerca">
          <img src="https://icongr.am/fontawesome/search.svg?size=25&color=1f1f1f" alt="search-icon" className="search-icon"></img>
        </SearchButton>
      </SearchForm>
      {/*Controlliamo se il container è vuoto altrimenti non lo renderizziamo*/}
      {filteredRecipes.length > 0 && (
        <ResultDropdown>
          {filteredRecipes.map((recipe, index) => (
            <DropdownItemContainer key={index}>
              <Link to={`/cookbook/${recipe.title.toLowerCase()}`} onClick={handleResultClick}>
                <p>{recipe.title}</p>
              </Link>
            </DropdownItemContainer>
          ))}
        </ResultDropdown>
      )}
    </SearchFormContainer>
  );
};

export default Searchbox;
