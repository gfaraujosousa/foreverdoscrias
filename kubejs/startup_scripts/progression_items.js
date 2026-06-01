// kubejs/startup_scripts/progression_items.js
// Custom progression items for the Create Aeronautics-centered modpack.
// IMPORTANT: Restart the game after changing startup scripts.

StartupEvents.registry('item', event => {
  const basic = (id, name) => event.create(id).displayName(name).maxStackSize(64)
  const rare = (id, name) => event.create(id).displayName(name).rarity('rare').maxStackSize(64)
  const epic = (id, name) => event.create(id).displayName(name).rarity('epic').glow(true).maxStackSize(64)

  // Mainline: approachable progression until the first vehicle achievement.
  basic('rough_mechanism', 'Rough Mechanism')
  basic('basic_machine_core', 'Basic Machine Core')
  basic('copper_circuit', 'Copper Circuit')
  rare('brass_machine_core', 'Brass Machine Core')
  rare('basic_control_circuit', 'Basic Control Circuit')
  rare('sealed_mechanism', 'Sealed Mechanism')
  rare('industrial_bearing', 'Industrial Bearing')
  rare('fuel_injector', 'Fuel Injector')
  rare('steel_airframe_segment', 'Steel Airframe Segment')
  epic('aviation_engine', 'Aviation Engine')
  epic('flight_computer', 'Flight Computer')
  epic('navigation_core', 'Navigation Core')
  epic('lift_cell', 'Lift Cell')
  epic('stabilized_propeller', 'Stabilized Propeller')

  // Optional challenger/post-vehicle branch.
  epic('heavy_machine_frame', 'Heavy Machine Frame')
  epic('pressurized_machine_frame', 'Pressurized Machine Frame')
  epic('orbital_navigation_core', 'Orbital Navigation Core')
  epic('spaceworthy_engine', 'Spaceworthy Engine')
  epic('aetheric_singularity', 'Aetheric Singularity')

  // Sequenced assembly transitional items.
  event.create('incomplete_copper_circuit', 'create:sequenced_assembly').displayName('Incomplete Copper Circuit')
  event.create('incomplete_basic_control_circuit', 'create:sequenced_assembly').displayName('Incomplete Basic Control Circuit')
  event.create('incomplete_fuel_injector', 'create:sequenced_assembly').displayName('Incomplete Fuel Injector')
  event.create('incomplete_flight_computer', 'create:sequenced_assembly').displayName('Incomplete Flight Computer')
  event.create('incomplete_navigation_core', 'create:sequenced_assembly').displayName('Incomplete Navigation Core')
  event.create('incomplete_lift_cell', 'create:sequenced_assembly').displayName('Incomplete Lift Cell')
  event.create('incomplete_orbital_navigation_core', 'create:sequenced_assembly').displayName('Incomplete Orbital Navigation Core')
})
