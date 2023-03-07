import { getBlogPostData } from "@/lib/posts";
import H1 from "@/UI/H1";
import H2 from "@/UI/H2";
import Link from "next/link";

export default function BlogPosts({ allPostsData }) {
  console.log(allPostsData);
  return (
    <>
      <div className="flex flex-col gap-6 mt-12 ">
        {allPostsData.map((data) => (
          <Link href={`blog/${data.slug}`} className="group max-w-lg">
            <H2 className="text-[24px]  group-hover:text-[#6f8dfb]">
              {data.slug}{" "}
            </H2>

            <p>{data.description}</p>
            <div className="mt-2">
              <span className="text-[14px] font-medium dark:text-gray-200">
                Read more
                <span className="group-hover:text-[#6f8dfb] text-sm pl-1 relative top-[2.5px] ">
                  →
                </span>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </>
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
