# Survival Chapter — Quest Design Document (v2)

**Total quests: ~33**
**Icon:** `minecraft:wooden_pickaxe`
**Subtitle:** "Every empire begins with survival"

This chapter is the **first thing a player sees** when opening the quest book. It should feel fast, guided, and rewarding — getting the player to path selection within 30-45 minutes.

Global settings to change in `data.snbt`:
- `progression_mode: "linear"` (locks quests behind dependencies)
- `grid_scale: 0.5d` (finer positioning)

## Visual Legend

- `[Quest Name]` — normal quest (circle shape)
- `[[Quest Name]]` — milestone quest (hexagon, size 1.5 or 2.0)
- `{Quest A / Quest B}` — choice node (pick ONE, uses `dependency_requirement: "one_completed"`)
- `->` — dependency (must complete parent first)
- *(optional)* — marked with `optional: true`, not required for progression

---

## Phase 1: First Steps (y: 0 to 4)

Strictly linear. Every reward provides exactly what the next quest needs. The player never has to wonder "what do I do next?"

```
[[Welcome to Beds of Empires]]     dimension task: minecraft:overworld
    |                              hexagon, size 2.0
    |                              reward: nothing (just confirms you loaded in)
    |                              description: "Welcome to Beds of Empires!
    |                              Your bed is your life — if it's destroyed
    |                              and you die, you're eliminated.
    |                              Open the quest book and follow the path."
    v
[Punch a Tree]                     obtain 1 log (any log — use item tag)
    |                              reward: 16 oak_planks, 8 sticks, crafting_table
    v
[Craft Wooden Tools]               obtain wooden_pickaxe + wooden_axe (two tasks)
    |                              reward: 32 cobblestone, 8 torches
    v
[Cobblestone Collection]           obtain 32 cobblestone
    |                              reward: stone_pickaxe, stone_axe, stone_sword,
    |                              stone_shovel, furnace, 16 coal
    v
[Smelt Your First Ore]             obtain 1 iron_ingot
    |                              reward: 8 iron_ingots, 16 coal, bucket
    v
[Iron Tools]                       obtain iron_pickaxe
    |                              reward: iron_axe, iron_shovel, iron_sword, shield
    v
[Survive the Night]                kill 1 hostile mob (any — zombie, skeleton, etc.)
    |                              reward: 16 torches, 16 cooked_beef
    |                              description: "Night has fallen and monsters
    |                              roam. Kill one to prove you can handle it."
```

**7 quests, strictly linear.**

---

## Phase 2: Build or Defend (y: 5 to 6)

The first choice node. After surviving the night, the player picks a playstyle. Both are checkmarks — the reward IS the choice.

```
[Survive the Night]
    |
    +----------+----------+
    |                     |
    v                     v
{CHOICE: Build}       {CHOICE: Defend}
```

**[Build]** (choice A — checkmark)
- Task: Checkmark
- Reward: 256 stone, oak_door x1, leather_helmet, leather_chestplate, leather_leggings, leather_boots
- Description: "You chose to build. Here's stone for walls, a door, and leather armor. A well-built base is the best defense."

**[Defend]** (choice B — checkmark)
- Task: Checkmark
- Reward: iron_helmet, iron_chestplate, iron_leggings, iron_boots, shield, bow, 64 arrows, 32 oak_log
- Description: "You chose to fight. Here's a full iron armor set, a bow, and wood for tools. Aggression is a valid survival strategy."

```
{Build / Defend}
    |
    v (one_completed)
[[Established]]                    checkmark milestone (hexagon, size 1.5)
                                   reward: 16 wheat_seeds, 8 bone_meal,
                                   16 iron_ingots, 32 coal, 32 torches,
                                   16 cooked_beef
                                   description: "You have gear and a plan.
                                   Time to secure food, fight monsters,
                                   and dig for riches."
```

**3 quests (Build + Defend + Established). Total so far: 10.**

Note: [[Established]] rewards include wheat seeds + bone meal so the player can immediately start the farm quest in Phase 3 without any gathering.

---

## Phase 3: Three Pillars (y: 7 to 9)

Three quick quests branch from [[Established]]. Each covers one survival pillar. ALL THREE are required to proceed — this is not a choice, it's a checklist. Each should take only a few minutes.

```
[[Established]]
    |
    +----------+-----------+
    |          |           |
    v          v           v
 [Farm]    [Fight]     [Mine]
    |          |           |
    +----------+-----------+
               |
               v
      [[Ready to Advance]]
```

### [Start a Farm] (x: -2)
- Task: Obtain 16 wheat
- Reward: 64 wheat_seeds, 16 carrot, 16 potato, 16 cooked_beef, hoe, bone_meal x16
- Description: "Plant the wheat seeds from your last reward. Bone meal speeds it up. Food sustains your empire."

### [Monster Slayer] (x: 0)
- Task: Kill 10 zombies (kill task)
- Reward: 32 arrows, bow, 16 bone, 8 string, 16 rotten_flesh, 8 experience_bottles
- Description: "Clear the area around your base. The bones and string are useful for later."

### [Diamond Strike] (x: 2)
- Task: Obtain 1 diamond
- Reward: 16 diamonds, 32 iron_ingots, 16 gold_ingots, 32 redstone, 32 lapis_lazuli
- Description: "Dig deep. One diamond is all it takes — here's a head start on everything you'll need for enchanting."

### [[Ready to Advance]] (hexagon, size 1.5)
- Dependencies: Start a Farm + Monster Slayer + Diamond Strike (ALL required)
- Task: Checkmark
- Reward: 4 diamonds, 2 obsidian, 1 book, 8 bookshelves, 16 lapis_lazuli, 15 XP levels
- Description: "You can farm, fight, and mine. Here are the materials for an enchanting table — craft it next."

Note: The reward gives exactly 4 diamonds + 2 obsidian + 1 book = the enchanting table recipe. The player doesn't have to figure out what to do.

**4 quests. Total so far: 14.**

---

## Phase 4: Enchanting + Optional Nether (y: 10 to 14)

Enchanting is the main line. The Nether is an optional side branch for players who want extra resources.

```
[[Ready to Advance]]
    |
    v
[Enchanting Setup]                 obtain enchanting_table
    |                              reward: 8 more bookshelves (total 16 for max),
    |                              32 lapis, 15 more XP levels
    |                              description: "Craft the enchanting table from
    |                              the materials you just received. Place
    |                              bookshelves around it for stronger enchants."
    v
[Your First Enchant]               checkmark ("Enchant any item")
    |                              reward: 10 XP levels, 16 experience_bottles,
    |                              anvil, 8 iron_ingots
    |                              description: "Enchant a weapon or armor piece.
    |                              You're now stronger than any un-enchanted fighter."
    |
    +----> (OPTIONAL NETHER BRANCH, see below)
    |
    v
[[Path Selection Ready]]           checkmark milestone (hexagon, size 1.5)
                                   depends on: [Your First Enchant] only
                                   reward: none (the taste tests are the reward)
                                   description: "You're ready. Try a taste of
                                   each path before committing."
```

### Optional Nether Branch (branches right from [Your First Enchant])

All marked `optional: true`. Not required for path selection.

```
[Your First Enchant]
    |
    +---> [Portal Construction]    obtain 10 obsidian (optional)
              |                    reward: flint_and_steel, 
              |                    4 fire_resistance_potion
              v
          [Into the Nether]        dimension: minecraft:the_nether (optional)
              |                    reward: 16 gold_ingots, 8 quartz
              v
          [Blaze Hunter]           kill 3 blazes (optional)
              |                    reward: 16 blaze_rods, brewing_stand,
              |                    8 nether_wart
              v
          [Nether Riches]          obtain 32 quartz + 16 glowstone (optional)
                                   reward: 64 quartz, 32 glowstone,
                                   16 ender_pearl, 8 ghast_tear
```

**7 quests (3 mandatory + 4 optional Nether). Total so far: 21.**

---

## Phase 5: Path Previews (y: 15 to 17)

Seven taste tests branch from [[Path Selection Ready]]. Each is a short, self-contained intro to one path. All independent — no dependencies on each other.

```
[[Path Selection Ready]]
    |
    +--+--+--+--+--+--+--+
    |  |  |  |  |  |  |  
    v  v  v  v  v  v  v
   Eng Mag Mil Eco Alc Hou Sco
```

### [Taste of Engineering] (x: -6)
- Task: Obtain create:andesite_alloy
- Reward: 32 andesite_alloy, 16 cogwheel, 8 shaft, 4 water_wheel, wrench, andesite_casing x16
- Description: "Create turns Minecraft into a factory simulator. Craft some andesite alloy to get started."

### [Taste of Magic] (x: -4)
- Task: Obtain ars_nouveau:source_gem
- Reward: 16 source_gem, novice_spell_book, source_jar, blue_archwood_log x16
- Description: "Ars Nouveau lets you craft custom spells. Source gems power everything."

### [Taste of Military] (x: -2)
- Task: Obtain securitycraft:reinforced_stone
- Reward: 32 reinforced_stone, 4 mine, 2 security_camera, camera_monitor, portable_radar, 4 reinforced_glass
- Description: "SecurityCraft protects your base with cameras, mines, and lasers."

### [Taste of Economy] (x: 0)
- Task: Obtain mysticalagriculture:inferium_essence x8
- Reward: 32 inferium_essence, storagedrawers:oak_full_drawers_1 x4, ae2:certus_quartz_crystal x8
- Description: "Mystical Agriculture lets you GROW resources. AE2 stores them digitally."

### [Taste of Alchemy] (x: 2)
- Task: Obtain mekanism:metallurgic_infuser
- Reward: mekanism:ingot_osmium x32, mekanism:alloy_infused x8, enrichment_chamber, crusher
- Description: "Mekanism powers the path of Alchemy — ore transmutation and eventually nuclear energy."

### [Taste of Housewife] (x: 4)
- Task: Obtain farmersdelight:stove
- Reward: cooking_pot, cutting_board, tomato x8, cabbage x8, onion x8, rice x8
- Description: "Farmer's Delight turns cooking into a full system with powerful food buffs."

### [Taste of Scouting] (x: 6)
- Task: Obtain structurecompass:structure_compass
- Reward: spyglass, ender_pearl x4, cataclysm:mech_eye
- Description: "A scout finds what others miss. The Structure Compass locates any structure in the world."

**7 quests. Total so far: 28.**

---

## Phase 6: The Divergence (y: 19)

All seven taste quests converge into the final milestone.

```
[Taste of Engineering] ---+
[Taste of Magic] ---------+
[Taste of Military] ------+
[Taste of Economy] -------+--> [[Choose Your Path]]  (hexagon, size 2.0)
[Taste of Alchemy] -------+
[Taste of Housewife] -----+
[Taste of Scouting] ------+
```

### [[Choose Your Path]]
- Task: Checkmark
- Description:
  > "Your survival skills are proven. Seven paths lie before you:
  > 
  > ⚙️ Engineering — Build factories, trains, and airships with Create
  > ⚗️ Magic — Master spells and rituals with Ars Nouveau
  > 🛡️ Military — Fortify, arm, and conquer with SecurityCraft and Big Cannons
  > 🌾 Economy — Farm, store, and automate with Mystical Agriculture and AE2
  > 🔬 Alchemy — Transmute, process, and go nuclear with Mekanism
  > 🏠 Housewife — Cook, decorate, and nurture with Farmer's Delight and Create
  > 👁️ Scout — Explore, infiltrate, and sabotage with Cataclysm and Apotheosis
  > 
  > You can pursue multiple paths. The resources here will get you started on any of them."

- **Rewards — The Divergence Kit (per path):**

  **Engineering starter:**
  64 andesite_alloy, 32 cogwheel, 16 shaft, 8 brass_ingot, 4 precision_mechanism, 32 iron_sheet, 32 copper_ingot

  **Magic starter:**
  32 source_gem, 8 wilden_horn, 32 blue_archwood_log, 16 gold_ingot, 8 amethyst_shard

  **Military starter:**
  64 stone_bricks, 32 reinforced_glass, 8 mine, 32 iron_block

  **Economy starter:**
  32 inferium_essence, 16 oak_full_drawers_1, 8 certus_quartz_crystal, backpack

  **Alchemy starter:**
  64 ingot_osmium, 32 alloy_infused, 16 basic_control_circuit, 32 redstone, 16 steel_casing

  **Housewife starter:**
  stove x2, cooking_pot x2, cutting_board x2, tomato x16, cabbage x16, rice x32, cocoa_powder x16, carpenters_table, window_base x16

  **Scout starter:**
  structure_compass x2, mech_eye x2, flame_eye x2, black_steel_ingot x16, hellshelf x4, spyglass x2

**1 quest. Total so far: 29.**

---

## Phase 7: Side Quests (optional, accessible throughout)

These branch off various points in the main line. All marked `optional: true`. They add depth without blocking progression.

### From [Iron Tools]:
- **[Build a Boat]** — obtain boat. Reward: 4 boats, fishing_rod, 8 cooked_cod. Optional.
- **[First Pet]** — tame a wolf or cat (checkmark). Reward: 16 bone, 8 cooked_beef, lead x4, name_tag. Optional.

### From [[Established]]:
- **[Aquaculture Intro]** — obtain aquaculture:iron_fishing_rod. Reward: aquaculture:worm x16, aquaculture:tackle_box, iron_hook x2. Optional.
- **[Decorate Your Base]** — place 5 different decorative blocks (checkmark). Reward: painting x4, flower_pot x8, 8 candle, 4 lantern. Optional.

**4 optional quests. GRAND TOTAL: 33 quests.**

---

## Full Dependency Flow (ASCII)

```
[[Welcome to BOE]]                           (dimension: overworld)
        |
  [Punch a Tree]                             (any log)
        |
  [Craft Wooden Tools]                       (pickaxe + axe)
        |
  [Cobblestone Collection]                   (32 cobblestone)
        |
  [Smelt Your First Ore]                     (1 iron ingot)
        |
  [Iron Tools]                               (iron pickaxe)
    |       \
    |     [Boat]* [Pet]*                     (* = optional)
    |
  [Survive the Night]                        (kill 1 hostile mob)
       /          \
   {Build}      {Defend}                     (CHOICE — pick one)
       \          /
    [[Established]]                          (milestone)
     /      |      \
 [Farm]  [Fight]  [Mine]                     (all 3 required)
     \      |      /
   [[Ready to Advance]]                      (milestone, gives enchanting materials)
        |
  [Enchanting Setup]                         (craft enchanting table)
    |       \
    |     [Portal]* -> [Nether]* -> [Blaze]* -> [Riches]*   (* = optional)
    |
  [Your First Enchant]                       (enchant anything)
        |
  [[Path Selection Ready]]                   (milestone)
   / | | | | | | \
  7x Taste Tests                             (one per path)
   \ | | | | | | /
  [[Choose Your Path]]                       (divergence — massive reward kit)

  Side quests:  [Boat]  [Pet]  [Aquaculture]  [Decorate]
```

---

## Choice Node Technical Reference

```snbt
// Option A
{
    dependencies: ["PARENT_ID"]
    id: "OPTION_A_ID"
    tasks: [{ type: "checkmark" }]
    rewards: [ ... ]
}

// Option B  
{
    dependencies: ["PARENT_ID"]
    id: "OPTION_B_ID"
    tasks: [{ type: "checkmark" }]
    rewards: [ ... ]
}

// Merge quest (unlocked by completing EITHER option)
{
    dependencies: ["OPTION_A_ID", "OPTION_B_ID"]
    dependency_requirement: "one_completed"
    shape: "hexagon"
    id: "MERGE_ID"
    tasks: [{ type: "checkmark" }]
    rewards: [ ... ]
}
```

---

## Notes for Implementation

- **First chapter shown**: Set this chapter's `order_index: 0` so it appears first in the quest book
- Set `progression_mode: "linear"` in data.snbt
- Set `grid_scale: 0.5d` in data.snbt
- Use `size: 2.0d` on [[Welcome]] and [[Choose Your Path]]
- Use `size: 1.5d` on [[Established]], [[Ready to Advance]], [[Path Selection Ready]]
- Use `shape: "hexagon"` on all `[[ ]]` milestone quests
- Mark all Phase 7 quests + Nether branch with `optional: true`
- Choice quests use `dependency_requirement: "one_completed"` on the merge quest
- "Punch a Tree" should use an item tag for any log, not just oak
- No beds are rewarded or required — beds are pre-placed by the BOE mod at spawn
- All item IDs have been verified against actual mod JARs
