export type SiteConfig = typeof siteConfig;

export const WP_REST_BASE_URL =
  "https://wordpress-597675-3975829.cloudwaysapps.com/wp-json/wp/v2";

export const siteConfig = {
  name: "OPEYN",
  description:
    "Margin is the Next.js 14 web application powered by headless WordPress.",
  keywords: [
    "Next.js 14",
    "React",
    "Headless WordPress",
    "Tailwind CSS",
    "Server Components",
    "Server Actions",
    "Marketing",
    "SEO",
    "Digital Agency",
  ],
  url: "https://margin-nextjs.vercel.app/",
  ogImage: "https://margin-nextjs.vercel.app/og-image.jpg",
};

export const mainNav = [
  {
    title: "Home",
    href: "/"
    // items: [
    //   {
    //     title: "Home Marketing",
    //     href: "/",
    //     items: [],
    //   },
    //   {
    //     title: "Home SEO Agency",
    //     href: "/seo-agency",
    //     items: [],
    //   },
    //   {
    //     title: "Home Consulting",
    //     href: "/consulting",
    //     items: [],
    //   },
    // ],
  },
  {
    title: "Services",
    href: "/services",
  },
  {
    title: "Projects",
    href: "/projects"
  },
  {
    title: "About",
    href: "/about",
  },
  
  // {
  //   title: "Pricing",
  //   href: "/pricing",
  // },
  {
    title: "Contact",
    href: "/contact",
  },
  // {
  //   title: "404",
  //   href: "/page-404",
  //   items: [],
  // },
  
  // {
  //   title: "Blog",
  //   href: "/posts",
  // },
  // {
  //   title: "Docs",
  //   href: "/docs",
  // },
] satisfies MainNavItem[];



// export const mainNav = [
//   {
//     title: "Home",href:"/"
//     // items: [
//     //   {
//     //     title: "Home Marketing",
//     //     href: "/",
//     //     items: [],
//     //   },
//     //   {
//     //     title: "Home SEO Agency",
//     //     href: "/seo-agency",
//     //     items: [],
//     //   },
//     //   {
//     //     title: "Home Consulting",
//     //     href: "/consulting",
//     //     items: [],
//     //   },
//     // ],
//   },
//   {
//     title: "Pages",
//     items: [
//       {
//         title: "About",
//         href: "/about",
//         items: [],
//       },
//       {
//         title: "Services",
//         href: "/services",
//         items: [],
//       },
//       {
//         title: "Pricing",
//         href: "/pricing",
//         items: [],
//       },
//       {
//         title: "Contact",
//         href: "/contact",
//         items: [],
//       },
//       // {
//       //   title: "404",
//       //   href: "/page-404",
//       //   items: [],
//       // },
//     ],
//   },
//   {
//     title: "Projects",href: "/projects"
//     // items: [
//     //   {
//     //     title: "Projects Listing",
//     //     href: "/projects",
//     //     items: [],
//     //   },
//     //   {
//     //     title: "Single Project",
//     //     href: "/projects/rocking-the-rank-1-in-the-events-industry",
//     //     items: [],
//     //   },
//     // ],
//   },
//   {
//     title: "Blog",
//     items: [
//       {
//         title: "Blog Listing",
//         href: "/posts",
//         items: [],
//       },
//       {
//         title: "Single Post",
//         href: "/posts/effective-marketing-for-start-ups",
//         items: [],
//       },
//     ],
//   },
//   // {
//   //   title: "Docs",
//   //   href: "/docs",
//   // },
// ] satisfies MainNavItem[];



export const footerNav = [
  {
    title: "Resources",
    items: [
      {
        title: "About",
        href: "/about",
        external: false,
      },
      {
        title: "Services",
        href: "/services",
        external: false,
      },
      // {
      //   title: "Pricing",
      //   href: "/pricing",
      //   external: false,
      // },
      // {
      //   title: "Blog",
      //   href: "/posts",
      //   external: false,
      // },
      {
        title: "Contact",
        href: "/contact",
        external: false,
      },
    ],
  },
  {
    title: "Solutions",
    items: [
      {
        title: "Marketing Strategy",
        href: "#",
        external: false,
      },
      {
        title: "Advertising",
        href: "#",
        external: false,
      },
      {
        title: "SMM",
        href: "#",
        external: false,
      },
      {
        title: "SEO",
        href: "#",
        external: false,
      },
      {
        title: "Google Ads",
        href: "#",
        external: false,
      },
    ],
  },
] satisfies FooterItem[];

export const footerNav2 = [
  {
    title: "Solutions",
    items: [
      {
        title: "SEO Marketing",
        href: "#",
        external: false,
      },
      {
        title: "Search engine optimization",
        href: "#",
        external: false,
      },
      {
        title: "Email marketing",
        href: "#",
        external: false,
      },
      {
        title: "Social Media",
        href: "#",
        external: false,
      },
      {
        title: "Conversion rate optimization",
        href: "#",
        external: false,
      },
    ],
  },
  {
    title: "Quick Links",
    items: [
      {
        title: "Marketing Strategy",
        href: "#",
        external: false,
      },
      {
        title: "Keyword Research Explained",
        href: "#",
        external: false,
      },
      {
        title: "Why SEO Matters",
        href: "#",
        external: false,
      },
      {
        title: "Google Ads",
        href: "#",
        external: false,
      },
    ],
  },
  {
    title: "Company",
    items: [
      {
        title: "About Company",
        href: "/about",
        external: false,
      },
      {
        title: "Services",
        href: "/services",
        external: false,
      },
      // {
      //   title: "SEO Blog & News",
      //   href: "/posts",
      //   external: false,
      // },
      {
        title: "Contact",
        href: "/contact",
        external: false,
      },
    ],
  },
] satisfies FooterItem[];
