interface NavItem {
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
  label?: string;
  description?: string;
}

interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[];
}

interface NavItemWithOptionalChildren extends NavItem {
  items?: NavItemWithChildren[];
}

type MainNavItem = NavItemWithOptionalChildren;

interface FooterItem {
  title: string;
  items: {
    title: string;
    href: string;
    external?: boolean;
  }[];
}

type Testimonial = {
  image?: string;
  name?: string;
  company?: string;
  comment?: string;
  rating?: number | 0;
};

type IconBox = {
  title?: string;
  description?: string;
  icon?: string | RemixiconReactIconComponentType;
  iconBase?: string;
  shadow?: string;
};

type Post = {
  id: number;
  modified: string;
  slug: string;
  code: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  categories: number[];
  yoast_head_json?: {
    description: string;
    og_description: string;
  };
  acf?: {
    [key: string]: string;
  };
  _embedded: {
    "wp:featuredmedia"?: [
      {
        link: string;
        alt_text: string;
        media_details: {
          sizes: {
            medium: Object;
            thumbnail: Object;
            medium_large: {
              width: number;
              height: number;
              source_url: string;
            };
            full: {
              width: number;
              height: number;
              source_url: string;
            };
          };
        };
      },
    ];
    author?: [
      {
        name: string;
        avatar_urls: {
          [key: string]: string;
        };
      },
    ];
    "wp:term"?: [
      {
        id: number;
        name: string;
      }[],
    ];
  };
};
