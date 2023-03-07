import MDXComponents from "@/components/mdx components/MDXComponents";
import syntaxHighlighter from "@/components/mdx components/syntaxHighlighter";
import TableComponent from "@/components/mdx components/TableComponent";
import { getAllPostSlugs, getPostBySlug } from "@/lib/posts";
import { getMDXComponent } from "mdx-bundler/client";
import Link from "next/link";
import { useMemo } from "react";

export default function Post({ slug, frontmatter, code }) {
  const Component = useMemo(() => getMDXComponent(code), [code]);

  return (
    <div className="mt-8">
      <div className="rounded text-[#6F8DFB]  dark:bg-[#191c3c] mb-8 font-medium text-xs bg-gray-100  p-2 relative right-2">
        <Link className="hover:text-[#f6f6f9]" href="/">
          Home
        </Link>{" "}
        {">"}{" "}
        <Link className="hover:text-[#f6f6f9]" href="/blog">
          Posts
        </Link>
      </div>
      <Component
        components={{
          pre: syntaxHighlighter,
          ...MDXComponents,
          //table is return as a p tag
          // table: ??
        }}
      />

      {/* <SyntaxHighlighter>{exampleCode}</SyntaxHighlighter> */}
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
