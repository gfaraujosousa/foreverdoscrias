// kubejs/server_scripts/recipes/30_excelsius_engineer_fix.js
// Fixes the Cataclysm Spellbooks Engineer/Excelsius chain.
// Some Cataclysm Spellbooks recipe ingredients have assets/lang entries but are not registered items
// in this installed version, so the Engineer and Excelsius chains are recreated with real items only.

ServerEvents.tags('item', event => {
  event.add('cataclysm_spellbooks:technomancy_focus', 'cataclysm:black_steel_ingot')
})

ServerEvents.recipes(event => {
  event.remove({ id: 'cataclysm_spellbooks:technomancy_rune' })
  event.remove({ id: 'cataclysm_spellbooks:technomancy_upgrade_orb' })
  event.remove({ id: 'cataclysm_spellbooks:engineer_hood' })
  event.remove({ id: 'cataclysm_spellbooks:engineer_suit' })
  event.remove({ id: 'cataclysm_spellbooks:engineer_leggings' })
  event.remove({ id: 'cataclysm_spellbooks:engineer_boots' })
  event.remove({ id: 'cataclysm_spellbooks:excel_upgrade_cooldown' })
  event.remove({ id: 'cataclysm_spellbooks:excel_upgrade_mana' })
  event.remove({ id: 'cataclysm_spellbooks:excel_upgrade_resistence' })
  event.remove({ id: 'cataclysm_spellbooks:smithing/excelsius_greaves_upgrade' })
  event.remove({ id: 'cataclysm_spellbooks:smithing/excelsius_leggings_upgrade' })
  event.remove({ id: 'cataclysm_spellbooks:smithing/excelsius_power_chestplate_upgrade' })
  event.remove({ id: 'cataclysm_spellbooks:smithing/excelsius_power_visors_upgrade' })
  event.remove({ id: 'cataclysm_spellbooks:smithing/excelsius_resist_chestplate_upgrade' })
  event.remove({ id: 'cataclysm_spellbooks:smithing/excelsius_resist_visors_upgrade' })
  event.remove({ id: 'cataclysm_spellbooks:smithing/excelsius_speed_chestplate_upgrade' })
  event.remove({ id: 'cataclysm_spellbooks:smithing/excelsius_speed_visors_upgrade' })

  event.shaped('cataclysm_spellbooks:technomancy_upgrade_orb', [
    'BRB',
    'RUR',
    'BMB'
  ], {
    B: 'cataclysm:black_steel_ingot',
    R: 'minecraft:redstone_block',
    U: 'irons_spellbooks:upgrade_orb',
    M: 'cataclysm:mech_eye'
  }).id('kubejs:technomancy_upgrade_orb')

  event.shaped('cataclysm_spellbooks:engineer_hood', [
    'CCC',
    'BMB'
  ], {
    C: 'irons_spellbooks:magic_cloth',
    B: 'cataclysm:black_steel_ingot',
    M: 'cataclysm:mech_eye'
  }).id('kubejs:engineer_hood')

  event.shaped('cataclysm_spellbooks:engineer_suit', [
    'BMB',
    'CCC',
    'CCC'
  ], {
    C: 'irons_spellbooks:magic_cloth',
    B: 'cataclysm:black_steel_ingot',
    M: 'cataclysm:mech_eye'
  }).id('kubejs:engineer_suit')

  event.shaped('cataclysm_spellbooks:engineer_leggings', [
    'CCC',
    'BMB',
    'C C'
  ], {
    C: 'irons_spellbooks:magic_cloth',
    B: 'cataclysm:black_steel_ingot',
    M: 'cataclysm:mech_eye'
  }).id('kubejs:engineer_leggings')

  event.shaped('cataclysm_spellbooks:engineer_boots', [
    'C C',
    'BMB'
  ], {
    C: 'irons_spellbooks:magic_cloth',
    B: 'cataclysm:black_steel_ingot',
    M: 'cataclysm:mech_eye'
  }).id('kubejs:engineer_boots')

  event.shaped('cataclysm_spellbooks:excelsius_speed_visors', [
    'WRW',
    'RHR',
    'UCU'
  ], {
    W: 'cataclysm:witherite_ingot',
    R: 'minecraft:redstone_block',
    H: 'cataclysm_spellbooks:engineer_hood',
    U: 'irons_spellbooks:cooldown_upgrade_orb',
    C: 'cataclysm:black_steel_ingot'
  }).id('kubejs:excelsius_speed_visors')

  event.shaped('cataclysm_spellbooks:excelsius_speed_chestplate', [
    'WEW',
    'RSR',
    'UCU'
  ], {
    W: 'cataclysm:witherite_ingot',
    E: 'minecraft:elytra',
    R: 'minecraft:redstone_block',
    S: 'cataclysm_spellbooks:engineer_suit',
    U: 'irons_spellbooks:cooldown_upgrade_orb',
    C: 'cataclysm:black_steel_ingot'
  }).id('kubejs:excelsius_speed_chestplate')

  event.shaped('cataclysm_spellbooks:excelsius_power_visors', [
    'WAW',
    'AHA',
    'UCU'
  ], {
    W: 'cataclysm:witherite_ingot',
    A: 'minecraft:amethyst_shard',
    H: 'cataclysm_spellbooks:engineer_hood',
    U: 'irons_spellbooks:mana_upgrade_orb',
    C: 'cataclysm:black_steel_ingot'
  }).id('kubejs:excelsius_power_visors')

  event.shaped('cataclysm_spellbooks:excelsius_power_chestplate', [
    'WEW',
    'ASA',
    'UCU'
  ], {
    W: 'cataclysm:witherite_ingot',
    E: 'minecraft:elytra',
    A: 'minecraft:amethyst_block',
    S: 'cataclysm_spellbooks:engineer_suit',
    U: 'irons_spellbooks:mana_upgrade_orb',
    C: 'cataclysm:black_steel_ingot'
  }).id('kubejs:excelsius_power_chestplate')

  event.shaped('cataclysm_spellbooks:excelsius_resist_visors', [
    'WOW',
    'OHO',
    'UCU'
  ], {
    W: 'cataclysm:witherite_ingot',
    O: 'minecraft:obsidian',
    H: 'cataclysm_spellbooks:engineer_hood',
    U: 'irons_spellbooks:protection_upgrade_orb',
    C: 'cataclysm:black_steel_ingot'
  }).id('kubejs:excelsius_resist_visors')

  event.shaped('cataclysm_spellbooks:excelsius_resist_chestplate', [
    'WEW',
    'OSO',
    'UCU'
  ], {
    W: 'cataclysm:witherite_ingot',
    E: 'minecraft:elytra',
    O: 'minecraft:obsidian',
    S: 'cataclysm_spellbooks:engineer_suit',
    U: 'irons_spellbooks:protection_upgrade_orb',
    C: 'cataclysm:black_steel_ingot'
  }).id('kubejs:excelsius_resist_chestplate')

  event.shaped('cataclysm_spellbooks:excelsius_leggings', [
    'WRW',
    'RLR',
    'BCB'
  ], {
    W: 'cataclysm:witherite_ingot',
    R: 'minecraft:redstone_block',
    L: 'cataclysm_spellbooks:engineer_leggings',
    B: 'cataclysm:black_steel_ingot',
    C: 'irons_spellbooks:cooldown_upgrade_orb'
  }).id('kubejs:excelsius_leggings')

  event.shaped('cataclysm_spellbooks:excelsius_greaves', [
    'WRW',
    'RGR',
    'BCB'
  ], {
    W: 'cataclysm:witherite_ingot',
    R: 'minecraft:redstone_block',
    G: 'cataclysm_spellbooks:engineer_boots',
    B: 'cataclysm:black_steel_ingot',
    C: 'irons_spellbooks:cooldown_upgrade_orb'
  }).id('kubejs:excelsius_greaves')
})
