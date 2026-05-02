// Age of Beds Modpack - MekaSuit Recipe Gating
// Requires players to have fusion reactor components before crafting MekaSuit.
// This ensures MekaSuit is gated behind the fusion reactor progression tier.
//
// TODO: Verify all item IDs in-game via JEI (press R on an item).
// Fusion reactor items use the "mekanismgenerators:" namespace, not "mekanism:".

ServerEvents.recipes(event => {
  // Remove default MekaSuit recipes
  event.remove({ output: 'mekanism:mekasuit_helmet' })
  event.remove({ output: 'mekanism:mekasuit_bodyarmor' })
  event.remove({ output: 'mekanism:mekasuit_pants' })
  event.remove({ output: 'mekanism:mekasuit_boots' })

  // If removal by output doesn't work, try by recipe ID:
  // event.remove({ id: 'mekanism:mekasuit_helmet' })
  // event.remove({ id: 'mekanism:mekasuit_bodyarmor' })
  // event.remove({ id: 'mekanism:mekasuit_pants' })
  // event.remove({ id: 'mekanism:mekasuit_boots' })

  // Legend:
  // F = mekanismgenerators:fusion_reactor_frame
  // C = mekanism:ultimate_control_circuit
  // H = mekanism:hdpe_sheet
  // I = mekanism:basic_induction_cell

  // MekaSuit Helmet
  // F H F
  // H C H
  //   I
  event.shaped(
    'mekanism:mekasuit_helmet',
    [
      'FHF',
      'HCH',
      ' I '
    ],
    {
      F: 'mekanismgenerators:fusion_reactor_frame',
      H: 'mekanism:hdpe_sheet',
      C: 'mekanism:ultimate_control_circuit',
      I: 'mekanism:basic_induction_cell'
    }
  )

  // MekaSuit Body Armor
  // F C F
  // H H H
  // H   H
  event.shaped(
    'mekanism:mekasuit_bodyarmor',
    [
      'FCF',
      'HHH',
      'H H'
    ],
    {
      F: 'mekanismgenerators:fusion_reactor_frame',
      C: 'mekanism:ultimate_control_circuit',
      H: 'mekanism:hdpe_sheet'
    }
  )

  // MekaSuit Pants
  // C H C
  // F   F
  // H   H
  event.shaped(
    'mekanism:mekasuit_pants',
    [
      'CHC',
      'F F',
      'H H'
    ],
    {
      C: 'mekanism:ultimate_control_circuit',
      H: 'mekanism:hdpe_sheet',
      F: 'mekanismgenerators:fusion_reactor_frame'
    }
  )

  // MekaSuit Boots
  // C   C
  // F H F
  event.shaped(
    'mekanism:mekasuit_boots',
    [
      'C C',
      'FHF'
    ],
    {
      C: 'mekanism:ultimate_control_circuit',
      H: 'mekanism:hdpe_sheet',
      F: 'mekanismgenerators:fusion_reactor_frame'
    }
  )
})
