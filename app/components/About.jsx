"use client";

import { assets, infoList, socialMedia } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { useEffect } from "react";
import { useI18n } from "@/app/i18n/I18nProvider";

const TENOR_EMBED_SCRIPT = "https://tenor.com/embed.js";

// Replace these placeholders when the projects have public URLs.
const PROJECT_LINKS = {
  Accord: "https://accor-ebon.vercel.app/",
  Copilot: "https://copilot-gamma-red.vercel.app/",
};

function TenorGif() {
  useEffect(() => {
    if (document.querySelector(`script[src="${TENOR_EMBED_SCRIPT}"]`)) {
      return;
    }

    const script = document.createElement("script");
    script.src = TENOR_EMBED_SCRIPT;
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="w-full overflow-hidden rounded-3xl border border-gray-200 bg-gray-50 shadow-sm dark:border-gray-700 dark:bg-gray-900">
      <div
        className="tenor-gif-embed"
        data-postid="12951837333217512032"
        data-share-method="host"
        data-aspect-ratio="0.566265"
        data-width="100%"
      >
        <a
          href="https://tenor.com/view/elmo-door-hi-gif-12951837333217512032"
          target="_blank"
          rel="noopener noreferrer"
        >
          Elmo Door GIF
        </a>{" "}
        from{" "}
        <a
          href="https://tenor.com/search/elmo-gifs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Elmo GIFs
        </a>
      </div>
    </div>
  );
}

function About() {
  const { t } = useI18n();

  const renderAboutBody = (body) => {
    const parts = [];
    const projectToken = /\[\[(Accord|Copilot)\]\]/g;
    let lastIndex = 0;
    let match;

    while ((match = projectToken.exec(body)) !== null) {
      if (match.index > lastIndex) {
        parts.push(body.slice(lastIndex, match.index));
      }

      const projectName = match[1];
      const isPlaceholder = PROJECT_LINKS[projectName] === "#";
      parts.push(
        <a
          key={`${projectName}-${match.index}`}
          href={PROJECT_LINKS[projectName]}
          target={isPlaceholder ? undefined : "_blank"}
          rel={isPlaceholder ? undefined : "noopener noreferrer"}
          aria-label={`${projectName} project link${isPlaceholder ? " (coming soon)" : ""}`}
          onClick={isPlaceholder ? (event) => event.preventDefault() : undefined}
          className="font-medium text-gray-900 underline decoration-gray-400 underline-offset-4 transition-colors hover:decoration-gray-900 dark:text-white dark:decoration-gray-500 dark:hover:decoration-white"
        >
          {projectName}
        </a>,
      );
      lastIndex = projectToken.lastIndex;
    }

    parts.push(body.slice(lastIndex));
    return parts;
  };

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
        {/* visual column: compact side-by-side composition on larger screens */}
        <div className="grid w-full max-w-[36rem] grid-cols-1 items-start gap-6 sm:grid-cols-[minmax(0,1.35fr)_minmax(0,0.65fr)] lg:w-[38%] lg:max-w-none lg:gap-5">
          <div className="w-64 justify-self-center rounded-3xl sm:w-80 lg:w-full">
            <Image src={assets.user_image} alt="" className="w-full rounded-3xl" />
          </div>
          <div className="w-full max-w-[12rem] justify-self-center sm:max-w-none">
            <TenorGif />
          </div>
        </div>

        {/* second column */}
        <div className="min-w-0 flex-1">
          <p className="mb-10 max-w-2xl font-Ovo">{renderAboutBody(t("about.body"))}</p>
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
