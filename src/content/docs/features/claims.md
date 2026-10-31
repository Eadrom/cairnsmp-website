---
title: Claims
description: Claim and protect land on Cairn SMP with GriefPrevention.
sidebar:
  order: 5
---

Land protection on Cairn SMP uses GriefPrevention. Inside your claim, other players can’t build, break, or open your containers unless you trust them.

## Creating a claim

1. Get a golden shovel with `/kit claim` (10-minute cooldown).
2. Right-click the ground at one corner of the area you want, then at the opposite corner.
3. The claim’s outline appears. Right-click a corner again with the shovel to resize it.

Hold a **stick** and right-click to see claim borders near you.

The smallest claim is **4 blocks wide** and **16 blocks** in area (4×4). Claims reach **128 blocks down** from where you start them and grow deeper automatically as you build or dig below that.

## Claim blocks

Every claim spends claim blocks, one per block of surface area.

- You **earn** claim blocks over time while you play.
- You can **buy** more with `/buyclaimblocks <amount>` at $1 of in-game money per block.
- `/claimslist` shows your claims and how many blocks you have left.
- `/abandonclaim` while standing in a claim deletes it.

## Sharing access

Stand in your claim and use:

| Command | Lets the player |
| --- | --- |
| `/accesstrust <player>` | use beds, buttons and levers |
| `/containertrust <player>` | also open containers and use crops and animals |
| `/trust <player>` | build and break too |
| `/permissiontrust <player>` | grant their own level of trust to others |
| `/untrust <player>` | remove trust |

`/trustlist` shows who has access to the claim you’re standing in.

## Claim flags

Flags change how your claim behaves. Stand in a claim you own and use `/setclaimflag <flag>` to turn one on, `/unsetclaimflag <flag>` to turn it off, and `/listclaimflags` to see what's set.

| Flag | What it does | Example |
| --- | --- | --- |
| `NoEnterPlayer` | Keeps the players you name out of your claim | `/setclaimflag NoEnterPlayer Steve Alex` |
| `NoEnderPearl` | No ender pearling into your claim | `/setclaimflag NoEnderPearl` |
| `NoChorusFruit` | No chorus fruit teleporting into your claim | `/setclaimflag NoChorusFruit` |
| `EnterMessage` | A chat message visitors see when they walk in | `/setclaimflag EnterMessage Welcome to the library!` |
| `ExitMessage` | A chat message visitors see when they leave | `/setclaimflag ExitMessage Safe travels!` |
| `RaidMemberOnly` | Only your claim's members can start a raid there | `/setclaimflag RaidMemberOnly` |
| `AllowBlockExplosions` | Lets explosions break blocks in your claim, for farms that need it | `/setclaimflag AllowBlockExplosions` |

### More about each flag

- **NoEnterPlayer:** list as many players as you like, separated by spaces. Anyone named is pushed back out at the edge of your claim. It never affects you. `/unsetclaimflag NoEnterPlayer` clears the list.
- **NoEnderPearl and NoChorusFruit:** stop ender pearls and chorus fruit from landing anyone in your claim, and that includes you and your trusted players. If you have a pearl stasis chamber inside the claim, it won't work while NoEnderPearl is on.
- **EnterMessage and ExitMessage:** shown in chat to anyone crossing the edge of your claim. Keep them friendly; they're public.
- **RaidMemberOnly:** a raid only starts in your claim if the player carrying Bad Omen has at least `/accesstrust` there, so a stranger can't set one off in your village.
- **AllowBlockExplosions:** creepers, TNT and other explosions can break blocks in your claim. `/unsetclaimflag AllowBlockExplosions` protects it again.

### Fire

Claims are protected from fire: it can't spread or burn blocks inside them. Want fire in your claim? Stand in it and run:

`/unsetclaimflag NoFireDamage`

Yes, *unset* is right, even though you're turning fire on. Fire protection is a flag that's already set on every claim, so allowing fire means unsetting it for yours. Run the same command again to turn the protection back on. It's a toggle, so check where you stand with `/listclaimflags`:

| `/listclaimflags` shows | Fire in your claim | To allow fire |
| --- | --- | --- |
| `nofiredamage` in green under all claims only | Blocked (the default) | Run `/unsetclaimflag NoFireDamage` once |
| `nofiredamage` in green under this claim **and** all claims | Blocked | Run it **twice**: the first removes your claim's own flag, the second turns fire on |
| `nofiredamage` in red under this claim | Allowed | Already on. Run it once to protect the claim again |

Don't use `/setclaimflag NoFireDamage`. Your claim is already protected, and setting it only means you'll need an extra `/unsetclaimflag` later.

## Good to know

- **Pistons** work anywhere, as long as the piston and the blocks it moves don’t cross into someone else’s claim.
- **Fire** spreads more aggressively than vanilla in the wild. Inside claims it can't spread or burn blocks unless the owner turns it on (see [Fire](#fire)).
- Stuck in someone else’s claim? `/trapped` moves you to nearby unclaimed land.
- **Log in at least once a year** to keep your claims active.

## Related

- [Commands](/commands/)
- [v1.1 release notes](/changelog/1-1/): claim depth, size and piston changes.
- [v1.6.1 release notes](/changelog/1-6-1/): claim flags.
