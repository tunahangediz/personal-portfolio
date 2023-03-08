import Link from "next/link";
import ViewCounter from "./ViewCounter";

function PostPageNavigation() {
  return (
    <nav className="flex rounded dark:text-[#6F8DFB] text-[#476cf2] dark:bg-[#191c3c] mb-8 font-medium text-xs bg-gray-100  p-2 relative right-2">
      <div className="mr-auto">
        <Link
          className="dark:hover:text-[#f6f6f9] hover:text-[#0d1129] "
          href="/"
        >
          Home
        </Link>{" "}
        {">"}{" "}
        <Link
          className="dark:hover:text-[#f6f6f9] hover:text-[#0d1129]"
          href="/blog"
        >
          Posts
        </Link>
      </div>
    </nav>
  );
}

export default PostPageNavigation;
