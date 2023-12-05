import {Film} from '../types/film-type';
import {Genre} from '../consts/genres';

export const films: Film[] = [
  {
    id: 1,
    name: 'The Grand Budapest Hotel',
    filmImg: 'img/bg-the-grand-budapest-hotel.jpg',
    runTime: '2h 14m',
    genre: Genre.Fantasy,
    director: 'Wes Anderson',
    starring: 'Bill Murray, Edward Norton, Jude Law, Willem Dafoe',
    releaseYear: 2018,
    filmDesc: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.\n' +
      '\n' +
      'Gustave prides himself on providing first-class service to the hotel\'s guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave\'s lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.',
    ratingLevel: 'Very good',
    ratingScore: 8.9,
    videoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4'
  },
  {
    id: 2,
    name: 'Bohemian Rhapsody',
    filmImg: 'img/bohemian-rhapsody.jpg',
    runTime: '2h 14m',
    genre: Genre.Drama,
    director: 'Bryan Singer',
    starring: 'Rami Malek,Lucy Boynton, Gwilym Lee, Ben Hardy and other',
    releaseYear: 2018,
    filmDesc: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.\n' +
      '\n' +
      'Gustave prides himself on providing first-class service to the hotel\'s guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave\'s lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.',
    ratingLevel: 'Very good',
    ratingScore: 8.0,
    videoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4'
  },
  {
    id: 3,
    name: 'Macbeth',
    filmImg: 'img/macbeth.jpg',
    runTime: '1h 53m',
    genre: Genre.Drama,
    director: 'Wes Anderson',
    starring: 'Bill Murray, Edward Norton, Jude Law, Willem Dafoe',
    releaseYear: 2015,
    filmDesc: 'Macbeth is a 2015 epic historical drama film directed by Justin Kurzel and written for the screen by Todd Louiso, Jacob Koskoff, and Michael Lesslie, based on William Shakespeare\'s eponymous play.',
    ratingLevel: 'Good',
    ratingScore: 7.1,
    videoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4'
  },
  {
    id: 4,
    name: 'Aviator',
    filmImg: 'img/aviator.jpg',
    runTime: '2h 50m',
    genre: Genre.Documentary,
    director: 'Wes Anderson',
    starring: 'Bill Murray, Edward Norton, Jude Law, Willem Dafoe',
    releaseYear: 2004,
    filmDesc: 'The Aviator is a 2004 epic biographical drama film directed by Martin Scorsese and written by John Logan.',
    ratingLevel: 'Good',
    ratingScore: 7.6,
    videoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4'
  },
  {
    id: 5,
    name: 'We need to talk about Kevin',
    filmImg: 'img/we-need-to-talk-about-kevin.jpg',
    runTime: '2h 50m',
    genre: Genre.Thriller,
    director: 'Wes Anderson',
    starring: 'Bill Murray, Edward Norton, Jude Law, Willem Dafoe',
    releaseYear: 2004,
    filmDesc: 'We Need to Talk About Kevin is a 2011 psychological thriller drama film directed by Lynne Ramsay from a screenplay she co-wrote with Rory Stewart Kinnear, based on the 2003 novel of the same name by Lionel Shriver. A long process of development and financing began in 2005, with filming commencing in April 2010.',
    ratingLevel: 'Good',
    ratingScore: 7.2,
    videoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4'
  },
  {
    id: 6,
    name: 'What We Do in the Shadows',
    filmImg: 'img/what-we-do-in-the-shadows.jpg',
    runTime: '2h 50m',
    genre: Genre.Documentary,
    director: 'Wes Anderson',
    starring: 'Bill Murray, Edward Norton, Jude Law, Willem Dafoe',
    releaseYear: 2004,
    filmDesc: 'What We Do in the Shadows is a 2014 New Zealand mockumentary horror comedy film written and directed by Jemaine Clement and Taika Waititi and the first installment in the What We Do in the Shadows franchise. ',
    ratingLevel: 'Good',
    ratingScore: 7.5,
    videoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4'
  },
  {
    id: 7,
    name: 'Revenant',
    filmImg: 'img/revenant.jpg',
    runTime: '2h 50m',
    genre: Genre.Action,
    director: 'Wes Anderson',
    starring: 'Bill Murray, Edward Norton, Jude Law, Willem Dafoe',
    releaseYear: 2004,
    filmDesc: 'The Revenant is a 2015 American Western action drama film directed by Alejandro G. Iñárritu. The screenplay by Mark L. Smith and Iñárritu is based in part on Michael Punke\'s 2002 novel The Revenant, which describes frontiersman Hugh Glass\'s experiences in 1823, and which is based on the 1915 poem The Song of Hugh Glass. The film stars Leonardo DiCaprio and Tom Hardy.',
    ratingLevel: 'Good',
    ratingScore: 7.6,
    videoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4'
  },
  {
    id: 8,
    name: 'Johnny English',
    filmImg: 'img/johnny-english.jpg',
    runTime: '2h 50m',
    genre: Genre.Comedie,
    director: 'Wes Anderson',
    starring: 'Bill Murray, Edward Norton, Jude Law, Willem Dafoe',
    releaseYear: 2004,
    filmDesc: 'Johnny English is a 2003 spy action comedy film directed by Peter Howitt and written by Neal Purvis, Robert Wade and William Davies. It is a British-French venture produced by StudioCanal and Working Title Films, and distributed by Universal Pictures.',
    ratingLevel: 'Good',
    ratingScore: 7.2,
    videoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4'
  }
];
