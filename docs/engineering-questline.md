# Engineering Chapter — Quest Design Document

**Target quests: ~75-80**
**Icon:** `create:wrench`
**Subtitle:** "Build. Automate. Dominate."
**Depends on:** [[Choose Your Path]] from Survival

## Mods Covered

- **Create** (core) — rotation, processing, logistics, trains
- **Create Connected** — advanced kinetics, fan catalysts, wireless redstone
- **Create Additions** — SU↔FE electricity bridge
- **Create New Age** — electricity, magnets, solar heat, nuclear reactor
- **Create Enchantment Industry** — automated enchanting/disenchanting
- **Create Stuff N Additions** — jetpacks, exoskeletons, gadgets, drones
- **Create Diesel Generators** — diesel power
- **Create Ore Excavation** — automated drilling
- **Create Aeronautics** — airships
- **Create Hypertube** — fast player transport
- **Create Power Loader** — chunk loading
- **Escalated** — escalators/walkways
- **Create MF** — gravitron, refined radiance tools, shadow ingot

## Rank Progression

| Rank | Title | Theme | y range |
|------|-------|-------|---------|
| 1 | Tinkerer | Basic rotation, processing, logistics | 0 to 8 |
| 2 | Industrialist | Brass tier, automation, trains, drilling | 10 to 18 |
| 3 | Master Engineer | Electricity, enchanting machines, jetpacks, chunk loading | 20 to 28 |
| 4 | Architect of War | Airships, nuclear, endgame gadgets, cross-path | 30 to 36 |

---

## Rank 1: Tinkerer (y: 0 to 8) — ~22 quests

Root quest branches into 4 spokes: Power, Processing, Logistics, and Kinetics.

```
[[Welcome to Engineering]]         checkmark, hexagon size 2.0
    |                              depends on: Choose Your Path (Survival)
    |                              reward: 32 andesite_alloy, 16 shaft, 8 cogwheel
    |                              description: "Create turns Minecraft into a physics
    |                              sandbox. Everything runs on rotational force (SU).
    |                              Let's start with the basics."
    |
    +--------+--------+--------+
    |        |        |        |
    v        v        v        v
  Power   Process  Logistics  Kinetics
  spoke    spoke    spoke     spoke
```

### Power Spoke (x: -4 to -6)

```
[Hand Crank]                       obtain create:hand_crank
    |                              reward: 4 hand_crank
    |                              description: "Free rotation. Right-click to spin.
    |                              Slow but requires no resources."
    v
[Water Wheel]                      obtain create:water_wheel
    |                              reward: 4 water_wheel, 8 shaft
    |                              description: "Place in flowing water for passive SU.
    |                              Multiple wheels on one shaft = more power."
    v
[Windmill]                         obtain create:windmill_bearing (checkmark — build a windmill)
    |                              reward: 8 sail, 4 white_sail, mechanical_bearing
    |                              description: "Windmills work everywhere and scale with
    |                              sail count. Your first serious power source."
    v
[Steam Engine]                     checkmark ("Build a steam engine with a blaze burner")
    |                              reward: 4 blaze_burner, 8 shaft
    |                              description: "Steam engines provide the most SU.
    |                              Feed a blaze burner with fuel for massive output."
```

### Processing Spoke (x: 0 to 2) — the main trunk

```
[Andesite Casing]                  obtain create:andesite_casing
    |                              reward: 16 andesite_casing
    v
[Mechanical Press]                 obtain create:mechanical_press
    |                              reward: 2 mechanical_press, create:depot x4
    |                              description: "Presses turn ingots to sheets.
    |                              Place above a depot or belt."
    v
[Iron & Copper Sheets]             obtain create:iron_sheet x8 + create:copper_sheet x8 (two tasks)
    |                              reward: 16 iron_sheet, 16 copper_sheet
    v
[Crushing Wheel]                   obtain create:crushing_wheel x2
    |                              reward: 4 crushing_wheel
    |                              description: "Crushing doubles ore output and
    |                              breaks items into components."
    v
[Mechanical Mixer]                 obtain create:mechanical_mixer
    |                              reward: 2 mechanical_mixer, 4 create:basin
    |                              description: "Mixers combine items in basins.
    |                              Essential for brass alloy."
    v
[Brass Production]                 obtain create:brass_ingot x16
    |                              reward: 32 brass_ingot, 8 zinc_ingot
    |                              description: "Brass = copper + zinc in a mixer.
    |                              This unlocks the advanced tier of Create."
```

### Logistics Spoke (x: 4 to 6)

```
[Belt Connector]                   obtain create:belt_connector x8
    |                              reward: 32 belt_connector
    |                              description: "Belts move items between machines.
    |                              The backbone of every factory."
    v
[Funnels]                          obtain create:andesite_funnel x4 + create:brass_funnel x4 (two tasks)
    |                              reward: 8 andesite_funnel, 8 brass_funnel
    |                              description: "Funnels insert/extract items.
    |                              Andesite = simple. Brass = filtered."
    v
[Chutes & Depots]                  obtain create:chute x4 + create:depot x4 (two tasks)
    |                              reward: 8 chute, 8 depot, 4 smart_chute
    |                              description: "Vertical item transport. Smart chutes
    |                              filter what passes through."
```

### Kinetics Spoke (x: -2 to -3) — Create Connected basics

```
[Cogwheel Mastery]                 obtain create:cogwheel x4 + create:large_cogwheel x4 (two tasks)
    |                              reward: 16 cogwheel, 8 large_cogwheel
    |                              description: "Large cogwheels change speed/torque.
    |                              Small-to-large halves speed, doubles torque."
    v
[Gearbox]                         obtain create:gearbox
    |                              reward: 4 gearbox, 2 create:adjustable_chain_gearshift
    |                              description: "Gearboxes redirect rotation.
    |                              Essential for complex factory layouts."
    v
[Clutch & Brake]                   obtain create_connected:overstress_clutch + create_connected:brake (two tasks)
    |                              reward: 4 overstress_clutch, 4 brake, 2 shear_pin
    |                              description: "Safety first. Clutches prevent
    |                              overstress damage. Brakes halt networks."
```

### Rank 1 Convergence

All 4 spokes converge at a milestone:

```
[Steam Engine] --------+
[Brass Production] ----+---> [[Rank: Industrialist]]  (hexagon, size 1.5)
[Chutes & Depots] -----+     checkmark
[Clutch & Brake] ------+     reward: 8 brass_casing, 8 electron_tube,
                              4 precision_mechanism, 32 brass_sheet
                              command: "/say ⚙️ @p has risen to the rank of Industrialist!"
                              description: "You understand rotation, processing,
                              and logistics. Time for advanced engineering."
```

**22 quests (including root + milestone).**

---

## Rank 2: Industrialist (y: 10 to 18) — ~22 quests

Brass-tier machines, automation, trains, and drilling. Branches from [[Rank: Industrialist]].

### Advanced Machines Branch (center, x: 0 to 2)

```
[[Rank: Industrialist]]
    |
    v
[Brass Casing]                     obtain create:brass_casing x8
    |                              reward: 16 brass_casing
    v
[Electron Tube]                    obtain create:electron_tube x4
    |                              reward: 16 electron_tube
    |                              description: "Electron tubes are the 'circuit' of
    |                              Create. Needed for almost every advanced machine."
    v
[Precision Mechanism]              obtain create:precision_mechanism x2
    |                              reward: 8 precision_mechanism
    |                              description: "Made via sequenced assembly — Create's
    |                              multi-step crafting system. Automate this early."
    v
[Mechanical Crafter]               obtain create:mechanical_crafter x9
    |                              reward: 16 mechanical_crafter
    |                              description: "Mechanical crafters auto-craft recipes
    |                              when connected in a grid. 3x3 = any recipe."
    v
[Deployer]                         obtain create:deployer
    |                              reward: 4 deployer
    |                              description: "Deployers right-click or place items.
    |                              Essential for sequenced assembly lines."
    v
[Sequenced Assembly Line]          checkmark ("Build a working sequenced assembly line")
    |                              reward: 8 precision_mechanism, 4 deployer
    |                              description: "The heart of Create automation. Items
    |                              move through deployers, presses, and cutters
    |                              in a precise sequence."
```

### Train Branch (right, x: 4 to 6)

```
[Sequenced Assembly Line]
    |
    v
[Railway Casing]                   obtain create:railway_casing x4
    |                              reward: 16 railway_casing
    v
[Train Tracks]                     obtain create:track x32
    |                              reward: 64 track, 4 create:track_station
    v
[First Train]                      checkmark ("Build a train with station + controls")
    |                              reward: create:controls x2, 8 train_station
    |                              description: "Trains move items and players across
    |                              vast distances. Connect your base to outposts."
    v
[Train Schedule]                   checkmark ("Set up an automated train schedule")
                                   reward: 8 railway_casing, schedule x2
                                   description: "Automated trains run without you.
                                   Set destinations and conditions."
```

### Drilling Branch (left, x: -4 to -6)

```
[[Rank: Industrialist]]
    |
    v
[Mechanical Drill]                 obtain create:mechanical_drill x4
    |                              reward: 8 mechanical_drill, 4 mechanical_bearing
    v
[Drill Contraption]                checkmark ("Build a moving drill contraption")
    |                              reward: 8 mechanical_drill, 4 linear_chassis
    |                              description: "Mount drills on a bearing or piston.
    |                              Automated mining without pickaxes."
    v
[Ore Excavation]                   obtain createoreexcavation:drilling_machine
    |                              reward: 2 drilling_machine
    |                              description: "The drilling machine automatically
    |                              extracts ore veins from underground."
```

### Diesel Branch (side, x: -2)

```
[Drill Contraption]
    |
    v
[Diesel Engine]                    obtain createdieselgenerators:diesel_engine
                                   reward: 4 create:fluid_pipe, 2 create:fluid_tank
                                   description: "Diesel engines provide serious SU
                                   from liquid fuel. Industrial-grade power."
```

### Connected Advanced Branch (side, x: 2 to 3)

```
[[Rank: Industrialist]]
    |
    v
[Control Chip]                     obtain create_connected:control_chip
    |                              reward: 4 control_chip
    v
[Kinetic Battery]                  obtain create_connected:kinetic_battery
    |                              reward: 2 kinetic_battery
    |                              description: "Stores stress units. Charge when
    |                              you have excess power, discharge when needed."
    v
[Fan Catalysts]                    obtain any create_connected fan catalyst
    |                              reward: fan_blasting_catalyst, fan_washing_catalyst,
    |                              fan_smoking_catalyst, fan_haunting_catalyst
    |                              description: "Catalysts let fans bulk-process items
    |                              without needing lava/water/soul fire."
    v
[Sequenced Pulse Generator]        obtain create_connected:sequenced_pulse_generator
                                   reward: 4 sequenced_pulse_generator
                                   description: "Programmable redstone sequences.
                                   Automate complex timing systems."
```

### Rank 2 Convergence

```
[Sequenced Assembly Line] --+
[Train Schedule] -----------+
[Ore Excavation] -----------+--> [[Rank: Master Engineer]]  (hexagon, size 1.5)
[Seq. Pulse Generator] -----+    checkmark
                                  reward: 16 electron_tube, 8 precision_mechanism,
                                  createaddition:copper_wire x16
                                  command: "/say ⚙️ @p has risen to the rank of Master Engineer!"
```

**22 quests. Total so far: 44.**

---

## Rank 3: Master Engineer (y: 20 to 28) — ~20 quests

Electricity, automated enchanting, personal equipment, and chunk loading.

### Electricity Branch (center, x: 0 to 2)

```
[[Rank: Master Engineer]]
    |
    v
[Create Additions: Alternator]     obtain createaddition:alternator
    |                              reward: 4 alternator, 8 copper_wire, 4 connector
    |                              description: "Converts SU → FE. Your Create factory
    |                              can now power Mekanism machines and laser turrets."
    v
[Electric Motor]                   obtain createaddition:electric_motor
    |                              reward: 4 electric_motor
    |                              description: "Converts FE → SU. The reverse bridge.
    |                              Mekanism generators can power Create machines."
    v
[New Age: Generator Coil]          obtain create_new_age:generator_coil
    |                              reward: 2 generator_coil, 4 carbon_brushes,
    |                              4 layered_magnet, 8 copper_wire
    |                              description: "Surround with magnets and spin for
    |                              efficient electricity generation."
    v
[Magnet Tiers]                     obtain create_new_age:netherite_magnet
    |                              reward: 4 netherite_magnet, 8 redstone_magnet
    |                              description: "Better magnets = more power per coil.
    |                              Netherite magnets are the best."
    v
[Solar Heating]                    obtain create_new_age:basic_solar_heating_plate
    |                              reward: 4 basic_solar_heating_plate, 4 heat_pipe
    v
[Stirling Engine]                  obtain create_new_age:stirling_engine
    |                              reward: 2 stirling_engine, 4 heat_pump
    |                              description: "Converts heat → rotation. Solar plates
    |                              heat pipes, stirling engines spin shafts. Free power."
    v
[New Age Motors]                   obtain create_new_age:advanced_motor
                                   reward: 2 advanced_motor, 2 basic_motor_extension
                                   description: "Motors convert electricity to rotation
                                   at scale. More efficient than alternator chains."
```

### Enchanting Machines Branch (left, x: -4 to -6)

```
[[Rank: Master Engineer]]
    |
    v
[Blaze Enchanter]                  obtain create_enchantment_industry:blaze_enchanter
    |                              reward: 2 blaze_enchanter
    |                              description: "Automated enchanting. Feed it items,
    |                              lapis, and liquid XP — it enchants automatically."
    v
[Mechanical Grindstone]            obtain create_enchantment_industry:mechanical_grindstone
    |                              reward: 2 mechanical_grindstone, grindstone_drain
    |                              description: "Disenchants items into liquid XP.
    |                              Recycle bad enchants into useful experience."
    v
[Blaze Forger]                     obtain create_enchantment_industry:blaze_forger
    |                              reward: 2 blaze_forger
    |                              description: "Automated anvil with NO repair cost.
    |                              Merge enchanted books onto gear endlessly."
    v
[Printer]                          obtain create_enchantment_industry:printer
                                   reward: 2 printer
                                   description: "Copies enchanted books, written books,
                                   and train schedules. Mass-produce enchantments."
```

### Personal Equipment Branch (right, x: 4 to 6)

```
[[Rank: Master Engineer]]
    |
    v
[Andesite Jetpack]                 obtain create_sa:andesite_jetpack_chestplate
    |                              reward: small_fueling_tank
    |                              description: "Your first jetpack! Fuel-powered flight.
    |                              Carry a fueling tank to recharge mid-air."
    v
[Copper Jetpack]                   obtain create_sa:copper_jetpack_chestplate
    |                              reward: small_filling_tank
    |                              description: "Water-pressure flight. Different fuel
    |                              system — carry a filling tank instead."
    v
[Brass Jetpack]                    obtain create_sa:brass_jetpack_chestplate
    |                              reward: medium_fueling_tank, medium_filling_tank
    |                              description: "Steam-powered flight using both water
    |                              and fuel. The best mid-tier jetpack."
    v
[Portable Drill]                   obtain create_sa:portable_drill
    |                              reward: flamethrower, grapplin_whisk
    |                              description: "Handheld tools from Create S&A.
    |                              The drill mines, the flamethrower smelts,
    |                              the whisk grapples."
    v
[Andesite Exoskeleton]             obtain create_sa:andesite_exoskeleton_chestplate
                                   reward: copper_exoskeleton_chestplate
                                   description: "Mining exoskeletons grant Haste and
                                   Strength. Fuel-powered workhorse armor."
```

### Chunk Loading Branch (side, x: -2)

```
[Blaze Enchanter] (or Master Engineer milestone)
    |
    v
[Andesite Chunk Loader]           obtain create_power_loader:andesite_chunk_loader
    |                              reward: none (it's valuable enough)
    |                              description: "Keeps the current chunk loaded while
    |                              powered with rotation. Requires a captured Ghast!"
    v
[Brass Chunk Loader]               obtain create_power_loader:brass_chunk_loader
                                   reward: none
                                   description: "Configurable area (1x1 to 5x5 chunks).
                                   Works on trains and moving contraptions!"
```

### Hypertube Branch (side, x: 6)

```
[[Rank: Master Engineer]]
    |
    v
[Hypertube]                        obtain create_hypertube:hypertube x16
    |                              reward: 32 hypertube, 4 hypertube_entrance
    v
[Hypertube Network]                checkmark ("Connect two locations 100+ blocks apart")
                                   reward: 16 hypertube_entrance
                                   description: "Fast player transport. Connect your
                                   base to outposts or defensive positions."
```

### Rank 3 Convergence

```
[New Age Motors] -----------+
[Printer] ------------------+
[Brass Jetpack] ------------+--> [[Rank: Architect of War]]  (hexagon, size 1.5)
[Brass Chunk Loader] -------+     checkmark
[Hypertube Network] --------+     reward: create_new_age:thorium x16,
                                  create_new_age:blank_circuit x8,
                                  create_sa:brass_drone_item x1,
                                  create_sa:drone_controller x1
                                  command: "/say ⚙️ @p has risen to the rank of Architect of War!"
```

**20 quests. Total so far: 64.**

---

## Rank 4: Architect of War (y: 30 to 36) — ~16 quests

Airships, nuclear power, endgame gadgets, drones, and cross-path quests.

### Nuclear Branch (center, x: 0)

```
[[Rank: Architect of War]]
    |
    v
[Thorium Processing]              obtain create_new_age:radioactive_thorium
    |                              reward: 8 radioactive_thorium
    v
[Nuclear Fuel]                     obtain create_new_age:nuclear_fuel
    |                              reward: 4 nuclear_fuel
    v
[Reactor Construction]             checkmark ("Build a Create New Age nuclear reactor")
    |                              reward: 8 reactor_casing, 4 reactor_glass,
    |                              2 reactor_rod, reactor_fuel_acceptor,
    |                              2 reactor_heat_vent
    |                              description: "Nuclear power via Create. Generates
    |                              massive heat for stirling engines. Don't let it
    |                              melt down — corium is NOT fun to clean up."
    v
[Reinforced Energiser]             obtain create_new_age:reinforced_energiser
                                   reward: 2 reinforced_energiser,
                                   reinforced_motor
                                   description: "Top-tier energiser + motor. Your
                                   factory runs at maximum efficiency."
```

### Airship Branch (left, x: -4 to -6)

```
[[Rank: Architect of War]]
    |
    v
[Propeller Bearing]                obtain aeronautics:propeller_bearing
    |                              reward: 2 propeller_bearing,
    |                              4 aeronautics:andesite_propeller
    v
[Hot Air Envelope]                 obtain aeronautics:white_envelope
    |                              reward: 2 white_envelope,
    |                              2 aeronautics:adjustable_burner
    v
[First Airship]                    checkmark ("Build and fly an airship")
                                   reward: create_jetpack:jetpack,
                                   aeronautics:aviators_goggles
                                   command: "/say ⚙️ @p has built their first airship! The skies are no longer safe."
                                   description: "You can fly. Reconnaissance, supply
                                   runs, or... bombing runs."

[Armed Airship]                    checkmark ("Mount a cannon on an airship")
                                   OPTIONAL — does not block any progression
                                   depends on: First Airship + Artillery (Military)
                                   reward: title only
                                   command: "/say WARNING: @p has built an armed airship!"
                                   description: "A flying weapons platform. Requires
                                   both Engineering (airship) and Military (cannon).
                                   This is a cross-path bonus quest."
```

### Drone Branch (right, x: 4)

```
[[Rank: Architect of War]]
    |
    v
[Brass Drone]                      obtain create_sa:brass_drone_item
    |                              reward: drone_controller, fan_component,
    |                              vault_component, brass_drill_head
    v
[Drone Operations]                 checkmark ("Deploy a drone with at least 2 modules")
                                   reward: 2 brass_drone_item
                                   description: "Drones scout, mine, and haul
                                   autonomously. Equip modules and deploy."
```

### Endgame Gadgets Branch (right, x: 6)

```
[Brass Jetpack] (from Rank 3)
    |
    v
[Netherite Jetpack]                obtain create_sa:netherite_jetpack_chestplate
    |                              reward: large_fueling_tank, large_filling_tank
    |                              description: "The ultimate jetpack. Faster, longer
    |                              flight, higher fuel capacity."
    v
[Brass Exoskeleton]                obtain create_sa:brass_exoskeleton_chestplate
                                   reward: none
                                   description: "Steam-powered exoskeleton.
                                   Strength + Haste. The miner's dream."
```

### Endgame Materials (side, x: -2)

```
[Reinforced Energiser]
    |
    v
[Overcharged Materials]            obtain create_new_age:overcharged_diamond
    |                              reward: 4 overcharged_diamond,
    |                              4 overcharged_diamond_wire
    v
[Gravitron]                        obtain create_mf:gravitron
                                   reward: none
                                   description: "Creative-mode flight in survival.
                                   Durability-based — use wisely."
```

### Escalator (optional side, x: 2)

```
[[Rank: Architect of War]]
    |
    v
[Escalators]                       obtain escalated:metal_walkway_steps (optional)
                                   reward: 8 metal_walkway_steps,
                                   4 wooden_walkway_steps
                                   description: "Moving stairs and walkways.
                                   The civilized way to travel vertically."
```

### Cross-Path Bonus Quests (all optional, never block progression)

These quests branch off the main line but are marked `optional: true`. They require progress in another path — either by you or a teammate supplying materials.

```
[Alchemical Alloys]                obtain mekanism:alloy_infused x64
                                   OPTIONAL
                                   depends on: Alternator (this chapter) +
                                   Advanced Processing (Alchemy)
                                   reward: 8 precision_mechanism, 16 electron_tube
                                   description: "Mekanism alloys are a grind for
                                   engineers. An Alchemy teammate has surplus."

[Armed Airship]                    (see Airship Branch above — also optional)
```

### Endgame Milestone

Only depends on same-chapter quests. Cross-path quests are NEVER required for milestones.

```
[First Airship] ----------+
[Reactor Construction] ---+
[Drone Operations] -------+--> [[Industrial Supremacy]]  (hexagon, size 2.0)
[Netherite Jetpack] ------+     checkmark
                                reward: title "Architect of War"
                                command: "/say ⚙️ @p has achieved Industrial Supremacy! Their machines reshape the world."
                                description: "Airships, nuclear power, drones, and
                                jetpacks. You've mastered every form of engineering."
```

**16 quests. GRAND TOTAL: ~80 quests.**

---

## Full Dependency Flow (simplified)

```
[[Welcome to Engineering]]
    |
    +-- Power: Hand Crank -> Water Wheel -> Windmill -> Steam Engine
    |
    +-- Processing: Andesite Casing -> Mech Press -> Sheets -> Crushing -> Mixer -> Brass
    |
    +-- Logistics: Belt -> Funnels -> Chutes & Depots
    |
    +-- Kinetics: Cogwheels -> Gearbox -> Clutch & Brake
    |
    +---> ALL converge at [[Rank: Industrialist]]
              |
              +-- Machines: Brass Casing -> E-Tube -> Precision -> Crafter -> Deployer -> Assembly
              +-- Trains: Railway Casing -> Tracks -> First Train -> Schedule
              +-- Drilling: Mech Drill -> Drill Contraption -> Ore Excavation
              +-- Connected: Control Chip -> Kin.Battery -> Fan Catalysts -> Pulse Gen
              +-- Side: Diesel Engine
              |
              +---> ALL converge at [[Rank: Master Engineer]]
                        |
                        +-- Electricity: Alternator -> E-Motor -> Gen.Coil -> Magnets -> Solar -> Stirling -> NA Motors
                        +-- Enchanting: Blaze Enchanter -> Grindstone -> Forger -> Printer
                        +-- Equipment: Andesite JP -> Copper JP -> Brass JP -> Drill -> Exoskeleton
                        +-- Chunk: Andesite Loader -> Brass Loader
                        +-- Transport: Hypertube -> Hypertube Network
                        |
                        +---> ALL converge at [[Rank: Architect of War]]
                                  |
                                  +-- Nuclear: Thorium -> Fuel -> Reactor -> Reinforced Energiser -> Overcharged -> Gravitron
                                  +-- Airship: Propeller -> Envelope -> First Airship
                                  +-- Drone: Brass Drone -> Drone Ops
                                  +-- Endgame: Netherite JP -> Brass Exo
                                  +-- Side: Escalators (optional), Armed Airship (optional, + Military)
                                  |
                                  +---> [[Industrial Supremacy]]  (depends ONLY on same-chapter quests)
```

---

## Cross-Path Design Rule

**Cross-path quests are ALWAYS optional.** They never block rank milestones or main-line progression. A player can complete the entire Engineering path solo without touching any other path.

Cross-path quests encourage team play and multi-path exploration, but they're bonuses — not gates.

### Cross-path quests IN this chapter (optional, depend on other paths):

| Quest | Depends on (other chapter) | Blocks anything? |
|-------|---------------------------|-------------------|
| Armed Airship | Artillery (Military) | No — optional |
| Alchemical Alloys | Advanced Processing (Alchemy) | No — optional |

### Quests in OTHER chapters that depend on this chapter (also optional in those chapters):

| Quest (other chapter) | Depends on (this chapter) | Blocks anything? |
|------------------------|---------------------------|-------------------|
| Artillery (Military) | Brass Production (Rank 1) | No — optional in Military |
| Auto-Loader (Military) | Sequenced Assembly Line (Rank 2) | No — optional in Military |
| Energy Weapons (Military) | Alternator (Rank 3) | No — optional in Military |
| Create+AE2 Bridge (Economy) | Brass Production (Rank 1) | No — optional in Economy |
| Candy Factory (Housewife) | Brass Production (Rank 1) | No — optional in Housewife |

---

## Notes for Implementation

- Root quest uses `autofocus_id` to center the view on it when chapter opens
- Use `size: 2.0d` on root and final milestone
- Use `size: 1.5d` on rank milestones
- Rank milestones use `shape: "hexagon"`
- Processing spoke is the "main trunk" (center x:0) — visually dominant
- Power/Kinetics go left, Logistics/Trains go right
- Optional quests (Escalators, Diesel, Armed Airship, Alchemical Alloys) marked `optional: true`
- **Cross-path quests NEVER block rank milestones or main-line progression**
- All item IDs verified against mod JARs
- Fan catalysts quest can use any of the catalyst types as the task
- Chunk loaders require Ghast capture — mention in description
- Nuclear reactor meltdown risk — warn in description
