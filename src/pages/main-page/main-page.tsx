import {JSX} from 'react';
import {Footer} from '../../components/footer/footer';
import {GenresList} from '../../components/genres-list/genres-list';
import {Logo} from '../../components/logo/logo';
import {UserBlock} from '../../components/user-block/user-block';
import {Link} from 'react-router-dom';
import {AppRoutes} from '../../consts/appRoutes';
import {FilmsListSorted} from '../../components/small-film-card/films-list-sorted';
import {useAppSelector} from '../../hooks';


export function MainPage(): JSX.Element {
  const mainFilm = useAppSelector((state) => state.main);

  return(
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={mainFilm.filmImg} alt={mainFilm.name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <Logo></Logo>
          <UserBlock></UserBlock>
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={mainFilm.filmImg} alt={mainFilm.name.concat(' ', 'poster')} width="218"
                height="327"
              />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{mainFilm.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{mainFilm.genre}</span>
                <span className="film-card__year">{mainFilm.releaseYear}</span>
              </p>

              <div className="film-card__buttons">
                <Link to={AppRoutes.Player.replace(':id', mainFilm.id.toString())} className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </Link>
                <Link to={AppRoutes.MyList} className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenresList></GenresList>
          <FilmsListSorted mainFilmId={mainFilm.id}/>

          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>

        <Footer></Footer>
      </div>
    </>
  );
}
