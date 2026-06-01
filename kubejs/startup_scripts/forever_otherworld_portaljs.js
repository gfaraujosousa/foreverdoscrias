// Optional integration: PortalJS true Nether-like portal.
// Requires PortalJS installed on BOTH client and server.
// If PortalJS is not installed, this script does nothing and the server_scripts fallback portal is used.

if (Platform.isLoaded('portaljs')) {
  PortalEvents.register(event => {
    event.create()
      .frameBlock('minecraft:mossy_cobblestone')
      .setDestination('forever:otherworld')
      .lightWithWater()
      .forcedSize(2, 3)
      .returnDim('minecraft:overworld')
      .tint(0x7d5fff)
  })
}
