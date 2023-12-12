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

export const heroComponents: ComponentCategory[] = [
  {
    name: "Hero",
    link: "/components/hero",
  },
];

export const formComponents: ComponentCategory[] = [
  {
    name: "Contact Form",
    link: "/components/contact-form",
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
  {
    name: "Hero",
    link: "/components/hero",
    code: `
    <section
      class="w-full h-full flex justify-center items-center p-20 flex-col gap-10">
      <h1
        class="text-transparent bg-clip-text bg-gradient-to-br from-emerald-600 to-teal-600 font-bold text-5xl text-center max-w-[500px]">
        HTML + Tailwind only code snippets
      </h1>
      <button
        class="bg-gradient-to-br from-emerald-600 to-teal-700 font-semibold text-2xl px-3 py-2 rounded-lg">
        <a href="">Components</a>
      </button>
    </section>
    `,
    category: "Hero",
    description: "A simple hero component.",
    hasAnimation: false,
  },
  {
    name: "Contact Form",
    link: "/components/contact-form",
    code: `

<section class="h-screen w-full grid grid-rows-2 md:grid-cols-2 md:grid-rows-1 items-center">
  <div class="w-full h-full flex justify-center items-center">
    <div class="flex flex-col items-center gap-3">
      <h1 class="text-3xl font-semibold">Hey I&apos;m John</h1>
      <div class="flex flex-col items-center gap-1">
        <p class="text-3xl font-semibold text-white">Let&apos;s build something together</p>
      </div>
      <div class="py-10 flex gap-5 items-center">
        <a href="">
          <img src="" class="h-10 w-10" alt="" />
        </a>
        <a href="">
          <img src="" class="h-10 w-10" alt="" />
        </a>
        <a href="">
          <img src="" class="h-10 w-10" alt="" />
        </a>
        <a href="">
          <img src="" class="h-10 w-10" alt="" />
        </a>
      </div>
    </div>
  </div>
  <div class="w-full flex items-center justify-center">
    <form class="w-full max-w-2xl flex flex-col p-10 gap-5">
      <div class="w-full">
        <h2 class="text-center text-white font-semibold text-2xl">
         Lemme know 
        </h2>
      </div>
      <div class="flex flex-col">
        <label class="text-white">Name</label>
        <input
          required
          placeholder="What should I call you?"
          type="text"
          name="user_name"
          class="text-black py-1 px-2 rounded-md"
        />
      </div>
      <div class="flex flex-col">
        <label class="text-white">Email</label>
        <input
          placeholder="youremail@email.com"
          required
          type="email"
          name="user_email"
          class="text-black py-1 px-2 rounded-md"
        />
      </div>
      <div class="flex flex-col">
        <label class="text-white">Phone number</label>
        <input
          type="text"
          name="user_phone"
          placeholder="Optional"
          class="text-black py-1 px-2 rounded-md"
        />
      </div>
      <div class="flex flex-col">
        <label class="text-white">Message</label>
        <textarea
          required
          placeholder="Tell me what I can do for you."
          name="message"
          class="text-black py-1 px-2 rounded-md"></textarea>
      </div>
      <button
        class="text-white cursor-pointer px-3 py-2 gradient active:scale-95 font-bold rounded-lg
         bg-gradient-to-br from-emerald-600 to-teal-700"
        type="submit">Send</button
      >
    </form>
  </div>
    `,
    category: "Forms",
    description: "A simple contact form component.",
    hasAnimation: false,
  },
];
