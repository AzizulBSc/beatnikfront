function Layout({children}) {
    return (
        <div>
            <header>
                <h1>Logo</h1>
            </header>
            <slider>Slider</slider>
            <main>
                {children }
            </main>
            <footer>Footer</footer>
        </div>
    );
}

export async function getStaticProps(ctx){


    return {
        props:{
            data:null
        }
    }
}

export default Layout;