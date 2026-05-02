// Age of Beds Modpack - Hide MekaSuit from JEI

RecipeViewerEvents.removeEntriesCompletely('item', event => {
  event.remove('mekanism:mekasuit_helmet')
  event.remove('mekanism:mekasuit_bodyarmor')
  event.remove('mekanism:mekasuit_pants')
  event.remove('mekanism:mekasuit_boots')
})
