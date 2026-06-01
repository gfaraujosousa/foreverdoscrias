// Forever dos Crias 1.3.0
// Dedicated-server-safe fallback Otherworld access.
// PortalJS is intentionally not required. Players use an easy anchor block
// instead of fragile water-frame scans.

const FDC_OTHERWORLD = 'forever:otherworld'
const FDC_OVERWORLD = 'minecraft:overworld'
const FDC_ANCHOR = 'kubejs:otherworld_anchor'
const FDC_PORTAL_Y = 96

function fdcDim(level) {
  const raw = String(level.dimension)
  if (raw === FDC_OVERWORLD || raw.includes(FDC_OVERWORLD)) return FDC_OVERWORLD
  if (raw === FDC_OTHERWORLD || raw.includes(FDC_OTHERWORLD)) return FDC_OTHERWORLD
  return raw
}

function fdcLevel(event) {
  return event.level || event.player.level
}

function fdcChunkCoord(blockCoord) {
  return Math.floor(Number(blockCoord) / 16)
}

function fdcCoordFromBlock(event, axis) {
  const fromBlock = Math.floor(Number(event.block[axis]))
  if (!Number.isNaN(fromBlock)) return fromBlock
  return Math.floor(Number(event.player[axis]))
}

function fdcCoordFromPlayer(player, axis) {
  return Math.floor(Number(player[axis]))
}

function fdcTp(server, player, dim, x, y, z) {
  server.runCommandSilent(`execute in ${dim} run tp ${player.username} ${Number(x).toFixed(2)} ${Number(y).toFixed(2)} ${Number(z).toFixed(2)}`)
}

function fdcBuildOtherworldLanding(server, x, z) {
  const cx = fdcChunkCoord(x)
  const cz = fdcChunkCoord(z)
  const baseX = Math.floor(Number(x))
  const baseY = FDC_PORTAL_Y
  const baseZ = Math.floor(Number(z))

  server.runCommandSilent(`execute in ${FDC_OTHERWORLD} run forceload add ${cx} ${cz}`)
  server.runCommandSilent(`execute in ${FDC_OTHERWORLD} run fill ${baseX - 4} ${baseY - 1} ${baseZ - 4} ${baseX + 4} ${baseY + 5} ${baseZ + 4} minecraft:air replace`)
  server.runCommandSilent(`execute in ${FDC_OTHERWORLD} run fill ${baseX - 3} ${baseY - 1} ${baseZ - 3} ${baseX + 3} ${baseY - 1} ${baseZ + 3} minecraft:mossy_cobblestone replace`)
  server.runCommandSilent(`execute in ${FDC_OTHERWORLD} run fill ${baseX - 1} ${baseY} ${baseZ - 1} ${baseX + 1} ${baseY} ${baseZ + 1} minecraft:glowstone replace`)
  server.runCommandSilent(`execute in ${FDC_OTHERWORLD} run setblock ${baseX} ${baseY} ${baseZ} ${FDC_ANCHOR} replace`)
  server.runCommandSilent(`execute in ${FDC_OTHERWORLD} run setblock ${baseX} ${baseY + 1} ${baseZ} minecraft:water replace`)
  server.runCommandSilent(`execute in ${FDC_OTHERWORLD} run forceload remove ${cx} ${cz}`)
}

function fdcUseOtherworldAnchor(event, x, y, z) {
  const player = event.player
  if (!player || player.isFake()) return

  const dim = fdcDim(fdcLevel(event))
  if (dim !== FDC_OVERWORLD && dim !== FDC_OTHERWORLD) {
    player.tell('The Otherworld Anchor only responds in the Overworld or the Otherworld.')
    return
  }

  if (event.cancel) event.cancel()

  const data = player.persistentData
  const cooldown = data.fdcOtherworldPortalCooldown || 0
  if (cooldown > 0) return
  data.fdcOtherworldPortalCooldown = 80

  const ax = Math.floor(Number(x))
  const ay = Math.floor(Number(y))
  const az = Math.floor(Number(z))

  if (dim === FDC_OVERWORLD) {
    data.fdcOtherworldReturnX = ax + 0.5
    data.fdcOtherworldReturnY = ay + 1.0
    data.fdcOtherworldReturnZ = az + 0.5

    player.tell('Opening the way to the Otherworld...')
    fdcBuildOtherworldLanding(event.server, ax, az)
    fdcTp(event.server, player, FDC_OTHERWORLD, ax + 0.5, FDC_PORTAL_Y + 1.0, az + 0.5)
    player.tell('You crossed into the Otherworld.')
  } else {
    const rx = data.fdcOtherworldReturnX || 0.5
    const ry = data.fdcOtherworldReturnY || 90.0
    const rz = data.fdcOtherworldReturnZ || 0.5

    fdcTp(event.server, player, FDC_OVERWORLD, rx, ry, rz)
    player.tell('You returned to the normal world.')
  }
}

BlockEvents.rightClicked(FDC_ANCHOR, event => {
  fdcUseOtherworldAnchor(
    event,
    fdcCoordFromBlock(event, 'x'),
    fdcCoordFromBlock(event, 'y'),
    fdcCoordFromBlock(event, 'z')
  )
})

BlockEvents.leftClicked(FDC_ANCHOR, event => {
  fdcUseOtherworldAnchor(
    event,
    fdcCoordFromBlock(event, 'x'),
    fdcCoordFromBlock(event, 'y'),
    fdcCoordFromBlock(event, 'z')
  )
})

ItemEvents.rightClicked(FDC_ANCHOR, event => {
  fdcUseOtherworldAnchor(
    event,
    fdcCoordFromPlayer(event.player, 'x'),
    fdcCoordFromPlayer(event.player, 'y'),
    fdcCoordFromPlayer(event.player, 'z')
  )
})

PlayerEvents.tick(event => {
  const player = event.player
  if (!player || player.isFake()) return

  const data = player.persistentData
  const cooldown = data.fdcOtherworldPortalCooldown || 0
  if (cooldown > 0) data.fdcOtherworldPortalCooldown = Math.max(0, cooldown - 1)
})
