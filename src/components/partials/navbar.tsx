import React, { useState } from "react";
import Link from "next/link";
import { Container } from "@/layouts";
import { motion } from "framer-motion";
import { HamburgerMenu, Close } from "../icons";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav className="fixed z-30 w-full bg-primary py-6 text-white">
      <Container>
        <div className="flex items-center justify-between">
          <div className="flex gap-10">
            <Link href={"/"}>
              <div className="flex items-center gap-2">
                <img src="/logo.svg" alt="" />
                <p className="hidden text-xl font-semibold md:block">Osmium</p>
              </div>
            </Link>
          </div>

          <div className="flex items-center gap-6">
            <ul className="hidden items-center gap-10 md:flex">
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                <Link href={"/services"}>Services</Link>
              </li>
              <li>
                <Link href={"/our-people"}>Our People</Link>
              </li>
              <li>
                <Link href={"/contact"}>Contact Us</Link>
              </li>
              <li>
                <Link href={"/blog"}>Blog</Link>
              </li>
            </ul>

            <button
              onClick={toggleMobileMenu}
              className="rounded-[4px] bg-primary px-2 py-2.5 font-semibold text-white transition-all duration-300 hover:bg-primary/80 lg:hidden"
            >
              {!menuOpen ? <HamburgerMenu /> : <Close />}
            </button>
          </div>
        </div>
      </Container>
      {menuOpen && (
        <motion.div
          animate={{ x: 0 }}
          initial={{ x: -250 }}
          className="z-10 mx-auto px-6  sm:max-w-2xl sm:px-8 md:max-w-3xl"
        >
          <div className="w-full space-y-7 text-white py-6  lg:hidden">
            <ul className="space-y-7">
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                <Link href={"/services"}>Services</Link>
              </li>
              <li>
                <Link href={"/contact"}>Contact Us</Link>
              </li>
              <li>
                <Link href={"/our-people"}>Our People</Link>
              </li>
              <li>
                <Link href={"/blog"}>Blog</Link>
              </li>
            </ul>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
