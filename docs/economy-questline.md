# Economy Chapter — Quest Design Document

**Target quests: ~80**
**Icon:** `mysticalagriculture:inferium_essence`
**Subtitle:** "Farm. Store. Automate."
**Depends on:** [[Choose Your Path]] from Survival

## Mods Covered

- **Mystical Agriculture** — essence tiers, resource seeds, growth accelerators, gear
- **Applied Energistics 2** — digital storage, autocrafting, channels, terminals
- **Storage Drawers** — bulk storage, controllers, upgrades
- **Sophisticated Backpacks** — portable storage, upgrades
- **Create Applied Kinetics** — Create↔AE2 bridge

## Rank Progression

| Rank | Title | Theme | y range |
|------|-------|-------|---------|
| 1 | Farmer | Basic farming, storage drawers, inferium essence | 0 to 8 |
| 2 | Merchant | AE2 digital storage, prudentium/tertium seeds, backpacks | 10 to 18 |
| 3 | Tycoon | AE2 autocrafting, supremium, Create+AE2 bridge, chunk loading | 20 to 28 |
| 4 | Magnate | Full automation pipeline, war economy, infinite resources | 30 to 36 |

---

## Rank 1: Farmer (y: 0 to 8) — ~22 quests

Three spokes: Storage Drawers, Mystical Agriculture Basics, and Farming Infrastructure.

```
[[Welcome to Economy]]             checkmark, hexagon size 2.0
    |                              depends on: Choose Your Path (Survival)
    |                              reward: 32 inferium_essence, prosperity_shard x16,
    |                              storagedrawers:oak_full_drawers_1 x8,
    |                              sophisticatedbackpacks:backpack x1
    |
    +--------+--------+
    |        |        |
    v        v        v
  Storage  MystAg   Farming
```

### Storage Drawers Spoke (left, x: -3 to -5)

```
[First Drawer]                     obtain storagedrawers:oak_full_drawers_1
    |                              reward: 16 oak_full_drawers_1
    v
[Drawer Controller]                obtain storagedrawers:controller
    |                              reward: 2 controller
    |                              description: "Place next to connected drawers.
    |                              Insert into the controller — it finds the right drawer."
    v
[Compacting Drawer]                obtain storagedrawers:compacting_drawers_3
    |                              reward: 4 compacting_drawers_3
    |                              description: "Auto-converts between nuggets, ingots,
    |                              and blocks. Insert nuggets, pull out blocks."
    v
[Drawer Upgrades]                  obtain storagedrawers:upgrade_template x4
    |                              reward: 8 upgrade_template
    |                              description: "Upgrades increase drawer capacity
    |                              from 32 stacks to thousands."
    v
[Void Upgrade]                     obtain storagedrawers:void_upgrade
                                   reward: 4 void_upgrade
                                   description: "Excess items beyond capacity are
                                   voided. Never overflow your storage."
```

### Mystical Agriculture Spoke (center, x: 0)

```
[Prosperity Shards]                obtain mysticalagriculture:prosperity_shard x16
    |                              reward: 32 prosperity_shard
    v
[Inferium Essence]                 obtain mysticalagriculture:inferium_essence x64
    |                              reward: 64 inferium_essence, infusion_crystal x2
    |                              description: "Inferium is the base essence. Mine
    |                              Inferium Ore or grow Inferium Seeds."
    v
[Seed Base]                        obtain mysticalagriculture:prosperity_seed_base x4
    |                              reward: 8 prosperity_seed_base
    |                              description: "Seed bases + essence = resource seeds.
    |                              Grow iron, gold, diamonds — anything."
    v
[First Resource Seed]              obtain any tier 1 seed (e.g., mysticalagriculture:iron_seeds)
    |                              reward: stone_seeds, dirt_seeds, 
    |                              nature_seeds, dye_seeds (various T1 seeds)
    v
[Inferium Farmland]                obtain mysticalagriculture:inferium_farmland
    |                              reward: 16 inferium_farmland
    |                              description: "Essence farmland speeds crop growth
    |                              based on tier. Inferium is the basic tier."
    v
[Growth Accelerator]               obtain mysticalagriculture:inferium_growth_accelerator
                                   reward: 4 inferium_growth_accelerator
                                   description: "Place under farmland. Dramatically
                                   speeds crop growth. Stack for insane speed."
```

### Farming Infrastructure (right, x: 3 to 5)

```
[Backpack]                         obtain sophisticatedbackpacks:backpack
    |                              reward: sophisticatedbackpacks:upgrade_base x4
    v
[Copper Backpack]                  obtain sophisticatedbackpacks:copper_backpack
    |                              reward: pickup_upgrade, magnet_upgrade
    |                              description: "More slots. Pickup Upgrade auto-
    |                              collects drops. Magnet pulls items to you."
    v
[Iron Backpack]                    obtain sophisticatedbackpacks:iron_backpack
    |                              reward: compacting_upgrade, void_upgrade
    v
[Crafting Upgrade]                 obtain sophisticatedbackpacks:crafting_upgrade
                                   reward: 2 crafting_upgrade, smelting_upgrade
                                   description: "Craft and smelt inside your backpack.
                                   Mobile workshop."
```

### Rank 1 Convergence

```
[Void Upgrade] ----------+
[Growth Accelerator] ----+---> [[Rank: Merchant]]  (hexagon, size 1.5)
[Crafting Upgrade] ------+     checkmark
                               reward: ae2:certus_quartz_crystal x32,
                               ae2:fluix_crystal x16,
                               mysticalagriculture:prudentium_essence x64,
                               ae2:formation_core x4, ae2:annihilation_core x4
                               command: "/say 🌾 @p has risen to the rank of Merchant!"
```

**~22 quests.**

---

## Rank 2: Merchant (y: 10 to 18) — ~22 quests

Two main branches: AE2 Digital Storage, and Mystical Agriculture Tiers.

### AE2 Branch (left, x: -3 to -6)

```
[[Rank: Merchant]]
    |
    v
[Certus Quartz]                    obtain ae2:certus_quartz_crystal x16
    |                              reward: 32 certus_quartz_crystal
    v
[Fluix Crystal]                    obtain ae2:fluix_crystal x8
    |                              reward: 16 fluix_crystal
    v
[ME Controller]                    obtain ae2:controller
    |                              reward: ae2:controller (spare),
    |                              ae2:energy_cell, 8 ae2:cable
    |                              description: "The brain of your AE2 network.
    |                              Every digital storage system starts here."
    v
[ME Drive]                         obtain ae2:drive
    |                              reward: 4 drive
    v
[Storage Cells]                    obtain ae2:cell_component_4k x4
    |                              reward: 8 cell_component_4k, 4 ae2:item_storage_cell_4k
    |                              description: "4k cells hold ~4000 item types.
    |                              Insert into drives to store digitally."
    v
[Crafting Terminal]                obtain ae2:crafting_terminal
    |                              reward: 2 crafting_terminal
    |                              description: "Access all stored items and craft
    |                              from a single terminal. The heart of your base."
    v
[Import/Export Bus]                obtain ae2:import_bus + ae2:export_bus (two tasks)
    |                              reward: 4 import_bus, 4 export_bus,
    |                              8 ae2:storage_bus
    v
[Level Emitter]                    obtain ae2:level_emitter
                                   reward: 4 level_emitter
                                   description: "Emits redstone when item count
                                   reaches threshold. Automation trigger."
```

### Mystical Agriculture Tiers (center-right, x: 2 to 4)

```
[[Rank: Merchant]]
    |
    v
[Prudentium Essence]               obtain mysticalagriculture:prudentium_essence x64
    |                              reward: 64 prudentium_essence
    v
[Prudentium Seeds]                 obtain any tier 2 seed (gold, redstone, lapis, etc.)
    |                              reward: gold_seeds, redstone_seeds, lapis_seeds
    v
[Prudentium Farmland]              obtain mysticalagriculture:prudentium_farmland
    |                              reward: 16 prudentium_farmland,
    |                              prudentium_growth_accelerator x2
    v
[Tertium Essence]                  obtain mysticalagriculture:tertium_essence x32
    |                              reward: 32 tertium_essence
    v
[Tertium Seeds]                    obtain any tier 3 seed (diamond, emerald, quartz, etc.)
    |                              reward: diamond_seeds, emerald_seeds, quartz_seeds
    v
[Infusion Altar]                   obtain mysticalagriculture:infusion_altar
    |                              reward: infusion_pedestal x8
    |                              description: "The Infusion Altar crafts higher-tier
    |                              essences and special items."
    v
[Soulium Dagger]                   obtain mysticalagriculture:soulium_dagger
                                   reward: soul_jar x4, soul_extractor
                                   description: "Kill mobs with this to collect their
                                   soul. Souls + seeds = mob-drop resource crops."
```

### Gold Backpack (side, x: 5)

```
[[Rank: Merchant]]
    |
    v
[Gold Backpack]                    obtain sophisticatedbackpacks:gold_backpack
    |                              reward: feeding_upgrade, stack_upgrade_tier_1
    v
[Feeding Upgrade]                  obtain sophisticatedbackpacks:feeding_upgrade
                                   reward: advanced_feeding_upgrade
                                   description: "Auto-eats food from your backpack
                                   when hungry. Never starve during a fight."
```

### Rank 2 Convergence

```
[Level Emitter] ----------+
[Soulium Dagger] ---------+---> [[Rank: Tycoon]]  (hexagon, size 1.5)
[Feeding Upgrade] --------+     checkmark
                                 reward: ae2:cell_component_16k x4,
                                 mysticalagriculture:imperium_essence x32,
                                 ae2:pattern_provider x4,
                                 ae2:blank_pattern x8
                                 command: "/say 🌾 @p has risen to the rank of Tycoon!"
```

**~22 quests. Total: ~44.**

---

## Rank 3: Tycoon (y: 20 to 28) — ~22 quests

AE2 autocrafting, supremium tier, Create+AE2 bridge, chunk loading.

### AE2 Autocrafting Branch (left, x: -3 to -5)

```
[[Rank: Tycoon]]
    |
    v
[Pattern Provider]                 obtain ae2:pattern_provider
    |                              reward: 4 pattern_provider
    v
[Blank Pattern]                    obtain ae2:blank_pattern x8
    |                              reward: 16 blank_pattern
    v
[First Autocrafting Pattern]       checkmark ("Encode a crafting pattern")
    |                              reward: ae2:crafting_unit x4,
    |                              ae2:crafting_storage_4k x2
    v
[Molecular Assembler]              obtain ae2:molecular_assembler
    |                              reward: 4 molecular_assembler
    |                              description: "Assemblers execute craft jobs.
    |                              More assemblers = faster parallel crafting."
    v
[16k Storage]                      obtain ae2:cell_component_16k x4
    |                              reward: 8 cell_component_16k
    v
[64k Storage]                      obtain ae2:cell_component_64k x2
    |                              reward: 4 cell_component_64k
    |                              description: "64k cells for massive storage.
    |                              Your system can hold thousands of item types."
    v
[Wireless Terminal]                obtain ae2:wireless_terminal (or ae2wtlib equivalent)
                                   reward: ae2:wireless_booster x4
                                   description: "Access your AE2 network wirelessly.
                                   Never walk to the terminal again."
```

### Mystical Agriculture Endgame (center, x: 0 to 2)

```
[[Rank: Tycoon]]
    |
    v
[Imperium Essence]                 obtain mysticalagriculture:imperium_essence x32
    |                              reward: 32 imperium_essence
    v
[Imperium Farmland]                obtain mysticalagriculture:imperium_farmland
    |                              reward: 16 imperium_farmland,
    |                              imperium_growth_accelerator x2
    v
[Supremium Essence]                obtain mysticalagriculture:supremium_essence x16
    |                              reward: 32 supremium_essence
    |                              description: "The highest standard tier.
    |                              Supremium seeds grow any resource."
    v
[Supremium Seeds]                  obtain any tier 5 seed (netherite, nether_star, etc.)
    |                              reward: netherite_seeds, enderman_seeds
    v
[Supremium Armor]                  obtain mysticalagriculture:supremium_chestplate
                                   reward: full supremium armor set
                                   description: "Supremium armor with augment slots.
                                   Customizable via the Tinkering Table."
```

### Create+AE2 Bridge (side, x: -2)

```
[Molecular Assembler]
    |
    v
[Applied Kinetics]                 obtain createappliedkinetics:me_proxy (or energy_provider)
                                   reward: 4 me_proxy
                                   description: "Bridges Create machines with AE2.
                                   Auto-request items from AE2, process through
                                   Create, return to storage."
```

### Chunk Loading (side, x: 4)

```
[Supremium Farmland] (or Tycoon milestone)
    |
    v
[Chunk Loader]                     obtain chunkymcchunkface:chunk_loader
                                   reward: 2 chunkymcchunkface:chunk_loader
                                   description: "Keeps your farm running when you're
                                   away. Enemies can destroy these — hide them."
```

### Rank 3 Convergence

```
[Wireless Terminal] -----+
[Supremium Armor] -------+---> [[Rank: Magnate]]  (hexagon, size 1.5)
[Applied Kinetics] ------+     checkmark
[Chunk Loader] ----------+     reward: mysticalagriculture:awakened_supremium_essence x8
                                command: "/say 🌾 @p has risen to the rank of Magnate!"
```

**~22 quests. Total: ~66.**

---

## Rank 4: Magnate (y: 30 to 36) — ~14 quests

Full automation, awakened supremium, war economy.

### Awakened Supremium (center)

```
[[Rank: Magnate]]
    |
    v
[Awakened Supremium]               obtain mysticalagriculture:awakened_supremium_essence x4
    |                              reward: 8 awakened_supremium_essence
    |                              description: "The ultimate essence tier. Requires
    |                              the Awakening Altar and rare catalysts."
    v
[Awakened Armor]                   obtain mysticalagriculture:awakened_supremium_chestplate
    |                              reward: full awakened supremium set
    v
[Tinkering Table]                  obtain mysticalagriculture:tinkering_table
                                   reward: various augments
                                   description: "Apply augments to Supremium/Awakened
                                   armor for custom stat bonuses."
```

### Automation Pipeline (left, x: -3)

```
[[Rank: Magnate]]
    |
    v
[Seed Reprocessor]                 obtain mysticalagriculture:seed_reprocessor
    |                              reward: 2 seed_reprocessor
    v
[Harvester]                        obtain mysticalagriculture:harvester
    |                              reward: 2 harvester
    |                              description: "Auto-harvests crops in an area.
    |                              Combined with growth accelerators and AE2
    |                              import buses — fully automated farming."
    v
[Self-Sustaining Pipeline]         checkmark ("Mystical Ag farm → Create processing
                                   → AE2 storage, all without manual input")
                                   reward: title
                                   description: "The dream: seeds grow, harvester
                                   collects, AE2 stores, autocrafting produces.
                                   You never touch a resource again."
```

### AE2 Endgame (right, x: 3)

```
[[Rank: Magnate]]
    |
    v
[Spatial Storage]                   obtain ae2:spatial_cell_2 (or spatial_io_port)
    |                              reward: ae2:spatial_io_port
    |                              description: "Store entire AREAS of blocks digitally.
    |                              Copy-paste rooms, move structures."
    v
[ME P2P Tunnel]                    obtain ae2:me_p2p_tunnel
                                   reward: 4 me_p2p_tunnel
                                   description: "Point-to-point tunnels compress many
                                   channels into one. Maximum network efficiency."
```

### Cross-Path Bonus (optional)

```
[Automated Kitchen]                checkmark ("Auto-produce meals via Create+AE2")
                                   OPTIONAL
                                   depends on: Applied Kinetics (this) +
                                   The Feast (Housewife)
                                   reward: feast blocks

[War Economy]                      checkmark ("Auto-craft cannon ammunition")
                                   OPTIONAL
                                   depends on: Self-Sustaining Pipeline (this) +
                                   Cannon Loader (Military)
                                   reward: title
                                   command: "/say 🌾 @p's war machine is fully automated."
```

### Endgame Milestone

```
[Awakened Armor] ----------+
[Self-Sustaining Pipeline]-+--> [[Economic Supremacy]]  (hexagon, size 2.0)
[ME P2P Tunnel] -----------+    checkmark
                                reward: title "Magnate"
                                command: "/say 🌾 @p has achieved Economic Supremacy! Resources flow endlessly."
```

**~14 quests. GRAND TOTAL: ~80 quests.**

---

## Cross-Path Design Rule

All cross-path quests are optional. Never block main-line progression.

| Quest | Depends on (other chapter) | Blocks anything? |
|-------|---------------------------|-------------------|
| Automated Kitchen | The Feast (Housewife) | No — optional |
| War Economy | Cannon Loader (Military) | No — optional |

## Notes

- Mystical Agriculture seed quests use "obtain any tier X seed" to avoid forcing specific seeds
- AE2 progression follows: certus → fluix → controller → drives → cells → terminal → autocrafting → wireless
- Backpack tier progression is a side track (copper → iron → gold → diamond)
- Growth accelerators stack — mention in descriptions
- Chunk loader quest warns about enemies destroying them
- All item IDs verified
