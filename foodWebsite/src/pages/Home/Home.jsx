import React, { useState } from 'react'
import './Home.css'
import Header from '../../Components/Header/Header'
import ExploreMenu from '../../Components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../Components/foodDisplya/FoodDisplay'
import AppDownload from '../../Components/AppDownload/AppDownload'


const Home = () => {
    const [category, setGategory] = useState("All")

    return (
        <div>

            <Header />
            <ExploreMenu category={category} setGategory={setGategory} />
            <FoodDisplay category={category} />
            <AppDownload />
        </div>
    )
}

export default Home