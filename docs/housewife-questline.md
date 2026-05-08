# Housewife Chapter — Quest Design Document

**Target quests: ~65**
**Icon:** `farmersdelight:skillet`
**Subtitle:** "Cook. Decorate. Nurture."
**Depends on:** [[Choose Your Path]] from Survival

## Mods Covered

- **Farmer's Delight** — cooking stations, meals, feasts, knives, crops
- **Create Confectionery** — chocolates, candies, gingerbread (with combat buffs)
- **Create Winery** — wines, grape farming
- **Ocean's Delight** — seafood recipes
- **Chipped** — decorative block variants via workstations
- **Macaw's Windows/Doors/Fences/Trapdoors** — building aesthetics
- **Create Furnitures** — chairs, tables, pillars
- **Create Deco** — metal doors, decorative blocks
- **Sophisticated Backpacks** — feeding/alchemy upgrades (support role)

## Rank Progression

| Rank | Title | Theme | y range |
|------|-------|-------|---------|
| 1 | Homemaker | Farmer's Delight basics, first meals, kitchen setup | 0 to 8 |
| 2 | Chef | Advanced meals, feasts, winery, confectionery, seafood | 10 to 18 |
| 3 | Interior Designer | Decoration mastery, furniture, Chipped, Macaw's, support logistics | 20 to 28 |
| 4 | Matriarch | Automated cooking, team support, domestic supremacy | 30 to 36 |

---

## Rank 1: Homemaker (y: 0 to 8) — ~18 quests

Two spokes: Kitchen Setup and Crops & Ingredients.

```
[[Welcome to Housewife]]           checkmark, hexagon size 2.0
    |                              reward: farmersdelight:stove x2,
    |                              cooking_pot x2, cutting_board x2,
    |                              skillet, iron_knife, canvas x8
    |
    +--------+
    |        |
    v        v
  Kitchen  Crops
```

### Kitchen Spoke (left, x: -3)

```
[Stove]                            obtain farmersdelight:stove
    |                              reward: 2 stove
    v
[Cutting Board]                    obtain farmersdelight:cutting_board
    |                              reward: 4 cutting_board
    |                              description: "Place items on the board and hit
    |                              with a knife to cut. Unlocks many recipes."
    v
[Cooking Pot]                      obtain farmersdelight:cooking_pot
    |                              reward: 4 cooking_pot
    |                              description: "Place over a heat source. Insert
    |                              ingredients — meals cook automatically."
    v
[Skillet]                          obtain farmersdelight:skillet
    |                              reward: 2 skillet
    v
[Iron Knife]                       obtain farmersdelight:iron_knife
    |                              reward: golden_knife, diamond_knife
    |                              description: "Better knives cut faster and unlock
    |                              more cutting board recipes."
    v
[Diamond Knife]                    obtain farmersdelight:diamond_knife
                                   reward: netherite_knife (endgame knife)
```

### Crops & Ingredients Spoke (right, x: 3)

```
[Tomato Seeds]                     obtain farmersdelight:tomato_seeds x4
    |                              reward: 16 tomato_seeds, 16 tomato
    v
[Cabbage Seeds]                    obtain farmersdelight:cabbage_seeds x4
    |                              reward: 16 cabbage_seeds, 16 cabbage
    v
[Onion]                            obtain farmersdelight:onion x8
    |                              reward: 16 onion
    v
[Rice]                             obtain farmersdelight:rice x8
    |                              reward: 16 rice, rice_panicle x4
    v
[Rich Soil]                        obtain farmersdelight:rich_soil x4
                                   reward: 16 rich_soil, organic_compost x8
                                   description: "Rich Soil speeds crop growth.
                                   Made from Organic Compost + dirt."
```

### First Meals (center, x: 0, below both spokes)

```
[Diamond Knife] + [Rich Soil] converge
    |
    v
[Beef Stew]                        obtain farmersdelight:beef_stew
    |                              reward: 8 beef_stew
    |                              description: "Comfort effect — regeneration
    |                              regardless of hunger. Powerful in PvP."
    v
[Steak and Potatoes]               obtain farmersdelight:steak_and_potatoes
                                   reward: 8 steak_and_potatoes, 8 pasta_with_meatballs
                                   description: "Nourishment effect — prevents hunger
                                   drain. Your food bar stops going down."
```

### Rank 1 Convergence

```
[Steak and Potatoes] ---+--> [[Rank: Chef]]  (hexagon, size 1.5)
                              checkmark
                              reward: farmersdelight:roast_chicken_block x2,
                              create_confectionery:cocoa_powder x16,
                              create_winery:red_grapes x16,
                              create_winery:white_grapes x16,
                              oceansdelight:guardian_tail x4
                              command: "/say 🏠 @p has risen to the rank of Chef!"
```

**~18 quests.**

---

## Rank 2: Chef (y: 10 to 18) — ~20 quests

Four branches: Feasts, Winery, Confectionery, Seafood.

### Feasts Branch (center, x: 0)

```
[[Rank: Chef]]
    |
    v
[Roast Chicken]                    obtain farmersdelight:roast_chicken_block
    |                              reward: honey_glazed_ham_block
    v
[Honey Glazed Ham]                 obtain farmersdelight:honey_glazed_ham_block
    |                              reward: shepherds_pie_block, stuffed_pumpkin_block
    v
[Feast Variety]                    checkmark ("Place 3 different feast blocks")
    |                              reward: rice_roll_medley_block, apple_pie,
    |                              sweet_berry_cheesecake, chocolate_pie
    |                              description: "Feast blocks are shared meals.
    |                              Place them — multiple people eat from one block."
    v
[Gleaming Salad]                   obtain farmersdelight:gleaming_salad_block
                                   reward: gleaming_salad_block
                                   description: "The rarest feast. Gleaming Salad
                                   gives powerful buffs."
```

### Winery Branch (left, x: -4)

```
[[Rank: Chef]]
    |
    v
[Grape Farming]                    obtain create_winery:red_grapes x16
    |                              reward: 16 red_grapes, 16 white_grapes,
    |                              red_grape_crate, white_grape_crate
    v
[Wine Cellar]                      obtain create_winery:wine_cellar
    |                              reward: 2 wine_cellar
    v
[First Wine]                       obtain create_winery:cabernet_sauvignon
    |                              reward: merlot x4, chardonnay x4, rose x4
    |                              description: "Wine gives Resistance — reduced
    |                              damage. But 20% chance of Nausea. Worth it."
    v
[Juice]                            obtain create_winery:grape_juice
    |                              reward: apple_juice x4, grape_juice x4
    v
[Champagne]                        obtain create_winery:champaign
                                   reward: 4 champaign, cider x4
                                   description: "Sparkling wine. For celebrations
                                   — or pre-battle courage."
```

### Confectionery Branch (right, x: 4)

```
[[Rank: Chef]]
    |
    v
[Cocoa Processing]                 obtain create_confectionery:cocoa_powder x8
    |                              reward: 16 cocoa_powder, 8 cocoa_butter
    v
[Chocolate Bar]                    obtain create_confectionery:full_chocolate_bar
    |                              reward: full_black_chocolate_bar x4,
    |                              full_white_chocolate_bar x4,
    |                              full_ruby_chocolate_bar x4
    |                              description: "Each chocolate type gives different
    |                              buffs: Dark=Stimulation, White=Rest,
    |                              Ruby=Saturation."
    v
[Candy]                            obtain create_confectionery:candy_cane x4
    |                              reward: 8 candy_cane, honey_candy x8,
    |                              caramel_glazed_berries x8
    |                              description: "Candy Cane gives Haste.
    |                              Caramel gives Speed."
    v
[Hot Chocolate]                    obtain create_confectionery:hot_chocolate_bottle
    |                              reward: 4 hot_chocolate_bottle
    |                              description: "Regeneration effect. The scout's
    |                              best friend before dungeon raids."
    v
[Soothing Hot Chocolate]           obtain create_confectionery:soothing_hot_chocolate
                                   reward: 8 soothing_hot_chocolate
                                   description: "Regeneration II. The best healing
                                   item you can produce."
```

### Seafood Branch (far right, x: 6)

```
[[Rank: Chef]]
    |
    v
[Guardian Tail]                    obtain oceansdelight:guardian_tail
    |                              reward: 4 guardian_tail, cooked_guardian_tail x4
    v
[Tentacles]                        obtain oceansdelight:cut_tentacles x4
    |                              reward: baked_tentacle_on_a_stick x8
    v
[Seafood Feast]                    obtain oceansdelight:bowl_of_guardian_soup
                                   reward: cooked_stuffed_cod x4,
                                   elder_guardian_roll x4, fugu_roll x4
                                   description: "Ocean's Delight adds exotic seafood.
                                   Guardian Soup is a placeable feast block."
```

### Rank 2 Convergence

```
[Gleaming Salad] ------+
[Champagne] -----------+---> [[Rank: Interior Designer]]  (hexagon, size 1.5)
[Soothing Hot Choc] ---+     checkmark
[Seafood Feast] -------+     reward: chipped:carpenters_table, chipped:mason_table,
                              chipped:botanist_workbench, chipped:loom_table,
                              chipped:tinkering_table, chipped:alchemy_bench,
                              create_furnitures:brass_chair x4,
                              create_furnitures:brass_table x2
                              command: "/say 🏠 @p has risen to the rank of Interior Designer!"
```

**~20 quests. Total: ~38.**

---

## Rank 3: Interior Designer (y: 20 to 28) — ~18 quests

Three branches: Chipped Decoration, Macaw's Building, and Support Logistics.

### Chipped Branch (center, x: 0)

```
[[Rank: Interior Designer]]
    |
    v
[Carpenter's Table]               obtain chipped:carpenters_table
    |                              reward: 8 chipped workbenches (various)
    v
[Mason Table]                      obtain chipped:mason_table
    |                              reward: none (the variants ARE the reward)
    |                              description: "Hundreds of stone/brick variants.
    |                              Every vanilla block gets 20+ decorative options."
    v
[All Workstations]                 checkmark ("Place all 6 Chipped workstations")
                                   reward: 64 stone, 64 oak_planks, 32 glass
                                   description: "Carpenter, Mason, Botanist, Loom,
                                   Tinkering, Alchemy — you have them all."
```

### Macaw's Building Branch (left, x: -3 to -5)

```
[[Rank: Interior Designer]]
    |
    v
[Window Hammer]                    obtain mcwwindows:hammer
    |                              reward: 32 window_base, key,
    |                              16 window_centre_bar_base
    |                              description: "Right-click windows with the hammer
    |                              to change shape. Key locks them shut."
    v
[Fancy Doors]                      checkmark ("Place a Macaw's or Create Deco door")
    |                              reward: createdeco:brass_door x2,
    |                              createdeco:copper_door x2,
    |                              createdeco:iron_door x2
    v
[Fences & Gates]                   checkmark ("Place Macaw's fences or gates")
    |                              reward: various mcwfences items
    v
[Trapdoors]                        checkmark ("Place a Macaw's trapdoor")
                                   reward: various mcwtrpdoors items
```

### Create Furniture Branch (right, x: 3)

```
[[Rank: Interior Designer]]
    |
    v
[Chairs & Tables]                  obtain create_furnitures:brass_chair
    |                              reward: copper_chair x2, andesite_chair x2,
    |                              railway_chair x2, matching tables
    v
[Pillars]                          obtain create_furnitures:andesite_pillar
    |                              reward: brass_pillar, various pillar variants
    v
[Create Deco]                      obtain createdeco:brass_bars
                                   reward: various createdeco items (catwalks,
                                   sheet metal, cage lamps)
                                   description: "Industrial decoration — catwalks,
                                   metal bars, cage lamps, coin stacks."
```

### Support Logistics Branch (center-right, x: 2)

```
[[Rank: Interior Designer]]
    |
    v
[Feeding Upgrade]                  obtain sophisticatedbackpacks:feeding_upgrade
    |                              reward: advanced_feeding_upgrade
    v
[Alchemy Upgrade]                  obtain sophisticatedbackpacks:alchemy_upgrade
    |                              reward: advanced_alchemy_upgrade
    |                              description: "Auto-applies potion effects from
    |                              your backpack. Combined with your cooking,
    |                              you keep the whole team buffed."
    v
[Diamond Backpack]                 obtain sophisticatedbackpacks:diamond_backpack
                                   reward: stack_upgrade_tier_2,
                                   inception_upgrade
                                   description: "Inception Upgrade = backpacks in
                                   backpacks. Infinite portable storage."
```

### Decorative Extras (optional side)

```
[Canvas Rug]                       obtain farmersdelight:canvas_rug x4 (optional)
                                   reward: 8 canvas_rug, 8 full_tatami_mat
[Canvas Signs]                     obtain farmersdelight:canvas_sign x2 (optional)
                                   reward: colored canvas signs (assorted)
[Sourcestone Deco]                 checkmark ("Place decorative sourcestone") (optional)
                                   reward: various sourcestone variants
```

### Rank 3 Convergence

```
[All Workstations] ----+
[Trapdoors] -----------+---> [[Rank: Matriarch]]  (hexagon, size 1.5)
[Create Deco] ---------+     checkmark
[Diamond Backpack] ----+     reward: gingerbread_block x32 (building material!),
                              create_confectionery:candy_cane_block x16,
                              chocolate_bricks x32
                              command: "/say 🏠 @p has risen to the rank of Matriarch!"
```

**~18 quests. Total: ~56.**

---

## Rank 4: Matriarch (y: 30 to 36) — ~12 quests

Automated cooking, team support mastery, gingerbread architecture.

### Automated Cooking (center)

```
[[Rank: Matriarch]]
    |
    v
[Candy Factory]                    checkmark ("Auto-produce chocolates via Create")
    |                              reward: ruby_chocolate_candy x32,
    |                              black_chocolate_candy x32
    v
[Gingerbread Architecture]         obtain create_confectionery:gingerbread_block x64
    |                              reward: gingerbread_stairs x32,
    |                              gingerbread_slab x32, gingerbread_bricks x32
    |                              description: "Build an entire house from gingerbread.
    |                              It gives Resistance when eaten. Edible walls."
    v
[Potion Meals]                     checkmark ("Stock 5 different foods with combat buffs")
                                   reward: golden_apple x16, golden_carrot x32
                                   description: "Steak & Potatoes (Nourishment), Hot
                                   Chocolate (Regen), Wine (Resistance), Dark Chocolate
                                   (Stimulation), Gingerbread (Resistance)."
```

### Team Support (left, x: -3)

```
[[Rank: Matriarch]]
    |
    v
[Netherite Backpack]               obtain sophisticatedbackpacks:netherite_backpack
    |                              reward: stack_upgrade_tier_3,
    |                              everlasting_upgrade
    |                              description: "Indestructible backpack. Everlasting
    |                              Upgrade makes it survive death."
    v
[Team Supply Kit]                  checkmark ("Stock a backpack with feeding + alchemy
                                   upgrades and 5 different food types")
                                   reward: stack_upgrade_tier_4
                                   description: "Your backpack auto-feeds you the best
                                   food and auto-applies potions. Walking buff machine."
```

### Grand Feast (right, x: 3)

```
[[Rank: Matriarch]]
    |
    v
[The Grand Feast]                  checkmark ("Place 5 different feast blocks")
    |                              reward: title
    |                              command: "/say 🏠 @p has prepared a Grand Feast! All are welcome."
    v
[Feast Master]                     checkmark ("Produce every type of Farmer's Delight feast")
                                   description: "Roast Chicken, Honey Glazed Ham,
                                   Shepherd's Pie, Stuffed Pumpkin, Rice Roll Medley,
                                   Gleaming Salad, Apple Pie, Sweet Berry Cheesecake,
                                   Chocolate Pie."
```

### Cross-Path Bonus (optional)

```
[War Kitchen]                      checkmark ("Kitchen behind SecurityCraft defenses")
                                   OPTIONAL
                                   depends on: Diamond Backpack (this) +
                                   Surveillance State (Military)
                                   reward: reinforced_glass x16
```

### Endgame Milestone

```
[Potion Meals] ----------+
[Team Supply Kit] -------+--> [[Domestic Supremacy]]  (hexagon, size 2.0)
[Feast Master] ----------+    checkmark
                              reward: title "Matriarch"
                              command: "/say 🏠 @p has achieved Domestic Supremacy! Their home is legendary."
```

**~12 quests. GRAND TOTAL: ~65 quests.**

---

## Cross-Path Design Rule

| Quest | Depends on (other chapter) | Blocks anything? |
|-------|---------------------------|-------------------|
| War Kitchen | Surveillance State (Military) | No — optional |
| Candy Factory | *(internal only — needs Create basics, but not gated on Engineering)* | No |

## Notes

- Farmer's Delight Nourishment and Comfort effects are the key PvP food buffs
- Create Confectionery buffs: Dark=Stimulation(Haste), White=Rest, Ruby=Saturation, Caramel=Speed, Gingerbread=Resistance, Hot Chocolate=Regen
- Wine gives Resistance with 20% Nausea chance — note in descriptions
- Chipped has 6 workstations with hundreds of block variants each
- Macaw's mods are mostly aesthetic — checkmark quests for "install X"
- Sophisticated Backpacks feeding+alchemy upgrades are the team support mechanic
- Gingerbread building blocks from Confectionery are edible and give Resistance!
- All item IDs verified
