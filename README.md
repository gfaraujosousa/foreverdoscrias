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

## Pterodactyl Egg

The repository includes `pterodactyl/egg-foreverdoscrias-neoforge.json` for installing the CurseForge server export on Pterodactyl.

Release workflow:

1. Build the server pack with `make curseforge-server`.
2. Create a GitHub Release for tag `2.0.0`.
3. Upload `dist/foreverdoscrias-2.0.0-curseforge-server.zip` as a release asset.
4. Import `pterodactyl/egg-foreverdoscrias-neoforge.json` into Pterodactyl.
5. Create a server with the imported egg.
6. Set `SERVER_PACK_URL` to the GitHub Release asset URL.
7. Allocate at least `10240` MB memory.
8. Run the install script, then start the server.

Default release asset URL:

```text
https://github.com/gfaraujosousa/foreverdoscrias/releases/download/2.0.0/foreverdoscrias-2.0.0-curseforge-server.zip
```

The egg downloads the server pack, installs NeoForge `21.1.228`, extracts overrides, and downloads the CurseForge manifest mods into `mods/`.
