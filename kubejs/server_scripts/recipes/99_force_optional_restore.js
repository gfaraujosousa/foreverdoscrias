// kubejs/server_scripts/recipes/99_force_optional_restore.js
// Create dos Cria v0.5.2
// Safety net: reverses old invasive KubeJS replacements if old scripts were accidentally left in the instance.
// This keeps the custom KubeJS items optional and prevents Oritech/TFMG/Stellaris/etc. recipes
// from being locked behind KubeJS custom progression items.

ServerEvents.recipes(event => {
  console.info('[Create dos Cria] Running optional-branch restore safety net.')

  // ------------------------------------------------------------
  // Reverse old v0.4 mod-integration replacements.
  // These should only affect recipes whose ID namespace belongs to the target mod.
  // They do NOT touch the optional KubeJS custom-item recipes.
  // ------------------------------------------------------------

  // Oritech: old v0.4 replaced redstone with kubejs:copper_circuit.
  // This was the reason recipes like Electrum could become locked behind custom items.
  event.replaceInput({ mod: 'oritech' }, 'kubejs:copper_circuit', 'minecraft:redstone')
  event.replaceInput({ mod: 'oritech' }, 'kubejs:basic_control_circuit', 'minecraft:redstone')
  event.replaceInput({ mod: 'oritech' }, 'kubejs:basic_machine_core', 'minecraft:iron_ingot')
  event.replaceInput({ mod: 'oritech' }, 'kubejs:brass_machine_core', 'create:brass_casing')
  event.replaceInput({ mod: 'oritech' }, 'kubejs:industrial_bearing', 'create:shaft')
  event.replaceInput({ mod: 'oritech' }, 'kubejs:navigation_core', 'minecraft:compass')

  // Advanced Peripherals: restore simple redstone-style control requirements.
  event.replaceInput({ mod: 'advancedperipherals' }, 'kubejs:basic_control_circuit', 'minecraft:redstone')
  event.replaceInput({ mod: 'advanced_peripherals' }, 'kubejs:basic_control_circuit', 'minecraft:redstone')

  // TFMG: restore shaft requirements that were changed to Industrial Bearing.
  event.replaceInput({ mod: 'tfmg' }, 'kubejs:industrial_bearing', 'create:shaft')
  event.replaceInput({ mod: 'createindustry' }, 'kubejs:industrial_bearing', 'create:shaft')

  // Stellaris: restore compass requirements that were changed to Navigation Core.
  event.replaceInput({ mod: 'stellaris' }, 'kubejs:navigation_core', 'minecraft:compass')

  // CC: Tweaked: remove old custom forced computer recipes if present.
  // Then add simple fallback options that do not require KubeJS custom items.
  // If the original recipes are present, these are just extra non-gating alternatives.
  ;[
    'kubejs:computercraft_computer_normal',
    'kubejs:computercraft_computer_advanced'
  ].forEach(id => event.remove({ id: id }))

  event.shaped('computercraft:computer_normal', [
    'AAA',
    'ABA',
    'AAA'
  ], {
    A: 'minecraft:stone',
    B: 'minecraft:redstone'
  }).id('kubejs:restore_computercraft_computer_normal_non_gated')

  event.shaped('computercraft:computer_advanced', [
    'AAA',
    'ABA',
    'ACA'
  ], {
    A: 'minecraft:gold_ingot',
    B: 'minecraft:redstone',
    C: 'computercraft:computer_normal'
  }).id('kubejs:restore_computercraft_computer_advanced_non_gated')

  // Steel normalization now lives in 10_ingot_unification.js and is intentionally kept.
})
