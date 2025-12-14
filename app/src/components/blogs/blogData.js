import Blog1 from "./Blog1.jsx";
import Blog2 from "./Blog2.jsx";
import Blog3 from "./Blog3.jsx";
import Blog4 from "./Blog4.jsx";

const blogs = [
  {
    id: 1,
    title: "Caring for Puppies: The Complete Guide Every New Pet Parent Needs",
    image: "/images/blogs/puppy-hero.jpg",
    excerpt:
      "Everything you need to know about raising a happy, healthy puppy — from feeding and training to grooming and playtime.",
    component: Blog1,
  },
  {
    id: 2,
    title: "Healthy Diets for Cats: The Complete Guide to Feline Nutrition",
    image: "/images/blogs/cat-hero.jpg",
    excerpt:
      "Learn how to give your cat the perfect balance of protein, hydration, and supplements for a long, healthy life.",
    component: Blog2,
  },
  {
    id: 3,
    title: "Training Your Parrot: Building Trust, Teaching Tricks & Keeping Them Happy",
    image: "/images/blogs/parrot-hero.jpg",
    excerpt:
      "Step-by-step guide to building trust with your parrot, teaching speech, and preventing boredom with enrichment.",
    component: Blog3,
  },
  {
    id: 4,
    title: "The Best Fish Tank Setup for Beginners: Step-by-Step Guide",
    image: "/images/blogs/fish-hero.jpg",
    excerpt:
      "From choosing the right tank to maintaining water quality, here’s how beginners can build a thriving aquarium.",
    component: Blog4,
  },
];

export default blogs;
