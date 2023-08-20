import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

function Movies() {
  return (
    <div className="page__container">
      <Header headerColor={'dark-grey'} />
      <main className="main">
        <SearchForm />
        <MoviesCardList isSaved={true} />
      </main>
      <Footer />
    </div>
  )
}

export default Movies;