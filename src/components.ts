export type ComponentData = {
  name: string;
  link: string;
  code: string;
  category: string;
  description: string;
  hasAnimation: boolean;
};

export type ComponentCategory = {
  name: string;
  link: string;
};

export const cardComponents: ComponentCategory[] = [
  {
    name: "Card",
    link: "/components/card",
  },
  {
    name: "Full Image Card",
    link: "/components/full-image-card",
  },
];

export const navComponents: ComponentCategory[] = [
  {
    name: "Navbar",
    link: "/components/navbar",
  },
  {
    name: "Sidebar",
    link: "/components/sidebar",
  },
];

export const componentData: ComponentData[] = [
  {
    name: "Navbar",
    link: "/components/navbar",
    code: `
    <nav class="flex justify-between p-5 bg-slate-700 bg-opacity-30 items-center">
        <h1 class="cursor-pointer text-white font-bold text-3xl">
            <a href=""> Logo</a>
        </h1>
        <section class="flex flex-col gap-1 md:hidden">
            <div class="h-1 w-7 bg-white"></div>
            <div class="h-1 w-7 bg-white"></div>
            <div class="h-1 w-7 bg-white"></div>
        </section>
        <ul class="gap-5 font-semibold text-white text-lg hidden md:flex">
            <li class="hover:underline active:scale-95 duration-300">
                <a href="">Link 1</a>
            </li>
            <li class="hover:underline active:scale-95 duration-300">
                <a href="">Link 2</a>
            </li>
            <li class="hover:underline active:scale-95 duration-300">
                <a href="">Link 3</a>
            </li>
        </ul>
    </nav>
             `,
    category: "Layout",
    description: "A simple navbar component.",
    hasAnimation: false,
  },
  {
    name: "Sidebar",
    link: "/components/sidebar",
    code: `<div class="some classes will go here tailwind">
                <h1>Logo</h1>
                <ul>
                  <li>Link 1</li>
                  <li>Link 2</li>
                  <li>Link 3</li>
                </ul> 
             </div>`,
    category: "Layout",
    description: "A simple sidebar component.",
    hasAnimation: false,
  },
  {
    name: "Card",
    link: "/components/card",
    code: `
    <div class="flex flex-col overflow-hidden max-w-xl items-center bg-slate-700
     bg-opacity-60 hover:bg-opacity-40 cursor-pointer shadow-lg drop-shadow-lg rounded-lg duration-300">
        <img class="w-full h-3/4 rounded-t-lg"
          src=""
          alt="image"
        />
        <div class="flex w-full h-1/4 p-8 items-center justify-center">
            <p class="text-white font-semibold">wow such a nice image</p>
        </div>
    </div>
    `,
    category: "Images",
    description: "A simple card component.",
    hasAnimation: false,
  },
  {
    name: "Full Image Card",
    link: "/components/full-image-card",
    code: `
    <a href="">
        <div class="relative duration-500 cursor-pointer text-white rounded-lg w-full">
            <div>
                <img src="" alt="image" class="rounded-lg" />
                <h1 class="font-semibold text-xl absolute bottom-10 w-full text-center">
                    Cool picture
                </h1>
            </div>
            <div class="absolute bottom-5 w-full flex flex-col items-center justify-center text-white">
                <p>That picture is really nice good stuff man</p>
            </div>
        </div>
    </a>
`,
    category: "Images",
    description: "A simple full image card component.",
    hasAnimation: false,
  },
];
