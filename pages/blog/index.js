import { getBlogPostData } from "@/lib/posts";
import H1 from "@/UI/H1";
import Link from "next/link";

export default function BlogPosts({ allPostsData }) {
  console.log(allPostsData);
  return (
    <div>
      BlogPosts
      <div>
        {allPostsData.map((data) => (
          <div key={data.slug}>
            <Link href={`blog/${data.slug}`}>
              <H1>{data.slug} </H1>
            </Link>
            <p>{data.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const allPostsData = await getBlogPostData();

  return {
    props: {
      allPostsData: allPostsData,
    },
  };
}
