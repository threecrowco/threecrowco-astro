export type SocialLink = {
    platform: string;
    href: string;
    me?: string;
    text: string;
    icon: string;
    footerOnly?: boolean;
};

export type SiteInfo = {
    name: string;
    title: string;
    description: string;
    image: {
        src: string;
        alt: string;
    };
    socialLinks: SocialLink[];
};

const siteInfo: SiteInfo = {
    name: "Three Crow Creative",
    title: "Branding for the Lowbrow Echelon",
    description:
        "Three Crow Creative is a branding and design joint in Nashville, Tennessee specializing in building affordable brands with curb appeal.",
    image: {
        src: "/og/social.jpg",
        alt: "Build the web you want"
    },
    socialLinks: [
        {
            platform: "github",
            href: "https://github.com/withastro/astro",
            me: "https://github.com/withastro/",
            text: "Go to Astro's GitHub repo",
            icon: "social/github"
        },
        {
            platform: "discord",
            href: "/chat",
            text: "Join the Astro community on Discord",
            icon: "social/discord"
        },
        {
            platform: "twitter",
            href: "https://twitter.com/astrodotbuild",
            me: "https://twitter.com/astrodotbuild",
            text: "Follow Astro on Twitter",
            icon: "social/twitter"
        },
        {
            platform: "mastodon",
            href: "https://m.webtoo.ls/@astro",
            me: "https://m.webtoo.ls/@astro",
            text: "Follow Astro on Mastodon",
            footerOnly: true,
            icon: "social/mastodon"
        }
    ]
};

export default siteInfo;
