/**
 * pxlNav Integration Tests
 *   Tests Schema : ProcPages Schema v0.1
 *   Tests Creation Date : 2026-03-04
 *   Tests Updates : 2026-03-04
 * 
 * These tests validate the ProcPages DSL's ability to define and run pxlNav
 *   Testing Free Camera (FPS) & Static Camera settings
 *     DOM Response (Free Camera) - DOM elements respond to pxlNav signals & events
 *     pxlNav Response (Static Camera) - pxlNav controlled by DOM elements & page lifecycle
 */

import { 
  Page, Section, PxlNav, 
  Settings, FPS, RenderScale, Onboarding,
  Signals, Funcs, Load, Unload
} from '../parser.js';
import { ProcPagesCompiler } from '../compiler.js';

const compiler = new ProcPagesCompiler();

/**
 * Test 1: Full pxlNav Environment Definition (Free Camera / FPS)
 * Matches pattern in pxlNavLoader.js of `procstack.github.io`
 */
export function testDomResponsePattern() {
  console.log("--- Running DOM Response Pattern Test (Free Camera) ---");

  const loaderPage = Page(
    { id: "TheOutlet", title: "pxlNav :: The Outlet" },
    [
      PxlNav(
        { room: "OutletEnvironment" },
        [
          Settings({
            height: { standing: 22.5, stepSize: 4.5 },
            movement: { scalar: 1.1, max: 10.0, easing: 0.75 },
            look: { mobile: { invert: true } },
            headBounce: { height: 0.3, rate: 0.04, easeIn: 0.03, easeOut: 0.95 },
            jump: { impulse: 0.75, holdMax: 2.5, repeatDelay: 0.085 },
            gravity: { ups: 0.5, max: 18.5 }
          }),
          // Performance & Rendering
          FPS(60, 30),
          RenderScale(1.0, 1.5),
          Onboarding({
            pc: { message: "Welcome to pxlNav :: The Outlet", buttonText: "close" },
            mobile: { message: "Get ready to explore...", buttonText: "start" }
          })
        ]
      ),
      Section({ 
        name: "Intro", 
        content: "Welcome to the Outlet Environment." 
      })
    ]
  );

  const compiled = compiler.compile(loaderPage);
  const pageData = compiled["TheOutlet"];

  // Validation
  let errors = 0;
  if( pageData.pxlNav.room !== "OutletEnvironment" ){
    console.error("FAILED: Room name mismatch");
    errors++;
  }
  if( pageData.pxlNav.settings.height.standing !== 22.5 ){
    console.error("FAILED: Height setting mismatch");
    errors++;
  }
  if( pageData.pxlNav.options.fps.pc !== 60 ){
    console.error("FAILED: FPS setting mismatch");
    errors++;
  }

  if( errors === 0 ){
    console.log("SUCCESS: pxlNavLoader pattern passed!");
  }
  return pageData;
}

/**
 * Test 2: Background Mode (Static Camera)
 * Matches pattern in ProcStackGitio.js of `procstack.github.io`
 */
export function testPxlNavResponsePattern() {
  console.log("\n--- Running pxlNav Response Pattern Test (Static Camera) ---");

  const staticCamPage = Page(
    { id: "CampfireEnv", title: "procstack.github.io" },
    [
      PxlNav(
        { room: "CampfireEnvironment", view: "DefaultView" },
        [
          Settings({
            height: { standing: 1.75, stepSize: 5 },
            movement: { scalar: 1.0, max: 10.0, easing: 0.55 },
            look: { mobile: { invert: true } },
            gravity: { ups: 0.3, max: 15.5 }
          }),
          FPS(45, 45),
          RenderScale(1.0, 1.5)
        ]
      ),
      Signals({ "fireIntensity": 1.0 }),
      Funcs({
        onShaderVis: (visible) => {
          console.log("Shader editor visibility changed:", visible);
        }
      }),
      Load(() => {
        console.log("Gitio Page Loaded with pxlNav Background");
      })
    ]
  );

  const compiled = compiler.compile( staticCamPage );
  const pageData = compiled["CampfireEnv"];

  // Validation
  let errors = 0;
  if( pageData.pxlNav.room !== "CampfireEnvironment" ){
    console.error("FAILED: Background room mismatch");
    errors++;
  }
  if( pageData.pxlNav.options.fps.pc !== 45 ){
    console.error("FAILED: FPS setting mismatch for Gitio");
    errors++;
  }
  if( !pageData.funcs.onShaderVis ){
    console.error("FAILED: Event handler function missing");
    errors++;
  }

  if( errors === 0 ){
    console.log("SUCCESS: ProcStackGitio pattern passed!");
  }
  return pageData;
}


// -- -- --

// Run Tests
export const unitTests = {
  "domResponse": testDomResponsePattern,
  "pxlNavResponse": testPxlNavResponsePattern
};
