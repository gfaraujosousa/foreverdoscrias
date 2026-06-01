// Forever dos Crias 1.3.1
// Runtime safety net: selected fantasy natural mobs must not live in normal/natural dimensions.
// Keep this list explicit so item abilities/projectiles from allowed mods are not discarded.

const FDC_FANTASY_ALLOWED_DIMS = [
  'forever:otherworld',
  'aether:the_aether',
  'undergarden:undergarden',
  'irons_spellbooks:pocket_dimension'
]

const FDC_FANTASY_BLOCKED_ENTITY_IDS = [
  'iceandfire:fire_dragon',
  'iceandfire:ice_dragon',
  'iceandfire:lightning_dragon',
  'iceandfire:cyclops',
  'iceandfire:troll',
  'iceandfire:hippogryph',
  'iceandfire:myrmex_worker',
  'iceandfire:siren',
  'ars_nouveau:wilden_hunter',
  'ars_nouveau:wilden_stalker',
  'ars_nouveau:wilden_guardian',
  'irons_spellbooks:pyromancer',
  'irons_spellbooks:cryomancer',
  'irons_spellbooks:necromancer',
  'infinity_cave:cave_creeper',
  'infinity_cave:deep_crawler'
]

EntityEvents.spawned(event => {
  const entity = event.entity
  if (!entity || entity.isPlayer()) return

  const id = String(entity.type)
  const dim = String(entity.level.dimension)
  if (FDC_FANTASY_BLOCKED_ENTITY_IDS.includes(id) && !FDC_FANTASY_ALLOWED_DIMS.includes(dim)) {
    event.server.scheduleInTicks(1, () => {
      if (entity && entity.isAlive()) {
        entity.discard()
      }
    })
  }
})

ServerEvents.loaded(event => {
  event.server.tell('[Forever dos Crias] Fantasy isolation active: Ice and Fire, Ars Nouveau and related fantasy mobs are restricted to the Otherworld and branch dimensions.')
})
