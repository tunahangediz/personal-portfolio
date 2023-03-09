import MDXComponents from "@/components/mdx components/MDXComponents";
import syntaxHighlighter from "@/components/mdx components/syntaxHighlighter";
import PostPageNavigation from "@/components/PostPageNavigation";
import ViewCounter from "@/components/ViewCounter";
import { getAllPostSlugs, getPostBySlug } from "@/lib/posts";
import { getMDXComponent } from "mdx-bundler/client";

import { useEffect, useMemo } from "react";

export default function Post({ slug, frontmatter, code }) {
  const Component = useMemo(() => getMDXComponent(code), [code]);

  return (
    <div className="mt-8">
      <PostPageNavigation slug={slug} />

      <Component
        components={{
          pre: syntaxHighlighter,
          ...MDXComponents,
          //table is return as a p tag
          // table: ??
        }}
      />
    </div>
  );
}

export async function getStaticProps({ params }) {
  const { slug, frontmatter, code } = await getPostBySlug(params.slug);

  return {
    props: { slug, frontmatter, code },
  };
}

export async function getStaticPaths() {
  const paths = await getAllPostSlugs();

  return {
    paths,
    fallback: false,
  };
}
