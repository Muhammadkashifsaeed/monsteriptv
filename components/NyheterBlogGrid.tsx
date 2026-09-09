"use client";

import { motion, Variants, useReducedMotion } from "framer-motion";
import BlogCard from "@/components/BlogCard";
import type { BlogPostData } from "@/lib/blogData";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
};

interface NyheterBlogGridProps {
  posts: BlogPostData[];
}

export default function NyheterBlogGrid({ posts }: NyheterBlogGridProps) {
  const shouldReduceMotion = useReducedMotion();

  const reducedContainerVariants: Variants = {
    hidden: { opacity: shouldReduceMotion ? 1 : 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.15
      }
    }
  };

  const reducedItemVariants: Variants = {
    hidden: { opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      variants={shouldReduceMotion ? reducedContainerVariants : containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
    >
      {posts.map((post) => (
        <motion.div key={post.id} variants={shouldReduceMotion ? reducedItemVariants : itemVariants} className="h-full">
          <BlogCard post={post} />
        </motion.div>
      ))}
    </motion.div>
  );
}
