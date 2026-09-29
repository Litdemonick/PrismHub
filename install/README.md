# PrismHub Installer

Instalador universal para PrismHub con detección automática de plataforma y arquitectura.

## Instalación rápida

### Linux / macOS — sin verificar

Todavía no se probó que PrismHub funcione en Linux, así que por ahora **no
se puede instalar**: el script de instalación avisa y sale sin instalar
nada. Se habilita cuando esté verificado.

### Windows (PowerShell)
```powershell
irm https://raw.githubusercontent.com/Litdemonick/PrismHub/main/install/install.ps1 | iex
```

### Arch Linux (PKGBUILD) — sin verificar

Igual que el script: por ahora el PKGBUILD avisa y no instala nada.

## Dependencias (Linux)

| Distribución | Comando |
|---|---|
| Arch Linux / derivados | `pacman -S gtk3 mpv` |
| Debian / Ubuntu | `apt-get install libgtk-3-0 mpv` |
| Fedora / RHEL | `dnf install gtk3 mpv` |
| openSUSE | `zypper install gtk3 mpv` |

## Assets en GitHub Releases

| Plataforma | Asset |
|---|---|
| Linux x64 | sin verificar |
| Linux arm64 | sin verificar |
| Windows x64 | `PrismHub-<tag>-windows-x64.zip` |

