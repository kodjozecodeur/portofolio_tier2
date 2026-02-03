"use client";

import React from "react";
import Image from "next/image"; // Corrected import
import { assets } from "@/assets/assets";
import { useI18n } from "@/app/i18n/I18nProvider";

function Header() {
  const { t } = useI18n();

  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <div>
        <Image src={assets.profile_img} alt="" className="rounded-full w-32" />
      </div>
      <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo">
        {t("header.greeting")}
        <Image src={assets.hand_icon} alt="" className="rounded-full w-6" />
      </h3>
      <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">
        {t("header.title")}
      </h1>
      <p className="max-w-2xl mx-auto font-Ovo">
        {t("header.subtitle")}
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <a
          href="#contact"
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2"
        >
          {t("header.contactCta")}{" "}
          <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </a>
        <a
          href="/resume-sample.pdf"
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2"
        >
          {t("header.resumeCta")}{" "}
          <Image
            src={assets.download_icon}
            alt="Download icon"
            className="w-4"
          />
        </a>
      </div>
    </div>
  );
}

export default Header;
