// kubejs/server_scripts/recipes/20_mod_integration_gates.js
// Retired in 1.3.1.
// This file used to replace base mod ingredients with KubeJS progression items.
// The pack now keeps those custom items optional to avoid hidden cross-mod recipe locks.

ServerEvents.recipes(event => {
  console.info('[Create dos Cria] Old mod-integration gates retired; custom KubeJS progression items are optional.')
})
