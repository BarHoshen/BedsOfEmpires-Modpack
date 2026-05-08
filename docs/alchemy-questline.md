# Alchemy Chapter — Quest Design Document

**Target quests: ~75**
**Icon:** `mekanism:ultimate_control_circuit`
**Subtitle:** "Transmute. Transform. Transcend."
**Depends on:** [[Choose Your Path]] from Survival

## Mods Covered

- **Mekanism** — ore processing, circuits, factories, gas processing, nuclear
- **Mekanism Generators** — heat, solar, wind, fission, fusion reactors
- **Mekanism Tools** — referenced for armor (main quests in Military)
- **Apotheosis** — world tiers (Haven → Frontier → Ascent → Summit → Pinnacle)

## Rank Progression

| Rank | Title | Theme | y range |
|------|-------|-------|---------|
| 1 | Apprentice Alchemist | Ore doubling, circuits, basic power | 0 to 8 |
| 2 | Transmuter | Elite processing, gas, factories, digital miner | 10 to 18 |
| 3 | Nuclear Alchemist | Ultimate circuits, fission, fusion, world tiers | 20 to 28 |
| 4 | Philosopher | MekaSuit, reactor mastery, philosopher's stone | 30 to 36 |

---

## Rank 1: Apprentice Alchemist (y: 0 to 8) — ~20 quests

Three spokes: Ore Processing, Circuits & Alloys, Power Generation.

```
[[Welcome to Alchemy]]             checkmark, hexagon size 2.0
    |                              reward: 32 ingot_osmium, 16 steel_casing,
    |                              8 basic_control_circuit, metallurgic_infuser
    |
    +--------+--------+
    |        |        |
    v        v        v
  Ore     Circuits  Power
```

### Ore Processing Spoke (center, x: 0)

```
[Enrichment Chamber]               obtain mekanism:enrichment_chamber
    |                              reward: 2 enrichment_chamber
    |                              description: "Doubles ore output. The foundation
    |                              of all alchemy — transmuting raw stone into value."
    v
[Crusher]                          obtain mekanism:crusher
    |                              reward: 2 crusher
    v
[Combiner]                         obtain mekanism:combiner
    |                              reward: 2 combiner
    v
[Purification Chamber]             obtain mekanism:purification_chamber
    |                              reward: 2 purification_chamber
    |                              description: "Triples ore output. Requires oxygen
    |                              gas from a Chemical Infuser."
    v
[Chemical Injection Chamber]       obtain mekanism:chemical_injection_chamber
                                   reward: 2 chemical_injection_chamber
                                   description: "Quadruples ore output. The ultimate
                                   ore processing chain: 5x ore multiplication."
```

### Circuits & Alloys Spoke (left, x: -3)

```
[Metallurgic Infuser]              obtain mekanism:metallurgic_infuser
    |                              reward: 2 metallurgic_infuser
    |                              description: "Infuses materials with redstone,
    |                              carbon, or other elements. Creates alloys."
    v
[Infused Alloy]                    obtain mekanism:alloy_infused x16
    |                              reward: 32 alloy_infused
    v
[Basic Control Circuit]            obtain mekanism:basic_control_circuit x8
    |                              reward: 16 basic_control_circuit
    |                              description: "Circuits = the backbone of Mekanism.
    |                              You'll need thousands. Start stockpiling."
    v
[Advanced Control Circuit]         obtain mekanism:advanced_control_circuit x4
    |                              reward: 8 advanced_control_circuit,
    |                              8 alloy_reinforced
    v
[Steel Casing]                     obtain mekanism:steel_casing x8
                                   reward: 16 steel_casing
                                   description: "Steel casings are the frame of every
                                   Mekanism machine. Craft in bulk."
```

### Power Generation Spoke (right, x: 3)

```
[Heat Generator]                   obtain mekanismgenerators:heat_generator
    |                              reward: 4 heat_generator
    |                              description: "Burns fuel for FE. Cheap power
    |                              from lava or coal."
    v
[Solar Generator]                  obtain mekanismgenerators:solar_generator
    |                              reward: 4 solar_generator
    v
[Wind Generator]                   obtain mekanismgenerators:wind_generator
    |                              reward: 2 wind_generator
    |                              description: "Free power from wind. Higher altitude
    |                              = more output."
    v
[Energy Cube]                      obtain mekanism:basic_energy_cube
    |                              reward: 2 basic_energy_cube
    |                              description: "Stores FE. Buffer between generators
    |                              and machines."
    v
[Universal Cable]                  obtain mekanism:basic_universal_cable x16
                                   reward: 32 basic_universal_cable
```

### Rank 1 Convergence

```
[Chemical Injection] ---+
[Steel Casing] ---------+---> [[Rank: Transmuter]]  (hexagon, size 1.5)
[Universal Cable] ------+     checkmark
                              reward: 8 elite_control_circuit,
                              mekanism:chemical_oxidizer,
                              mekanism:chemical_dissolution_chamber,
                              mekanism:rotary_condensentrator
                              command: "/say 🔬 @p has risen to the rank of Transmuter!"
```

**~20 quests.**

---

## Rank 2: Transmuter (y: 10 to 18) — ~20 quests

Gas processing, factories, digital miner, world tiers.

### Gas Processing Branch (center, x: 0)

```
[[Rank: Transmuter]]
    |
    v
[Chemical Oxidizer]                obtain mekanism:chemical_oxidizer
    |                              reward: 2 chemical_oxidizer, 4 basic_pressurized_tube
    v
[Electrolytic Separator]           obtain mekanism:electrolytic_separator
    |                              reward: 2 electrolytic_separator
    |                              description: "Splits water into hydrogen + oxygen.
    |                              Hydrogen = fuel. Oxygen = ore processing."
    v
[Chemical Infuser]                 obtain mekanism:chemical_infuser
    |                              reward: 2 chemical_infuser, 4 basic_chemical_tank
    v
[Pressurized Reaction Chamber]     obtain mekanism:pressurized_reaction_chamber
    |                              reward: 2 pressurized_reaction_chamber
    v
[Rotary Condensentrator]           obtain mekanism:rotary_condensentrator
                                   reward: 2 rotary_condensentrator
                                   description: "Converts gas↔fluid. Essential for
                                   many advanced recipes."
```

### Factory Branch (left, x: -3 to -5)

```
[[Rank: Transmuter]]
    |
    v
[Elite Control Circuit]            obtain mekanism:elite_control_circuit x4
    |                              reward: 8 elite_control_circuit
    v
[Basic Factory]                    obtain mekanism:basic_smelting_factory
    |                              reward: basic_enriching_factory
    |                              description: "Factories process 3+ items at once.
    |                              The multiplier for everything."
    v
[Advanced Factory]                 obtain mekanism:advanced_smelting_factory
    |                              reward: advanced_enriching_factory
    v
[Elite Factory]                    obtain mekanism:elite_smelting_factory
                                   reward: elite_enriching_factory
                                   description: "7 parallel slots. Industrial-scale
                                   transmutation."
```

### Digital Miner (side, x: 4)

```
[[Rank: Transmuter]]
    |
    v
[Teleportation Core]              obtain mekanism:teleportation_core x2
    |                              reward: 4 teleportation_core
    v
[Digital Miner]                    obtain mekanism:digital_miner
                                   reward: digital_miner (spare)
                                   description: "Extracts specific ores from the
                                   ground automatically. Configure filters —
                                   the earth yields to the alchemist."
```

### Apotheosis World Tiers (right, x: 5 to 6)

```
[[Rank: Transmuter]]
    |
    v
[World Tier: Haven]                checkmark ("Activate Haven via CTRL+T")
    |                              reward: 16 experience_bottles
    |                              depends also on: Enchanter (Survival) — OPTIONAL dep
    v
[World Tier: Frontier]             checkmark ("Activate Frontier")
    |                              reward: 32 experience_bottles,
    |                              apotheosis:salvaging_table
    v
[World Tier: Ascent]               checkmark ("Activate Ascent")
                                   reward: 64 experience_bottles,
                                   apotheosis:reforging_table
                                   description: "Stronger enemies, better loot.
                                   Apothic Invaders drop affix gear."
```

### Rank 2 Convergence

```
[Rotary Condensentrator] --+
[Elite Factory] -----------+---> [[Rank: Nuclear Alchemist]]  (hexagon, size 1.5)
[Digital Miner] -----------+     checkmark
                                 reward: 8 ultimate_control_circuit,
                                 8 alloy_atomic, 16 alloy_reinforced
                                 command: "/say 🔬 @p has risen to the rank of Nuclear Alchemist!"
```

**~20 quests. Total: ~40.**

---

## Rank 3: Nuclear Alchemist (y: 20 to 28) — ~20 quests

Nuclear power, ultimate circuits, advanced world tiers.

### Nuclear Branch (center, x: 0)

```
[[Rank: Nuclear Alchemist]]
    |
    v
[Ultimate Control Circuit]         obtain mekanism:ultimate_control_circuit x4
    |                              reward: 8 ultimate_control_circuit
    v
[Atomic Alloy]                     obtain mekanism:alloy_atomic x8
    |                              reward: 16 alloy_atomic
    v
[Fission Reactor Casing]           obtain mekanismgenerators:fission_reactor_casing x16
    |                              reward: 16 fission_reactor_casing,
    |                              fission_reactor_port x4,
    |                              fission_fuel_assembly x2,
    |                              control_rod_assembly x2
    v
[Fission Reactor]                  checkmark ("Build and activate a Fission Reactor")
    |                              reward: fission_reactor_logic_adapter,
    |                              8 mekanismgenerators:fission_fuel_assembly
    |                              description: "Your first nuclear reactor. Generates
    |                              massive power. Careful — meltdowns are possible.
    |                              Monitor the temperature."
    v
[Turbine]                          obtain mekanismgenerators:turbine_casing x16
    |                              reward: turbine_casing x16, turbine_valve x4,
    |                              turbine_vent x4, turbine_rotor x4,
    |                              turbine_blade x8
    |                              description: "Converts steam from fission into
    |                              massive FE. The power multiplier."
    v
[Fusion Reactor]                   checkmark ("Build and activate a Fusion Reactor")
    |                              reward: mekanismgenerators:hohlraum x4
    |                              command: "/say ⚡ @p has achieved nuclear fusion!"
    |                              description: "The pinnacle of nuclear alchemy.
    |                              Fusing atoms = essentially unlimited energy."
```

### Ultimate Machines (left, x: -3 to -4)

```
[[Rank: Nuclear Alchemist]]
    |
    v
[Ultimate Factory]                 obtain mekanism:ultimate_smelting_factory
    |                              reward: ultimate_enriching_factory
    v
[Quantum Entangloporter]           obtain mekanism:quantum_entangloporter
    |                              reward: 2 quantum_entangloporter
    |                              description: "Wireless transfer of items, fluids,
    |                              gas, and energy across any distance."
    v
[Logistical Sorter]                obtain mekanism:logistical_sorter
                                   reward: 4 logistical_sorter
                                   description: "Programmable item routing. Direct
                                   items to specific machines/chests by type."
```

### Laser & Boiler (right, x: 3 to 4)

```
[[Rank: Nuclear Alchemist]]
    |
    v
[Mekanism Laser]                   obtain mekanism:laser
    |                              reward: 4 laser, 4 laser_amplifier
    |                              description: "Mekanism lasers concentrate energy
    |                              into a beam. Defense and offense."
    v
[Thermoelectric Boiler]            obtain mekanismgenerators:boiler_casing x16
                                   reward: 16 boiler_casing, boiler_valve x4,
                                   superheating_element x2
                                   description: "Converts heat + water into steam.
                                   Feed into turbines for massive power."
```

### World Tier Endgame (far right, x: 6)

```
[World Tier: Ascent]
    |
    v
[World Tier: Summit]               checkmark ("Activate Summit")
    |                              reward: apotheosis:sigil_of_rebirth x4
    v
[World Tier: Pinnacle]             checkmark ("Activate Pinnacle")
                                   reward: title "Pinnacle"
                                   description: "Maximum world difficulty. Only the
                                   strongest survive."
```

### Rank 3 Convergence

```
[Fusion Reactor] --------+
[Ultimate Factory] ------+---> [[Rank: Philosopher]]  (hexagon, size 1.5)
[Thermoelectric Boiler] -+     checkmark
                               reward: mekanism:mekasuit_helmet (!!),
                               mekanism:meka_tool
                               command: "/say 🔬 @p has risen to the rank of Philosopher!"
```

**~20 quests. Total: ~60.**

---

## Rank 4: Philosopher (y: 30 to 36) — ~15 quests

MekaSuit, reactor optimization, The Philosopher's Stone.

### MekaSuit Branch (center)

```
[[Rank: Philosopher]]
    |
    v
[MekaSuit Helmet]                  obtain mekanism:mekasuit_helmet
    |                              reward: (given in milestone — confirm)
    v
[MekaSuit Bodyarmor]               obtain mekanism:mekasuit_bodyarmor
    |                              reward: elytra (can be attached)
    v
[MekaSuit Pants]                   obtain mekanism:mekasuit_pants
    v
[MekaSuit Boots]                   obtain mekanism:mekasuit_boots
    |
    v
[Full MekaSuit]                    checkmark ("Wear all 4 MekaSuit pieces")
                                   command: "/say 🔬 @p has donned the full MekaSuit. Good luck stopping them."
                                   description: "Powered armor with built-in tools,
                                   flight, and damage absorption. Iron Man."
```

### Meka-Tool (side, x: -3)

```
[[Rank: Philosopher]]
    |
    v
[Meka-Tool]                        obtain mekanism:meka_tool
    |                              reward: none
    |                              description: "A multitool that does everything:
    |                              mine, chop, dig, attack, hoe, shear."
    v
[Module: Vein Mining]              obtain mekanism:module_vein_mining_unit
    |                              reward: module_attack_amplification_unit
    v
[Module: Teleportation]            obtain mekanism:module_teleportation_unit
                                   reward: module_gravitational_modulating_unit
```

### SPS (side, x: 3)

```
[Fusion Reactor] (from Rank 3)
    |
    v
[SPS Casing]                       obtain mekanism:sps_casing x16
    |                              reward: 16 sps_casing, sps_port x4
    v
[Supercritical Phase Shifter]      checkmark ("Build and activate the SPS")
                                   description: "The endgame power system. Converts
                                   polonium into antimatter. Antimatter is used
                                   for the most powerful items in Mekanism."
```

### Cross-Path Bonus (optional)

```
[The Philosopher's Stone]          checkmark ("Fusion Reactor + Digital Miner +
                                   AE2 autocrafting + Mekanism lasers all running")
                                   OPTIONAL
                                   depends on: Full MekaSuit (this) +
                                   Digital Empire (Economy) +
                                   Energy Weapons (Military)
                                   command: "/say 🌟 @p has achieved The Philosopher's Stone! All paths of alchemy converge."
```

### Endgame Milestone

```
[Full MekaSuit] ----------+
[SPS] -------------------+--> [[Alchemical Supremacy]]  (hexagon, size 2.0)
[Module: Teleportation] --+    checkmark
                               reward: title "Philosopher"
                               command: "/say 🔬 @p has achieved Alchemical Supremacy! Matter bends to their will."
```

**~15 quests. GRAND TOTAL: ~75 quests.**

---

## Cross-Path Design Rule

| Quest | Depends on (other chapter) | Blocks anything? |
|-------|---------------------------|-------------------|
| World Tier: Haven | Enchanter (Survival) | No — optional dep |
| The Philosopher's Stone | Digital Empire (Economy) + Energy Weapons (Military) | No — optional |

## Notes

- Ore processing chain is the iconic Mekanism progression: 2x → 3x → 4x → 5x
- Circuit tiers gate machine tiers: Basic → Advanced → Elite → Ultimate
- Factory tiers parallel circuit tiers
- Generators are in mekanismgenerators: namespace, not mekanism:
- Nuclear reactor requires careful description about meltdown risks
- World Tiers are Apotheosis content but thematically fits Alchemy's "transformation" theme
- MekaSuit pieces are individually powerful; full set is endgame
- All item IDs verified
