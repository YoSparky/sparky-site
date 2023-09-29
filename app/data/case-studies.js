import FortySevenSlide1 from '../assets/fortyseven-portfolio-slide-1.jpeg';
import FortySevenSlide2 from '../assets/fortyseven-portfolio-slide-2.jpeg';
import FortySevenSlide3 from '../assets/fortyseven-portfolio-slide-3.jpeg';
import FortySevenBanner from '../assets/fortyseven-portfolio-banner.jpeg';
import HeydudeSlide1 from '../assets/heydude-portfolio-slide-1.jpeg';
import HeydudeSlide2 from '../assets/heydude-portfolio-slide-2.jpeg';
import HeydudeSlide3 from '../assets/heydude-portfolio-slide-3.jpeg';
import HeydudeSlide4 from '../assets/heydude-portfolio-slide-4.jpeg';
import HeydudeSlide5 from '../assets/heydude-portfolio-slide-5.jpeg';
import HeydudeBanner from '../assets/heydude-portfolio-banner.jpeg';
import LegendsSlide1 from '../assets/legends-portfolio-slide-1.jpeg';
import LegendsSlide2 from '../assets/legends-portfolio-slide-2.jpeg';
import LegendsSlide3 from '../assets/legends-portfolio-slide-3.jpeg';
import LegendsSlide4 from '../assets/legends-portfolio-slide-4.jpeg';
import LegendsSlide5 from '../assets/legends-portfolio-slide-5.jpeg';
import LegendsSlide6 from '../assets/legends-portfolio-slide-6.jpeg';
import LegendsBanner from '../assets/legends-portfolio-banner.jpeg';
import GhostSlide1 from '../assets/ghost-portfolio-slide-1.jpeg';
import GhostSlide2 from '../assets/ghost-portfolio-slide-2.jpeg';
import GhostSlide3 from '../assets/ghost-portfolio-slide-3.jpeg';


/*
*
*
Expected data structure for portfolio case study pages
*
{
  handle: ``,
  title: ``,
  description: ``,
  vimeoLinkPrimary: ``,
  overview: [``],
  carousel: [
    {
      image: ImportedImageComponent,
      caption: ''
    }
  ],
  sparkyMagic: [
    ``,
    ``
  ],
  portfolioBanner: {
    image: ImportedImageComponent,
    caption: ''
  },
  vimeoLinkSecondary: ``,
  siteLink: ``,
  testimonial: {
    quote: ``,
    attribution: ``,
    attributionTitle: ``
  },
  stack: [
    {
      title: ``,
      link: ``
    }
  ],
  results: ``
}
*/

const data = [
  {
    handle: `wink`,
    title: `Wink`,
    description: `Wink is a well-established leader in the scrubs space. Their apparel is designed to work as hard as their customer and they obsess over crafting features and benefits in each of their scrubs to try and make the day a little bit easier for medical professionals.`,
    vimeoLinkPrimary: null,
    overview: [`Wink, formerly known as WonderWink, had been a widely-distributed wholesale brand but approached us to build their very first DTC site on Shopify Plus. Launching in 2023, the site has sparked an immediately successful new channel for the brand.`],
    carousel: null,
    sparkyMagic: [
      `Partnered with internal IT team to integrate real-time ATP inventory experience from a shared distribution center.`,
    ],
    portfolioBanner: null,
    vimeoLinkSecondary: null,
    siteLink: `https://winkscrubs.com/`,
    testimonial: null,
    stack: null,
    results: null
  },
  {
    handle: `forty-seven`,
    title: `'47`,
    description: `You may not own a '47 hat. Just kidding. You definitely do. '47 is one of the largest and most prominent headwear brands in the world. With licenses for all major American sports leagues, their gear is worn and loved by fans of all kinds on game day and every day.`,
    vimeoLinkPrimary: `https://player.vimeo.com/video/854322590`,
    overview: [`We designed and built a fully custom Shopify theme which led to an immediate 300% improvement in site speed.`],
    carousel: [
      {
        image: FortySevenSlide1,
        caption: 'Example caption'
      },
      {
        image: FortySevenSlide2,
        caption: 'Also a caption here'
      },
      {
        image: FortySevenSlide3,
        caption: ''
      }
    ],
    sparkyMagic: [
      `We introduced a concept called “favorite teams” which personalizes the users' shopping experience and collection sorts based on their fandom.`,
      `We accomplished this by combining the powers of Shopify customer metafields, Algolia Search and Discovery, and some Sparky secret sauce.`
    ],
    portfolioBanner: {
      image: FortySevenBanner,
      caption: ''
    },
    vimeoLinkSecondary: `https://player.vimeo.com/video/854984692`,
    siteLink: `https://www.47brand.com/`,
    testimonial: null,
    stack: [
      {
        title: `Shopify Plus`,
        link: ``
      },
      {
        title: `Klaviyo`,
        link: ``
      },
      {
        title: `Attentive`,
        link: ``
      },
      {
        title: `Elevar`,
        link: ``
      },
      {
        title: `Algolia`,
        link: ``
      },
      {
        title: `Yotpo`,
        link: ``
      },
      {
        title: `Blue Cherry ERP`,
        link: ``
      }
    ],
    results: null
  },
  {
    handle: `heydude`,
    title: `Hey Dude`,
    description: `<u>HEYDUDE</u> makes lightweight, comfortable, casual shoes for adventurers of all varieties. When Crocs purchased HEYDUDE (one of the largest and fastest-growing Shopify Plus brands) for $2.5b in early 2022, they immediately called Sparky to level-up the site.`,
    vimeoLinkPrimary: `https://player.vimeo.com/video/854315577`,
    overview: [
      `After a few months of conversion rate optimization, it became apparent that the brand had grown so fast on a technical foundation that was not engineered for scale.`,
      `With the clock ticking ahead of Holiday, we designed, built, and launched a fully-custom Shopify theme.`,
      `The new site realized upticks in conversion and huge productivity gains for site merch and ops teams who were hamstrung by the old site.`
    ],
    carousel: [
      {
        image: HeydudeSlide1,
        caption: ''
      },
      {
        image: HeydudeSlide2,
        caption: ''
      },
      {
        image: HeydudeSlide3,
        caption: ''
      },
      {
        image: HeydudeSlide4,
        caption: ''
      },
      {
        image: HeydudeSlide5,
        caption: ''
      }
    ],
    sparkyMagic: [
      `We did the entire project <strong>in three months</strong>, and there was <strong>zero margin for error.</strong>`
    ],
    portfolioBanner: {
      image: HeydudeBanner,
      caption: 'Staring at stars'
    },
    vimeoLinkSecondary: `https://player.vimeo.com/video/854631946`,
    siteLink: `https://heydude.com/`,
    testimonial: null,
    stack: [
      {
        title: `Shopify Plus`,
        link: ``
      },
      {
        title: `Klaviyo`,
        link: ``
      },
      {
        title: `Attentive`,
        link: ``
      },
      {
        title: `Fast Simon`,
        link: ``
      },
      {
        title: `Elevar`,
        link: ``
      },
      {
        title: `Yotpo`,
        link: ``
      },
      {
        title: `Narvar`,
        link: ``
      },
      {
        title: `Custom Employee Discount App`,
        link: ``
      }
    ],
    results: null
  },
  {
    handle: `legends`,
    title: `Legends`,
    description: `Legends is a fast-growing direct-to-consumer athletic apparel brand whose cap table includes the likes of Quavo, Baker Mayfield, and Barstool’s Big Cat. One of our earliest Shopify clients, we first partnered with Legends in late 2019 to build a custom site as they outgrew their store-bought theme. We’ve continued to collaborate ever since.`,
    vimeoLinkPrimary: `https://player.vimeo.com/video/854324103`,
    overview: [
      `We launched their first custom site just ahead of Holiday in 2019 which resulted in immediate and huge conversion gains over their prior non-custom theme.`,
      `We've continuously optimized and maintained the site as their business has scaled 30x, and launched a subsequent revamped theme in 2023.      `
    ],
    carousel: [
      {
        image: LegendsSlide1,
        caption: ''
      },
      {
        image: LegendsSlide2,
        caption: ''
      },
      {
        image: LegendsSlide3,
        caption: ''
      },
      {
        image: LegendsSlide4,
        caption: ''
      },
      {
        image: LegendsSlide5,
        caption: ''
      },
      {
        image: LegendsSlide6,
        caption: ''
      }
    ],
    sparkyMagic: [
      `We developed some technical wizardry to overcome Shopify Product limitations. When purchasing Legends' signature shorts, the customer must select a color, an inseam length, and a liner option; an add-to-cart flow which exceeds both Shopify's total variant limitation as well as their “product option” limitation.`,
      `The solution that we engineered to solve this problem gave the merchandising team more flexibility than Shopify's standard product form and streamlined the UX. This functionality has become a secret weapon for us, and we've implemented versions of it for many apparel brands since.`
    ],
    portfolioBanner: {
      image: LegendsBanner,
      caption: ''
    },
    vimeoLinkSecondary: `https://player.vimeo.com/video/854985452`,
    siteLink: `https://www.legends.com/`,
    testimonial: null,
    stack: [
      {
        title: `Shopify Plus`,
        link: ``
      },
      {
        title: `Klaviyo`,
        link: ``
      },
      {
        title: `Elevar`,
        link: ``
      },
      {
        title: `Stamped`,
        link: ``
      },
      {
        title: `Loop`,
        link: ``
      }
    ],
    results: ``
  },
  {
    handle: `york-athletics`,
    title: `York Athletics`,
    description: `YORK Athletics Mfg. is a fast-growing direct-to-consumer footwear start-up with roots in a multi-generational family sports business. Their performance-focused unisex sneakers feature a minimal aesthetic and have earned the brand credentials such as the 'Best New Performance Gear' award from Men's Health Magazine and praise in Esquire, ESPN, Hypebeast, and Gear Patrol Magazine.`,
    vimeoLinkPrimary: null,
    overview: [
      `We designed and built a fully custom Shopify theme which, in the 12 months following site launch, led to a 40% lift in conversion YOY. This lift was sustained in spite of the business becoming much less promotional during the same timeframe.`
    ],
    carousel: null,
    sparkyMagic: [
      `This brand makes unisex footwear but wanted to create the illusion of selling separate men's and women's SKUs for SEO and UX purposes. We came up with some technical witchcraft that allowed a single SKU in their ERP to display as two totally separate products on the front end (one for each gender), without the headache of maintaining two sets of products in Shopify. `,
      `This created a shopping experience that was more in line with their media strategy of segmenting audiences and introduced a new mechanism for gathering data about their shoppers that was previously unavailable to them.`,
      `This was all achieved with zero impact on their fulfillment or site ops processes.`
    ],
    portfolioBanner: null,
    vimeoLinkSecondary: null,
    siteLink: `https://yorkathleticsmfg.com/`,
    testimonial: null,
    stack: [
      {
        title: `Shopify Plus`,
        link: ``
      },
      {
        title: `Klaviyo`,
        link: ``
      },
      {
        title: `Attentive`,
        link: ``
      },
      {
        title: `Yotpo`,
        link: ``
      },
      {
        title: `Dear Systems ERP`,
        link: ``
      }
    ],
    results: null
  },
  {
    handle: `ghost`,
    title: `Ghost`,
    description: `Ghost is a wildly popular lifestyle sports nutrition brand. With high-quality ingredients and iconic flavors, Ghost has amassed a rabid fanbase of gym-goers everywhere who aim to "be seen".`,
    vimeoLinkPrimary: `https://player.vimeo.com/video/854320973`,
    overview: [
      `Ghost had a vastly outdated Shopify theme and enlisted Sparky to usher their site into a new era of eCommerce performance. We designed and built a fully custom Shopify theme that reimagined their online presence across three different markets.`,
      `We built a new site that introduced subscriptions, integrated with their existing mobile app, and freshened up their fully custom loyalty program.`
    ],
    carousel: [
      {
        image: GhostSlide1,
        caption: ''
      },
      {
        image: GhostSlide2,
        caption: ''
      },
      {
        image: GhostSlide3,
        caption: ''
      }
    ],
    sparkyMagic: [
      `We built custom GWP and bundle and capabilities built into the theme, as well as engineered a product structure that allowed their site team to maximize merchandising capabilities across their licensed and owned flavors.`
    ],
    portfolioBanner: null,
    vimeoLinkSecondary: `https://player.vimeo.com/video/854986194`,
    siteLink: `https://ghostlifestyle.com/`,
    testimonial: {
      quote: `Wow, Sparky made it simple to supercharge our aging site.`,
      attribution: `BJORN LURPIS`,
      attributionTitle: `VP OF TECHNOLOGY`
    },
    stack: [
      {
        title: `Shopify Plus`,
        link: ``
      },
      {
        title: `Klaviyo`,
        link: ``
      },
      {
        title: `Skio`,
        link: ``
      },
      {
        title: `Postscript`,
        link: ``
      },
      {
        title: `Custom Ghost Loyalty`,
        link: ``
      }
    ],
    results: null
  }
];

export default data;