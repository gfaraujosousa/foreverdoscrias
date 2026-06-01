// kubejs/server_scripts/recipes/90_optional_aetheric_singularity.js
// Create dos Cria v0.5.1
// Clean optional branch: does not remove or replace original mod recipes.
// Optional post-game only. No original recipe is removed or replaced here.
// The Aetheric Singularity is meant to reward factory scaling, resource generation, and automation mastery.

ServerEvents.recipes(event => {
  const STEEL_PLATE = '#c:plates/steel'
  const BRASS_PLATE = '#c:plates/brass'

  const mc = event.recipes.create.mechanical_crafting
  const seq = event.recipes.create.sequenced_assembly

  mc('kubejs:heavy_machine_frame', [
    'AAAAAAA',
    'ABCCCBA',
    'ACDEDCA',
    'ACDFDCA',
    'ACDEDCA',
    'ABCCCBA',
    'AAAAAAA'
  ], {
    A: STEEL_PLATE,
    B: 'create:sturdy_sheet',
    C: 'kubejs:sealed_mechanism',
    D: 'kubejs:brass_machine_core',
    E: 'create:precision_mechanism',
    F: 'kubejs:aviation_engine'
  }).id('kubejs:optional_heavy_machine_frame')

  mc('kubejs:pressurized_machine_frame', [
    'AAAAAAA',
    'ABCCCBA',
    'ACDEDCA',
    'ACDFDCA',
    'ACDEDCA',
    'ABCCCBA',
    'AAAAAAA'
  ], {
    A: STEEL_PLATE,
    B: 'create:sturdy_sheet',
    C: 'kubejs:sealed_mechanism',
    D: 'kubejs:heavy_machine_frame',
    E: 'kubejs:basic_control_circuit',
    F: 'minecraft:obsidian'
  }).id('kubejs:optional_pressurized_machine_frame')

  seq('kubejs:orbital_navigation_core', 'kubejs:navigation_core', [
    event.recipes.create.deploying('kubejs:incomplete_orbital_navigation_core', ['kubejs:incomplete_orbital_navigation_core', 'kubejs:flight_computer']),
    event.recipes.create.deploying('kubejs:incomplete_orbital_navigation_core', ['kubejs:incomplete_orbital_navigation_core', 'minecraft:ender_eye']),
    event.recipes.create.deploying('kubejs:incomplete_orbital_navigation_core', ['kubejs:incomplete_orbital_navigation_core', 'minecraft:nether_star']),
    event.recipes.create.pressing('kubejs:incomplete_orbital_navigation_core', 'kubejs:incomplete_orbital_navigation_core')
  ])
    .transitionalItem('kubejs:incomplete_orbital_navigation_core')
    .loops(6)
    .id('kubejs:optional_orbital_navigation_core')

  mc('kubejs:spaceworthy_engine', [
    'AABABAA',
    'ACDEDCA',
    'BEFGFEB',
    'ADGHGDA',
    'BEFGFEB',
    'ACDEDCA',
    'AABABAA'
  ], {
    A: STEEL_PLATE,
    B: 'kubejs:pressurized_machine_frame',
    C: 'kubejs:industrial_bearing',
    D: 'kubejs:fuel_injector',
    E: 'kubejs:navigation_core',
    F: 'create:sturdy_sheet',
    G: 'kubejs:aviation_engine',
    H: 'minecraft:nether_star'
  }).id('kubejs:optional_spaceworthy_engine')

  // Final optional prestige item.
  // Expensive enough to require automation/scaling, but not tied to normal pack progression.
  mc('kubejs:aetheric_singularity', [
    'PNLOROLNP',
    'NHDFCFEHN',
    'LBASGSABL',
    'OFQMTMQFO',
    'RSGTXTGSR',
    'OFQMTMQFO',
    'LBASGSABL',
    'NHDFCFEHN',
    'PNLOROLNP'
  ], {
    P: 'kubejs:stabilized_propeller',
    N: 'kubejs:navigation_core',
    L: 'kubejs:lift_cell',
    O: 'kubejs:orbital_navigation_core',
    R: 'kubejs:pressurized_machine_frame',
    H: 'kubejs:heavy_machine_frame',
    E: 'kubejs:spaceworthy_engine',
    F: 'kubejs:flight_computer',
    C: 'kubejs:basic_control_circuit',
    B: 'kubejs:brass_machine_core',
    A: 'kubejs:aviation_engine',
    S: 'kubejs:steel_airframe_segment',
    G: 'minecraft:nether_star',
    M: 'create:precision_mechanism',
    T: 'create:sturdy_sheet',
    X: 'minecraft:end_crystal',
    D: 'minecraft:diamond_block',
    Q: 'minecraft:emerald_block'
  }).id('kubejs:optional_aetheric_singularity_avaritia_style')
})
