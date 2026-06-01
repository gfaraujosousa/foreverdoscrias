// kubejs/server_scripts/recipes/00_optional_custom_items.js
// Create dos Cria v0.5
// Custom KubeJS items are now a TOTALLY OPTIONAL side branch.
// Important rules:
// - Do NOT remove or replace any original mod recipes here.
// - Do NOT gate Create, Oritech, TFMG, CC:Tweaked, Stellaris, or any other mod behind these items.
// - These recipes exist only for players who want the optional Aetheric Singularity post-game goal.
// - Main modpack progression should remain fun-first and close to original mod pacing.

ServerEvents.recipes(event => {
  const IRON_PLATE = '#c:plates/iron'
  const COPPER_PLATE = '#c:plates/copper'
  const BRASS_PLATE = '#c:plates/brass'
  const STEEL_PLATE = '#c:plates/steel'
  const REDSTONE_DUST = 'minecraft:redstone'
  const mc = event.recipes.create.mechanical_crafting
  const seq = event.recipes.create.sequenced_assembly

  // ------------------------------------------------------------
  // Optional custom item chain - early/mid tier
  // ------------------------------------------------------------

  event.shaped('kubejs:rough_mechanism', [
    ' A ',
    'BCB',
    ' A '
  ], {
    A: 'create:andesite_alloy',
    B: 'create:cogwheel',
    C: 'create:shaft'
  }).id('kubejs:optional_rough_mechanism')

  mc('kubejs:basic_machine_core', [
    'ABA',
    'CDC',
    'ABA'
  ], {
    A: 'create:andesite_alloy',
    B: 'create:cogwheel',
    C: IRON_PLATE,
    D: 'create:copper_casing'
  }).id('kubejs:optional_basic_machine_core_mechanical')

  seq('kubejs:copper_circuit', COPPER_PLATE, [
    event.recipes.create.deploying('kubejs:incomplete_copper_circuit', ['kubejs:incomplete_copper_circuit', REDSTONE_DUST]),
    event.recipes.create.pressing('kubejs:incomplete_copper_circuit', 'kubejs:incomplete_copper_circuit')
  ])
    .transitionalItem('kubejs:incomplete_copper_circuit')
    .loops(1)
    .id('kubejs:optional_copper_circuit_sequenced')

  mc('kubejs:brass_machine_core', [
    ' ABA ',
    'BCDCB',
    'ADEDA',
    'BCDCB',
    ' ABA '
  ], {
    A: BRASS_PLATE,
    B: 'create:brass_casing',
    C: 'create:precision_mechanism',
    D: 'kubejs:basic_machine_core',
    E: 'create:electron_tube'
  }).id('kubejs:optional_brass_machine_core_mechanical')

  seq('kubejs:basic_control_circuit', 'kubejs:copper_circuit', [
    event.recipes.create.deploying('kubejs:incomplete_basic_control_circuit', ['kubejs:incomplete_basic_control_circuit', 'create:electron_tube']),
    event.recipes.create.pressing('kubejs:incomplete_basic_control_circuit', 'kubejs:incomplete_basic_control_circuit')
  ])
    .transitionalItem('kubejs:incomplete_basic_control_circuit')
    .loops(1)
    .id('kubejs:optional_basic_control_circuit_sequenced')

  mc('kubejs:sealed_mechanism', [
    ' ABA ',
    'BCDCB',
    'ADEDA',
    'BCDCB',
    ' ABA '
  ], {
    A: BRASS_PLATE,
    B: 'create:fluid_pipe',
    C: 'create:precision_mechanism',
    D: 'kubejs:brass_machine_core',
    E: 'minecraft:slime_ball'
  }).id('kubejs:optional_sealed_mechanism_mechanical')

  // ------------------------------------------------------------
  // Optional custom item chain - industrial/aeronautics flavor
  // These do not unlock or replace original Aeronautics content.
  // They are only ingredients for optional prestige crafting.
  // ------------------------------------------------------------

  mc('kubejs:industrial_bearing', [
    ' ABA ',
    'BCDCB',
    'ADEDA',
    'BCDCB',
    ' ABA '
  ], {
    A: STEEL_PLATE,
    B: 'create:shaft',
    C: 'create:precision_mechanism',
    D: 'create:brass_casing',
    E: 'kubejs:sealed_mechanism'
  }).id('kubejs:optional_industrial_bearing_mechanical')

  seq('kubejs:fuel_injector', 'create:fluid_pipe', [
    event.recipes.create.deploying('kubejs:incomplete_fuel_injector', ['kubejs:incomplete_fuel_injector', 'create:copper_sheet']),
    event.recipes.create.filling('kubejs:incomplete_fuel_injector', ['kubejs:incomplete_fuel_injector', Fluid.of('minecraft:lava', 250)]),
    event.recipes.create.pressing('kubejs:incomplete_fuel_injector', 'kubejs:incomplete_fuel_injector')
  ])
    .transitionalItem('kubejs:incomplete_fuel_injector')
    .loops(1)
    .id('kubejs:optional_fuel_injector_sequenced')

  mc('2x kubejs:steel_airframe_segment', [
    'AABAA',
    'ACDCA',
    'BDEDB',
    'ACDCA',
    'AABAA'
  ], {
    A: STEEL_PLATE,
    B: 'create:sturdy_sheet',
    C: 'create:andesite_alloy',
    D: 'create:shaft',
    E: 'create:brass_casing'
  }).id('kubejs:optional_steel_airframe_segment_mechanical')

  mc('kubejs:stabilized_propeller', [
    'A B A',
    ' ABC ',
    'BCDDB',
    ' CBA ',
    'A B A'
  ], {
    A: STEEL_PLATE,
    B: 'create:shaft',
    C: 'kubejs:industrial_bearing',
    D: 'create:precision_mechanism'
  }).id('kubejs:optional_stabilized_propeller_mechanical')

  mc('kubejs:aviation_engine', [
    ' ABC ',
    'BDEDB',
    'CEFEC',
    'BDEDB',
    ' ABC '
  ], {
    A: 'create:shaft',
    B: BRASS_PLATE,
    C: 'kubejs:industrial_bearing',
    D: 'kubejs:fuel_injector',
    E: 'create:precision_mechanism',
    F: 'kubejs:basic_machine_core'
  }).id('kubejs:optional_aviation_engine_mechanical')

  seq('kubejs:flight_computer', 'computercraft:computer_normal', [
    event.recipes.create.deploying('kubejs:incomplete_flight_computer', ['kubejs:incomplete_flight_computer', 'kubejs:basic_control_circuit']),
    event.recipes.create.deploying('kubejs:incomplete_flight_computer', ['kubejs:incomplete_flight_computer', 'minecraft:compass']),
    event.recipes.create.pressing('kubejs:incomplete_flight_computer', 'kubejs:incomplete_flight_computer')
  ])
    .transitionalItem('kubejs:incomplete_flight_computer')
    .loops(1)
    .id('kubejs:optional_flight_computer_sequenced')

  seq('kubejs:navigation_core', 'minecraft:compass', [
    event.recipes.create.deploying('kubejs:incomplete_navigation_core', ['kubejs:incomplete_navigation_core', 'kubejs:basic_control_circuit']),
    event.recipes.create.deploying('kubejs:incomplete_navigation_core', ['kubejs:incomplete_navigation_core', 'minecraft:amethyst_shard']),
    event.recipes.create.pressing('kubejs:incomplete_navigation_core', 'kubejs:incomplete_navigation_core')
  ])
    .transitionalItem('kubejs:incomplete_navigation_core')
    .loops(1)
    .id('kubejs:optional_navigation_core_sequenced')

  seq('kubejs:lift_cell', 'minecraft:glass', [
    event.recipes.create.deploying('kubejs:incomplete_lift_cell', ['kubejs:incomplete_lift_cell', 'kubejs:sealed_mechanism']),
    event.recipes.create.filling('kubejs:incomplete_lift_cell', ['kubejs:incomplete_lift_cell', Fluid.of('minecraft:water', 500)]),
    event.recipes.create.pressing('kubejs:incomplete_lift_cell', 'kubejs:incomplete_lift_cell')
  ])
    .transitionalItem('kubejs:incomplete_lift_cell')
    .loops(2)
    .id('kubejs:optional_lift_cell_sequenced')

  // ------------------------------------------------------------
  // Optional alternate recipes for original items.
  // Original recipes are preserved; these are just flavor alternatives.
  // ------------------------------------------------------------

  event.shaped('computercraft:computer_normal', [
    'ABA',
    'CDC',
    'AEA'
  ], {
    A: '#c:plates/iron',
    B: 'minecraft:glass_pane',
    C: 'kubejs:copper_circuit',
    D: 'kubejs:basic_machine_core',
    E: 'minecraft:redstone'
  }).id('kubejs:optional_alt_computercraft_computer_normal')

  event.shaped('computercraft:computer_advanced', [
    'ABA',
    'CDC',
    'AEA'
  ], {
    A: '#c:plates/gold',
    B: 'minecraft:glass_pane',
    C: 'kubejs:basic_control_circuit',
    D: 'kubejs:brass_machine_core',
    E: 'computercraft:computer_normal'
  }).id('kubejs:optional_alt_computercraft_computer_advanced')

  event.shaped('create:electron_tube', [
    ' A ',
    ' B ',
    ' C '
  ], {
    A: 'minecraft:redstone_torch',
    B: 'kubejs:copper_circuit',
    C: '#c:plates/iron'
  }).id('kubejs:optional_alt_create_electron_tube')
})
