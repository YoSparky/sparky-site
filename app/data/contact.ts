export default [
  {
    name: `what-do-you-need`,
    label: `What do you need?`,
    type: `radio`,
    required: true,
    options: [
      {
        id: `redesign-build`,
        value: `Shopify Plus Website Redesign & Build`,
        label: `Shopify Plus Website Redesign & Build`
      },
      {
        id: `replatform`,
        value: `Platform Migration to Shopify`,
        label: `Platform Migration to Shopify`
      },
      {
        id: `optimization`,
        value: `Optimization and/or Enhancements`,
        label: `Optimization and/or Enhancements`
      },
      {
        id: `retainer`,
        value: `Day-to-day development services`,
        label: `Day-to-day development services`
      },
      {
        id: `other`,
        value: `Other/Not sure`,
        label: `Other/Not sure`
      },
    ]
  },
  {
    name: `project-timeline`,
    label: `Project Timeline`,
    condition: `what-do-you-need.redesign-build&replatform`,
    type: `radio`,
    required: true,
    options: [
      {
        id: `0-3`,
        value: `0-3 months`,
        label: `0-3 months`
      },
      {
        id: `3-6`,
        value: `3-6 months`,
        label: `3-6 months`
      },
      {
        id: `6-12`,
        value: `6-12 months`,
        label: `6-12 months`
      },
      {
        id: `other`,
        value: `Other/Not sure`,
        label: `Other/Not sure`
      },
    ],
  },
  {
    name: `decision-timeline`,
    label: `Decision Timeline`,
    condition: `what-do-you-need.optimization&retainer`,
    type: `radio`,
    required: true,
    options: [
      {
        id: `less-1`,
        value: `Less than 1 month`,
        label: `Less than 1 month`
      },
      {
        id: `1-3`,
        value: `1-3 months`,
        label: `1-3 months`
      },
      {
        id: `6-12`,
        value: `6-12 months`,
        label: `6-12 months`
      },
      {
        id: `other`,
        value: `Other/Not sure`,
        label: `Other/Not sure`
      },
    ],
  },
  {
    name: `project-budget`,
    label: `Project Budget`,
    condition: `what-do-you-need.redesign-build&replatform`,
    type: `radio`,
    required: true,
    options: [
      {
        id: `20-50`,
        value: `$20,000 - $50,000`,
        label: `$20,000 - $50,000`
      },
      {
        id: `50-100`,
        value: `$50,000 - $100,000`,
        label: `$50,000 - $100,000`
      },
      {
        id: `100-200`,
        value: `$100,000 - $200,000`,
        label: `$100,000 - $200,000`
      },
      {
        id: `200-300`,
        value: `$200,000 - $300,000`,
        label: `$200,000 - $300,000`
      },
      {
        id: `300+`,
        value: `$300,000 +`,
        label: `$300,000 +`
      },
      {
        id: `other`,
        value: `Other/Not sure`,
        label: `Other/Not sure`
      },
    ],
  },
  {
    name: `monthly-budget`,
    label: `Monthly Budget`,
    condition: `what-do-you-need.optimization&retainer`,
    type: `radio`,
    required: true,
    options: [
      {
        id: `under-5`,
        value: `Less than $5,000`,
        label: `Less than $5,000`
      },
      {
        id: `5-10`,
        value: `$5,000 - $10,000`,
        label: `$5,000 - $10,000`
      },
      {
        id: `10-20`,
        value: `$10,000 - $20,000`,
        label: `$10,000 - $20,000`
      },
      {
        id: `20-50`,
        value: `$20,000 - $50,000`,
        label: `$20,000 - $50,000`
      },
      {
        id: `50+`,
        value: `$50,000 +`,
        label: `$50,000 +`
      },
      {
        id: `other`,
        value: `Other/Not sure`,
        label: `Other/Not sure`
      },
    ],
  },
  {
    name: `project-details`,
    label: `Project Details`,
    condition: `what-do-you-need.redesign-build&replatform`,
    type: `textarea`,
    required: false,
    rows: 5,
  },
  {
    name: `additional-details`,
    label: `Additional Details`,
    condition: `what-do-you-need.optimization&retainer`,
    type: `textarea`,
    required: false,
    rows: 5,
  },
]