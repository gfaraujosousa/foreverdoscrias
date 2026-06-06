# foreverdoscrias

## Prism Launcher Memory

Prism Launcher does not apply memory allocation or JVM arguments from Modrinth `.mrpack` imports. It will use the launcher's default, commonly 4096 MB, unless the user changes the instance settings.

After importing the pack in Prism Launcher:

1. Right-click the instance and open `Edit`.
2. Open `Settings` > `Java`.
3. Enable `Memory`.
4. Set `Minimum memory allocation` to `10240` MB.
5. Set `Maximum memory allocation` to `10240` MB.
6. Add this JVM argument: `-XX:+UseZGC`.

The repository also includes `prism/instance.cfg` as a Prism/MultiMC settings template for maintainers. It is not exported inside the `.mrpack` because launcher instance settings are not Minecraft override files.

The in-game Memory Settings mod config is set to recommend/warn for 10240 MB, but it cannot force Prism to allocate that amount.

## Default Server

The pack includes `servers.dat` with this multiplayer server:

1. `vanilla.as7.dev:42069`
