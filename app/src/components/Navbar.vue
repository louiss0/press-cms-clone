<script lang="tsx" setup>
import pressCMSLogo from "~/assets/images/58251377394bc31f2f8cc87a_Logo.png";
import miniArrow from "~/assets/images/5818e4f1f02e0cb737e5fb57_Mini-arrow.png";

const mainLinks = [
  "Layout One",
  "Layout Two",
  "Featured",
  "Travel",
  "Architecture",
  "Photography",
  "All Posts",
];
const secondaryLinks = [
  "404Page",
  "Login",
  "Licensing",
  "Instructions",
  "Style Guide",
  "Changelog",
];
</script>
<template>
  <nav class="bg-zinc-800">
    <div id="top-half" class="p-4">
      <div class="flex justify-between lg:w-5/6 lg:mx-auto">
        <div class="h-12 w-12">
          <PressCMSLogo />
        </div>

        <div class="hidden lg:block">
          <ul class="flex gap-2" role="list">
            <li v-for="link of mainLinks" class="capitalize">
              <FormattedLink :text="link" />
            </li>

            <li>
              <PagesDropdown />
              <div :class="{ hidden: showPagesDropdown }">
                <PagesDropdownList :secondary-links="secondaryLinks" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div id="bottom-half" class="relative p-4">
      <div class="absolute z-10 left-0 right-0">
        <div :class="{ hidden: !showMobileDropdown }">
          <MobileDropdown v-bind="{ mainLinks, secondaryLinks }" />
        </div>
      </div>

      <div class="flex justify-between">
        <div class="flex-1"></div>
        <div class="absolute bottom-4 right-4 z-20">
          <div class="lg:hidden">
            <button @click="toggleMobileDropdown()">
              <HamburgerMenu />
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script lang="tsx">
import { useToggle } from "@vueuse/shared";
const [showMobileDropdown, toggleMobileDropdown] = useToggle(false);

const [showPagesDropdown, togglePagesDropdown] = useToggle(false);

interface MainAndSecondaryLinks {
  mainLinks: Array<string>;
  secondaryLinks: Array<string>;
}

type SecondaryLinksObject = Omit<MainAndSecondaryLinks, "mainLinks">;

type PagesDropdownProps = SecondaryLinksObject;

type MoblieDropdownProps = MainAndSecondaryLinks;
type CapitalizedLinkProps = { text: string };

function PagesDropdownList({ secondaryLinks }: PagesDropdownProps) {
  return (
    <ul class="bg-gray-50 text-zinc-900 px-4">
      {secondaryLinks.map((link) => (
        <li class="capitalize hover:bg-gray-400">
          <div class="transition duration-200 ease-in hover:translate-x-4">
            <div class="p-2">
              <FormattedLink text={link} />
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

const FormattedLink = ({ text }: CapitalizedLinkProps) => (
  <a href={`/${text.toLowerCase().replace(/\s+/, "-")}`}>{text}</a>
);

function PagesDropdown() {
  const rotationClasses = [
    "transition-transform duration-200 ease-in",
    {
      "rotate-180": showPagesDropdown.value,
    },
  ];

  return (
    <button onClick={() => togglePagesDropdown()}>
      <div class="capitalize flex gap-2 items-center">
        <span class>Pages</span>
        <div class={rotationClasses}>
          <DoubleArrows />
        </div>
      </div>
    </button>
  );

  function DoubleArrows() {
    return (
      <div>
        <img src={miniArrow} alt="" />
        <img src={miniArrow} alt="" />
      </div>
    );
  }
}

export default {
  components: {
    PressCMSLogo() {
      return <img src={pressCMSLogo} alt="Press CMS Logo" />;
    },

    MobileDropdown({ mainLinks, secondaryLinks }: MoblieDropdownProps) {
      return (
        <>
          <ul class="bg-zinc-800 text-zinc-50">
            {mainLinks.map((link) => (
              <div class="transition-transform duration-500 ease-in hover:text-brown">
                <li class="capitalize px-4 py-6">
                  <FormattedLink text={link} />
                </li>
              </div>
            ))}
            <div class="transition-transform duration-500 ease-in hover:text-brown">
              <li class="capitalize px-4 py-6 ">
                <PagesDropdown />
              </li>
            </div>
          </ul>
          <div
            class={{
              hidden: !showPagesDropdown.value,
            }}
          >
            <PagesDropdownList secondaryLinks={secondaryLinks} />
          </div>
        </>
      );
    },
    HamburgerMenu() {
      return (
        <svg class="w-6 h-6" viewBox="0 0 24 24">
          <path
            fill="#888888"
            d="M19 17H5c-1.103 0-2 .897-2 2s.897 2 2 2h14c1.103 0 2-.897 2-2s-.897-2-2-2zm0-7H5c-1.103 0-2 .897-2 2s.897 2 2 2h14c1.103 0 2-.897 2-2s-.897-2-2-2zm0-7H5c-1.103 0-2 .897-2 2s.897 2 2 2h14c1.103 0 2-.897 2-2s-.897-2-2-2z"
          ></path>
        </svg>
      );
    },
  },
};
</script>
