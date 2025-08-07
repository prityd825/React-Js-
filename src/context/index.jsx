import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
    const [searchParam, setSearchParam] = useState('');
    const [loading, setLoading] = useState(false);
    const [recipeList, setRecipeList] = useState([]);
    const [recipeDetailsData, setRecipeDetailsData] = useState(null);
    const [favoritesList, setFavoritesList] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        fetchDefaultRecipes();
    }, []);

    async function fetchDefaultRecipes() {
        setLoading(true);
        try {
            const res = await fetch(
                `https://forkify-api.herokuapp.com/api/v2/recipes?search=pasta`
            );
            const data = await res.json();
            if (data?.data?.recipes) {
                setRecipeList(data.data.recipes);
            } else {
                setRecipeList([]);
            }
        } catch (e) {
            console.error('Error fetching default recipes:', e);
        } finally {
            setLoading(false);
        }
    }

    async function handleSubmit(event) {
        event.preventDefault();
        if (!searchParam) return;

        setLoading(true);
        try {
            const res = await fetch(
                `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`
            );

            const data = await res.json();
            if (data?.data?.recipes) {
                setRecipeList(data.data.recipes);
            } else {
                setRecipeList([]);
            }

            setSearchParam('');
            navigate('/');
        } catch (e) {
            console.error('Error during search:', e);
            setRecipeList([]);
        } finally {
            setLoading(false);
        }
    }

    function handleAddToFavorite(getCurrentItem) {
        const copy = [...favoritesList];
        const index = copy.findIndex((item) => item.id === getCurrentItem.id);

        if (index === -1) {
            copy.push(getCurrentItem);
        } else {
            copy.splice(index, 1);
        }

        setFavoritesList(copy);
    }

    return (
        <GlobalContext.Provider
            value={{
                searchParam,
                loading,
                recipeList,
                setSearchParam,
                handleSubmit,
                recipeDetailsData,
                setRecipeDetailsData,
                handleAddToFavorite,
                favoritesList
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
}
