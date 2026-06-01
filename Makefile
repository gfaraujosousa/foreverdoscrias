PACK_NAME ?= $(shell awk -F ' = ' '$$1 == "name" { gsub(/"/, "", $$2); print $$2; exit }' pack.toml)
PACK_VERSION ?= $(shell awk -F ' = ' '$$1 == "version" { gsub(/"/, "", $$2); print $$2; exit }' pack.toml)
DIST_DIR ?= dist
ARTIFACT_PREFIX := $(PACK_NAME)-$(PACK_VERSION)

.PHONY: help check-packwiz refresh list test build build-client build-server modrinth curseforge-client curseforge-server clean

help:
	@printf '%s\n' 'Available targets:'
	@printf '  %-20s %s\n' 'make refresh' 'Refresh packwiz index.toml'
	@printf '  %-20s %s\n' 'make list' 'List packwiz files/mods'
	@printf '  %-20s %s\n' 'make test' 'Run lightweight pack validation'
	@printf '  %-20s %s\n' 'make build' 'Build all release artifacts'
	@printf '  %-20s %s\n' 'make build-client' 'Build Modrinth and client CurseForge artifacts'
	@printf '  %-20s %s\n' 'make build-server' 'Build server CurseForge artifact'
	@printf '  %-20s %s\n' 'make modrinth' 'Build Modrinth .mrpack'
	@printf '  %-20s %s\n' 'make curseforge-client' 'Build CurseForge client zip'
	@printf '  %-20s %s\n' 'make curseforge-server' 'Build CurseForge server zip'
	@printf '  %-20s %s\n' 'make clean' 'Remove build artifacts'
	@printf '\n%s\n' 'Override defaults with PACK_VERSION=..., PACK_NAME=..., or DIST_DIR=...'

check-packwiz:
	@command -v packwiz >/dev/null 2>&1 || { \
		printf '%s\n' 'packwiz is required but was not found in PATH.' >&2; \
		printf '%s\n' 'Install it with: go install github.com/packwiz/packwiz@latest' >&2; \
		exit 1; \
	}

refresh: check-packwiz
	packwiz --yes refresh

list: check-packwiz
	packwiz list

test: refresh list

build: build-client build-server

build-client: modrinth curseforge-client

build-server: curseforge-server

modrinth: check-packwiz
	mkdir -p "$(DIST_DIR)"
	packwiz --yes modrinth export --output "$(DIST_DIR)/$(ARTIFACT_PREFIX).mrpack"

curseforge-client: check-packwiz
	mkdir -p "$(DIST_DIR)"
	packwiz --yes curseforge export --side client --output "$(DIST_DIR)/$(ARTIFACT_PREFIX)-curseforge-client.zip"

curseforge-server: check-packwiz
	mkdir -p "$(DIST_DIR)"
	packwiz --yes curseforge export --side server --output "$(DIST_DIR)/$(ARTIFACT_PREFIX)-curseforge-server.zip"

clean:
	rm -rf "$(DIST_DIR)"
