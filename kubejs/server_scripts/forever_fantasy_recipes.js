// Forever dos Crias 1.3.0-alpha2
// No hard fantasy gate. The Otherworld portal is accessible with vanilla materials.
// Old alpha1 items remain optional/debug only.

ServerEvents.recipes(event => {
  // Make old test items obtainable only for creative/debug convenience, not required progression.
  event.shapeless('kubejs:otherworld_shard', [
    'minecraft:amethyst_shard',
    'minecraft:ender_pearl'
  ]).id('forever:debug_otherworld_shard')

  event.shapeless('kubejs:otherworld_key', [
    'kubejs:otherworld_shard',
    'minecraft:glowstone_dust'
  ]).id('forever:debug_otherworld_key')

  // Fallback anchor kept intentionally easy for servers without PortalJS.
  // PortalJS installations use the real mossy-cobblestone + water portal instead.
  event.shaped('kubejs:otherworld_anchor', [
    'MMM',
    'AWA',
    'MMM'
  ], {
    A: 'minecraft:amethyst_shard',
    M: 'minecraft:mossy_cobblestone',
    W: 'minecraft:water_bucket'
  }).id('forever:otherworld_anchor_easy')
})
