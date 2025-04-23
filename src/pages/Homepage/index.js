import Header from "../../components/Header";
import Main from "../../components/Main";
import Footer from "../../components/Footer";
import "./style.css";

export default function Homepage() {
  return (
    <div className="homepage">
      <header className="header">
        <Header />
      </header>
      <main className="main">
        <Main />
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}
