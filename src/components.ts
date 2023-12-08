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
    <nav class="flex justify-between p-5 bg-slate-700 bg-opacity-30 rounded-lg">
        <h1 class="text-white font-bold text-3xl">Logo</h1>
        <ul class="flex gap-5 font-semibold text-white text-lg">
            <li class="hover:underline active:scale-95 duration-300"><a href="">Link 1</a></li>
            <li class="hover:underline active:scale-95 duration-300"><a href="">Link 2</a></li>
            <li class="hover:underline active:scale-95 duration-300"><a href="">Link 3</a></li>
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
];
