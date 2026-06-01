tag @p add fdc_otherworld_traveler
tellraw @a[tag=fdc_otherworld_traveler,limit=1] {"text":"Returning to the normal world...","color":"green"}
execute in minecraft:overworld run forceload add 0 0
execute in minecraft:overworld run fill -7 120 -15 7 128 -1 minecraft:air replace
execute in minecraft:overworld run fill -7 119 -15 7 119 -1 minecraft:polished_andesite replace
execute in minecraft:overworld run fill -2 119 -10 2 119 -6 minecraft:glowstone replace
execute as @a[tag=fdc_otherworld_traveler,limit=1] in minecraft:overworld run tp @s 0.5 120 -8.5
execute in minecraft:overworld run forceload remove 0 0
tag @a[tag=fdc_otherworld_traveler] remove fdc_otherworld_traveler
