import React, { useState } from "react";

function HtmlCopier({ isOpen, days }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function simplifyEvents(data) {
    return data
      .map((day) => {
        return {
          events: day.events.map((event) => {
            return {
              id: event.id,
              title: event.title,
              description: event.description,
            };
          }),
        };
      })
      .filter((day) => day.events.length >= 0);
  }

  var processedDaysData = JSON.stringify(simplifyEvents(days));

  const copyCodeToClipboard = () => {
    let htmlText = document.getElementById("schedule-container").outerHTML;
    let codeText =
      cssScript +
      "\n \n \n" +
      modalScript +
      "\n \n \n" +
      htmlText +
      "\n \n \n" +
      modalHTML;

    var temporaryTextArea = document.createElement("textarea");
    document.body.appendChild(temporaryTextArea);
    temporaryTextArea.value = codeText;
    temporaryTextArea.select();
    document.execCommand("copy");
    document.body.removeChild(temporaryTextArea);

    setIsModalOpen(true); // Open the modal
    setTimeout(() => setIsModalOpen(false), 3000); // Optional: Close the modal after 3 seconds
  };

  const cssStyles = `*, ::before, ::after { --tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgb(59 130 246 / 0.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; } ::backdrop { --tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgb(59 130 246 / 0.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; } .fixed { position: fixed; } .relative { position: relative; } .sticky { position: sticky; } .inset-0 { inset: 0px; } .left-0 { left: 0px; } .top-0 { top: 0px; } .z-50 { z-index: 50; } .col-span-1 { grid-column: span 1 / span 1; } .col-span-2 { grid-column: span 2 / span 2; } .m-1 { margin: 0.25rem; } .m-2 { margin: 0.5rem; } .m-4 { margin: 1rem; } .-mx-3 { margin-left: -0.75rem; margin-right: -0.75rem; } .mx-12 { margin-left: 3rem; margin-right: 3rem; } .mx-16 { margin-left: 4rem; margin-right: 4rem; } .mx-2 { margin-left: 0.5rem; margin-right: 0.5rem; } .mx-3 { margin-left: 0.75rem; margin-right: 0.75rem; } .mx-32 { margin-left: 8rem; margin-right: 8rem; } .mx-36 { margin-left: 9rem; margin-right: 9rem; } .mx-4 { margin-left: 1rem; margin-right: 1rem; } .mx-40 { margin-left: 10rem; margin-right: 10rem; } .mx-48 { margin-left: 12rem; margin-right: 12rem; } .mx-64 { margin-left: 16rem; margin-right: 16rem; } .mx-8 { margin-left: 2rem; margin-right: 2rem; } .mx-80 { margin-left: 20rem; margin-right: 20rem; } .mx-auto { margin-left: auto; margin-right: auto; } .my-1 { margin-top: 0.25rem; margin-bottom: 0.25rem; } .my-10 { margin-top: 2.5rem; margin-bottom: 2.5rem; } .my-2 { margin-top: 0.5rem; margin-bottom: 0.5rem; } .my-4 { margin-top: 1rem; margin-bottom: 1rem; } .my-8 { margin-top: 2rem; margin-bottom: 2rem; } .mb-1 { margin-bottom: 0.25rem; } .mb-16 { margin-bottom: 4rem; } .mb-2 { margin-bottom: 0.5rem; } .mb-3 { margin-bottom: 0.75rem; } .mb-4 { margin-bottom: 1rem; } .mb-5 { margin-bottom: 1.25rem; } .mb-6 { margin-bottom: 1.5rem; } .mb-8 { margin-bottom: 2rem; } .ml-0 { margin-left: 0px; } .ml-1 { margin-left: 0.25rem; } .ml-2 { margin-left: 0.5rem; } .mr-1 { margin-right: 0.25rem; } .mr-2 { margin-right: 0.5rem; } .mr-3 { margin-right: 0.75rem; } .mr-4 { margin-right: 1rem; } .mt-1 { margin-top: 0.25rem; } .mt-2 { margin-top: 0.5rem; } .mt-4 { margin-top: 1rem; } .mt-8 { margin-top: 2rem; } .block { display: block; } .flex { display: flex; } .grid { display: grid; } .contents { display: contents; } .hidden { display: none; } .h-10 { height: 2.5rem; } .h-12 { height: 3rem; } .h-16 { height: 4rem; } .h-32 { height: 8rem; } .h-36 { height: 9rem; } .h-4 { height: 1rem; } .h-40 { height: 10rem; } .h-44 { height: 11rem; } .h-48 { height: 12rem; } .h-5 { height: 1.25rem; } .h-52 { height: 13rem; } .h-6 { height: 1.5rem; } .h-60 { height: 15rem; } .h-8 { height: 2rem; } .h-9 { height: 2.25rem; } .h-96 { height: 24rem; } .h-auto { height: auto; } .h-fit { height: -moz-fit-content; height: fit-content; } .h-full { height: 100%; } .h-72 { height: 18rem; } .h-80 { height: 20rem; } .max-h-screen { max-height: 100vh; } .min-h-screen { min-height: 100vh; } .w-1\/2 { width: 50%; } .w-1\/3 { width: 33.333333%; } .w-10 { width: 2.5rem; } .w-10\/12 { width: 83.333333%; } .w-11 { width: 2.75rem; } .w-12 { width: 3rem; } .w-16 { width: 4rem; } .w-2 { width: 0.5rem; } .w-20 { width: 5rem; } .w-24 { width: 6rem; } .w-28 { width: 7rem; } .w-3 { width: 0.75rem; } .w-32 { width: 8rem; } .w-36 { width: 9rem; } .w-4 { width: 1rem; } .w-4\/12 { width: 33.333333%; } .w-40 { width: 10rem; } .w-44 { width: 11rem; } .w-48 { width: 12rem; } .w-5 { width: 1.25rem; } .w-52 { width: 13rem; } .w-6 { width: 1.5rem; } .w-60 { width: 15rem; } .w-72 { width: 18rem; } .w-8 { width: 2rem; } .w-8\/12 { width: 66.666667%; } .w-80 { width: 20rem; } .w-9 { width: 2.25rem; } .w-96 { width: 24rem; } .w-fit { width: -moz-fit-content; width: fit-content; } .w-full { width: 100%; } .min-w-0 { min-width: 0px; } .min-w-fit { min-width: -moz-fit-content; min-width: fit-content; } .min-w-max { min-width: max-content; } .max-w-3xl { max-width: 48rem; } .max-w-fit { max-width: -moz-fit-content; max-width: fit-content; } .max-w-full { max-width: 100%; } .max-w-lg { max-width: 32rem; } .flex-1 { flex: 1 1; } .flex-shrink { flex-shrink: 1; } .flex-shrink-0 { flex-shrink: 0; } .flex-grow { flex-grow: 1; } .-rotate-90 { --tw-rotate: -90deg; transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)); } .transform { transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)); } .cursor-pointer { cursor: pointer; } .list-inside { list-style-position: inside; } .list-alpha { list-style-type: lower-alpha; } .list-decimal { list-style-type: decimal; } .grid-cols-1 { grid-template-columns: repeat(1, minmax(0, 1fr)); } .grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); } .grid-cols-4 { grid-template-columns: repeat(4, minmax(0, 1fr)); } .grid-cols-7 { grid-template-columns: repeat(7, minmax(0, 1fr)); } .grid-rows-2 { grid-template-rows: repeat(2, minmax(0, 1fr)); } .grid-rows-\[auto, 1fr\] { grid-template-rows: auto 1fr; } .flex-col { flex-direction: column; } .items-start { align-items: flex-start; } .items-end { align-items: flex-end; } .items-center { align-items: center; } .justify-normal { justify-content: normal; } .justify-start { justify-content: flex-start; } .justify-end { justify-content: flex-end; } .justify-center { justify-content: center; } .justify-between { justify-content: space-between; } .gap-2 { gap: 0.5rem; } .gap-4 { gap: 1rem; } .gap-5 { gap: 1.25rem; } .space-x-4 > :not([hidden]) ~ :not([hidden]) { --tw-space-x-reverse: 0; margin-right: calc(1rem * var(--tw-space-x-reverse)); margin-left: calc(1rem * calc(1 - var(--tw-space-x-reverse))); } .space-y-2 > :not([hidden]) ~ :not([hidden]) { --tw-space-y-reverse: 0; margin-top: calc(0.5rem * calc(1 - var(--tw-space-y-reverse))); margin-bottom: calc(0.5rem * var(--tw-space-y-reverse)); } .overflow-x-auto { overflow-x: auto; } .whitespace-nowrap { white-space: nowrap; } .rounded { border-radius: 0.25rem; } .rounded-full { border-radius: 9999px; } .rounded-lg { border-radius: 0.5rem; } .rounded-md { border-radius: 0.375rem; } .rounded-sm { border-radius: 0.125rem; } .rounded-xl { border-radius: 0.75rem; } .border { border-width: 1px; } .border-2 { border-width: 2px; } .border-solid { border-style: solid; } .border-black { --tw-border-opacity: 1; border-color: rgb(0 0 0 / var(--tw-border-opacity)); } .border-gray-400 { --tw-border-opacity: 1; border-color: rgb(156 163 175 / var(--tw-border-opacity)); } .border-red-500 { --tw-border-opacity: 1; border-color: rgb(239 68 68 / var(--tw-border-opacity)); } .border-slate-400 { --tw-border-opacity: 1; border-color: rgb(148 163 184 / var(--tw-border-opacity)); } .bg-assessment { --tw-bg-opacity: 1; background-color: rgb(204 51 51 / var(--tw-bg-opacity)); } .bg-black { --tw-bg-opacity: 1; background-color: rgb(0 0 0 / var(--tw-bg-opacity)); } .bg-blue-500 { --tw-bg-opacity: 1; background-color: rgb(59 130 246 / var(--tw-bg-opacity)); } .bg-blue-950 { --tw-bg-opacity: 1; background-color: rgb(23 37 84 / var(--tw-bg-opacity)); } .bg-gray-200 { --tw-bg-opacity: 1; background-color: rgb(229 231 235 / var(--tw-bg-opacity)); } .bg-gray-400 { --tw-bg-opacity: 1; background-color: rgb(156 163 175 / var(--tw-bg-opacity)); } .bg-gray-50 { --tw-bg-opacity: 1; background-color: rgb(249 250 251 / var(--tw-bg-opacity)); } .bg-gray-500 { --tw-bg-opacity: 1; background-color: rgb(107 114 128 / var(--tw-bg-opacity)); } .bg-gray-600 { --tw-bg-opacity: 1; background-color: rgb(75 85 99 / var(--tw-bg-opacity)); } .bg-gray-800 { --tw-bg-opacity: 1; background-color: rgb(31 41 55 / var(--tw-bg-opacity)); } .bg-gray-900 { --tw-bg-opacity: 1; background-color: rgb(17 24 39 / var(--tw-bg-opacity)); } .bg-gray-950 { --tw-bg-opacity: 1; background-color: rgb(3 7 18 / var(--tw-bg-opacity)); } .bg-lab { --tw-bg-opacity: 1; background-color: rgb(156 52 100 / var(--tw-bg-opacity)); } .bg-lecture { --tw-bg-opacity: 1; background-color: rgb(27 54 99 / var(--tw-bg-opacity)); } .bg-neutral-100 { --tw-bg-opacity: 1; background-color: rgb(245 245 245 / var(--tw-bg-opacity)); } .bg-neutral-300 { --tw-bg-opacity: 1; background-color: rgb(212 212 212 / var(--tw-bg-opacity)); } .bg-neutral-400 { --tw-bg-opacity: 1; background-color: rgb(163 163 163 / var(--tw-bg-opacity)); } .bg-neutral-600 { --tw-bg-opacity: 1; background-color: rgb(82 82 82 / var(--tw-bg-opacity)); } .bg-neutral-800 { --tw-bg-opacity: 1; background-color: rgb(38 38 38 / var(--tw-bg-opacity)); } .bg-other { --tw-bg-opacity: 1; background-color: rgb(78 76 76 / var(--tw-bg-opacity)); } .bg-red-200 { --tw-bg-opacity: 1; background-color: rgb(254 202 202 / var(--tw-bg-opacity)); } .bg-red-500 { --tw-bg-opacity: 1; background-color: rgb(239 68 68 / var(--tw-bg-opacity)); } .bg-slate-100 { --tw-bg-opacity: 1; background-color: rgb(241 245 249 / var(--tw-bg-opacity)); } .bg-slate-200 { --tw-bg-opacity: 1; background-color: rgb(226 232 240 / var(--tw-bg-opacity)); } .bg-slate-600 { --tw-bg-opacity: 1; background-color: rgb(71 85 105 / var(--tw-bg-opacity)); } .bg-teal-700 { --tw-bg-opacity: 1; background-color: rgb(15 118 110 / var(--tw-bg-opacity)); } .bg-tutorial { --tw-bg-opacity: 1; background-color: rgb(0 117 126 / var(--tw-bg-opacity)); } .bg-white { --tw-bg-opacity: 1; background-color: rgb(255 255 255 / var(--tw-bg-opacity)); } .bg-opacity-50 { --tw-bg-opacity: 0.5; } .object-contain { object-fit: contain; } .object-cover { object-fit: cover; } .object-fill { object-fit: fill; } .p-1 { padding: 0.25rem; } .p-2 { padding: 0.5rem; } .p-4 { padding: 1rem; } .p-5 { padding: 1.25rem; } .p-6 { padding: 1.5rem; } .p-8 { padding: 2rem; } .px-1 { padding-left: 0.25rem; padding-right: 0.25rem; } .px-2 { padding-left: 0.5rem; padding-right: 0.5rem; } .px-3 { padding-left: 0.75rem; padding-right: 0.75rem; } .px-4 { padding-left: 1rem; padding-right: 1rem; } .px-8 { padding-left: 2rem; padding-right: 2rem; } .py-1 { padding-top: 0.25rem; padding-bottom: 0.25rem; } .py-2 { padding-top: 0.5rem; padding-bottom: 0.5rem; } .py-4 { padding-top: 1rem; padding-bottom: 1rem; } .pl-4 { padding-left: 1rem; } .pr-8 { padding-right: 2rem; } .pb-4 { padding-bottom: 1rem; } .pt-1 { padding-top: 0.25rem; } .text-start { text-align: start; } .text-2xl { font-size: 1.5rem; line-height: 2rem; } .text-base { font-size: 1rem; line-height: 1.5rem; } .text-lg { font-size: 1.125rem; line-height: 1.75rem; } .text-sm { font-size: 0.875rem; line-height: 1.25rem; } .text-xl { font-size: 1.25rem; line-height: 1.75rem; } .text-xs { font-size: 0.75rem; line-height: 1rem; } .font-bold { font-weight: 700; } .font-medium { font-weight: 500; } .font-semibold { font-weight: 600; } .uppercase { text-transform: uppercase; } .italic { font-style: italic; } .\!leading-4 { line-height: 1rem !important; } .leading-tight { line-height: 1.25; } .tracking-wide { letter-spacing: 0.025em; } .tracking-widest { letter-spacing: 0.1em; } .text-blue-500 { --tw-text-opacity: 1; color: rgb(59 130 246 / var(--tw-text-opacity)); } .text-blue-600 { --tw-text-opacity: 1; color: rgb(37 99 235 / var(--tw-text-opacity)); } .text-cyan-50 { --tw-text-opacity: 1; color: rgb(236 254 255 / var(--tw-text-opacity)); } .text-gray-700 { --tw-text-opacity: 1; color: rgb(55 65 81 / var(--tw-text-opacity)); } .text-red-500 { --tw-text-opacity: 1; color: rgb(239 68 68 / var(--tw-text-opacity)); } .text-white { --tw-text-opacity: 1; color: rgb(255 255 255 / var(--tw-text-opacity)); } .shadow { --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1); --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color); box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow); } .shadow-lg { --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1); --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color); box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow); } .shadow-md { --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1); --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color); box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow); } .shadow-sm { --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05); --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color); box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow); } .outline { outline-style: solid; } .filter { filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow); } .hover\:border-2:hover { border-width: 2px; } .hover\:border-gray-500:hover { --tw-border-opacity: 1; border-color: rgb(107 114 128 / var(--tw-border-opacity)); } .hover\:border-white:hover { --tw-border-opacity: 1; border-color: rgb(255 255 255 / var(--tw-border-opacity)); } .hover\:bg-blue-600:hover { --tw-bg-opacity: 1; background-color: rgb(37 99 235 / var(--tw-bg-opacity)); } .hover\:bg-blue-700:hover { --tw-bg-opacity: 1; background-color: rgb(29 78 216 / var(--tw-bg-opacity)); } .hover\:bg-gray-700:hover { --tw-bg-opacity: 1; background-color: rgb(55 65 81 / var(--tw-bg-opacity)); } .hover\:text-gray-300:hover { --tw-text-opacity: 1; color: rgb(209 213 219 / var(--tw-text-opacity)); } .focus\:bg-blue-700:focus { --tw-bg-opacity: 1; background-color: rgb(29 78 216 / var(--tw-bg-opacity)); } .focus\:outline-none:focus { outline: 2px solid transparent; outline-offset: 2px; } @media (min-width: 768px) { .md\:mx-8 { margin-left: 2rem; margin-right: 2rem; } .md\:h-14 { height: 3.5rem; } .md\:h-44 { height: 11rem; } .md\:h-8 { height: 2rem; } .md\:w-16 { width: 4rem; } .md\:w-44 { width: 11rem; } .md\:w-8 { width: 2rem; } .md\:text-base { font-size: 1rem; line-height: 1.5rem; } .md\:text-lg { font-size: 1.125rem; line-height: 1.75rem; } .md\:text-sm { font-size: 0.875rem; line-height: 1.25rem; } .md\:text-xl { font-size: 1.25rem; line-height: 1.75rem; } } @media (min-width: 1024px) { .lg\:mx-12 { margin-left: 3rem; margin-right: 3rem; } .lg\:mb-2 { margin-bottom: 0.5rem; } .lg\:h-10 { height: 2.5rem; } .lg\:h-16 { height: 4rem; } .lg\:h-48 { height: 12rem; } .lg\:h-9 { height: 2.25rem; } .lg\:w-10 { width: 2.5rem; } .lg\:w-20 { width: 5rem; } .lg\:w-48 { width: 12rem; } .lg\:w-96 { width: 24rem; } .lg\:text-2xl { font-size: 1.5rem; line-height: 2rem; } .lg\:text-base { font-size: 1rem; line-height: 1.5rem; } .lg\:text-lg { font-size: 1.125rem; line-height: 1.75rem; } .lg\:text-xl { font-size: 1.25rem; line-height: 1.75rem; } } @media (min-width: 1280px) { .xl\:text-xl { font-size: 1.25rem; line-height: 1.75rem; } .xl\:text-lg { font-size: 1.125rem; line-height: 1.75rem; } }`;

  const cssStyles2 = `.day { padding-top: 1rem !important; padding-bottom: 1rem !important; } .event { height: 2rem; } .event-title { font-size: 0.75rem; line-height: 0.75rem; } /*small*/ @media (min-width: 640px) { .day-label { font-size: 0.875rem; line-height: 1.25rem; } .week-label { font-size: 0.875rem; line-height: 1.25rem; } .event { height: 2rem; margin-bottom: 0.5rem; } .event-title { font-size: 0.75rem; line-height: 0.75rem; } } /*medium*/ @media (min-width: 768px) { .day { width: 11rem; height: 11rem; } .padding-label { width: 2rem; height: 2rem; } .day-label { width: 11rem; height: 2rem; font-size: 1rem; line-height: 1.5rem; } .week-label { width: 2rem; height: 11rem; font-size: 1rem; line-height: 1.5rem; } .event { height: 2rem; margin-bottom: 0.5rem; } .event-title { font-size: 0.825rem; line-height: 0.825rem; } } /*large*/ @media (min-width: 1024px) { .day { width: 12rem; height: 12rem; } .padding-label { width: 2.5rem; height: 2.5rem; } .day-label { width: 12rem; height: 2.5rem; font-size: 1.125rem; line-height: 1.75rem; } .week-label { width: 2.5rem; height: 12rem; font-size: 1.125rem; line-height: 1.75rem; } .event { height: 2.25rem; margin-bottom: 0.5rem; } .event-title { font-size: 1rem; line-height: 1rem; } } /*extra large*/ @media (min-width: 1280px) { .day-label { font-size: 1.25rem; line-height: 1.75rem; } .week-label { font-size: 1.25rem; line-height: 1.75rem; } }`;

  const cssScript = `      
    <script type="text/javascript">
    // <![CDATA[
    var cssRules = "${cssStyles}"
    var cssRules2 = "${cssStyles2}"
    var styleElement = document.createElement("style");
    styleElement.appendChild(document.createTextNode(cssRules));
    styleElement.appendChild(document.createTextNode(cssRules2));
    document.getElementsByTagName("head")[0].appendChild(styleElement);
    // ]]>
    </script>`;

  const modalScript = `    
    <script type="text/javascript">
    // <![CDATA[
  
      console.log("Script execution started");
  
      document.addEventListener('DOMContentLoaded', (event) => {
      console.log("DOM fully loaded and parsed");
      
      // Assume daysInfo is an array of day objects, each containing an array of events
      var daysInfo = ${processedDaysData};
  
      // Get the modal
      var modal = document.getElementById("eventModal");
  
      // Get the <span> element that closes the modal
      var span = document.getElementsByClassName("close")[0];
  
      // Function to open the modal and set its content
      function openModal(title, description) {
        console.log("Opening modal with title:", title, "and description:", description);
        document.getElementById("modalTitle").innerText = title;
        document.getElementById("modalDescription").innerText = description;
        modal.style.display = "block";
      }
  
      // When the user clicks on <span> (x), close the modal
      span.onclick = function() {
      modal.style.display = "none";
      }
  
      // Close the modal if user clicks anywhere outside of it
      window.onclick = function(event) {
      if (event.target == modal) {
      modal.style.display = "none";
      }
    }
  
    console.log("Attaching event listeners to .event elements");
    document.querySelectorAll('.event').forEach(item => {
      console.log("Event listener attached to:", item);
      item.addEventListener('click', event => {
        console.log("Event item clicked:", item);
        
        // Extract the event ID
        const eventId = item.getAttribute('data-event-id');
        
        // Find the corresponding event in daysInfo
        const eventInfo = daysInfo.find(day => 
          day.events.some(event => event.id === eventId)
        )?.events.find(event => event.id === eventId);
  
        if (eventInfo) {
          // Open the modal with these details
          openModal(eventInfo.title, eventInfo.description);
        }
      })
    })
    });
    // ]]>
    </script>`;

  const modalHTML = `
  <div 
    id="eventModal" 
    style="
      display: none; 
      position: fixed; 
      z-index: 1; 
      left: 0; 
      top: 0; 
      width: 100%; 
      height: 100%; 
      overflow: auto; 
      background-color: rgba(0,0,0,0.4);">
    <div 
      class="modal-content" 
      style="
        background-color: #fefefe; 
        margin: 15% auto; 
        padding: 20px; 
        border: 1px solid #888; 
        width: 80%;">
      <span 
        class="close" 
        style="
          color: #aaa; 
          float: right; 
          font-size: 28px; 
          font-weight: bold;
          cursor: pointer;"
        onclick="document.getElementById('eventModal').style.display='none'">&times;</span>
      <h2 id="modalTitle">Event Title</h2>
      <p id="modalDescription">Event Description</p>
    </div>
  </div>
  `;

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  if (!isOpen) return null;

  return (
    <div className="flex justify-center w-full mb-8">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-72 py-2 px-4 rounded mx-4 md:mx-8 lg:mx-12 mt-4"
        onClick={copyCodeToClipboard}
      >
        Copy Code
      </button>

      {isModalOpen && (
        <Modal message="Code has been copied!" onClose={handleCloseModal} />
      )}
    </div>
  );
}

function Modal({ message, onClose }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
      onClick={onClose}
    >
      <div
        className="bg-gray-600 rounded-lg p-8 w-1/3"
        onClick={(e) => e.stopPropagation()} // Prevents click inside the modal from closing it
      >
        <div className="flex flex-col items-center justify-center p-5">
          <p className="text-white text-lg mb-4">{message}</p>
          <button
            onClick={onClose}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default HtmlCopier;
