import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    //const categories = ['One Punch','Samuray X', 'Dragon Ball']
    const [categories, setCategories] = useState(['One Punch']);

    /*const handleAdd = () => {
        //setCategories([...categories, 'HunterXhunter'] );
        setCategories( cats => [...cats,'HunterXhunter']);
    }*/

    return (
        <>
            <h2>GifExpertAPp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>

            <button> Agregar </button>

            <ol>
                {categories.map(category=> (
                    <GifGrid key={category} category={category}/>
                ))}
            </ol>
        </>
    )
}
