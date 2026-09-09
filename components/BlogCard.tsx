"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export type BlogPostData = {
  id: number | string;
  title: string;
  date: string;
  link: string;
  image: string;
  category: string;
  excerpt: string;
};

interface BlogCardProps {
  post: BlogPostData;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <motion.article
      className="flex flex-col bg-[#141414] rounded-[2px] overflow-hidden h-full transition-colors border border-[#1f1f1f] group"
    >
      {post.image && (
        <Link href={post.link} className="relative aspect-[16/9] block w-full overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
          />
        </Link>
      )}

      <div className={`flex flex-col flex-grow ${post.image ? 'p-5' : 'px-5 pb-5 pt-5'}`}>

        {/* Title */}
        <Link
          href={post.link}
          aria-label={`Läs mer om ${post.title}`}
          className="block hover:text-red-500 transition-colors mb-2 focus:outline-none focus-visible:text-red-500 motion-reduce:transition-none"
        >
          <h2 className="text-[rgb(253,254,255)] text-[20px] leading-[30px] font-['Hellix_Bold',sans-serif] font-[600]">
            {post.title}
          </h2>
        </Link>

        <div className="mt-auto pt-2">
          <span className="text-gray-500 text-xs tracking-wider uppercase font-semibold">
            {post.date}
          </span>
        </div>
      </div>
    </motion.article>
  );
}
