import fs from "fs";
import path, { join } from "path";
import matter from "gray-matter";
import { bundleMDX } from "mdx-bundler";

const postDirectory = path.join(process.cwd(), "posts");

export async function getAllPostSlugs() {
  const fileNames = fs.readdirSync(postDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(/\.mdx$/, ""),
      },
    };
  });
}

export async function getBlogPostData() {
  const fileNames = fs.readdirSync(postDirectory);
  const allPostsData = fileNames.map((fileName) => {
    //remove .mdx from file name to get slug
    const slug = fileName.replace(/\.mdx$/, "");

    const fullPath = path.join(postDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      slug,
      ...matterResult.data,
    };
  });

  return allPostsData;
}

export async function getPostBySlug(slug) {
  const fullPath = path.join(postDirectory, `${slug}.mdx`);
  const mdxSource = fs.readFileSync(fullPath, "utf8");

  const { code, frontmatter } = await bundleMDX({
    source: mdxSource,
    xdmOptions(options) {
      options.remarkPlugins = [...(options?.remarkPlugins ?? []), remarkGfm];
      options.rehypePlugins = [...(options?.rehypePlugins ?? []), rehypePrism];
      return options;
    },
  });

  return {
    slug,
    frontmatter,
    code,
  };
}
