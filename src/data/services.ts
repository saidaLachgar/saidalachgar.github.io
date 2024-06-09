export type Service = {
  title: string;
  description: string;
  icon: ServiceIcon;
};
export type ServiceIcon = {
  name: string;
  width: number;
  height: number;
};

const services: Service[] = [
  {
    title: "Custom E-commerce Theme Styling",
    description: "Craft visually stunning and unique themes for e-commerce platforms such as PrestaShop and Sylius. Specializing in frontend development to enhance the visual appeal and user interaction of online storefronts.",
    icon: {
      name: "circles-around-star",
      width: 240,
      height: 205
    },
  },
  {
    title: "SEO Core Web Vitals Optimization",
    description: "Prioritize the improvement of Core Web Vitals metrics for better website performance and improved search engine rankings.",
    icon: {
      name: "web",
      width: 242,
      height: 242
    },
  },
  {
    title: "Responsive Design and Cross-Browser Compatibility",
    description: "Ensure seamless adaptation to different screen sizes and flawless functionality across various browsers, creating a consistent user experience through responsive design.",
    icon: {
      name: "circles-as-rectangle",
      width: 242,
      height: 150
    },
  },
  {
    title: "Code Review, Refactoring & Migration",
    description: "Elevate projects through precise code reviews, strategic refactoring, seamless stack migrations, and developer guidance, ensuring top-tier code quality and cohesive frontend implementation.",
    icon: {
      name: "circles-as-cylinder",
      width: 270,
      height: 234
    },
  },
  {
    title: "Interactive Website Motions",
    description: "Enhance websites with captivating motions using cutting-edge technologies like Three.js and GSAP, incorporating dynamic and interactive elements to boost user engagement.",
    icon: {
      name: "circles-as-sphere",
      width: 242,
      height: 270
    },
  },

];


export default services;
