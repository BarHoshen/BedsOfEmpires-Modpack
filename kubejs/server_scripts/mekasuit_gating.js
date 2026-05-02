// Age of Beds Modpack - MekaSuit Removal
// MekaSuit is too strong for PvP balance. Remove all recipes.

ServerEvents.recipes(event => {
  event.remove({ output: 'mekanism:mekasuit_helmet' })
  event.remove({ output: 'mekanism:mekasuit_bodyarmor' })
  event.remove({ output: 'mekanism:mekasuit_pants' })
  event.remove({ output: 'mekanism:mekasuit_boots' })
})
