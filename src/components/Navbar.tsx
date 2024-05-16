import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "../../constants";

const Navbar = () => {
  return (
    <nav className="relative z-30 px-10 py-5 flex justify-between items-center">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>
      <ul className="hidden lg:flex gap-12 ">
        {NAV_LINKS.map((link) => (
          <li key={link.key}>
            <Link
              href={link.href}
              className="regular-16 text-gray-500 flex-center cursor-pointer pb-1.5 transition-all hover:font-bold"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <div className="px-10">
        <button className="h-10 w-24 bg-black text-white rounded-full">Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
