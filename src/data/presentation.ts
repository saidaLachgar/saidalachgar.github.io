type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  sms: string;
  sms_link: string;
  title: string;
  location: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "hello@saidalachgar.com",
  sms_link: "+212641346928",
  sms: "(212) 641-346928",
  location: 'morocco, ag',
  title: "Hi, I’m Maxence 👋",
  // profile: "/profile.webp",
  description:
    "Bonjour, i'm a *french frontend developer* with over *3 years* of web experience. I am currently working with *NextJS and Typescript*. Outside of work I complete my pokemon card collection and learning TypeScript.",
  socials: [
    {
      label: "X",
      link: "https://twitter.com/itsstormzz_",
    },
    {
      label: "Bento",
      link: "https://bento.me/m-wolff",
    },
    {
      label: "Github",
      link: "https://github.com/MaeWolff",
    },
  ],
};

export default presentation;
