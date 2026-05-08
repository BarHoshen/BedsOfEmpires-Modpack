# Magic Chapter — Quest Design Document

**Target quests: ~85**
**Icon:** `ars_nouveau:novice_spell_book`
**Subtitle:** "Master the arcane arts"
**Depends on:** [[Choose Your Path]] from Survival

## Mods Covered

- **Ars Nouveau** (core) — spells, glyphs, source, equipment, familiars, rituals
- **Ars Elemental** — elemental foci and specialization
- **Iron's Spells 'n Spellbooks** — combat magic, boss encounters, mithril, spell classes

## Rank Progression

| Rank | Title | Theme | y range |
|------|-------|-------|---------|
| 1 | Apprentice | Source basics, first spells, Tier 1 glyphs | 0 to 8 |
| 2 | Mage | Tier 2 glyphs, equipment, companions, Iron's Spells intro | 10 to 18 |
| 3 | Archmage | Tier 3 glyphs, Wilden Chimera, rituals, turrets, Iron's bosses | 20 to 28 |
| 4 | Transcendent | Ultimate gear, portals, ritual mastery, endgame bosses | 30 to 36 |

---

## Rank 1: Apprentice (y: 0 to 8) — ~22 quests

Two main spokes from root: Source Infrastructure and First Spells. Plus a Glyph Fan.

```
[[Welcome to Magic]]               checkmark, hexagon size 2.0
    |                              depends on: Choose Your Path (Survival)
    |                              reward: 16 source_gem, worn_notebook, 
    |                              sourceberry_bush x4, magebloom_crop x4
    |                              description: "Ars Nouveau lets you design custom
    |                              spells from modular glyphs. Source gems power
    |                              everything. Let's begin."
    |
    +------------+
    |            |
    v            v
  Source      Spells
  spoke       spoke
```

### Source Spoke (left, x: -3 to -5)

```
[Source Gem]                        obtain ars_nouveau:source_gem x8
    |                              reward: 16 source_gem, imbuement_chamber
    |                              description: "Source gems drop from ore or can
    |                              be crafted. They're the fuel for all magic."
    v
[Source Jar]                       obtain ars_nouveau:source_jar
    |                              reward: 4 source_jar
    |                              description: "Jars store liquid source. Place
    |                              near your enchanting apparatus."
    v
[Imbuement Chamber]                obtain ars_nouveau:imbuement_chamber
    |                              reward: 4 arcane_pedestal, arcane_core
    |                              description: "The imbuement chamber infuses items
    |                              with source. Used for many recipes."
    v
[Your First Sourcelink]            obtain ars_nouveau:volcanic_sourcelink
    |                              reward: agronomic_sourcelink, mycelial_sourcelink
    |                              description: "Sourcelinks generate source passively.
    |                              Volcanic burns fuel, Agronomic feeds on crop growth,
    |                              Mycelial on food consumption."
    v
[Source Relay]                     obtain ars_nouveau:relay
                                   reward: 4 relay, dominion_wand
                                   description: "Relays transport source between jars
                                   and machines. The Dominion Wand links them together."
```

### Spells Spoke (center-right, x: 0 to 2)

```
[Scribe's Table]                   obtain ars_nouveau:scribes_table
    |                              reward: blank_glyph x16, blank_parchment x8
    |                              description: "The Scribe's Table is where you learn
    |                              glyphs and inscribe spell parchments."
    v
[Novice Spell Book]                obtain ars_nouveau:novice_spell_book
    |                              reward: spell_parchment x4
    |                              description: "Your first spell book. Open it to
    |                              add glyphs and design spells. Try Projectile + Break."
    v
[Your First Spell]                 checkmark ("Cast any spell")
    |                              reward: 8 source_gem, runic_chalk
    |                              description: "You cast your first spell! Experiment
    |                              with different glyph combinations."
```

### Tier 1 Glyph Fan (branches from [Your First Spell])

After casting the first spell, a fan of Tier 1 glyph quests opens. Each is an individual quest (shape: "rsquare"). Learning a glyph = obtaining the glyph item at the Scribe's Table.

```
[Your First Spell]
    |
    +-- [Glyph: Projectile]        (form glyph — already known from spellbook)
    +-- [Glyph: Touch]             form glyph
    +-- [Glyph: Self]              form glyph
    +-- [Glyph: Break]             effect glyph — mine blocks
    +-- [Glyph: Harm]              effect glyph — damage targets
    +-- [Glyph: Heal]              effect glyph — heal allies
    +-- [Glyph: Ignite]            effect glyph — set fire
    +-- [Glyph: Grow]              effect glyph — bonemeal
    +-- [Glyph: Light]             effect glyph — create light
    +-- [Glyph: Freeze]            effect glyph — slow + freeze
    +-- [Glyph: Blink]             effect glyph — teleport (mobility!)
    +-- [Glyph: Amplify]           augment glyph — more power
    +-- [Glyph: AOE]               augment glyph — area effect
```

Each glyph quest:
- Task: obtain the glyph item (e.g., `ars_nouveau:glyph_break`)
- Reward: 3 XP levels + 4 source_gem
- Shape: "rsquare" (visual distinction like ATM10)
- All optional: false (glyphs are core progression)
- Descriptions explain what the glyph does and suggest combos

### Rank 1 Convergence

```
[Source Relay] ----------+
[Glyph: Blink] ---------+---> [[Rank: Mage]]  (hexagon, size 1.5)
[Glyph: Harm] ----------+     checkmark
[Glyph: Heal] ----------+     reward: apprentice_spell_book (Mage's Spell Book!),
                               8 magic_clay, enchanting_apparatus, 
                               4 arcane_pedestal, arcane_core
                               command: "/say ⚗️ @p has risen to the rank of Mage!"
                               description: "You can generate source, cast basic
                               spells, and understand glyph combinations. The
                               Enchanting Apparatus unlocks advanced crafting."
```

Note: The Mage's Spell Book is GIVEN as a reward (not crafted). This lets the player immediately access Tier 2 glyphs.

**~22 quests (5 source + 3 spells + 13 glyphs + 1 milestone).**

---

## Rank 2: Mage (y: 10 to 18) — ~25 quests

Three branches: Equipment, Tier 2 Glyphs, and Iron's Spells introduction. Plus Companions.

### Equipment Branch (left, x: -3 to -5)

```
[[Rank: Mage]]
    |
    v
[Enchanting Apparatus]             obtain ars_nouveau:enchanting_apparatus
    |                              (given in milestone reward — confirm placement)
    |                              reward: 4 arcane_pedestal
    v
[Enchanter's Sword]                obtain ars_nouveau:enchanters_sword
    |                              reward: enchanters_shield
    |                              description: "Applies your Touch spell before 
    |                              dealing damage. Magic-enhanced melee."
    v
[Enchanter's Bow]                  obtain ars_nouveau:spell_bow
    |                              reward: 16 amplify_arrow, 16 split_arrow
    v
[Sorceror's Robes]                 obtain ars_nouveau:sorcerer_robes
    |                              reward: sorcerer_hood, sorcerer_leggings,
    |                              sorcerer_boots
    |                              description: "Lowest defense, most thread slots.
    |                              Pure spellcaster build."
    v
[Alteration Table]                 obtain ars_nouveau:alteration_table
    |                              reward: blank_thread x4, thread_magic_capacity x2
    |                              description: "Apply threads to armor for perks:
    |                              speed, mana boost, life drain, gliding..."
    v
{CHOICE: Arcanist Robes}          obtain ars_nouveau:arcanist_robes
{CHOICE: Battlemage Gambeson}      obtain ars_nouveau:battlemage_robes
    |                              (pick ONE — different playstyle)
    v (one_completed)
[Threaded Armor]                   checkmark ("Apply 3 threads to your armor")
                                   reward: thread_spellpower x2, thread_warding x2,
                                   thread_starbuncle x2
```

**Arcanist choice:** balanced defense + thread slots. Reward: full Arcanist set.
**Battlemage choice:** highest defense, fewest threads. Reward: full Battlemage set.

### Tier 2 Glyph Fan (center, x: 0 to 2)

Branches from [[Rank: Mage]]. These are unlocked by having the Mage's Spell Book.

```
[[Rank: Mage]]
    |
    +-- [Glyph: Lightning]         ⚡ effect — summons bolt
    +-- [Glyph: Explosion]         💥 effect — boom
    +-- [Glyph: Fangs]             🦷 effect — evoker fangs
    +-- [Glyph: Snare]             🕸️ effect — immobilize
    +-- [Glyph: Invisibility]      👻 effect — stealth
    +-- [Glyph: Knockback]         💨 effect — push away
    +-- [Glyph: Launch]            🚀 effect — launch upward
    +-- [Glyph: Gravity]           ⬇️ effect — force fall
    +-- [Glyph: Summon Wolves]     🐺 effect — wolf allies
    +-- [Glyph: Split]             augment — multiple projectiles
    +-- [Glyph: Pierce]            augment — passes through targets
    +-- [Glyph: Extend Time]       augment — longer duration
```

Each: task = obtain glyph, reward = 5 XP + 4 source_gem, shape = "rsquare"

### Companions Branch (far left, x: -6)

```
[[Rank: Mage]]
    |
    v
[Dominion Wand]                    obtain ars_nouveau:dominion_wand
    |                              reward: starbuncle_charm
    v
[Starbuncle]                       obtain ars_nouveau:starbuncle_charm (optional)
    |                              reward: 8 gold_nugget
    |                              description: "Item transport between inventories.
    |                              Give a wild Starbuncle a gold nugget for its token."
    v
[Wixie]                            obtain ars_nouveau:wixie_charm (optional)
    |                              reward: wixie_cauldron
    |                              description: "Auto-crafting and potion brewing.
    |                              Dispel a witch at half health for the token."
    v
[Drygmy]                           obtain ars_nouveau:drygmy_charm (optional)
                                   reward: drygmy_stone
                                   description: "Passive mob loot production.
                                   Give a wild Drygmy a Wilden Horn for the token."
```

### Iron's Spells Introduction (right, x: 4 to 6)

```
[[Rank: Mage]]
    |
    v
[Iron's Spellbook: Flimsy]        obtain irons_spellbooks:copper_spell_book
    |                              reward: 8 arcane_essence, 4 blank_rune
    |                              description: "A separate spell system focused on
    |                              combat. Iron's Spells uses discovered scrolls
    |                              and structured spell classes."
    v
[Inscription Table]                obtain irons_spellbooks:inscription_table (verify exact ID)
    |                              reward: 8 arcane_essence
    v
[First Structure]                  checkmark ("Find an Iron's Spells structure — 
    |                              Mountain Tower, Mangrove Hut, or similar")
    |                              reward: 8 scroll, 16 arcane_essence
    v
[Iron's Spellbook: Iron]          obtain irons_spellbooks:iron_spell_book
                                   reward: 8 blank_rune
                                   description: "More spell slots. You're building
                                   a combat spellcaster alongside your Ars mage."
```

### Rank 2 Convergence

```
[Threaded Armor] ----------+
[Glyph: Lightning] --------+---> [[Rank: Archmage]]  (hexagon, size 1.5)
[Glyph: Summon Wolves] ----+     checkmark
[Iron's Spellbook: Iron] --+     reward: archmage_spell_book, 16 wilden_horn,
                                  16 wilden_wing, 16 wilden_spike,
                                  ritual_brazier, 8 mythical_clay
                                  command: "/say ⚗️ @p has risen to the rank of Archmage!"
                                  description: "To truly earn the Archmage title, you
                                  must defeat the Wilden Chimera. The ritual tablet
                                  requires Horn + Wing + Spike from Wilden mobs."
```

**~25 quests (7 equipment + 12 glyphs + 3 companions + 4 Iron's + 1 milestone, minus shared deps).**

---

## Rank 3: Archmage (y: 20 to 28) — ~24 quests

Chimera fight, Tier 3 glyphs, rituals, spell turrets, and Iron's Spells bosses.

### Chimera & Tier 3 Glyphs (center)

```
[[Rank: Archmage]]
    |
    v
[Wilden Hunt]                      checkmark ("Defeat the Wilden Chimera")
    |                              depends on: having horn + wing + spike
    |                              reward: wilden_tribute x4, elytra
    |                              description: "Summon the Chimera using the Ritual
    |                              of Summon Wilden with Horn + Wing + Spike on the
    |                              pedestal. This is the hardest Ars Nouveau fight."
    |
    +-- Tier 3 Glyph Fan:
        +-- [Glyph: Intangible]        effect — phases through blocks
        +-- [Glyph: Summon Vex]        effect — vex swarm
        +-- [Glyph: Animate Block]     effect — blocks fight for you
        +-- [Glyph: Wither]            effect — wither debuff
        +-- [Glyph: Hex]               effect — increases damage taken
        +-- [Glyph: Cold Snap]         effect — ice burst
        +-- [Glyph: Flare]             effect — fire burst
        +-- [Glyph: Glide]             effect — elytra flight via spell
        +-- [Glyph: Rewind]            effect — undo damage/position
```

### Ritual Branch (left, x: -4 to -6)

```
[Wilden Hunt]
    |
    v
[Ritual Brazier]                   obtain ars_nouveau:ritual_brazier
    |                              reward: 4 ritual_brazier, brazier_relay x4
    v
[Ritual: Sanctuary]                obtain ars_nouveau:ritual_sanctuary
    |                              reward: ritual_harvest, ritual_fertility
    |                              description: "Prevents hostile spawns in a 32-block
    |                              radius. Your base is now safe from mobs."
    v
[Ritual: Flight]                   obtain ars_nouveau:ritual_flight
    |                              reward: ritual_overgrowth
    |                              description: "Grants creative flight to nearby
    |                              players. The mage's answer to jetpacks."
    v
[Ritual: Binding]                  obtain ars_nouveau:ritual_binding
                                   reward: 2 ritual_binding
                                   description: "Creates Familiar Bound Scripts.
                                   Familiars provide passive combat buffs."
```

### Familiars (from Ritual: Binding, optional)

```
[Ritual: Binding]
    |
    +-- [Familiar: Starbuncle]     Speed 2 buff (optional)
    +-- [Familiar: Drygmy]         +2 earth spell damage (optional)
    +-- [Familiar: Wixie]          extends potion duration (optional)
    +-- [Familiar: Bookwyrm]       auto-pickup items/XP (optional)
```

### Spell Turrets (center-left, x: -2)

```
[[Rank: Archmage]]
    |
    v
[Basic Spell Turret]               obtain ars_nouveau:basic_spell_turret
    |                              reward: 4 basic_spell_turret, 4 spell_parchment
    |                              description: "Turrets auto-cast spells at targets.
    |                              Inscribe a Harm parchment for auto-defense."
    v
[Timer Turret]                     obtain ars_nouveau:timer_spell_turret
    |                              reward: 2 timer_spell_turret, spell_prism x2
    |                              description: "Fires on a timer. Combined with
    |                              Spell Prisms that redirect projectiles, you can
    |                              build elaborate defense networks."
    v
[Adjustable Turret]                obtain ars_nouveau:rotating_spell_turret
                                   reward: 2 rotating_spell_turret
                                   description: "Rotatable turret. Point it at
                                   chokepoints or entry corridors."
```

### Iron's Spells Advanced (right, x: 4 to 6)

```
[[Rank: Archmage]]
    |
    v
[Iron's: Enchanted Book]          obtain irons_spellbooks:enchanted_spell_book (verify)
    |                              reward: 16 arcane_essence
    v
[Iron's: First Boss]              checkmark ("Defeat a Pyromancer, Cryomancer, or Archevoker")
    |                              reward: 8 mithril_ingot (verify if dropped or crafted)
    |                              description: "Iron's Spells bosses guard structures
    |                              and drop powerful loot. Bring potions and good armor."
    v
[Mithril Ingot]                    obtain irons_spellbooks:mithril_ingot
    |                              reward: 16 mithril_ingot
    v
[Mithril Armor]                    obtain any mithril armor piece
                                   reward: full mithril set (if not given already)
                                   description: "Mithril armor enhances spell power
                                   and provides strong physical protection."
```

### Ars Elemental (side, x: 2)

```
[[Rank: Archmage]]
    |
    v
[Elemental Focus]                  obtain ars_elemental:lesser_fire_focus
    |                              reward: all 4 lesser elemental foci
    |                              description: "Ars Elemental adds elemental
    |                              specialization. Each element enhances
    |                              specific glyph types."
    v
[Greater Focus]                    obtain any greater elemental focus (verify ID)
                                   reward: source_gem x32
```

### Rank 3 Convergence

```
[Ritual: Flight] ----------+
[Adjustable Turret] -------+---> [[Rank: Transcendent]]  (hexagon, size 1.5)
[Glyph: Rewind] -----------+     checkmark
[Mithril Armor] -----------+     reward: stable_warp_scroll x4,
                                  scryers_crystal, enchanters_eye,
                                  potion_flask x4
                                  command: "/say ⚗️ @p has risen to the rank of Transcendent!"
```

**~24 quests (1 chimera + 9 glyphs + 4 rituals + 4 familiars + 3 turrets + 4 Iron's + 2 elemental + 1 milestone, minus overlap).**

---

## Rank 4: Transcendent (y: 30 to 36) — ~14 quests

Warp portals, ultimate spells, ritual mastery, Iron's Spells endgame.

### Portals & Teleportation (center)

```
[[Rank: Transcendent]]
    |
    v
[Warp Scroll]                      obtain ars_nouveau:warp_scroll
    |                              reward: 8 warp_scroll
    v
[Stabilized Warp Scroll]           obtain ars_nouveau:stable_warp_scroll
    |                              reward: 4 stable_warp_scroll
    v
[Warp Portal]                      checkmark ("Build a warp portal frame")
                                   reward: stable_warp_scroll x4
                                   description: "Permanent portal network. Link
                                   your base to outposts across dimensions."
```

### Advanced Rituals (left, x: -4)

```
[[Rank: Transcendent]]
    |
    v
[Ritual: Scrying]                  obtain ars_nouveau:ritual_scrying
    |                              reward: scryers_oculus
    |                              description: "X-ray vision for any block type.
    |                              Find ores, find enemy chests, find beds."
    v
[Ritual: Burrowing]                obtain ars_nouveau:ritual_burrowing
    |                              reward: ritual_disintegration
    |                              description: "Instantly digs 4 holes to bedrock.
    |                              Rapid resource extraction."
    v
[Ritual Mastery]                   checkmark ("Complete 5 different rituals")
                                   reward: ritual_challenge, ritual_warping,
                                   32 source_gem
```

### Illusion Blocks (side, x: -2)

```
[[Rank: Transcendent]]
    |
    v
[Mirrorweave]                      obtain ars_nouveau:mirrorweave
    |                              reward: 16 mirrorweave, 8 falseweave
    v
[Ghostweave]                       obtain ars_nouveau:ghostweave
                                   reward: 8 ghostweave
                                   description: "Invisible walls. Your base looks
                                   open but enemies walk into walls."
```

### Iron's Spells Endgame (right, x: 4 to 6)

```
[[Rank: Transcendent]]
    |
    v
[Ancient Codex]                    obtain irons_spellbooks:ancient_codex (verify)
    |                              reward: 16 arcane_essence
    v
[Boss Hunter: 3 Bosses]            checkmark ("Defeat 3 different Iron's Spells bosses")
    |                              reward: mithril_ingot x16
    v
[Echo of Tyros]                    checkmark ("Defeat the Echo of Tyros — 1000 hearts")
                                   reward: title only
                                   description: "The ultimate Iron's Spells boss.
                                   1000 hearts. Bring everything you have."
```

### Potion Mastery (side, x: 2)

```
[[Rank: Transcendent]]
    |
    v
[Potion Flask]                     obtain ars_nouveau:potion_flask
    |                              reward: 4 potion_flask, alchemists_crown
    v
[Flask Cannon]                     obtain ars_nouveau:splash_flask_cannon
                                   reward: lingering_flask_cannon
                                   description: "Launch splash potions at enemies.
                                   Combined with Ars Nouveau custom potions, this
                                   is devastating in PvP."
```

### Cross-Path Bonus Quests (optional, never block progression)

```
[Gem-Socketed Staves]              obtain apotheosis:sigil_of_socketing x2
                                   OPTIONAL
                                   depends on: Ritual Master (this) +
                                   Gem Mastery (Scout)
                                   reward: apotheosis rare/epic materials
                                   description: "Socket Apotheosis gems into your
                                   magic gear. A Scout teammate has surplus sigils."
```

### Endgame Milestone

```
[Warp Portal] ----------+
[Ritual Mastery] -------+
[Ghostweave] -----------+--> [[Arcane Supremacy]]  (hexagon, size 2.0)
[Echo of Tyros] --------+    checkmark
[Flask Cannon] ---------+    reward: title "Transcendent"
                              command: "/say ⚗️ @p has achieved Arcane Supremacy! Reality bends to their will."
```

**~14 quests. GRAND TOTAL: ~85 quests.**

---

## Full Dependency Flow (simplified)

```
[[Welcome to Magic]]
    |
    +-- Source: Gem -> Jar -> Imbuement -> Sourcelink -> Relay
    |
    +-- Spells: Scribe's Table -> Novice Book -> First Spell -> 13x Tier 1 Glyphs
    |
    +---> converge at [[Rank: Mage]]
              |
              +-- Equipment: Apparatus -> Sword -> Bow -> Robes -> Alteration -> {Arcanist/Battlemage} -> Threaded
              +-- Glyphs: 12x Tier 2 Glyphs (Lightning, Explosion, Summon Wolves, etc.)
              +-- Companions: Dominion Wand -> Starbuncle -> Wixie -> Drygmy (optional)
              +-- Iron's Spells: Copper Book -> Inscription -> Structure -> Iron Book
              |
              +---> converge at [[Rank: Archmage]]
                        |
                        +-- Chimera: Wilden Hunt -> 9x Tier 3 Glyphs
                        +-- Rituals: Brazier -> Sanctuary -> Flight -> Binding -> 4x Familiars
                        +-- Turrets: Basic -> Timer -> Adjustable
                        +-- Iron's Advanced: Enchanted Book -> First Boss -> Mithril -> Armor
                        +-- Elemental: Lesser Focus -> Greater Focus
                        |
                        +---> converge at [[Rank: Transcendent]]
                                  |
                                  +-- Portals: Warp Scroll -> Stable Scroll -> Portal
                                  +-- Rituals: Scrying -> Burrowing -> Mastery
                                  +-- Illusion: Mirrorweave -> Ghostweave
                                  +-- Iron's Endgame: Ancient Codex -> 3 Bosses -> Echo of Tyros
                                  +-- Potions: Flask -> Flask Cannon
                                  +-- Bonus: Gem-Socketed Staves (optional, + Scout)
                                  |
                                  +---> [[Arcane Supremacy]]
```

---

## Cross-Path Design Rule

Cross-path quests are ALWAYS optional. They never block rank milestones or main-line progression.

### Cross-path quests IN this chapter (optional):

| Quest | Depends on (other chapter) | Blocks anything? |
|-------|---------------------------|-------------------|
| Gem-Socketed Staves | Gem Mastery (Scout) | No — optional |

### Quests in OTHER chapters that depend on this chapter (also optional there):

None currently — Magic is self-contained. Other paths reference magic concepts in descriptions but don't gate on Magic quests.

---

## Glyph Quest Design Notes

- Each glyph quest uses shape `"rsquare"` (rounded square) for visual distinction
- Glyphs are grouped by tier: Tier 1 needs Novice Book, Tier 2 needs Mage's Book, Tier 3 needs Archmage Book
- Not all 68 glyphs are individual quests — only the ~34 most gameplay-relevant ones
- Remaining glyphs are naturally discovered as the player experiments
- Key glyph descriptions should suggest spell combos:
  - "Projectile + Harm + Amplify = ranged damage nuke"
  - "Self + Blink = teleport forward"
  - "Projectile + Snare + AOE = crowd control"
  - "Touch + Lightning + Split = chain lightning"

## Armor Choice Node

The Arcanist vs Battlemage choice at Rank 2 is a real gameplay decision:
- **Arcanist:** More thread slots = more perks. Better for pure spellcasters.
- **Battlemage:** Higher defense. Better for hybrid fighter-mages and PvP.

Both lead to the same [Threaded Armor] merge quest.

## Notes for Implementation

- Root quest uses `autofocus_id`
- Use `size: 2.0d` on root and final milestone
- Use `size: 1.5d` on rank milestones
- Glyph quests use `shape: "rsquare"`, no size override
- Companion quests (Starbuncle, Wixie, Drygmy) marked `optional: true`
- Familiar quests (from Ritual: Binding) marked `optional: true`
- Cross-path quests marked `optional: true`
- All item IDs verified against mod JARs (except Iron's Spells structure items — verify inscription_table, enchanted_spell_book, ancient_codex)
- Iron's Spells boss health values from ATM10 research for descriptions
