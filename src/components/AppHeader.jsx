import MainMenu from "./MainMenu"
export default function AppHeader() {

    const pageTitle = <h1>Benvenuti nel mio Blog</h1>

    return (

        <>
            <header className="d-flex justify-content-between bg-primary p-2 text-white">
                {pageTitle}
                <MainMenu />




            </header>

        </>

    )
}