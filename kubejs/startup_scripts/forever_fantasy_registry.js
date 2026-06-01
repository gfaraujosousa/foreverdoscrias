// Forever dos Crias 1.3.0-alpha2
// Compatibility registry for older alpha1 fantasy items/blocks.
// The main Otherworld access is now an accessible mossy-cobblestone + water portal.
// These items are kept to avoid missing ID issues in existing test worlds.

StartupEvents.registry('item', event => {
  event.create('otherworld_shard').displayName('Otherworld Shard').glow(true)
  event.create('stabilized_otherworld_shard').displayName('Stabilized Otherworld Shard').glow(true)
  event.create('mana_mechanism').displayName('Mana Mechanism')
  event.create('arcane_precision_mechanism').displayName('Arcane Precision Mechanism')
  event.create('otherworld_core').displayName('Otherworld Core').glow(true)
  event.create('otherworld_key').displayName('Otherworld Key').glow(true)
  event.create('dragon_resonance_scale').displayName('Dragon Resonance Scale').glow(true)
})

StartupEvents.registry('block', event => {
  event.create('otherworld_anchor')
    .displayName('Otherworld Anchor')
    .hardness(4.0)
    .resistance(30.0)
    .requiresTool(true)
})
