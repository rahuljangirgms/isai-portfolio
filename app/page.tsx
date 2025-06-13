import PostCards from "./components/cards/post-cards";
import Hero from "./components/pages/home/hero";
import About from "./components/pages/home/about";
import BentoGrid from "./components/cards/bento-grid";
import { getSortedPostsMetaData } from "@/app/lib/posts";

import Dashboard from "./dashboard/page";

// import CodingStats from './components/cards/CodingStats';

export default async function Home() {
  const posts = await getSortedPostsMetaData();

  return (
    <div className="max-w-3xl mx-auto px-4 md:px-0">
      <Hero />
      <BentoGrid />
      <section id="projects" className="scroll-mt-24 text-palette-2">
        <PostCards posts={posts} />
      </section>
      <About />
      <Dashboard />
    </div>
  );
}
