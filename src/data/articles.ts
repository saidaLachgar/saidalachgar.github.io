import planetary from '../assets/img/planetary.jpg';
import movies from '../assets/img/movies.jpg';

export type Work = {
    title: string;
    caption: string;
    slug: string;
    image: ImageMetadata;
  };
 
  const articles: Work[] = [
    {
      title: "Planetary Facts",
      caption: "playground (THREE.JS)",
      image: planetary,
      slug: "planetary-facts",
    },
    {
      title: "The Movie Vault",
      caption: "Case study",
      image: movies,
      slug: "the-movie-vault",
    },
  ];
  
  
  export default articles;
  