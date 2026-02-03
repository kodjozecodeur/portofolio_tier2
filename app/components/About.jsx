"use client";

import { assets, infoList, socialMedia } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { useI18n } from "@/app/i18n/I18nProvider";

function About() {
  const { t } = useI18n();

  const infoText = [
    {
      title: t("about.info.languages.title"),
      description: t("about.info.languages.desc"),
    },
    {
      title: t("about.info.tools.title"),
      description: t("about.info.tools.desc"),
    },
    {
      title: t("about.info.projects.title"),
      description: t("about.info.projects.desc"),
    },
  ];

  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">{t("about.kicker")}</h4>
      <h2 className="text-center text-5xl font-Ovo">{t("about.title")}</h2>
      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        {/* image left */}
        <div className="w-64 sm:w-80 rounded-3xl max-w-none">
          <Image
            src={assets.user_image}
            alt=""
            className="w-full rounded-3xl"
          />
        </div>

        {/* second column */}
        <div className="flex-1">
          <p className="mb-10 max-w-2xl font-Ovo">{t("about.body")}</p>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            {infoList.map(({ icon }, index) => (
              <li
                key={index}
                className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black"
              >
                <Image src={icon} alt={infoText[index]?.title} className="w-7 mt-3" />
                <h3 className="my-4 font-semibold text-gray-700">{infoText[index]?.title}</h3>
                <p className="text-gray-600 text-sm">{infoText[index]?.description}</p>
              </li>
            ))}
          </ul>
          <h4 className="my-6 text-gray-700 font-Ovo">{t("about.socialTitle")}</h4>
          <ul className="flex items-center gap-3 sm:gap-5">
            {socialMedia.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
                  <Image
                    src={item.icon}
                    alt={t("about.socialIconAlt")}
                    className="w-5 sm:w-7"
                  />
                </li>
              </a>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
