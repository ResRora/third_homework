
function Header() {
    return (
        <header className="hero is-dark is-bold">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title">かわいい猫</h1>
                </div>
            </div>
        </header>
    );
}

function Image(props) {
    return (
        <div className="card">
            <div className="card-image">
                <figure className="image">
                    <img src={props.src} alt="cute dog!" />
                </figure>
            </div>
        </div>
    );
}

function Gallery(props) {
    const { urls } = props;
    return (
        <div className="columns is-vcentered is-multiline">
            {urls.map((url) => {
                return (
                    <div key={url} className="column is-3">
                        <Image src={url} />
                    </div>
                );
            })}
        </div>
    );
}

function Main() {
    const urls = [
        "https://http.cat/101",
        "https://http.cat/102",
        "https://http.cat/103",
        "https://http.cat/200",
        "https://http.cat/201",
        "https://http.cat/202",
        "https://http.cat/203",
        "https://http.cat/204",
        "https://http.cat/206",
        "https://http.cat/207",
        "https://http.cat/300",
        "https://http.cat/301",
    ];
    return (
        <main>
            <section className="section">
                <div className="container">
                    <Gallery urls={urls} />
                </div>
            </section>
        </main>
    );
}

function Footer() {
    return (
        <footer className="footer">
            <div className="content has-text-centered">
                <p>
                    この猫ページはご覧の<a href="https://http.cat/">API</a>の提供でお送りします
                </p>
                <p>
                    日本大学文理学部情報科学科 Webプログラミングの演習課題
                </p>
            </div>
        </footer>
    );
}

function App() {
    return (
        <div>
            <Header />
            <Main />
            <Footer />
        </div>
    );
}

export default App;