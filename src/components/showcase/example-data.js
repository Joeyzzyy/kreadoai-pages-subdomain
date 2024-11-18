export const exampleData = {
  pageTopTool: {
    order: 1,
    title: 'Page Top Tool Component',
    description: 'Display main tools and feature introduction at the top of the page',
    recommendedPosition: 'Must be first component if Demo Showcase is not used',
    props: {
      author: 'KREADO',
      section: {
        topContent: {
          buttonText: 'Get Started',
          title: 'AI Video Creation Tool',
          description: 'Quickly Generate Multilingual Marketing Videos',
          desc: 'Support 40+ languages, auto-generate subtitles and voiceovers'
        }
      }
    }
  },

  titleContent: {
    order: 2,
    title: 'Title Content Component',
    description: 'Display article or page main title and subtitle',
    recommendedPosition: 'Upper section, after Demo Showcase or Page Top Tool',
    props: {
      title: 'How to Improve Work Efficiency with AI',
      subtitle: 'Explore AI Applications in Daily Work',
      author: 'KREADO'
    }
  },

  titleTopPricing: {
    order: 3,
    title: 'Top Title + Three Column Pricing Component',
    description: 'Display product pricing plans with three different tiers',
    recommendedPosition: 'Mid to lower section, after feature introduction',
    props: {
      author: 'KREADO',
      data: {
        title: 'Choose Your Perfect Plan',
        bottomContent: {
          planOne: {
            name: 'Basic',
            price: '$99',
            discount: 'Save 30%',
            buttonText: 'Get Started',
            features: [
              '10 Videos Monthly',
              '720p Video Quality',
              'Basic AI Templates',
              'EN/CN Support',
              'Basic Support'
            ]
          },
          planTwo: {
            name: 'Professional',
            price: '$199',
            discount: 'Save 40%',
            buttonText: 'Upgrade Now',
            features: [
              '50 Videos Monthly',
              '1080p Video Quality',
              'All AI Templates',
              '40+ Languages Support',
              '24/7 Support',
              'Priority Rendering'
            ]
          },
          planThree: {
            name: 'Enterprise',
            price: '$499',
            discount: 'Save 50%',
            buttonText: 'Contact Sales',
            features: [
              'Unlimited Videos',
              '4K Video Quality',
              'Custom AI Templates',
              'All Languages Support',
              'API Access',
              'Dedicated Manager',
              'Team Collaboration'
            ]
          }
        }
      }
    }
  },

  titleTopThreeFlow: {
    order: 4,
    title: 'Top Title + Three Step Flow Component',
    description: 'Display product usage process or service steps with arrow indicators',
    recommendedPosition: 'Product introduction page or user guide section',
    filePath: 'src/components/common_components/title_top_three_arrow_flow_bottom.js',
    props: {
      author: 'KREADO',
      section: {
        topContent: {
          title: 'Create AI Videos in Three Easy Steps',
          buttonText: 'Try Now'
        },
        bottomContent: [
          {
            number: '01',
            content: 'Choose your favorite template or create from scratch'
          },
          {
            number: '02',
            content: 'Upload materials or generate content with AI'
          },
          {
            number: '03',
            content: 'Export multilingual videos with one click'
          }
        ]
      }
    }
  },

  titleTopSixModules: {
    order: 5,
    title: 'Top Title + Six Modules Component',
    description: 'Display product features or service advantages in six-grid layout',
    recommendedPosition: 'Product features introduction area',
    filePath: 'src/components/common_components/title_top_six_modules_bottom.js',
    props: {
      author: 'KREADO',
      section: {
        topContent: {
          emoji: '🚀',
          title: 'Why Choose Us',
          subtitle: 'Six Core Advantages to Power Your Business'
        },
        bottomContent: [
          {
            icon: '🎯',
            title: 'AI Smart Creation',
            content: 'Intelligent content analysis, automatic video script and storyboard generation'
          },
          {
            icon: '🌍',
            title: 'Multilingual Support',
            content: 'Support 40+ languages, one-click multilingual version generation'
          },
          {
            icon: '⚡',
            title: 'Fast Rendering',
            content: 'Advanced cloud rendering technology, minute-level delivery'
          },
          {
            icon: '🎨',
            title: 'Rich Templates',
            content: '1000+ professional templates covering various scenarios'
          },
          {
            icon: '🤖',
            title: 'AI Voiceover',
            content: 'Natural and realistic AI voiceover with multilingual support'
          },
          {
            icon: '💡',
            title: 'Smart Subtitles',
            content: 'Automatic subtitle generation with multilingual translation'
          }
        ]
      }
    }
  },

  titleRightTable: {
    order: 6,
    title: 'Right Title + Left Table Component',
    description: 'Display product feature comparison or feature list with right-side title',
    recommendedPosition: 'Product feature comparison page',
    filePath: 'src/components/common_components/title_right_table_left.js',
    props: {
      author: 'KREADO',
      section: {
        leftContent: [
          {
            icon: '🎯',
            title: 'Smart Analysis',
            content: 'Automatically analyze video content and provide optimization suggestions'
          },
          {
            icon: '⚡',
            title: 'Quick Processing',
            content: 'Cloud rendering, complete video generation within 10 minutes'
          },
          {
            icon: '🌍',
            title: 'Multilingual Support',
            content: 'Support subtitle and voiceover conversion in 40+ languages'
          },
          {
            icon: '🎨',
            title: 'Template System',
            content: '1000+ professional templates for various scenarios'
          }
        ],
        rightContent: {
          icon: '🚀',
          title: 'Powerful AI Video Creation Capabilities',
          subtitle: 'Make creation simpler, make communication more efficient',
          buttonText: 'Try Now'
        }
      }
    }
  },

  titleLeftFourModules: {
    order: 7,
    title: 'Left Title + Right Four Modules Component',
    description: 'Display core product features or service highlights in four modules',
    recommendedPosition: 'Product features introduction area',
    filePath: 'src/components/common_components/title_left_four_modules_right.js',
    props: {
      author: 'KREADO',
      section: {
        leftContent: {
          title: 'Smart Video Creation Platform',
          description: 'Make video creation easier and marketing more efficient',
          buttonText: 'Free Trial'
        },
        rightContent: [
          {
            icon: '🎥',
            title: 'AI Video Generation',
            content: 'Just input text to automatically generate professional videos'
          },
          {
            icon: '🎯',
            title: 'Precise Marketing',
            content: 'Customize multilingual video content for different markets'
          },
          {
            icon: '⚡',
            title: 'Efficiency Boost',
            content: 'Reduce video production time by 90%'
          },
          {
            icon: '💰',
            title: 'Cost Saving',
            content: 'Significantly reduce video production and localization costs'
          }
        ]
      }
    }
  },

  titleTopTwoModules: {
    order: 8,
    title: 'Top Title + Two Modules Component',
    description: 'Display two main product features or service advantages with images',
    recommendedPosition: 'Product features showcase area',
    filePath: 'src/components/common_components/title_top_two_modules_bottom.js',
    props: {
      author: 'KREADO',
      section: {
        topContent: {
          title: 'Smart Creation, Breaking Language Barriers',
          subtitle: 'Help Your Content Reach Global Markets'
        },
        bottomContent: [
          {
            title: 'AI-Powered Video Creation',
            content: 'Using advanced AI technology to transform text into professional video content, saving 90% production time',
            buttonText: 'Learn More',
            image: '/images/kreado-demo-pic1.png'
          },
          {
            title: 'Global Content Distribution',
            content: 'Support automatic translation and voiceover in 40+ languages, helping your content quickly enter international markets',
            buttonText: 'Try Now',
            image: '/images/kreado-demo-pic2.png'
          }
        ]
      }
    }
  },

  comparisonTable: {
    order: 9,
    title: 'Product Comparison Table Component',
    description: 'Display feature comparison between product and competitors',
    recommendedPosition: 'Upper section but not as first component',
    props: {
      author: 'KREADO',
      section: {
        topContent: {
          title: 'Product Feature Comparison',
          subtitle: 'Discover Our Advantages',
          companies: {
            competitor: 'Traditional Solution',
            us: 'KREADO AI'
          }
        },
        bottomContent: {
          features: [
            {
              name: 'AI Smart Creation',
              competitor: false,
              us: true
            },
            {
              name: 'Multilingual Support',
              competitor: true,
              us: true
            },
            {
              name: 'Real-time Preview',
              competitor: false,
              us: true
            },
            {
              name: 'Team Collaboration',
              competitor: true,
              us: true
            },
            {
              name: 'API Access',
              competitor: false,
              us: true
            }
          ]
        }
      }
    }
  },

  faq: {
    order: 10,
    title: 'FAQ Component',
    description: 'Display frequently asked questions and answers in two columns',
    recommendedPosition: 'Must be second-to-last component if used',
    props: {
      author: 'KREADO',
      section: {
        title: 'Frequently Asked Questions',
        contents: [
          {
            question: 'How to start using the AI video creation tool?',
            answer: 'Simply register an account, choose a template or create from scratch, input your content requirements, and our AI system will automatically generate professional videos for you.'
          },
          {
            question: 'What languages are supported?',
            answer: 'We currently support 40+ major languages, including English, Chinese, Japanese, Korean, French, German, etc., with one-click multilingual version generation.'
          },
          {
            question: 'How long does video rendering take?',
            answer: 'Thanks to our cloud rendering technology, most videos can be completed within 10 minutes. Specific time depends on video length and complexity.'
          },
          {
            question: 'Do you offer enterprise customization services?',
            answer: 'Yes, we provide customized solutions for enterprise clients, including exclusive template development, API integration, and team collaboration features.'
          }
        ]
      }
    }
  },

  articleContent: {
    order: 11,
    title: 'Article Content Component',
    description: 'Display article main content, supporting titles and paragraphs',
    recommendedPosition: 'Article page main body',
    filePath: 'src/components/common_components/common_article_content.js',
    props: {
      data: {
        title: 'Future Trends in AI Video Creation',
        bottomContent: [
          {
            content: {
              contentTitle: 'AI Revolution in Video Production',
              contentText: 'AI technology is fundamentally changing the video production industry. Through deep learning and natural language processing, AI can automatically generate scripts, create storyboards, voiceovers, and subtitles, greatly improving video production efficiency.\n\nIn the future, AI will further enhance the intelligence and personalization of creation, providing creators with more possibilities.'
            }
          },
          {
            content: {
              contentTitle: 'New Opportunities in Global Communication',
              contentText: 'Multilingual support and automatic localization features allow content creators to easily reach global markets. Advances in AI translation and voiceover technology make high-quality cross-language content production more convenient and economical.'
            }
          }
        ]
      }
    }
  },

  moreInsights: {
    order: 12,
    title: 'More Insights Component',
    description: 'Display related articles or insights in four columns',
    recommendedPosition: 'Article bottom or standalone section',
    filePath: 'src/components/common_components/more_insights.js',
    props: {
      data: {
        topContent: [
          {
            imageUrl: '/images/kreado-demo-pic1.png',
            subTitle: 'AI Innovation',
            title: 'How AI is Changing Video Creation Process'
          },
          {
            imageUrl: '/images/kreado-demo-pic2.png',
            subTitle: 'Marketing Strategy',
            title: 'Best Practices in Multilingual Video Marketing'
          },
          {
            imageUrl: '/images/kreado-demo-pic1.png',
            subTitle: 'Tech Trends',
            title: '2024 Video Production Technology Outlook'
          },
          {
            imageUrl: '/images/kreado-demo-pic2.png',
            subTitle: 'Case Study',
            title: 'Global Brands Localization Marketing Strategy'
          }
        ]
      }
    }
  },

  imageBanner: {
    order: 13,
    title: 'Image Banner Component',
    description: 'Display large banner image',
    recommendedPosition: 'Within article content or page divider',
    filePath: 'src/components/common_components/image_banner.js',
    props: {
      imageUrl: '/images/kreado-demo-pic1.png',
      altText: 'AI Video Creation Platform Feature Showcase'
    }
  },

  pageDownCTA: {
    order: 14,
    title: 'Page Bottom CTA Component',
    description: 'Display Call-to-Action content, typically used at page bottom',
    recommendedPosition: 'Must be the last component',
    props: {
      author: 'KREADO',
      section: {
        title: 'Start Your AI Video Creation Journey',
        subTitle: 'Sign up for free trial and explore unlimited possibilities with AI',
        buttonText: 'Get Started Now'
      }
    }
  }
}; 