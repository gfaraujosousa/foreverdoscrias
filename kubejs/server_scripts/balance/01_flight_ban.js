// kubejs/server_scripts/balance/01_flight_ban.js
// v0.3 - Flight progression through crafted Elytra instead of End City loot bans.

const FDC_END_ELYTRA_FRAME_COMMANDS = [
  'execute in minecraft:the_end run kill @e[type=minecraft:item_frame,nbt={Item:{id:"minecraft:elytra"}}]',
  'execute in minecraft:the_end run kill @e[type=minecraft:glow_item_frame,nbt={Item:{id:"minecraft:elytra"}}]',
  'execute in minecraft:the_end run kill @e[type=lootr:item_frame,nbt={Item:{id:"minecraft:elytra"}}]'
]

function fdcRemoveEndElytraFrames(server) {
  FDC_END_ELYTRA_FRAME_COMMANDS.forEach(command => server.runCommandSilent(command))
}

ServerEvents.recipes(event => {
  event.remove({ id: 'oritech:particle/elytra' })
  event.remove({ output: 'minecraft:elytra' })

  event.shaped('minecraft:elytra', [
    'ESE',
    'PDP',
    'M M'
  ], {
    E: 'minecraft:end_rod',
    S: 'tfmg:steel_mechanism',
    P: 'tfmg:plastic_sheet',
    D: 'minecraft:dragon_breath',
    M: 'minecraft:shulker_shell'
  }).id('kubejs:tfmg_end_elytra')

  console.info('[KubeJS] Elytra is craftable through TFMG + End progression; Oritech Elytra recipes are left enabled.')
})

EntityEvents.spawned(event => {
  const dim = String(event.entity.level.dimension)
  const id = String(event.entity.type)

  if (dim !== 'minecraft:the_end') return
  if (!['minecraft:item_frame', 'minecraft:glow_item_frame', 'lootr:item_frame'].includes(id)) return

  event.server.scheduleInTicks(1, () => fdcRemoveEndElytraFrames(event.server))
})

ServerEvents.loaded(event => {
  fdcRemoveEndElytraFrames(event.server)
})

PlayerEvents.tick(event => {
  if (event.player.age % 200 !== 0) return
  if (String(event.player.level.dimension) !== 'minecraft:the_end') return

  fdcRemoveEndElytraFrames(event.server)
})
