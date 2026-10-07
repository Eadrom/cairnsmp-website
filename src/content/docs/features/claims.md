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

## Good to know

- **Pistons** work anywhere, as long as the piston and the blocks it moves don’t cross into someone else’s claim.
- **Fire** spreads more aggressively than vanilla in the wild, but it can’t spread or burn blocks inside claims.
- Stuck in someone else’s claim? `/trapped` moves you to nearby unclaimed land after a short wait.
- **Log in at least once a year** to keep your claims active.

## Related

- [Commands](/commands/)
- [v1.1 release notes](/changelog/1-1/): claim depth, size and piston changes.
