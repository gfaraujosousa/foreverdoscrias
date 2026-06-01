// kubejs/server_scripts/recipes/10_ingot_unification.js
// v0.4.2 - Ingot path unification fix.
// Focus: remove duplicate manufactured-ingot shortcuts without referencing items that don't exist in this pack.
// Your log showed that oritech:steel_nugget does NOT exist, so nugget recipes were removed from this script.
// Fun-first rule: steel has one clear Create-centered route; the Aetheric Singularity remains the optional grind goal.

ServerEvents.recipes(event => {
  // Steel is the first normalized material because your pack has overlapping Oritech / TFMG steel concepts.
  // Keep this list conservative: only reference confirmed ingot outputs.
  ;[
    'oritech:steel_ingot',
    'tfmg:steel_ingot'
  ].forEach(id => event.remove({ output: id }))

  // Remove direct storage-block outputs for steel, then recreate only the canonical Oritech storage path below.
  // No nugget references here: oritech:steel_nugget does not exist in your installed version.
  ;[
    'oritech:steel_block',
    'tfmg:steel_block'
  ].forEach(id => event.remove({ output: id }))

  // Canonical steel route: Create mixer + superheating.
  // This prevents easier alternate steel recipes while still being understandable and Create-centered.
  event.recipes.create.mixing('oritech:steel_ingot', [
    '#c:ingots/iron',
    'minecraft:coal'
  ]).superheated().id('kubejs:unified_steel_ingot_mixing')

  // Canonical steel storage conversions.
  // These are storage recipes, not alternate ingot-production routes.
  event.shaped('oritech:steel_block', [
    'AAA',
    'AAA',
    'AAA'
  ], {
    A: 'oritech:steel_ingot'
  }).id('kubejs:oritech_steel_ingots_to_block')

  event.shapeless('9x oritech:steel_ingot', [
    'oritech:steel_block'
  ]).id('kubejs:oritech_steel_block_to_ingots')
})
