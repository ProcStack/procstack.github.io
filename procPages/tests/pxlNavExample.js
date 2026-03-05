/**
 * ProcPages DSL Example - pxlNav First Person Environment
 */

import { 
  Page, Section, PxlNav, 
  Settings, FPS, RenderScale, Onboarding,
  Signals, Funcs, Load, Unload
} from '../parser.js';

// Define the First Person Player environment settings (From pxlNavLoader.js)
const fpsSettings = Settings({
  height: { 
    standing: 22.5, // units
    stepSize: 4.5 
  },
  movement: { 
    scalar: 1.1, 
    max: 10.0, 
    easing: 0.75 
  },
  look: { mobile: { invert: true } },
  headBounce: {
    height: 0.3,
    rate: 0.04,
    easeIn: 0.03,
    easeOut: 0.95
  },
  jump: {
    impulse: 0.75,
    holdMax: 2.5,
    repeatDelay: 0.085
  },
  gravity: { ups: 0.5, max: 18.5 }
});

// The First Person Experience Page
export const TheOutletPage = Page(
  { id: "TheOutlet", title: "pxlNav :: The Outlet" },
  [
    // Initialize pxlNav as a full-screen FPS environment
    PxlNav(
      { room: "OutletEnvironment" },
      [
        fpsSettings,
        FPS(60, 30),
        RenderScale(1.0, 1.5),
        Onboarding({
          pc: {
            message: "Welcome to pxlNav :: The Outlet",
            buttonText: "close"
          },
          mobile: {
            message: "Get ready to explore...",
            buttonText: "start"
          }
        }),
        // Real-time signals shared with the engine
        Signals({
          "isMoving": false,
          "activePortals": 0
        })
      ]
    ),

    // Page logic and sections
    Section({
      name: "The Environment",
      content: `
        <div class="pxlGui-body">
          Welcome to the <strong>Outlet Environment</strong>.
          Navigate using WASD/Arrows and jump with Space.
        </div>
      `
    }),

    // Page context logic
    Load(() => {
      console.log("Outlet environment loaded via ProcPages");
    }),

    Unload(() => {
      console.log("Shutting down Outlet environment...");
    }),

    Funcs({
      onPortalEnter: (portalId) => {
        console.log(`Entering portal: ${portalId}`);
        // logic to warp between rooms
      }
    })
  ]
);

/**
 * Example 2: Page with 3D Background
 */
export const CampfirePage = Page(
  { id: "CampfireEnvironment", title: "Campfire" },
  [
    PxlNav(
      { room: "CampfireEnvironment" },
      [
        Settings({
          height: { standing: 1.75, stepSize: 5 },
          movement: { scalar: 1.0, max: 10.0, easing: 0.55 }
        }),
        FPS(45, 45)
      ]
    ),
    
    Section({
      name: "Journal",
      content: "Relaxing under the dashes of dancing lightning bugs..."
    }),

    Signals({
      "fireIntensity": 1.0
    }),

    Funcs({
      stokeFire: () => {
        fireIntensity.set(Math.min(2.0, fireIntensity.get() + 0.2));
        console.log(`The fire burns brighter: ${fireIntensity.get()}`);
      }
    })
  ]
);
