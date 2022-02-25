import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
    // site config
    lang: 'en-US',
    title: 'Sam Pixel York',
    description: 'Personal website',
    base: '/blog/',

    // theme and its config
    theme: '@vuepress/theme-default',
    themeConfig: {
        logo: 'https://vuejs.org/images/logo.png',
        navbar: [
            {
                text: 'Blog',
                link: '/blog/'
            },
            {
              text: 'Portfolio',
              link: '/portfolio/'
            },
            {
                text: 'About',
                link: '/about/'
            }
        ],
        repo: 'SamPixelYork/blog',
        sidebar: [
            // SidebarItem
            {
                text: 'Foo',
                link: '/foo/',
                children: [
                    // SidebarItem
                    {
                        text: 'github',
                        link: 'https://github.com',
                        children: [],
                    },
                    // string - page file path
                    '/foo/bar.md',
                ],
            },
            // string - page file path
            '/bar/README.md',
        ]
    },
})