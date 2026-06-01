// kubejs/server_scripts/recipes/99_sophisticated_backpacks_leather_only.js
// Create dos Cria / Forever dos Crias
// Sophisticated Backpacks balance patch
//
// Goal:
// - Keep the basic/leather backpack craft available.
// - Remove recipes for backpack tiers above leather.
// - Remove recipes for all Sophisticated Backpacks upgrades/augments.
// - Do NOT remove Sophisticated Core or the mod itself.
// - Do NOT touch Sophisticated Storage recipes.

ServerEvents.recipes(event => {
  const MOD = 'sophisticatedbackpacks'

  console.info('[Create dos Cria] Applying Sophisticated Backpacks leather-only balance patch.')

  // ------------------------------------------------------------
  // 1) Remove backpack tiers above leather/basic
  // ------------------------------------------------------------
  // The leather/basic backpack is normally:
  // sophisticatedbackpacks:backpack
  //
  // We intentionally DO NOT remove that recipe.
  // These filters target only upgraded backpack tiers.

  event.remove({
    mod: MOD,
    output: /sophisticatedbackpacks:(copper|iron|gold|diamond|netherite)_backpack/
  })

  event.remove({
    mod: MOD,
    id: /sophisticatedbackpacks:.*(copper|iron|gold|diamond|netherite)_backpack.*/
  })

  // ------------------------------------------------------------
  // 2) Remove all upgrade / augment recipes from Sophisticated Backpacks
  // ------------------------------------------------------------
  // This catches:
  // - upgrade_base
  // - pickup_upgrade / advanced_pickup_upgrade
  // - magnet_upgrade / advanced_magnet_upgrade
  // - stack_upgrade_tier_1, etc.
  // - feeding, compacting, void, deposit, restock, refill, crafting,
  //   stonecutter, jukebox, tank, battery, pump, xp pump, tool swapper, etc.
  //
  // It also catches future upgrade outputs added by the mod, as long as the
  // item/recipe id includes "upgrade" or "augment".

  event.remove({
    mod: MOD,
    output: /sophisticatedbackpacks:.*upgrade.*/
  })

  event.remove({
    mod: MOD,
    id: /sophisticatedbackpacks:.*upgrade.*/
  })

  event.remove({
    mod: MOD,
    output: /sophisticatedbackpacks:.*augment.*/
  })

  event.remove({
    mod: MOD,
    id: /sophisticatedbackpacks:.*augment.*/
  })

  // ------------------------------------------------------------
  // 3) Safety: exact common tier outputs
  // ------------------------------------------------------------
  // Kept as a backup for recipe ids that may not match the regex cleanly.

  ;[
    'sophisticatedbackpacks:copper_backpack',
    'sophisticatedbackpacks:iron_backpack',
    'sophisticatedbackpacks:gold_backpack',
    'sophisticatedbackpacks:diamond_backpack',
    'sophisticatedbackpacks:netherite_backpack'
  ].forEach(item => {
    event.remove({ mod: MOD, output: item })
  })

  console.info('[Create dos Cria] Sophisticated Backpacks: leather backpack kept; higher tiers/upgrades removed.')
})
