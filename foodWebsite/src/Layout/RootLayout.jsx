import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer/Footer'
import Navbar from '../Components/NavBar/Navbar'
import LogInPop from '../Components/LogInpop/LogInPop'


const RootLayout = () => {
    const [ShowLogIn, setShowLogIn] = useState(false)
    return (
        <div>
            {ShowLogIn ? <LogInPop setShowLogIn={setShowLogIn} /> : <></>}
            <Navbar setShowLogIn={setShowLogIn} />
            <main>
                <Outlet />
            </main>
            <Footer />

        </div>
    )
}

export default RootLayout