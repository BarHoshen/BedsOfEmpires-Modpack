# Scout Chapter — Quest Design Document

**Target quests: ~80**
**Icon:** `structurecompass:structure_compass`
**Subtitle:** "Explore. Infiltrate. Sabotage."
**Depends on:** [[Choose Your Path]] from Survival

## Mods Covered

- **Cataclysm** — dungeon bosses, legendary weapons, boss-drop armor
- **Apotheosis / Apothic Enchanting / Apothic Spawners** — enchanting, gems, sigils, reforging, spawner mods
- **Immersive Armors** — steampunk (radar), wither, warrior, divine sets
- **Structure Compass** — structure locating
- **Building Gadgets 2** — copy/paste enemy bases (intel mechanic)
- **Aquaculture** — neptunium gear (underwater exploration)

## Rank Progression

| Rank | Title | Theme | y range |
|------|-------|-------|---------|
| 1 | Pathfinder | Exploration tools, first dungeons, steampunk radar | 0 to 8 |
| 2 | Infiltrator | Cataclysm bosses, recon, base copying, enchanting | 10 to 18 |
| 3 | Saboteur | Sabotage missions, gems, reforging, advanced bosses | 20 to 28 |
| 4 | Shadow | Ignitium armor, endgame bosses, legendary arsenal | 30 to 36 |

---

## Rank 1: Pathfinder (y: 0 to 8) — ~20 quests

Three spokes: Exploration Tools, First Dungeons, and Enchanting Basics.

```
[[Welcome to Scout]]               checkmark, hexagon size 2.0
    |                              reward: structurecompass:structure_compass x2,
    |                              spyglass x2, ender_pearl x16,
    |                              golden_carrot x32, cataclysm:mech_eye x2
    |
    +--------+--------+
    |        |        |
    v        v        v
  Explore  Dungeon  Enchant
```

### Exploration Tools Spoke (left, x: -3 to -5)

```
[Structure Compass]                obtain structurecompass:structure_compass
    |                              reward: 2 structure_compass
    |                              description: "Points toward any structure. Dungeons,
    |                              villages, enemy builds — find them all."
    v
[Steampunk Helmet]                 obtain immersive_armors:steampunk_helmet
    |                              reward: steampunk_chestplate, steampunk_leggings,
    |                              steampunk_boots
    |                              description: "Built-in RADAR — detect entities
    |                              through walls. The scout's signature gear."
    v
[Warrior Armor]                    obtain immersive_armors:warrior_chestplate
    |                              reward: warrior_helmet, warrior_leggings,
    |                              warrior_boots
    |                              description: "Higher defense than steampunk.
    |                              Switch to warrior when combat is expected."
    v
{CHOICE: Wither Armor}             obtain immersive_armors:wither_chestplate
{CHOICE: Divine Armor}             obtain immersive_armors:divine_chestplate
    |                              Wither: inflicts Wither on attackers
    |                              Divine: deflects one hit per minute
    v (one_completed)
[Armor Specialist]                 checkmark
                                   reward: ender_pearl x16, golden_apple x8
```

### Dungeon Spoke (center, x: 0)

```
[Dungeon Diver]                    checkmark ("Find a Cataclysm dungeon entrance")
    |                              reward: cataclysm:mech_eye x2,
    |                              cataclysm:flame_eye x2, cataclysm:void_eye x2
    |                              description: "Cataclysm Eyes point to dungeons.
    |                              Throw like Ender Eyes — follow the trail."
    v
[Black Steel]                      obtain cataclysm:black_steel_ingot x8
    |                              reward: 16 black_steel_ingot,
    |                              black_steel_sword, black_steel_pickaxe
    |                              description: "Found in dungeon structures.
    |                              Decent gear — but boss drops are the real prize."
    v
[Eyes Collection]                  obtain 3 different Cataclysm eye types (checkmark)
    |                              reward: abyss_eye x2, desert_eye x2,
    |                              cursed_eye x2, storm_eye x2, monstrous_eye x2
    |                              description: "8 dungeon types. Each eye finds one.
    |                              Collect them all to map every dungeon."
    v
[Mechanical Fusion Anvil]          obtain cataclysm:mechanical_fusion_anvil
                                   reward: none (it's valuable enough)
                                   description: "Combines boss-drop weapons into
                                   hybrid weapons. The endgame crafting station."
```

### Enchanting Spoke (right, x: 3 to 5)

```
[Apothic: Hellshelf]               obtain apothic_enchanting:hellshelf x4
    |                              reward: 8 hellshelf, 4 seashelf
    |                              description: "Special bookshelves that increase
    |                              enchanting power beyond vanilla limits."
    v
[Apothic: Seashelf]                obtain apothic_enchanting:seashelf x4
    |                              reward: 8 seashelf
    v
[Deepshelf]                        obtain apothic_enchanting:deepshelf
    |                              reward: 4 deepshelf
    |                              description: "Deepslate-tier enchanting shelf.
    |                              Increases enchanting power significantly."
    v
[Endshelf]                         obtain apothic_enchanting:endshelf
    |                              reward: 4 endshelf
    |                              description: "End-tier shelf. The most powerful
    |                              vanilla-style enchanting setup."
    v
[Enchantment Library]              obtain apothic_enchanting:library
    |                              reward: 2 library
    |                              description: "Stores enchantments for later.
    |                              Extract, save, and reapply enchantments."
    v
[Extraction Tome]                  obtain apothic_enchanting:extraction_tome
                                   reward: scrap_tome x2, weapon_tome, boots_tome
                                   description: "Removes all enchantments without
                                   destroying the item. The most valuable tome."
```

### Rank 1 Convergence

```
[Armor Specialist] -----+
[Mech. Fusion Anvil] ---+---> [[Rank: Infiltrator]]  (hexagon, size 1.5)
[Extraction Tome] ------+     checkmark
                              reward: buildinggadgets2:gadget_copy_paste,
                              buildinggadgets2:gadget_building,
                              buildinggadgets2:template_manager,
                              apotheosis:gem_cutting_table,
                              apotheosis:sigil_of_socketing x4
                              command: "/say 👁️ @p has risen to the rank of Infiltrator!"
```

**~20 quests.**

---

## Rank 2: Infiltrator (y: 10 to 18) — ~22 quests

Three branches: Boss Hunting, Intel Gathering, and Gem System.

### Boss Hunting Branch (left, x: -3 to -5)

Each Cataclysm boss is its own quest. Independent spokes from the milestone.

```
[[Rank: Infiltrator]]
    |
    v
[Boss: Netherite Monstrosity]      checkmark ("Defeat the Netherite Monstrosity — 9,600 HP")
    |                              reward: cataclysm:infernal_forge,
    |                              cataclysm:monstrous_horn
    |                              description: "Found in the Soul Blacksmith (Nether).
    |                              Drops the Infernal Forge — a pickaxe with AOE."
    v
[Boss: Ender Guardian]             checkmark ("Defeat the Ender Guardian — 6,660 HP")
    |                              reward: cataclysm:gauntlet_of_guard,
    |                              cataclysm:void_core
    |                              description: "Found in the Ruined Citadel (End).
    |                              Drops the Gauntlet of Guard — pulls enemies to you."
    v
[Boss: Ignis]                      checkmark ("Defeat Ignis — 7,200 HP")
    |                              reward: cataclysm:ignitium_ingot x8,
    |                              cataclysm:bulwark_of_the_flame
    |                              description: "Found in the Burning Arena (Nether).
    |                              Drops Ignitium materials for the best armor."
    v
[Boss: The Harbinger]              checkmark ("Defeat The Harbinger — 4,680 HP")
    |                              reward: cataclysm:witherite_ingot x8,
    |                              cataclysm:laser_gatling
    |                              description: "Found in the Ancient Factory.
    |                              Drops the Laser Gatling — a minigun powered by
    |                              redstone."
    v
[Boss: Ancient Remnant]            checkmark ("Defeat the Ancient Remnant — 2,700 HP")
                                   reward: cataclysm:ancient_metal_ingot x8,
                                   cataclysm:wrath_of_the_desert
                                   description: "Found in the Cursed Pyramid.
                                   Drops the Wrath of the Desert — fires cursed
                                   sandstorms."
```

### Intel Gathering Branch (center, x: 0 to 2)

```
[[Rank: Infiltrator]]
    |
    v
[Copy Paste Gadget]                obtain buildinggadgets2:gadget_copy_paste
    |                              reward: 4 redprint, template_manager
    |                              (given in milestone — confirm placement)
    v
[Recon Mission]                    checkmark ("Scout an enemy base using Steampunk
    |                              radar and Copy Paste Gadget")
    |                              reward: 16 ender_pearl, 8 golden_apple
    |                              description: "Get close. Use radar to detect
    |                              defenders. Copy their base layout. Get out alive."
    v
[Blueprint Analysis]               checkmark ("Place a template of an enemy base
    |                              using the Building Gadget")
    |                              reward: gadget_destruction
    |                              description: "Your team can now see the exact layout
    |                              of the enemy base. Plan the attack."
    v
[Destruction Gadget]               obtain buildinggadgets2:gadget_destruction
                                   reward: 2 gadget_destruction
                                   description: "Deletes blocks in an area. Sabotage
                                   tool — tear down walls quietly."
```

### Gem & Reforging Branch (right, x: 4 to 6)

```
[[Rank: Infiltrator]]
    |
    v
[Gem Cutting Table]                obtain apotheosis:gem_cutting_table
    |                              reward: apotheosis:gem_dust x16
    v
[Sigil of Socketing]               obtain apotheosis:sigil_of_socketing x2
    |                              reward: 4 sigil_of_socketing,
    |                              2 sigil_of_withdrawal
    v
[Salvaging Table]                  obtain apotheosis:salvaging_table
    |                              reward: apotheosis:common_material x8,
    |                              uncommon_material x8
    |                              description: "Break down affix items into rarity
    |                              materials. Recycle loot you don't need."
    v
[Simple Reforging Table]           obtain apotheosis:simple_reforging_table
    |                              reward: sigil_of_rebirth x4
    v
[Reforging Table]                  obtain apotheosis:reforging_table
    |                              reward: sigil_of_rebirth x8,
    |                              rare_material x4, epic_material x2
    |                              description: "Reroll affixes on gear. Combined
    |                              with gems + boss weapons = perfect loadout."
    v
[Augmenting Table]                 obtain apotheosis:augmenting_table
                                   reward: sigil_of_enhancement x4
                                   description: "Enhance individual affixes on items.
                                   Precision tuning for your best gear."
```

### Spawner Modding (optional side, x: -2)

```
[[Rank: Infiltrator]]
    |
    v
[Spawner Basics]                   checkmark ("Modify a vanilla spawner")  (optional)
    |                              reward: 8 experience_bottles
    |                              description: "Right-click spawners with specific
    |                              items: sugar = min delay, clocks = max delay,
    |                              blaze rods = spawn range."
    v
[Capturing Enchant]                checkmark ("Enchant a weapon with Capturing") (optional)
                                   reward: 8 experience_bottles
                                   description: "Mobs killed by Capturing weapons
                                   have a chance to drop spawn eggs."
```

### Rank 2 Convergence

```
[Boss: Ancient Remnant] ---+
[Blueprint Analysis] ------+---> [[Rank: Saboteur]]  (hexagon, size 1.5)
[Augmenting Table] --------+     checkmark
                                  reward: cataclysm:ignitium_ingot x16,
                                  cataclysm:cursium_ingot x16,
                                  apotheosis:mythic_material x2
                                  command: "/say 👁️ @p has risen to the rank of Saboteur!"
```

**~22 quests. Total: ~42.**

---

## Rank 3: Saboteur (y: 20 to 28) — ~22 quests

Sabotage missions, advanced bosses, and endgame enchanting.

### Sabotage Branch (center, x: 0)

```
[[Rank: Saboteur]]
    |
    v
[Sabotage: Minelayer]              checkmark ("Plant mines near an enemy base")
    |                              OPTIONAL cross-path dep: Minefield (Military)
    |                              reward: securitycraft:mine x16, tnt x16
    |                              description: "Your scout intel shows where enemies
    |                              walk. Plant mines along their paths."
    v
[Sabotage: Power Cut]              checkmark ("Destroy an enemy's power source")
    |                              reward: gadget_destruction, 16 ender_pearl
    |                              description: "Without power, their machines stop.
    |                              Without chunk loading, their farms die."
    v
[Sabotage: Infrastructure]         checkmark ("Destroy an enemy's AE2 controller
    |                              or Mekanism reactor")
    |                              reward: title
    |                              command: "/say 💀 @p has sabotaged enemy infrastructure!"
    v
[Deep Cover]                       checkmark ("Scout 3 different enemy bases alive")
                                   reward: title
                                   command: "/say 👁️ @p moves unseen. No base is safe."
```

### Advanced Bosses Branch (left, x: -3 to -5)

```
[[Rank: Saboteur]]
    |
    v
[Boss: Maledictus]                 checkmark ("Defeat Maledictus — 8,400 HP")
    |                              reward: cataclysm:cursium_ingot x16,
    |                              cataclysm:soul_render
    |                              description: "Found in the Frosted Prison. The
    |                              toughest non-final boss. Drops Cursium armor
    |                              materials and the Soul Render halberd."
    v
[Boss: The Leviathan]              checkmark ("Defeat The Leviathan — 6,400 HP")
    |                              reward: cataclysm:tidal_claws,
    |                              cataclysm:coral_spear
    |                              description: "Found in the Sunken City. Underwater
    |                              boss. Drops the Tidal Claws grappling weapon."
    v
[Boss: Scylla]                     checkmark ("Defeat Scylla in the Acropolis")
    |                              reward: cataclysm:astrape, cataclysm:ceraunus
    |                              description: "Found in the Acropolis. Drops
    |                              lightning-themed weapons."
    v
[Weapon Fusion]                    checkmark ("Fuse 2 boss weapons at the Mechanical Fusion Anvil")
                                   reward: ignitium_ingot x8
                                   description: "Combine boss drops into hybrid weapons.
                                   Gauntlet of Guard + Bulwark = Gauntlet of Bulwark."
```

### Advanced Enchanting (right, x: 3 to 5)

```
[[Rank: Saboteur]]
    |
    v
[Infused Hellshelf]                obtain apothic_enchanting:infused_hellshelf
    |                              reward: 4 infused_hellshelf
    v
[Crystal Seashelf]                 obtain apothic_enchanting:crystal_seashelf
    |                              reward: 4 crystal_seashelf
    v
[Draconic Endshelf]                obtain apothic_enchanting:draconic_endshelf
    |                              reward: 4 draconic_endshelf
    |                              description: "The most powerful bookshelf. Maximum
    |                              enchanting level and rare enchant chance."
    v
[Library of Alexandria]            obtain apothic_enchanting:ender_library
    |                              reward: 2 ender_library
    |                              description: "Stores enchantments cross-dimensionally.
    |                              Your enchantment library follows you everywhere."
    v
[Ender Lead]                       obtain apothic_enchanting:ender_lead
    |                              reward: occult_ender_lead
    v
[Occult Ender Lead]                obtain apothic_enchanting:occult_ender_lead
                                   reward: 2 occult_ender_lead
                                   description: "Captures almost any entity and can
                                   bind them to spawners. Farm any mob."
```

### Aquaculture Side (optional, x: -2)

```
[[Rank: Saboteur]]
    |
    v
[Neptunium Gear]                   obtain aquaculture:neptunium_ingot x4 (optional)
    |                              reward: neptunium_sword, neptunium_fishing_rod
    v
[Neptunium Armor]                  obtain aquaculture:neptunium_chestplate (optional)
                                   reward: full neptunium set
                                   description: "Underwater breathing, swim speed,
                                   underwater vision. For Leviathan hunts."
```

### Rank 3 Convergence

```
[Weapon Fusion] ----------+
[Deep Cover] -------------+---> [[Rank: Shadow]]  (hexagon, size 1.5)
[Library of Alexandria] --+     checkmark
                                reward: cataclysm:ignitium_upgrade_smithing_template x2,
                                cataclysm:ignitium_ingot x32
                                command: "/say 👁️ @p has risen to the rank of Shadow!"
```

**~22 quests. Total: ~64.**

---

## Rank 4: Shadow (y: 30 to 36) — ~16 quests

Ignitium/Cursium armor, final boss, legendary arsenal.

### Ignitium Armor (center-left, x: -2)

```
[[Rank: Shadow]]
    |
    v
[Ignitium Helmet]                  obtain cataclysm:ignitium_helmet
    |                              reward: none
    |                              description: "Gaze of Heat ability — thermal
    |                              vision."
    v
[Ignitium Chestplate]              obtain cataclysm:ignitium_chestplate
    |                              reward: elytra (for combining)
    |                              description: "Combinable with Elytra! A flying
    |                              scout in legendary armor."
    v
[Ignitium Elytra Chestplate]       obtain cataclysm:ignitium_elytra_chestplate
    |                              reward: none
    v
[Ignitium Full Set]                checkmark ("Wear full Ignitium armor")
                                   command: "/say 👁️ @p wears Ignitium armor. They are nearly unstoppable."
```

### Cursium Armor (center-right, x: 2)

```
[[Rank: Shadow]]
    |
    v
[Cursium Helmet]                   obtain cataclysm:cursium_helmet
    |                              reward: none
    |                              description: "Ghost Vision — see through walls."
    v
[Cursium Chestplate]               obtain cataclysm:cursium_chestplate
    |                              reward: none
    |                              description: "Undead Revive — cheat death once."
    v
[Cursium Full Set]                 checkmark ("Wear full Cursium armor")
                                   description: "Ghost Dodge on leggings, Ghostly
                                   Weightless on boots. The assassin's set."
```

### Shoulder Weapons (side, x: 4)

```
[[Rank: Shadow]]
    |
    v
[Shoulder Weapon]                  obtain cataclysm:wither_assault_shoulder_weapon 
                                   OR cataclysm:void_assault_shoulder_weapon
                                   reward: none
                                   description: "Mounted weapons that fire automatically.
                                   Missiles + howitzers on your shoulder."
```

### Ultimate Gear (far left, x: -4)

```
[Augmenting Table] (from Rank 2)
    |
    v
[Perfect Reforge]                  checkmark ("Reforge an item to Epic or better rarity")
    |                              reward: mythic_material x2, sigil_of_supremacy
    v
[Mythic Material]                  obtain apotheosis:mythic_material x2
    |                              reward: ancient_material
    v
[Sigil of Supremacy]               obtain apotheosis:sigil_of_supremacy
                                   reward: none
                                   description: "Overcharges every affix on an item
                                   to maximum. The ultimate enhancement."
```

### The Cataclysmfarer (endgame boss chain)

```
[Ignitium Full Set] + [Cursium Full Set]
    |
    v
[The Cataclysmfarer]               checkmark ("Defeat ALL Cataclysm bosses")
                                   reward: title "Legend"
                                   command: "/say ⚔️ @p has defeated every Cataclysm boss. They are The Cataclysmfarer."
```

### Legendary Arsenal

```
[The Cataclysmfarer]
    |
    v
[Legendary Arsenal]               checkmark ("Collect 5 different boss weapons")
                                   reward: title
                                   command: "/say ⚔️ @p wields a Legendary Arsenal! Five boss weapons, each deadlier than the last."
```

### Cross-Path Bonus (optional)

```
[Armored Infiltrator]              obtain mekanismtools:osmium_chestplate
                                   OPTIONAL
                                   depends on: Recon Mission (this) +
                                   Osmium Armor (Military)
                                   reward: wither_helmet, wither_chestplate

[Dungeon Rations]                  obtain create_confectionery:soothing_hot_chocolate x8
                                   OPTIONAL
                                   depends on: Boss: Ignis (this) +
                                   Soothing Hot Chocolate (Housewife)
                                   reward: ignitium_ingot x8, ender_pearl x16

[Gem-Socketed Staves]              (referenced from Magic chapter — optional there)
```

### Endgame Milestone

```
[Legendary Arsenal] --------+
[Perfect Reforge] ----------+--> [[Scout Supremacy]]  (hexagon, size 2.0)
[Shoulder Weapon] ----------+    checkmark
                                 reward: title "Shadow"
                                 command: "/say 👁️ @p has achieved Scout Supremacy! Nothing escapes their gaze."
```

**~16 quests. GRAND TOTAL: ~80 quests.**

---

## Cross-Path Design Rule

| Quest | Depends on (other chapter) | Blocks anything? |
|-------|---------------------------|-------------------|
| Sabotage: Minelayer | Minefield (Military) | No — optional |
| Armored Infiltrator | Osmium Armor (Military) | No — optional |
| Dungeon Rations | Soothing Hot Choc (Housewife) | No — optional |

## Choice Node

Wither vs Divine armor at Rank 1:
- **Wither:** Inflicts Wither on melee attackers. Offensive defense.
- **Divine:** Deflects one hit per minute. Defensive survival.

## Notes

- Cataclysm bosses are organized as independent spokes — any order
- Boss HP values in descriptions help players prepare
- Building Gadgets Copy Paste is the core intel mechanic for team play
- Apotheosis enchanting progression: Hellshelf → Infused → Deepshelf → Endshelf → Draconic
- Gem rarity progression: Cracked → Chipped → Flawed → Normal → Flawless → Perfect
- Ignitium chestplate + Elytra combo is highlighted (flying scout)
- Cursium armor = assassin/ghost build
- All item IDs verified
