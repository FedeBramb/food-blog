import { useState, useEffect, useContext } from "react";
import { RecipeContext } from '../../context/recipe.context.jsx';
import { Link } from 'react-router-dom';


import { 
  SearchFormContainer,
  SearchForm,
  SearchInput,
  SearchButton,
  ResultDropdown,
  DropdownItemContainer,
} from './Searchbox.styles.jsx';

/* Barra di ricerca per ricetta o ingrediente */
const Searchbox = () => {
  const { recipes } = useContext(RecipeContext); 
  const [searchInput, setSearchInput] = useState('');
  const [filteredRecipes, setfilteredRecipes] = useState(recipes); 
  const [isVisible, setIsVisibile] = useState(false);
  const [searchError, setSearchError] = useState('');

  // Cerca la ricetta filtrando per il titolo o per ingrendiente
  useEffect(() => {
    const searchInputClean = searchInput.trim().toLocaleLowerCase();

    if (!searchInputClean) {
      setfilteredRecipes([]);
    } else {
      const results = recipes.filter(recipe => 
        recipe.title.toLocaleLowerCase().includes(searchInputClean) ||
        recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(searchInputClean))
      );
      setfilteredRecipes(results);
    }
  }, [searchInput, recipes]);
    
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

  // Cambia lo stato in base se è visibile oppure no
  const toggleSearchBox =() => {
    setIsVisibile(!isVisible);
  }
  
  return (
    <SearchFormContainer>
      <SearchForm className={`${isVisible ? 'visible' : ''}`} >
        <SearchButton type="submit" className="search-button" aria-label="Cerca">
          <img src="https://icongr.am/fontawesome/search.svg?size=20&color=ffffff" 
            alt="search-icon" 
            className="search-icon"
            onClick={toggleSearchBox}
            title='Cerca'
          />
        </SearchButton>
        <SearchInput
          type="search"
          placeholder="Cerca ricetta o ingrediente..."
          title="Cerca per nome della ricetta o ingrediente. I risultati includeranno ricette con nomi o ingredienti corrispondenti."
          className={`${isVisible ? 'visible' : ''}`}
          value={searchInput}
          onChange={handleInputChange}
        />
      </SearchForm>
      {/*Controlliamo se il container è vuoto altrimenti non lo renderizziamo*/}
      {filteredRecipes.length > 0 && (
        <ResultDropdown>
          {filteredRecipes.map((recipe) => (
            <DropdownItemContainer key={recipe.title}>
              <Link to={`/recipes/${recipe.id}`} onClick={handleResultClick}>
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
