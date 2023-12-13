import {JSX, useEffect} from 'react';
import SmallFilmCard from './small-film-card';
import {Genre} from '../../consts/genres';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {setFilmsGenreCount} from '../../store/action';


export function FilmsListSorted(): JSX.Element {
  let films = useAppSelector((state) => state.films);
  const mainFilmGenre = useAppSelector((state) => state.genre);
  const visibleFilmsCount = useAppSelector((state) => state.currentGenreVisibleCount);
  const mainFilmId = useAppSelector((state) => state.mainFilm?.id);


  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setFilmsGenreCount(films.length));
  }, [mainFilmGenre, visibleFilmsCount]);
  films = films.filter((f) => f.id !== mainFilmId && (f.genre === mainFilmGenre || mainFilmGenre === Genre.All));
  films = films.slice(0, visibleFilmsCount);

  return (
    <div className="catalog__films-list" >
      {
        films.map((film) => (
          <SmallFilmCard filmId={film.id} key={film.name} name={film.name} imgSrc={film.previewImage} videoLink={film.previewVideoLink}/>)
        )
      }
    </div>
  );
}
