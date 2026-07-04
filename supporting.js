// supporting.js - Game Data and Configuration Module for Flight 666
window.MonsterCityData = {
    // 1. EXPANDED STAGE AND MULTI-ROUND ROUTING SYSTEM
    storyData: {
        start: {
            text: "Welcome to the cockpit, Captain! Flight 666 is officially breaching the airspace over the Monster City. The storm clouds are radioactive, and fuel is burning fast. Use your credits to arm the plane and keep passengers fed before making life-or-death decisions.",
            options: [
                { text: "Fly straight up into the storm clouds where Giant Sky-Serpents hunt.", next: "round1_skySerpents" },
                { text: "Fly low through downtown skyscraper valleys where Mutant Gargoyles wait.", next: "round1_gargoyles" }
            ],
            zone: "City Border",
            fuelCost: 10,
            happyChange: 0,
            reward: 60
        },
        
        // --- ROUND 1 ENCOUNTERS ---
        round1_skySerpents: {
            text: "CRASH! A radioactive Pacific Sky-Serpent twists itself around your left wing! The hull is cracking under its weight. If you bought weapons, you can fire them now, or you can risk a dangerous roll.",
            options: [
                { text: "Fire Pacific Plasma Cannon (Requires 1 Plasma Cannon)", next: "round1_serpentDead", requireItem: "plasma" },
                { text: "Do a violent barrel roll to throw it off (Damages hull badly!)", next: "round1_serpentRoll" }
            ],
            zone: "Upper Atmosphere (R1)",
            fuelCost: 15,
            happyChange: -15,
            reward: 70
        },
        round1_serpentDead: {
            text: "BOOM! The Pacific Plasma Cannon vaporizes the beast! The passengers cheer in relief and hand you some spare change. However, you are burning fuel quickly trying to escape the cloud.",
            options: [
                { text: "Push forward into the Radio-Jamming Fog Zone", next: "round2_fogEnter" }
            ],
            zone: "Upper Atmosphere (R1)",
            fuelCost: 20,
            happyChange: 15,
            reward: 80
        },
        round1_serpentRoll: {
            text: "You shake the serpent off, but the severe twisting breaks the plane structure! The hull status is dangerous. You must buy a Repair Kit from the store, go out on the wing to fetch it, and apply it before moving forward!",
            options: [
                { text: "Go out onto the wing to retrieve the spawned items and repair/refuel", next: "round1_wingRepair", requireWingItems: true },
                { text: "Ignore the damage and fly blindly forward anyway", next: "recklessCrash" }
            ],
            zone: "Storm Core (R1)",
            damage: 50,
            fuelCost: 15,
            happyChange: -30,
            reward: 40
        },
        round1_wingRepair: {
            text: "You strap into a safety harness and step directly onto the windy, terrifying plane wing! You grab all the airdropped materials you bought from the shop. The plane is restored, and the passengers look out the window in absolute awe at your bravery!",
            options: [
                { text: "Climb back inside the cockpit and navigate into the Radio-Jamming Fog Zone", next: "round2_fogEnter" }
            ],
            zone: "Outside on Wing (R1)",
            fuelCost: 5,
            happyChange: 25,
            reward: 50,
            resolvesDamage: true
        },
        round1_gargoyles: {
            text: "Thump! Thump! Mutant Gargoyles smash onto the plane wings and begin shredding the mechanics. Passengers are screaming in panic inside the cabin!",
            options: [
                { text: "Launch a Pacific EMP Torpedo to scramble their brains (Requires 1 EMP)", next: "round1_gargoylesFried", requireItem: "emp" },
                { text: "Activate de-icing system chemical sprays", next: "round1_gargoylesAcid" }
            ],
            zone: "Downtown Skyline (R1)",
            fuelCost: 15,
            happyChange: -20,
            reward: 60
        },
        round1_gargoylesFried: {
            text: "The EMP wave hits perfectly! The monsters drop off like stones. The passengers feel highly secure.",
            options: [
                { text: "Fly down into the submerged Cyber-Docks", next: "round2_docksEnter" }
            ],
            zone: "Industrial Zone (R1)",
            fuelCost: 15,
            happyChange: 20,
            reward: 100
        },
        round1_gargoylesAcid: {
            text: "The chemical spray gets some of them, but one gargoyle retaliates by smashing a fuel pipe before dying! Your fuel tank is leaking rapidly!",
            options: [
                { text: "Climb out onto the wing to fetch a purchased fuel jug and fix the leak", next: "round1_gargoyleWingFix", requireWingItems: true },
                { text: "Try to glide without fixing it", next: "recklessCrash" }
            ],
            zone: "Downtown Skyline (R1)",
            damage: 20,
            fuelCost: 40,
            happyChange: -15,
            reward: 40
        },
        round1_gargoyleWingFix: {
            text: "You patch the fuel line manually high above the city skyline. It's stable, but the engines are thirstier than ever.",
            options: [
                { text: "Return inside and push the throttle into the submerged Cyber-Docks", next: "round2_docksEnter" }
            ],
            zone: "Outside on Wing (R1)",
            fuelCost: 5,
            happyChange: 20,
            reward: 50,
            resolvesDamage: true
        },

        // --- ROUND 2 ENCOUNTERS (NEW MONSTERS) ---
        round2_fogEnter: {
            text: "ROUND 2: You plunge into a glowing green neon mist. Suddenly, a swarm of Sonic Blood-Bats covers the windows. They scream at an ultra-high frequency, cracking the glass and driving passengers crazy!",
            options: [
                { text: "Deploy Sonic Disruptor frequencies to smash their eardrums (Requires 1 Disruptor)", next: "round2_batsDeaf", requireItem: "disruptor" },
                { text: "Fire main weapon batteries blindly into the mist", next: "round2_batsBlind" }
            ],
            zone: "Neon Fog Sector (R2)",
            fuelCost: 20,
            happyChange: -20,
            reward: 90
        },
        round2_batsDeaf: {
            text: "The Sonic Disruptor neutralizes the swarm instantly! They scatter back into the clouds. The cabin environment calms down.",
            options: [
                { text: "Climb altitude and approach the final volcanic airspace", next: "round3_finalApproach" }
            ],
            zone: "Neon Fog Sector (R2)",
            fuelCost: 15,
            happyChange: 15,
            reward: 100
        },
        round2_batsBlind: {
            text: "Your blind shooting clips a few bats, but a rogue blast strikes a nearby billboard, showering the plane in exploding radioactive debris! The hull takes severe punishment.",
            options: [
                { text: "Order an emergency wing-walk repair run", next: "round2_fogWingRepair", requireWingItems: true },
                { text: "Limp ahead to the final volcanic zone with structural failures", next: "recklessCrash" }
            ],
            zone: "Burning Fog (R2)",
            damage: 45,
            fuelCost: 20,
            happyChange: -25,
            reward: 50
        },
        round2_fogWingRepair: {
            text: "In the thick radioactive fog, you blindly feel your way along the wings to gather the purchased drop kits, locking down the hull structure securely.",
            options: [
                { text: "Re-enter the deck and fly toward the final volcanic hotspot", next: "round3_finalApproach" }
            ],
            zone: "Wing Deck (R2)",
            fuelCost: 5,
            happyChange: 20,
            reward: 60,
            resolvesDamage: true
        },
        round2_docksEnter: {
            text: "ROUND 2: You skim low across the flooded Cyber-Docks. Out of the radioactive water rises a Cyber-Kraken, swinging colossal mechanical tentacles directly at your engines!",
            options: [
                { text: "Deploy an Anti-Matter Mine into the water (Requires 1 Anti-Matter Mine)", next: "round2_krakenBoom", requireItem: "mine" },
                { text: "Attempt a high-G vertical climb to dodge the tentacles", next: "round2_krakenStall" }
            ],
            zone: "Flooded Docks (R2)",
            fuelCost: 25,
            happyChange: -25,
            reward: 120
        },
        round2_krakenBoom: {
            text: "KA-BOOM! The Anti-Matter Mine creates a mini-vortex that tears the mechanical tentacles apart. The path clears immediately.",
            options: [
                { text: "Fly forward into the final volcanic mountain chain", next: "round3_finalApproach" }
            ],
            zone: "Flooded Docks (R2)",
            fuelCost: 15,
            happyChange: 20,
            reward: 110
        },
        round2_krakenStall: {
            text: "You miss the tentacles, but your steep climb stalls the aircraft engine! The plane drops backwards, clipping the docks. Fuel tanks fracture, leaking into the sea.",
            options: [
                { text: "Climb out onto the wing immediately to dump fresh fuel jugs in the tanks", next: "round2_docksWingFix", requireWingItems: true },
                { text: "Let it drop without wing fuel maintenance", next: "recklessCrash" }
            ],
            zone: "Docks Airspace (R2)",
            damage: 35,
            fuelCost: 45,
            happyChange: -20,
            reward: 50
        },
        round2_docksWingFix: {
            text: "Balancing on the icy wing frame, you dump the fresh fuel canisters straight into the emergency reserve tanks just in time.",
            options: [{ text: "Power back up and target the volcanic mountain chain airspace", next: "round3_finalApproach" }],zone: "Wing Deck (R2)",fuelCost: 5,happyChange: 15,reward: 70,resolvesDamage: true},// --- ROUND 3: THE FINAL BOSS ---round3_finalApproach: {text: "ROUND 3 (FINAL BOSS): You reach the volcanic extraction perimeter. Standing directly over the runway is an Atomic Titan Overlord monster, preparing to blast your plane out of the air with a plasma beam!",options: [{ text: "Unleash a Pacific Plasma Cannon straight into its energy core (Requires 1 Plasma Cannon)", next: "victory" },{ text: "Execute an extreme, suicidal engine override dive beneath its legs!", next: "round3_legsDodge" }],zone: "Volcanic Caldera (R3)",fuelCost: 20,happyChange: -30,reward: 200},round3_legsDodge: {text: "You dive into a screaming descent right between the Titan's legs! The absolute thermal heat cooks the hull armor, melting your landing gears.",options: [{ text: "Deploy Emergency Kinetic Shielding to slide onto the tarmac (Requires 1 Shield)", next: "victory", requireItem: "shield" },{ text: "Crash-land without gear or shields on the open volcanic rock face", next: "recklessCrash" }],zone: "Runway Threshold (R3)",damage: 40,fuelCost: 10,happyChange: -20,reward: 0},// --- GLOBAL ENDINGS ---recklessCrash: {text: "CRASH! Without executing necessary wing repairs, refueling the propulsion grid, or managing critical components, your aircraft suffers structural disintegration and collapses into the monster swarms below. Game Over.",options: [{ text: "Respawn & Clone Flight Assembly", next: "restart" }],zone: "CRASH SITE",damage: 100},victory: {text: "TOUCHDOWN! You successfully brought Flight 666 through the gauntlet of the Monster City! The remaining passengers break into tears of pure joy, safety personnel surround the runway, and you are awarded the Golden Pilot Emblem!",options: [{ text: "Initialize New Simulation Blueprint", next: "restart" }],zone: "SAFE HAVEN TERMINAL"}},// 2. EXPANDED AIRDROP MARKET CONFIGURATIONshopItems: {sandwich: { name: "5x Luxury Cabin Sandwiches", cost: 20, type: "cabin", description: "Spawns in pilot space to boost passenger happiness instantly." },emp: { name: "Pacific EMP Torpedo", cost: 40, type: "weapon", key: "emp", description: "Loads to cockpit slots. Obliterates airborne gargoyle swarms." },plasma: { name: "Pacific Plasma Cannon", cost: 60, type: "weapon", key: "plasma", description: "Heavy laser system needed to vaporize Sky-Serpents and Titans." },disruptor: { name: "Sonic Disruptor Matrix", cost: 45, type: "weapon", key: "disruptor", description: "Fires localized shockwaves to clear dense bat swarms." },mine: { name: "Anti-Matter Float Mine", cost: 55, type: "weapon", key: "mine", description: "Heavy drop explosive used to destroy aquatic or coastal targets." },shield: { name: "Kinetic Hull Shieldinging", cost: 50, type: "weapon", key: "shield", description: "Absorbs friction and landing structural impacts during failure." },repair: { name: "Heavy Repair Plate Kit", cost: 50, type: "wing", key: "spawnedParts", description: "Spawns on the wing. Must climb out to utilize and patch the hull." },fuel: { name: "Premium Jet Fuel Jug", cost: 40, type: "wing", key: "spawnedFuel", description: "Spawns on the wing. Must step outside to grab and restore fuel levels." }}};
