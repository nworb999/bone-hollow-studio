import { Home, HomeType, Image } from "./types";
import {
  livingroom,
  fallBackImage,
  springView,
  flower,
  hoya,
  pool,
  fireplace,
  airlock,
  erika,
  book,
  umbrellas,
  corner,
  screenPorch,
  above,
  office,
  aFrame,
  officeWall,
  windowCorner,
  mantle,
  meadowAngle,
  frontSideTable,
  farmFirePlace,
  lilysView,
  kitchen,
  diningRoom,
  screen,
  sideBarn,
  bedroom,
  library,
  grandmasPiano,
  construction,
  sideDrone,
  campfire,
} from "./images";
import { formatName } from "./utils";

export const projectsArray: Home[] = [
  {
    name: HomeType.farmHouse,
    coverImageArray: [
      { image: lilysView, altText: "placeholder" },
      { image: diningRoom, altText: "placeholder" },
    ],
    thumbnailImage: { image: farmFirePlace, altText: "placeholder" },
    thumbnailCaption: [formatName({ name: HomeType.farmHouse }), "2017"],
    imageArray: [
      { image: meadowAngle, altText: "placeholder" },
      { image: kitchen, altText: "placeholder" },
      { image: frontSideTable, altText: "placeholder" },
    ],
    footerImage: { image: book, altText: "placeholder" },
    topText: `A farm house originally built in 1800.  Erika’s love affair with the Hudson Valley began with this property. Perhaps it’s the connection to her grandfather’s wheat farm in Kansas. From the moment Erika saw the wildflower filled meadow out back she felt a visceral connection to the land.`,
    creditTextArray: [
      `Builder: Hudson Valley Homes & Renovations`,
      `Interior Designer: Bone Hollow Studio`,
    ],
    textRight: `Layered and curated furnishings take time and patience.`,
    textLeft: `Our approach to creative sourcing is one of the highlights of our work.`,
  },
  {
    name: HomeType.guestBarn,
    coverImageArray: [
      { image: screen, altText: "placeholder" },
      { image: bedroom, altText: "placeholder" },
    ],
    thumbnailImage: { image: sideBarn, altText: "placeholder" },
    thumbnailCaption: [formatName({ name: HomeType.guestBarn }), "2018"],
    imageArray: [
      { image: sideDrone, altText: "placeholder" },
      { image: library, altText: "placeholder" },
      { image: grandmasPiano, altText: "placeholder" },
    ],
    footerImage: { image: campfire, altText: "placeholder" },
    topText: `Built in 2018 by Hudson Valley Homes & Renovations in collaboration with Bone Hollow Studio.  By design, the structure appears as an unassuming barn from the road. In reality it functions as the soul of the property - guest house, pool house, music room and great room.`,
    creditTextArray: [
      `Builder: Hudson Valley Homes & Renovations`,
      `Designer: Bone Hollow Studio`,
      `Architect: Kurt Sutherland`,
    ],
    textRight: `Our spaces are created through the layering of design, objects and experience. The key is to be able to layer and still allow the space to feel calm.`,
    textLeft: `With work from home becoming the norm, the guest barn is the perfect space for productivity.`,
  },
  {
    name: HomeType.meadowView,
    thumbnailImage: { image: corner, altText: "placeholder" },
    thumbnailCaption: [formatName({ name: HomeType.meadowView }), "2022"],
    coverImageArray: [
      { image: above, altText: "placeholder" },
      { image: windowCorner, altText: "placeholder" },
    ],
    imageArray: [
      { image: aFrame, altText: "placeholder" },
      { image: office, altText: "placeholder" },
      { image: officeWall, altText: "placeholder" },
    ],
    footerImage: { image: mantle, altText: "placeholder" },
    topText: `Built in 2022 this home represents our approach to connecting the build and natural environment.  Textures and organic elements are the stars.`,
    creditTextArray: [
      `Builder: Hudson Valley Homes & Renovations`,
      `Designer: Bone Hollow Studio`,
      `Architects: Pietro Rosato and Edwin Landaverde of Piro Studio`,
    ],
    textRight: `We sourced Ash from the property to create custom details throughout the home.`,
    textLeft: `Our goal was to create a calming environment that allows the natural surrounding to shine.`,
  },
  {
    name: HomeType.owlsNest,
    thumbnailImage: { image: construction, altText: "placeholder" },
    thumbnailCaption: [
      formatName({ name: HomeType.owlsNest }),
      "coming fall 2022",
    ],
  },
];

export const aboutImageArray: Image[] = [
  { image: umbrellas, altText: "chairs" },
  { image: erika, altText: "door" },
];

export const aboutTextArray: string[] = [
  `Bone Hollow Studio is a woman-owned and operated development company.  
   Our unique approach allows us to create custom homes that integrate the 
   natural appeal of their locations. Our ultimate goal is to create a 
   fusion of architecture, landscape, and interior design with the environment 
   taking the lead. We focus on building sustainable homes with reduced life-cycle 
   environmental impacts.`,
  `Our homes are characterized by restrained, neutral palettes and an elegant minimalism that allow details to shine. With our curated interiors, every element can build a dialogue. The outcome is a clean and modern space that is livable and warm.`,
  `Erika grew up in Berlin, Germany and the American Midwest. A
    graduate of Northwestern University, she has over 15 years of
    experience in producing commercials and special effects for an
    illustrious client base, amongst them Nike, Coca-Cola,
    McDonald's, Chevrolet, and Anheuser Busch. Erika has also
    worked in development and event planning for non-profits,
    including Jersey Battered Women's Service.
    `,
  `Erika's latest work with the New York-based interior
    designer, Amanda Rehbein Studio, has segued into the creation of
    her company, Bone Hollow Studio. With a background in
    advertising production and styling, Erika combines her passion
    for creative design with a natural aptitude for project
    management. She believes one's home should be unique,
    reflecting a deeply personal connection with the land.
    Erika's goal is to create spaces that are at once impactful
    and livable, timeless and comfortable.`,
];

export const indexImageArray: Image[] = [
  {
    image: livingroom,
    altText:
      "softly designed living room with a blue couch to the left, patterned pillows on top...etc",
  },
  {
    image: springView,
    altText: "top corner of dark barn peaking above a meadow",
  },
  { image: flower, altText: "white farmhouse with wildflowers in foreground" },
  { image: fireplace, altText: "" },
  { image: hoya, altText: "" },
  { image: screenPorch, altText: "" },
  { image: airlock, altText: "" },
  { image: pool, altText: "" },
];

export const indexTextArray: string[] = [
  `Bone Hollow Studio is the meeting of rural tranquility and custom design.`,
  `Located in New York’s Hudson Valley, we specialize in curated and welcoming homes.`,
  `A boutique development company.`,
  `Our work is founded on the belief that form and function are the sine qua non of a well-designed home.`,
  `We apply that perspective to projects of every size, from home furnishing to new construction.`,
  `The spaces we create are characterized by luxurious textures, quality materials, and a minimalistic style, because we believe that the way your home feels is just as significant as how it looks.`,
  `In collaboration with local trades.`,
  `Through our partnership with a renowned local builder, Jeromy Wells, of Hudson Valley Homes & Renovations, we offer clean and gracious motifs that are thoughtfully sited in a quiet, introspective setting.`,
  `The spaces we live in give us a protected and intimate feeling.`,
];
