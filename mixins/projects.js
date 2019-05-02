/*
 * projects.js - shared mixin of all projects
 * Copyright (C) 2019 kevin olson <acidjazz@gmail.com>
 *
 * Distributed under terms of the APACHE license.
 */
export default {
  data () {
    return {
      projects: [
        {
          url: 'hawaii',
          thumb: 'CKD_344x290_Hawaii.jpg',
          order: 1,
          location: 'HONOLULU, HI',
          hover: 'HAWAII',
          title: 'HAWAII BEACH HOUSE',
          copy: 'Cue the sound of ocean waves… Designing this modern Hawaii home was a dream come true. Zak Architecture created a perfect family of structures, nestled around a central courtyard. Raw cedar, white painted boards, and lava stone floors formed the materials palette, and the furnishings followed a single directive: elegance in simplicity.  A vintage Prouve daybed sits next to a deep sofa, perfect for lounging. Polished blocks of anthracite coal are used as tables, and handblown glass pendants hang from custom woven leather cords.  Large-scale artwork anchors each room, and it all lends itself to the reason for being there: expansive views out to those ocean waves.',
          hero: {
            file: 'CatherineKwongDesign_Hawaii_1216x800px_1.jpg',
            width: 1216,
            height: 800,
          },
          gallery: {
            //'CatherineKwongDesign_Hawaii_1176x774px_1.jpg': '',
            'CatherineKwongDesign_Hawaii_392x555px_2.jpg': 'is-left',
            'CatherineKwongDesign_Hawaii_724x555px_3.jpg': 'is-right',
            'CatherineKwongDesign_Hawaii_558x395px_4.jpg': 'is-left',
            'CatherineKwongDesign_Hawaii_558x850px_6.jpg': 'is-right',
            'CatherineKwongDesign_Hawaii_558x395px_5.jpg': 'is-left',
            'CatherineKwongDesign_Hawaii_1176x760px_7.jpg': 'is-full',
            //'CatherineKwongDesign_Hawaii_1216x786px_7.jpg': '',
            'CatherineKwongDesign_Hawaii_766x570px_8.jpg': 'is-right',
            'CatherineKwongDesign_Hawaii_350x570px_9.jpg': 'is-left',
            'CatherineKwongDesign_Hawaii_558x780px_10.jpg': 'is-left',
            'CatherineKwongDesign_Hawaii_558x780px_11.jpg': 'is-right',
            'CatherineKwongDesign_Hawaii_1176x1120px_12.jpg': 'is-full',
            // 'CatherineKwongDesign_Hawaii_1216x1158px_12.jpg': '',
          },
        },
        {
          url: 'seacliff',
          thumb: 'CKD_Seacliff.jpg',
          location: 'SAN FRANCISCO, CA',
          featured: true,
          title: 'SEACLIFF RETREAT',
          hover: 'SEACLIFF',
          copy: '',
          hero: {
            file: 'CatherineKwongDesign_SeacliffRetreat_2054x1352_1.jpg',
            width: 1000,
            height: 8000,
          },
          gallery: {
            // 'CatherineKwongDesign_SeacliffRetreat_1216x800_1.jpg': '',
            'CatherineKwongDesign_SeacliffRetreat_558x750_4.jpg': 'is-right is-double',
            'CatherineKwongDesign_SeacliffRetreat_558x345_2.jpg': 'is-left',
            'CatherineKwongDesign_SeacliffRetreat_558x345_3.jpg': 'is-left',
            'CatherineKwongDesign_SeacliffRetreat_1216x800_5.jpg': 'is-full',
            'CatherineKwongDesign_SeacliffRetreat_392x543_6.jpg': 'is-left',
            'CatherineKwongDesign_SeacliffRetreat_724x543_7.jpg': 'is-right',

            'CatherineKwongDesign_SeacliffRetreat_724x543_8.jpg': 'is-left',
            'CatherineKwongDesign_SeacliffRetreat_392x543_9.jpg': 'is-right',

            'CatherineKwongDesign_SeacliffRetreat_724x543_10_.jpg': 'is-left',
            'CatherineKwongDesign_SeacliffRetreat_392x543_11.jpg': 'is-right is-double',
            'CatherineKwongDesign_SeacliffRetreat_1216x800_12.jpg': 'is-full',
          }
        },{
          url: 'sho17',
          thumb: 'CKD_344x290_Showcase_17.jpg',
          order: 5,
          location: 'SAN FRANCISCO, CA',
          title: 'CALIFORNIA MODERN',
          hover: 'showcase 2017',
          copy: "For this year's Decorator Showcase, we decided to design a room for ourselves. One that was elemental and quietly romantic but also layered and rich in meaning. One that feels like what California feels like to us right now.",
          hero: {
            file: 'CatherineKwongDesign_Showcase2017_1216x800px_1.jpg',
            width: 1216,
            height: 800,
          },
          gallery: {
            'CatherineKwongDesign_Showcase2017_558x750px_4.jpg': 'is-right',
            'CatherineKwongDesign_Showcase2017_558x345px_2.jpg': 'is-left',
            'CatherineKwongDesign_Showcase2017_558x345px_3.jpg': 'is-left',
            'CatherineKwongDesign_Showcase2017_724x544px_5.jpg': 'is-clear is-left',
            'CatherineKwongDesign_Showcase2017_392x544px_6.jpg': 'is-right',
            'CatherineKwongDesign_Showcase2017_558x698px_7.jpg': 'is-left',
            'CatherineKwongDesign_Showcase2017_558x698px_8.jpg': 'is-right is-double',
            'CatherineKwongDesign_Showcase2017_1216x846px_9.jpg': 'is-full',
          }
        },{
          url: 'parbr',
          thumb: 'CKD_344x290_PacificHeightsContemporary.jpg',
          order: 2,
          location: 'SAN FRANCISCO, CA',
          title: 'PACIFIC HEIGHTS CONTEMPORARY',
          hover: 'pacific heights',
          copy: "With a swath of sky and span of the San Francisco Bay as a backdrop, this architectural gem by John Maniscalco Architecture called for subtle layers and clean lines.  A parchment leather cabinet houses the clients' antique china collection, and a handblown glass chandelier floats above a dining table made for big family dinners - proof that contemporary architecture can feel comfortable and inviting without sacrificing an ounce of style.",
          hero: {
            file: 'CatherineKwongDesign_PacificHeightsContemporary_1216x800px_1.jpg',
            width: 1216,
            height: 800,
          },
          gallery: {
            'CatherineKwongDesign_PacificHeightsContemporary_752x555px_2.jpg': 'is-clear is-left',
            'CatherineKwongDesign_PacificHeightsContemporary_364x555px_3.jpg': 'is-right',
            'CatherineKwongDesign_PacificHeightsContemporary_558x837px_4.jpg': 'is-clear is-left',
            'CatherineKwongDesign_PacificHeightsContemporary_558x837px_5.jpg': 'is-right',
            'CatherineKwongDesign_PacificHeightsContemporary_773x524px_6.jpg': 'is-clear is-left',
            'CatherineKwongDesign_PacificHeightsContemporary_343x524px_7.jpg': 'is-right',
            'CatherineKwongDesign_PacificHeightsContemporary_372x550px_8.jpg': 'is-clear is-left',
            'CatherineKwongDesign_PacificHeightsContemporary_744x550px_9.jpg': 'is-right',
            'CatherineKwongDesign_PacificHeightsContemporary_558x800px_10.jpg': 'is-clear is-left',
            'CatherineKwongDesign_PacificHeightsContemporary_558x370px_11.jpg': 'is-right',
            'CatherineKwongDesign_PacificHeightsContemporary_558x370px_12.jpg': 'is-right is-double',

            'CatherineKwongDesign_PacificHeightsContemporary_1216x772px_13.jpg': 'is-clear is-full',
            'CatherineKwongDesign_PacificHeightsContemporary_558x718px_14.jpg': 'is-clear is-left',
            'CatherineKwongDesign_PacificHeightsContemporary_558x718px_15.jpg': 'is-right',
          }
        },{
          url: 'brown',
          thumb: 'CKD_344x290_BrownEstate.jpg',
          order: 3,
          location: 'NAPA, CA',
          hover: 'DOWNTOWN NAPA',
          title: 'TOWN AND COUNTRY',
          copy: "When the team from Brown Estate, one of Napa Valley's finest family wineries, was looking for a space to showcase their award-winning zinfandels, they didn't expect to find it in the middle of Downtown Napa.  But they fell in love-at-first-sight with an expansive industrial space, tucked away on the second floor of the old Napa Valley Register Building.  Exposed brick and blackened steel meet Italian marble and fluted glass, to create an atmosphere of understated glamour.  The result is a tasting room for a new generation: one where music plays, people laugh, and wine is happily shared.",
          hero: {
            file: 'CatherineKwongDesign_BrownEstate_1216x800px_1.jpg',
            width: 1216,
            height: 800,
          },
          gallery: {

            'CatherineKwongDesign_BrownEstate_361x550px_2.jpg': 'is-clear is-left',
            'CatherineKwongDesign_BrownEstate_755x550px_3.jpg': 'is-right',

            'CatherineKwongDesign_BrownEstate_657x458px_4.jpg': 'is-clear is-left',
            'CatherineKwongDesign_BrownEstate_458x458px_5.jpg': 'is-right',

            'CatherineKwongDesign_BrownEstate_558x794px_6.jpg': 'is-left',
            'CatherineKwongDesign_BrownEstate_558x367_7.jpg': 'is-right',
            'CatherineKwongDesign_BrownEstate_558x367px_8.jpg': 'is-right',

            'CatherineKwongDesign_BrownEstate_558x815px_9.jpg ': 'is-clear is-left',
            'CatherineKwongDesign_BrownEstate_558x815px_10.jpg': 'is-right is-double',
            'CatherineKwongDesign_BrownEstate_1216x805px_11.jpg': 'is-full',

          },
        },{
          url: 'resma',
          thumb: 'CKD_344x290_Woodside.jpg',
          location: 'WOODSIDE, CA',
          order: 4,
          hover: 'woodside',
          title: 'MODERN MEETS TRADITIONAL',
          copy: "What happens when a big-city family with a serious modern art collection moves to the country?  Well, not the country, exactly, but this traditional Tudor-style home is nestled among the hills of CatherineKwongDesign_Woodside, where you're as likely to see a horse on the road as you are a Tesla.  We used a sophisticated materials palette to update the house for our urbane family, bringing a strong point of view to this classic home.",
          hero: {
            file: 'CatherineKwongDesign_Woodside_1216x800px_1.jpg',
            width: 1216,
            height: 800,
          },
          gallery: {
            'CatherineKwongDesign_Woodside_558x754px_2.jpg': 'is-clear is-left',
            'CatherineKwongDesign_Woodside_558x347px_3.jpg': 'is-right is-right',
            'CatherineKwongDesign_Woodside_558x347px_4.jpg': 'is-right',
            'CatherineKwongDesign_Woodside_372x550px_5.jpg': 'is-clear is-left',
            'CatherineKwongDesign_Woodside_744x550px_6.jpg': 'is-right',
            'CatherineKwongDesign_Woodside_558x788px_7.jpg': 'is-clear is-left',
            'CatherineKwongDesign_Woodside_558x788px_8.jpg': 'is-right ',
            'CatherineKwongDesign_Woodside_744x515px_9.jpg': 'is-clear is-left',
            'CatherineKwongDesign_Woodside_372x515px_10.jpg': 'is-right is-double',
            'CatherineKwongDesign_Woodside_1215x730px_11.jpg': 'is-full',
          }
        },{
          url: 'shija',
          thumb: 'CKD_344x290_PacificHeightsTownhome.jpg',
          order: 7,
          location: 'PACIFIC HEIGHTS, CA',
          title: 'PACIFIC HEIGHTS TOWNHOUSE',
          hover: 'pacific heights',
          copy: "When a client approaches you with inspiration images from the lookbooks of Valentino, Erdem, and Dior, you know it's going to be good.  Our fashionista client was looking to create a family home that reflected her signature sense of fun and style.  We took cues from her closet, as well as the runway, to inform this glamorous study in pattern-mixing.",
          hero: {
            file: 'CatherineKwongDesign_PacificHeightsTownhome_1216x800px_1.jpg',
            width: 1216,
            height: 800,
          },
          gallery: {
            'CatherineKwongDesign_PacificHeightsTownhome_766x510px_2.jpg': 'is-clear is-left',
            'CatherineKwongDesign_PacificHeightsTownhome_350x510px_3.jpg': 'is-right',
            'CatherineKwongDesign_PacificHeightsTownhome_340x517px_4.jpg': 'is-clear is-left',
            'CatherineKwongDesign_PacificHeightsTownhome_776x517px_5.jpg': 'is-right',
          }
        },{
          url: 'pacific',
          thumb: 'CKD_344x290_JacksonSquare.jpg',
          order: 6,
          location: 'SAN FRANCISCO, CA',
          hover: 'jackson square',
          title: 'JACKSON SQUARE LOFT',
          copy: "When approaching the remodel of this small loft apartment, editing was the key.  First step: removing the eighties-style shag carpet and the mirrors that covered every surface.  It was smooth sailing after that: white walls, dark floors, tailored drapery... Throw in an 800-pound steel firewood holder, a glass chandelier, and a favorite pair of leather sling chairs, and the place was ready for late-night cocktails and easy Sunday mornings.",
          hero: {
            file: 'CatherineKwongDesign_JacksonSquareLoft_1216x800px_1.jpg',
            width: 1216,
            height: 800,
          },
          gallery: {
            'CatherineKwongDesign_JacksonSquareLoft_558x837px_2.jpg': 'is-clear is-left',
            'CatherineKwongDesign_JacksonSquareLoft_558x837px_3.jpg': 'is-right',
            'CatherineKwongDesign_JacksonSquareLoft_701x587px_4.jpg': 'is-clear is-left',
            'CatherineKwongDesign_JacksonSquareLoft_415x587px_5.jpg ': 'is-right is-double',
            'CatherineKwongDesign_JacksonSquareLoft_1216x818px_6.jpg ': 'is-clear is-full',
            'CatherineKwongDesign_JacksonSquareLoft_558x744px_7.jpg': 'is-clear is-left',
            'CatherineKwongDesign_JacksonSquareLoft_558x744px_8.jpg': 'is-right',
          }
        },{
          url: 'weija',
          thumb: 'CKD_344x290_PresidioHeights.jpg',
          location: 'SAN FRANCISCO, CA',
          hover: 'PRESIDIO HEIGHTS',
          title: 'PRESIDIO HEIGHTS MODERN',
          copy: "Three months to furnish a home?  No problem.  Our jet-setting clients came to us with a love for modern design and very tight timeline. We got to work sourcing vintage lighting and in-stock rugs, and designed custom brackets to add detail to reupholstered chairs.  Large-format artwork frames the scene in each room, anchoring a mix of bold patterns and luxe fabrics, to create a stylish sanctuary for beautiful living.",
          hero: {
            file: 'CatherineKwongDesign_PresidioHeightsModern_1216x800px_1.jpg',
            width: 1216,
            height: 800,
          },
          gallery: {
            'CatherineKwongDesign_PresidioHeightsModern_558x815px_2.jpg': 'is-clear is-left',
            'CatherineKwongDesign_PresidioHeightsModern_558x815px_3.jpg': 'is-right',
            'CatherineKwongDesign_PresidioHeightsModern_744x528px_4.jpg': 'is-clear is-left',
            'CatherineKwongDesign_PresidioHeightsModern_372x528px_5.jpg': 'is-right',
            // 'CatherineKwongDesign_PresidioHeightsModern_1216x810px_6.jpg': 'is-full',
            'CatherineKwongDesign_PresidioHeightsModern_458x766px_7.jpg': 'is-clear is-left',
            'CatherineKwongDesign_PresidioHeightsModern_658x766px_8.jpg': 'is-right',
            'CatherineKwongDesign_PresidioHeightsModern_558x837px_9.jpg': 'is-clear is-left',
            'CatherineKwongDesign_PresidioHeightsModern_558x837px_10.jpg': 'is-right is-double',
            'CatherineKwongDesign_PresidioHeightsModern_1216x716px_11.jpg': 'is-full',
          }
        },{
          url: 'sho13',
          thumb: 'CKD_344x290_Showcase_13.jpg',
          order: 8,
          location: 'SAN FRANCISCO, CA',
          hover: 'SHOWCASE 2013',
          title: 'CLASSICAL OVERTURE',
          copy: 'For the 2013 San Francisco Decorator Showcase, we were inspired by old photos we found of Mick and Bianca Jagger in their newlywed days.  Unabashedly stylish, the photos depicted a wild romance.  We designed our award-winning room for that couple in that moment of amour fou: luxe and decadent, but with all the impossible glamour of true rock royalty.',
          hero: {
            file: 'CatherineKwongDesign_Showcase2013_1216x800px_1.jpg',
            width: 1216,
            height: 800,
          },
          gallery: {
            'CatherineKwongDesign_Showcase2013_558x837px_2.jpg': 'is-clear is-left',
            'CatherineKwongDesign_Showcase2013_558x837px_3.jpg': 'is-right',
            'CatherineKwongDesign_Showcase2013_558x806px_4.jpg': 'is-clear is-left',
            'CatherineKwongDesign_Showcase2013_558x373px_5.jpg': 'is-right',
            'CatherineKwongDesign_Showcase2013_558x373px_6.jpg': 'is-right',
            'CatherineKwongDesign_Showcase2013_558x837px_7.jpg': 'is-clear is-left',
            'CatherineKwongDesign_Showcase2013_558x837px_8.jpg': 'is-right',
          }
        },{
          url: 'quegr',
          thumb: 'CKD_344x290_CowHollowRetreat.jpg',
          order: 9,
          location: 'SAN FRANCISCO, CA',
          title: 'COW HOLLOW RETREAT',
          hover: 'COW HOLLOW',
          copy: 'We approached this gut renovation with an eye toward balance.  While the exterior and front entry of the house retain historical details of the original architecture, the rest of the home is a minimalist retreat composed of clean lines and a neutral materials palette of glass, plaster and leather floors.  With a focus on comfort and warmth, we punctuated the space with industrial fixtures, walnut-framed furniture, and suiting fabrics from Saville Row.  Dreamy light filters effortlessly through this urban retreat.',
          hero: {
            file: 'CatherineKwongDesign_CowHollowRetreat_1216x800px_1.jpg',
            width: 1216,
            height: 800,
          },
          gallery: {
            'CatherineKwongDesign_CowHollowRetreat_558x837px_2.jpg': 'is-clear is-left',
            'CatherineKwongDesign_CowHollowRetreat_558x837px_3.jpg': 'is-right is-double',
            'CatherineKwongDesign_CowHollowRetreat_1216x810px_4.jpg': 'is-full',
            'CatherineKwongDesign_CowHollowRetreat_558x377px_5.jpg': 'is-left',
            'CatherineKwongDesign_CowHollowRetreat_558x814px_7.jpg': 'is-right',
            'CatherineKwongDesign_CowHollowRetreat_558x377px_6.jpg': 'is-left',
          }
        }
      ]
    }
  }
}
