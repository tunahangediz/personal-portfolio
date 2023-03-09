import { facebookSvg, socialLinks } from "@/data/svgIcons";
import H1 from "@/UI/H1";
import Link from "next/link";

function Footer() {
  return (
    <footer className="relative bg-[#191D3C] p-4 mt-2">
      <div className="max-w-[900px] sm:px-4 m-auto flex justify-between ">
        <div>
          <a
            className="flex items-center gap-2 dark:hover:text-[#6F8DFB] hover:text-[#5073f3] text-[#6F8DFB] dark:text-white"
            href="mailto:tunahan_gediz@icloud.com"
            target="_blank"
          >
            <i class="ri-mail-fill"></i> tunahan_gediz@icloud.com
          </a>
        </div>
        {/* <div> Copyright © {new Date().getFullYear()}</div> */}
        <div className="flex gap-2">
          {socialLinks.map((link) => (
            <Link href={link.link} target="_blank" rel="noopener noreferrer">
              {link.svg}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
