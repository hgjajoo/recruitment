"use client";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { FocusCards } from "@/components/ui/focus-cards";
import { motion } from "framer-motion";

export default function Home() {
  const cards = [
    {
      title: "Finance Team",
      src: "https://images.unsplash.com/photo-1640161704729-cbe966a08476?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://forms.gle/w915qDneEQakfe7H7",
    },
    {
      title: "Technical Team",
      src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://forms.gle/EgxTDrraqUtBgbTA6",
    },
    {
      title: "PR Team",
      src: "https://images.unsplash.com/photo-1663162550928-2c2389cdb27d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://forms.gle/FVe9pmyXoPCUcmiQ7",
    },
    {
      title: "Design Team",
      src: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://forms.gle/e3SpJoPxhcYVBLAV6",
    },
    {
      title: "Social Team",
      src: "https://images.unsplash.com/photo-1513118172236-00b7cc57e1fa?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://forms.gle/Zg3GusLS3dwoB8HH6",
    },
    {
      title: "Photography Team",
      src: "https://images.unsplash.com/photo-1457608135803-4827addc43e0?q=80&w=1963&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://forms.gle/SnZuRgA79zvgHX1m6",
    },
    {
      title: "Content Team",
      src: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://forms.gle/ZJ7wZ4ZyKrq11GX58",
    },
    {
      title: "Event Team",
      src: "https://images.unsplash.com/photo-1429514513361-8fa32282fd5f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://forms.gle/eErQPERrVmitzNV8A",
    },
  ];

  return (
    <HeroHighlight className='min-h-screen w-screen p-6'>
      <div className='font-bold text-3xl md:text-5xl text-center w-full mb-4 pt-20'>
        Computer Society of India
      </div>
      <div className='text-center font-semibold text-lg md:text-xl w-full'>
        VIT Bhopal Student Chapter
      </div>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className='text-xl md:text-1xl px-4 font-bold text-neutral-700 dark:text-white text-center mx-auto mb-6 pt-40 pb-80 overflow-hidden max-w-5xl '>
        Are you eager to transform your ideas into reality and carve a path
        toward a brighter future? The CSI Student Chapter at VIT Bhopal
        University is looking for enthusiastic, driven individuals to join our
        dynamic teams. <br /> <br />
        <Highlight className='text-black dark:text-white md:text-3xl'>
          Our mission: Create. Innovate. Transform.
        </Highlight>
      </motion.h1>
      <div className='pb-24'>
        <FocusCards cards={cards} />
      </div>
    </HeroHighlight>
  );
}
