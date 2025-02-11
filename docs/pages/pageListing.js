
import { pageData as initPageData } from "./init.js";
import { pageData as pxlNavPageData } from "./pxlNav.js";
import { pageData as makingOfPageData } from "./makingOf.js";
import { pageData as projectsPageData } from "./projects.js";
import { pageData as blogData } from "./blog.js";
import { pageData as aboutMePageData } from "./aboutMe.js";

const pageListing = {};
pageListing[ initPageData['page'] ] = initPageData;
pageListing[ pxlNavPageData['page'] ] = pxlNavPageData;
pageListing[ makingOfPageData['page'] ] = makingOfPageData;
pageListing[ projectsPageData['page'] ] = projectsPageData;
pageListing[ blogData['page'] ] = blogData;
pageListing[ aboutMePageData['page'] ] = aboutMePageData;

export { pageListing };
