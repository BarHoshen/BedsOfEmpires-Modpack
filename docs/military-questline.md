# Military Chapter — Quest Design Document

**Target quests: ~75**
**Icon:** `minecraft:iron_sword`
**Subtitle:** "Defend. Fortify. Conquer."
**Depends on:** [[Choose Your Path]] from Survival

## Mods Covered

- **SecurityCraft** — reinforced blocks, mines, cameras, lasers, sentries, keypads, keycards, alarms, traps, disguise
- **Create Big Cannons** — cast iron/bronze/steel/nethersteel cannons, autocannons, ammunition, fuzes
- **Mekanism Tools** — osmium and refined obsidian armor/weapons
- **Beds of Empires** — bed compass

## Rank Progression

| Rank | Title | Theme | y range |
|------|-------|-------|---------|
| 1 | Militia | Basic security: walls, reinforcing, cameras, mines | 0 to 8 |
| 2 | Commander | Advanced security: lasers, sentries, keypads, traps, armor | 10 to 18 |
| 3 | General | Artillery: cannon crafting, ammo, autocannons, energy weapons | 20 to 28 |
| 4 | Warlord | Nethersteel, nuclear, bed hunting, fortress mastery, winning | 30 to 36 |

---

## Rank 1: Militia (y: 0 to 8) — ~20 quests

Three spokes from root: Walls & Reinforcing, Surveillance, and Mines & Traps.

```
[[Welcome to Military]]            checkmark, hexagon size 2.0
    |                              depends on: Choose Your Path (Survival)
    |                              reward: securitycraft:sc_manual,
    |                              universal_block_reinforcer_lvl1,
    |                              32 iron_ingots, 16 redstone
    |                              description: "SecurityCraft protects what's yours.
    |                              Reinforced blocks can't be broken by anyone but you.
    |                              The manual explains everything — read it."
    |
    +--------+--------+
    |        |        |
    v        v        v
  Walls   Cameras   Mines
```

### Walls & Reinforcing Spoke (left, x: -3 to -5)

```
[Reinforced Stone]                 obtain securitycraft:reinforced_stone x16
    |                              reward: 64 reinforced_stone, reinforced_glass x16
    |                              description: "Right-click any block with the
    |                              Universal Block Reinforcer to make it unbreakable
    |                              by anyone but you. Your walls are now permanent."
    v
[Universal Reinforcer Lv2]         obtain securitycraft:universal_block_reinforcer_lvl2
    |                              reward: universal_block_reinforcer_lvl2 (spare)
    |                              description: "Lv2 reinforces a wider range of blocks
    |                              and is more durable."
    v
[Reinforced Obsidian]              obtain securitycraft:reinforced_obsidian x8
    |                              reward: 16 reinforced_obsidian
    |                              description: "Obsidian is already hard to break.
    |                              Reinforced obsidian is impossible. Encase your bed."
    v
[Electrified Fence]                obtain securitycraft:electrified_iron_fence x8
                                   reward: 16 electrified_iron_fence
                                   description: "Zaps anyone who touches it.
                                   Line your perimeter with pain."
```

### Surveillance Spoke (center, x: 0)

```
[Portable Radar]                   obtain securitycraft:portable_radar
    |                              reward: 4 portable_radar
    |                              description: "Detects nearby players and entities.
    |                              Your early warning system."
    v
[Security Camera]                  obtain securitycraft:security_camera x2
    |                              reward: 4 security_camera, camera_monitor
    |                              description: "Cameras let you watch your perimeter
    |                              remotely. Right-click the monitor to cycle views."
    v
[Motion Light]                     obtain securitycraft:motion_activated_light
    |                              reward: 4 motion_activated_light
    |                              description: "Lights up when something moves nearby.
    |                              Cheap, effective, spooky for intruders."
    v
[Username Logger]                  obtain securitycraft:username_logger
    |                              reward: 2 username_logger
    |                              description: "Logs the name of anyone who walks past.
    |                              Now you know WHO was snooping."
    v
[Alarm]                            obtain securitycraft:alarm
                                   reward: 4 alarm, panic_button
                                   description: "Alarms blare when triggered by redstone.
                                   Connect to cameras or lasers for auto-alerts."
```

### Mines & Traps Spoke (right, x: 3 to 5)

```
[Basic Mine]                       obtain securitycraft:mine x4
    |                              reward: 8 mine, 4 track_mine
    |                              description: "Step on it, it explodes. Disguised
    |                              as the block they're placed on."
    v
[Bouncing Betty]                   obtain securitycraft:bouncing_betty x2
    |                              reward: 4 bouncing_betty
    |                              description: "Pops up before exploding. Larger
    |                              blast radius than a basic mine."
    v
[Claymore]                         obtain securitycraft:claymore x2
    |                              reward: 4 claymore
    |                              description: "Directional explosive. Place facing
    |                              a corridor — anything that walks through gets hit."
    v
[IMS]                              obtain securitycraft:ims
    |                              reward: 2 ims
    |                              description: "Intelligent Munitions System. Launches
    |                              guided explosive projectiles at nearby players.
    |                              The smart mine."
    v
[Cage Trap]                        obtain securitycraft:cage_trap
                                   reward: 4 cage_trap
                                   description: "Drops a cage on intruders, trapping
                                   them in place. Capture, don't kill."
```

### Rank 1 Convergence

```
[Electrified Fence] -------+
[Alarm] --------------------+---> [[Rank: Commander]]  (hexagon, size 1.5)
[Cage Trap] ----------------+     checkmark
                                  reward: securitycraft:sentry x4,
                                  securitycraft:keypad_door x4,
                                  securitycraft:laser_block x4,
                                  securitycraft:whitelist_module x2,
                                  securitycraft:redstone_module x2
                                  command: "/say 🛡️ @p has risen to the rank of Commander!"
                                  description: "Your base has cameras, mines, and
                                  reinforced walls. Now it's time for laser grids,
                                  automated turrets, and access control."
```

**~20 quests.**

---

## Rank 2: Commander (y: 10 to 18) — ~20 quests

Four branches: Lasers & Detection, Access Control, Sentries, and Armor.

### Lasers & Detection (left, x: -3 to -5)

```
[[Rank: Commander]]
    |
    v
[Laser Block]                      obtain securitycraft:laser_block x4
    |                              reward: 8 laser_block, 4 lens
    |                              description: "Laser grids between two blocks detect
    |                              anything that passes through."
    v
[Inventory Scanner]                obtain securitycraft:inventory_scanner
    |                              reward: 4 inventory_scanner
    |                              description: "Scans players' inventories as they
    |                              pass. Detect stolen goods or contraband."
    v
[Block Change Detector]            obtain securitycraft:block_change_detector
    |                              reward: 2 block_change_detector
    |                              description: "Alerts you when any block in an
    |                              area is placed or broken. Anti-sabotage."
    v
[Floor Trap]                       obtain securitycraft:floor_trap
                                   reward: 4 floor_trap
                                   description: "Looks like a normal floor. Step on
                                   it and fall into whatever's below."
```

### Access Control (center-left, x: -1 to -2)

```
[[Rank: Commander]]
    |
    v
[Keypad Door]                      obtain securitycraft:keypad_door x2
    |                              reward: 4 keypad_door, keypad_trapdoor x2
    v
[Keypad Chest]                     obtain securitycraft:keypad_chest
    |                              reward: 2 keypad_chest, keypad_barrel x2
    |                              description: "Password-protected storage. Even if
    |                              someone gets in, they can't open your chests."
    v
[Retinal Scanner]                  obtain securitycraft:retinal_scanner
    |                              reward: scanner_door x2
    |                              description: "Only YOU can open this door. Uses
    |                              biometric scanning — no password to crack."
    v
[Keycard System]                   obtain securitycraft:keycard_reader
    |                              reward: keycard_reader, keycard_lv1 x4,
    |                              keycard_lv2 x4, keycard_lv3 x2
    |                              description: "5 keycard levels. Give teammates
    |                              low-level cards, keep high-level for yourself."
    v
[Codebreaker]                      obtain securitycraft:codebreaker
                                   reward: wire_cutters
                                   description: "Cracks keypads and passwords.
                                   Useful when raiding enemy bases."
```

### Sentries (center-right, x: 1 to 2)

```
[[Rank: Commander]]
    |
    v
[Sentry]                           obtain securitycraft:sentry x2
    |                              reward: 4 sentry, remote_access_sentry,
    |                              whitelist_module x2
    |                              description: "Automated turrets that shoot hostile
    |                              mobs and non-whitelisted players. Add a whitelist
    |                              module to spare your teammates."
    v
[Trophy System]                    obtain securitycraft:trophy_system
    |                              reward: 2 trophy_system
    |                              description: "Destroys incoming projectiles —
    |                              arrows, fireballs, cannon shells. Anti-air defense."
    v
[Protecto]                         obtain securitycraft:protecto
                                   reward: 2 protecto
                                   description: "A block that hurts anyone who gets
                                   close. Place around valuable areas."
```

### Armor Tier Branch (right, x: 4 to 6)

```
[[Rank: Commander]]
    |
    v
[Osmium Armor]                     obtain mekanismtools:osmium_chestplate
    |                              reward: full osmium set + osmium_sword + osmium_paxel
    |                              description: "Stronger than diamond. You need
    |                              Mekanism processing for osmium — or ask an
    |                              Alchemy teammate for ingots."
    v
[Refined Obsidian Armor]           obtain mekanismtools:refined_obsidian_chestplate
                                   reward: full refined obsidian set
                                   description: "The strongest conventional armor.
                                   Sword hits barely scratch you. But cannons
                                   still hurt."
```

### Disguise Branch (optional side, x: 3)

```
[[Rank: Commander]]
    |
    v
[Projector]                        obtain securitycraft:projector (optional)
    |                              reward: 2 projector, disguise_module x2
    v
[Fake Water/Lava]                  obtain securitycraft:bucket_f_lava (optional)
    |                              reward: bucket_f_water, bucket_f_lava
    v
[Secret Signs]                     obtain any securitycraft:secret_*_sign (optional)
                                   reward: 4 secret signs (assorted)
                                   description: "Signs only you can read. Leave
                                   fake directions for enemies."
```

### Rank 2 Convergence

```
[Codebreaker] ----------+
[Protecto] -------------+---> [[Rank: General]]  (hexagon, size 1.5)
[Refined Obsidian] -----+     checkmark
[Floor Trap] -----------+     reward: createbigcannons:cast_iron_ingot x32,
                              createbigcannons:casting_sand x16,
                              createbigcannons:packed_gunpowder x16,
                              createbigcannons:cannon_mount x2
                              command: "/say 🛡️ @p has risen to the rank of General!"
                              description: "Your base is a fortress. Now it's time
                              to build weapons that can break OTHER fortresses."
```

**~20 quests. Total: ~40.**

---

## Rank 3: General (y: 20 to 28) — ~22 quests

Three branches: Cannon Crafting, Ammunition, and Autocannons. Plus cross-path energy weapons.

### Cannon Crafting Branch (center, x: 0 to 2)

```
[[Rank: General]]
    |
    v
[Cannon Casting]                   obtain createbigcannons:cannon_cast
    |                              reward: 4 cannon_cast, basin_foundry_lid,
    |                              16 casting_sand
    |                              description: "Cannons are cast from molten metal.
    |                              Pour metal into moulds, then bore the barrel."
    v
[Cast Iron Cannon]                 obtain createbigcannons:cast_iron_cannon_barrel
    |                              reward: cast_iron_cannon_chamber x2,
    |                              cast_iron_cannon_end, cast_iron_sliding_breech
    |                              description: "Your first cannon barrel. Cast iron
    |                              is cheap and effective for basic artillery."
    v
[Cannon Drill]                     obtain createbigcannons:cannon_drill
    |                              reward: cannon_drill_bit x2
    |                              description: "Bores unbored cannon blocks into
    |                              usable barrels. Requires Create rotation."
    v
[Cannon Mount]                     obtain createbigcannons:cannon_mount
    |                              reward: yaw_controller, cannon_carriage
    |                              description: "Mount your cannon on a platform.
    |                              The yaw controller aims it with Create gears."
    v
[First Shot!]                      checkmark ("Fire a cannon")
    |                              reward: 16 solid_shot, 16 packed_gunpowder
    |                              command: "/say 🛡️ @p has built artillery! Take cover."
    |                              description: "Load propellant, load shot, light it.
    |                              The ground game just changed."
    v
[Bronze Cannon]                    obtain createbigcannons:bronze_cannon_barrel
    |                              reward: bronze_cannon_chamber x2,
    |                              bronze_sliding_breech
    |                              description: "Bronze is stronger than cast iron.
    |                              Longer range, more shots before breaking."
    v
[Steel Cannon]                     obtain createbigcannons:steel_cannon_barrel
    |                              reward: steel_cannon_chamber x2,
    |                              steel_sliding_breech
    |                              description: "Steel cannons are the standard for
    |                              serious warfare. Screw breeches for fast reload."
    v
[Steel Screw Breech]               obtain createbigcannons:steel_screw_breech
                                   reward: 2 steel_screw_breech
                                   description: "The screw breech is the fastest
                                   reloading mechanism. Essential for sustained fire."
```

### Ammunition Branch (left, x: -3 to -5)

```
[First Shot!]
    |
    v
[Solid Shot]                       obtain createbigcannons:solid_shot x4
    |                              reward: 8 solid_shot
    v
[AP Shot]                          obtain createbigcannons:ap_shot x4
    |                              reward: 8 ap_shot, 4 impact_fuze
    |                              description: "Armor Piercing. Goes through
    |                              reinforced walls."
    v
[HE Shell]                         obtain createbigcannons:he_shell x4
    |                              reward: 8 he_shell, 4 timed_fuze
    |                              description: "High Explosive. Bigger boom than
    |                              TNT. Add a fuze to control detonation."
    v
[Fuze Workshop]                    obtain createbigcannons:proximity_fuze
    |                              reward: impact_fuze x4, delayed_impact_fuze x4,
    |                              timed_fuze x4, proximity_fuze x4
    |                              description: "Fuzes control when shells explode.
    |                              Proximity for anti-air, timed for airburst,
    |                              delayed for bunker busting."
    v
{CHOICE: Shrapnel Shell}          obtain createbigcannons:shrapnel_shell x4
{CHOICE: Fluid Shell}             obtain createbigcannons:fluid_shell x4
    |                              Shrapnel: wide area damage vs players
    |                              Fluid: fill with lava or potions for area denial
    v (one_completed)
[Ammo Specialist]                  checkmark
                                   reward: powder_charge x16, big_cartridge x8
```

### Autocannon Branch (right, x: 4 to 6)

```
[Steel Cannon]
    |
    v
[Autocannon Barrel]                obtain createbigcannons:cast_iron_autocannon_barrel
    |                              reward: cast_iron_autocannon_breech,
    |                              cast_iron_autocannon_recoil_spring,
    |                              autocannon_ammo_container
    v
[Autocannon Rounds]                obtain createbigcannons:ap_autocannon_round x16
    |                              reward: 32 ap_autocannon_round,
    |                              16 flak_autocannon_round,
    |                              16 machine_gun_round
    v
[Rapid Fire]                       checkmark ("Build a working autocannon")
                                   reward: quickfiring_mechanism x2,
                                   bronze_autocannon_barrel,
                                   bronze_autocannon_breech
                                   description: "Autocannons fire rapidly. Perfect
                                   for anti-air and anti-personnel."
```

### Cannon Loader (automation)

```
[First Shot!]
    |
    v
[Cannon Loader]                    obtain createbigcannons:cannon_loader
                                   reward: 2 cannon_loader, ram_head, worm_head
                                   description: "Automates loading. Combine with
                                   Create belts for continuous fire."
```

### Bed Compass (center side, x: 2)

```
[[Rank: General]]
    |
    v
[Bed Hunter]                       obtain bedsofempires:bed_compass
                                   reward: 2 bed_compass
                                   description: "Points toward the nearest enemy bed.
                                   You're now on the offensive."
```

### Cross-Path: Energy Weapons (optional)

```
[Energy Weapons]                   checkmark ("Power a Mekanism Laser")
                                   OPTIONAL
                                   depends on: Protecto (this chapter) +
                                   Alternator (Engineering)
                                   reward: mekanism:laser x4, mekanism:energy_tablet x16
                                   description: "Mekanism lasers need FE power from
                                   the Engineering path's Electric Bridge."
```

### Rank 3 Convergence

```
[Steel Screw Breech] ---+
[Ammo Specialist] ------+---> [[Rank: Warlord]]  (hexagon, size 1.5)
[Rapid Fire] -----------+     checkmark
[Cannon Loader] --------+     reward: createbigcannons:nethersteel_ingot x16,
                               createbigcannons:nethersteel_cannon_barrel x1,
                               bedsofempires:bed_compass x2
                               command: "/say 🛡️ @p has risen to the rank of Warlord!"
```

**~22 quests. Total: ~62.**

---

## Rank 4: Warlord (y: 30 to 36) — ~13 quests

Nethersteel endgame, fortress completion, and winning the game.

### Nethersteel Branch (center)

```
[[Rank: Warlord]]
    |
    v
[Nethersteel Ingot]                obtain createbigcannons:nethersteel_ingot x8
    |                              reward: 16 nethersteel_ingot
    v
[Nethersteel Cannon]               obtain createbigcannons:nethersteel_cannon_barrel
    |                              reward: nethersteel_cannon_chamber x2,
    |                              nethersteel_screw_breech
    |                              description: "The strongest cannon material.
    |                              Nethersteel won't break, won't wear, won't fail."
    v
[Built-Up Cannon]                  obtain createbigcannons:built_up_nethersteel_cannon_barrel
                                   reward: thick_nethersteel_cannon_chamber
                                   description: "Layered construction for maximum
                                   power. The siege weapon that ends games."
```

### Block Pocket (left, x: -3)

```
[[Rank: Warlord]]
    |
    v
[Block Pocket Manager]            obtain securitycraft:block_pocket_manager
    |                              reward: 64 block_pocket_wall
    v
[Block Pocket]                     checkmark ("Build a Block Pocket — 
    |                              a room only you can enter")
                                   reward: 32 block_pocket_wall
                                   description: "An impenetrable room. Only the owner
                                   can enter. Put your bed inside one of these."
```

### Fortress Completion (right, x: 3)

```
[[Rank: Warlord]]
    |
    v
[Sonic Security System]            obtain securitycraft:sonic_security_system
    |                              reward: 2 sonic_security_system, rift_stabilizer
    v
[Fortress Review]                  checkmark ("5+ active defense systems: cameras,
                                   mines, lasers, sentries, cannons")
                                   reward: 8 sentry, trophy_system x4
                                   description: "A layered defense. Your base should
                                   have multiple overlapping systems."
```

### Offensive (center-right, x: 2)

```
[Bed Hunter] (from Rank 3)
    |
    v
[Bed Destroyer]                    checkmark ("Destroy an enemy player's bed")
    |                              reward: title
    |                              command: "/say 🛡️ @p has destroyed an enemy bed! One less empire stands."
    v
[Last Bed Standing]                checkmark ("Win — be the last with a surviving bed")
                                   reward: title "Emperor"
                                   command: "/say 👑 ALL HAIL EMPEROR @p! The last bed stands! 👑"
```

### Cross-Path Bonus Quests (optional)

```
[Battle Rations]                   obtain farmersdelight:steak_and_potatoes x32
                                   OPTIONAL
                                   depends on: Sentry (this) + Comfort Food (Housewife)
                                   reward: 16 golden_apple, 32 golden_carrot
                                   description: "32 high-tier meals for your fighters.
                                   Grindy alone — trivial with a Housewife teammate."

[Pre-Strike Briefing]              checkmark ("Plan attack using scout intel")
                                   OPTIONAL
                                   depends on: Bed Hunter (this) + Blueprint Thief (Scout)
                                   reward: 32 tnt, 16 fire_charge
                                   description: "Your scout copied the enemy base.
                                   Now you know exactly where to aim."

[Nuclear Arsenal]                  checkmark ("Acquire nuclear capability")
                                   OPTIONAL
                                   depends on: Nethersteel Cannon (this) +
                                   Thermonuclear Fusion (Alchemy)
                                   reward: title "Destroyer"
                                   command: "/say ☢️ WARNING: @p has developed NUCLEAR WEAPONS! ☢️"
```

### Endgame Milestone

Only depends on same-chapter quests:

```
[Built-Up Cannon] ------+
[Block Pocket] ---------+
[Fortress Review] ------+--> [[Military Supremacy]]  (hexagon, size 2.0)
[Bed Destroyer] --------+    checkmark
                              reward: title "Warlord"
                              command: "/say 🛡️ @p has achieved Military Supremacy! Their fortress is impregnable."
```

**~13 quests. GRAND TOTAL: ~75 quests.**

---

## Full Dependency Flow (simplified)

```
[[Welcome to Military]]
    |
    +-- Walls: Reinforced Stone -> Reinforcer Lv2 -> Reinforced Obsidian -> Electrified Fence
    |
    +-- Cameras: Radar -> Camera -> Motion Light -> Username Logger -> Alarm
    |
    +-- Mines: Mine -> Bouncing Betty -> Claymore -> IMS -> Cage Trap
    |
    +---> converge at [[Rank: Commander]]
              |
              +-- Lasers: Laser Block -> Inv. Scanner -> Block Change Detector -> Floor Trap
              +-- Access: Keypad Door -> Keypad Chest -> Retinal Scanner -> Keycards -> Codebreaker
              +-- Sentries: Sentry -> Trophy System -> Protecto
              +-- Armor: Osmium -> Refined Obsidian
              +-- Disguise: Projector -> Fake Fluids -> Secret Signs (optional)
              |
              +---> converge at [[Rank: General]]
                        |
                        +-- Cannons: Cast -> Cast Iron -> Drill -> Mount -> First Shot! -> Bronze -> Steel -> Screw Breech
                        +-- Ammo: Solid -> AP -> HE -> Fuzes -> {Shrapnel/Fluid} -> Specialist
                        +-- Autocannon: Barrel -> Rounds -> Rapid Fire
                        +-- Automation: Cannon Loader
                        +-- Intel: Bed Compass
                        +-- Bonus: Energy Weapons (optional, + Engineering)
                        |
                        +---> converge at [[Rank: Warlord]]
                                  |
                                  +-- Nethersteel: Ingot -> Cannon -> Built-Up
                                  +-- Block Pocket: Manager -> Pocket Build
                                  +-- Fortress: Sonic System -> Fortress Review
                                  +-- Offense: Bed Destroyer -> Last Bed Standing
                                  +-- Bonus: Battle Rations (opt, +Housewife), Pre-Strike (opt, +Scout), Nuclear (opt, +Alchemy)
                                  |
                                  +---> [[Military Supremacy]]
```

---

## Cross-Path Design Rule

Cross-path quests are ALWAYS optional. They never block rank milestones or main-line progression.

### Cross-path quests IN this chapter (optional):

| Quest | Depends on (other chapter) | Blocks anything? |
|-------|---------------------------|-------------------|
| Energy Weapons | Alternator (Engineering) | No — optional |
| Battle Rations | Comfort Food (Housewife) | No — optional |
| Pre-Strike Briefing | Blueprint Thief (Scout) | No — optional |
| Nuclear Arsenal | Thermonuclear Fusion (Alchemy) | No — optional |

### Choice Node

The Shrapnel vs Fluid Shell choice at Rank 3:
- **Shrapnel:** Wide area anti-personnel. Better for base defense and open-field combat.
- **Fluid Shell:** Fill with lava or potions for area denial. Better for siege warfare.

---

## Notes for Implementation

- Root quest uses `autofocus_id`
- Use `size: 2.0d` on root and [[Military Supremacy]]
- Use `size: 1.5d` on rank milestones
- Disguise branch (Projector, Fake Fluids, Secret Signs) marked `optional: true`
- All cross-path quests marked `optional: true`
- Cannon material progression is linear: Cast Iron → Bronze → Steel → Nethersteel
- Ammo quests branch from [First Shot!], not from specific cannon tier
- SecurityCraft modules (whitelist, harming, etc.) given as rewards, not quest objectives
- Block Pocket is the endgame defensive structure — mention that beds should go inside
- "Last Bed Standing" is the ultimate victory condition of the entire modpack
- All item IDs verified against mod JARs
