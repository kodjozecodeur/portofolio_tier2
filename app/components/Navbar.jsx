"use client"

import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { useI18n } from "@/app/i18n/I18nProvider";

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef();
  const [langOpen, setLangOpen] = useState(false);
  const { t, locale, setLocale } = useI18n();

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };
  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (scrollY > 50) {
        setIsScroll(true)
      } else {
        setIsScroll(false)
      }
    })
  }, [])
  return (
    <div>
      <nav className={`w-full fixed  px-5 lg:px-8 xl:px-[8%] flex items-center justify-between ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm" : ""}`}>
        <a href="http://">
          <Image
            src={assets.logo}
            alt=""
            className="w-40 cursor-pointer mr-14"
          />
        </a>
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3">
          <li>
            <a href="#top">{t("nav.home")}</a>
          </li>
          <li>
            <a className="font-Ovo" href="#about">
              {t("nav.about")}
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#services">
              {t("nav.services")}
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#works">
              {t("nav.projects")}
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#contact">
              {t("nav.contact")}
            </a>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          <div className="relative hidden md:flex">
            <button
              type="button"
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-lg hover:bg-gray-100 transition-colors"
              aria-label={t("nav.language")}
              onClick={() => setLangOpen((open) => !open)}
            >
              {locale === "fr" ? "🇫🇷" : "🇺🇸"}
            </button>
            {langOpen && (
              <div className="absolute right-0 mt-2 w-40 rounded-xl border border-gray-200 bg-white shadow-lg p-2 z-50">
                <button
                  type="button"
                  onClick={() => {
                    setLocale("en");
                    setLangOpen(false);
                  }}
                  className="w-full flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 text-left"
                >
                  <span className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center">
                    🇺🇸
                  </span>
                  {t("nav.language.en")}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setLocale("fr");
                    setLangOpen(false);
                  }}
                  className="w-full flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 text-left"
                >
                  <span className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center">
                    🇫🇷
                  </span>
                  {t("nav.language.fr")}
                </button>
              </div>
            )}
          </div>
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full mt-4 font-Ovo"
          >
            {t("nav.contactCta")} <Image src={assets.arrow_icon} alt="" className="w-3" />
          </a>
          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image src={assets.menu_black} alt="" className="w-6" />
          </button>
        </div>

        {/* mobile menu goes here */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500"
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image
              src={assets.close_black}
              alt=""
              className="w-5 cursor-pointer"
            />
          </div>
          <li>
            <a href="#top">{t("nav.home")}</a>
          </li>
          <li>
            <a className="font-Ovo" href="#about">
              {t("nav.about")}
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#services">
              {t("nav.services")}
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#projects">
              {t("nav.projects")}
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#contact">
              {t("nav.contact")}
            </a>
          </li>
          <li className="mt-4">
            <div className="flex items-center gap-3">
              <button
                type="button"
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-lg"
                onClick={() => setLocale("en")}
                aria-label={t("nav.language.en")}
              >
                🇺🇸
              </button>
              <button
                type="button"
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-lg"
                onClick={() => setLocale("fr")}
                aria-label={t("nav.language.fr")}
              >
                🇫🇷
              </button>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
