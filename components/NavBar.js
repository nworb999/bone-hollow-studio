import { navLinks } from "../src/utils/data";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav>
      {navLinks.map((link, index) => {
        return (
          <ul class="flex">
            <Link key={index} href={link.path}>
              <li class="flex-1 mr-2">
                <a
                  class="text-center block border border-transparent rounded py-2 px-4 bg-green-900 hover:border-green-800 text-brown hover:bg-green-800"
                  href="#"
                >
                  {link.name}
                </a>
              </li>
            </Link>
          </ul>
        );
      })}
    </nav>
  );
}
