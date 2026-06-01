tag @p add fdc_otherworld_traveler
tellraw @a[tag=fdc_otherworld_traveler,limit=1] {"text":"Crossing into the Otherworld...","color":"light_purple"}
execute in forever:otherworld run forceload add 0 0
execute in forever:otherworld run fill -7 120 -7 7 128 11 minecraft:air replace
execute in forever:otherworld run fill -7 119 -7 7 119 11 minecraft:mossy_cobblestone replace
execute in forever:otherworld run fill -2 119 -2 2 119 2 minecraft:glowstone replace
execute in forever:otherworld run setblock 0 119 8 minecraft:command_block{Command:"function forever:otherworld_return",TrackOutput:0b} replace
execute in forever:otherworld run setblock 0 120 8 minecraft:stone_pressure_plate replace
execute in forever:otherworld run setblock 0 121 8 minecraft:air replace
execute as @a[tag=fdc_otherworld_traveler,limit=1] in forever:otherworld run tp @s 0.5 120 0.5
execute in forever:otherworld run forceload remove 0 0
tag @a[tag=fdc_otherworld_traveler] remove fdc_otherworld_traveler
