export type ComponentData = {
  name: string;
  link: string;
  code: string;
  category: string;
  description: string;
  hasAnimation: boolean;
};

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
    code: `<div class="some classes will go here tailwind">
                <h1>Card</h1>
                <p>Some text</p>
             </div>`,
    category: "Images",
    description: "A simple card component.",
    hasAnimation: false,
  },
];
