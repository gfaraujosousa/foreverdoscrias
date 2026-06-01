execute in minecraft:overworld run forceload add 0 0
execute in minecraft:overworld run fill -7 120 -7 7 128 7 minecraft:air replace
execute in minecraft:overworld run fill -7 119 -7 7 119 7 minecraft:mossy_cobblestone replace
execute in minecraft:overworld run fill -2 119 -2 2 119 2 minecraft:glowstone replace
execute in minecraft:overworld run setblock 0 119 0 minecraft:command_block{Command:"function forever:otherworld_enter",TrackOutput:0b} replace
execute in minecraft:overworld run setblock 0 120 0 minecraft:stone_pressure_plate replace
execute in minecraft:overworld run setblock 0 121 0 minecraft:air replace
execute in minecraft:overworld run forceload remove 0 0
tellraw @a {"text":"Otherworld entry pad installed at Overworld 0 120 0.","color":"light_purple"}
