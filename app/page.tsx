
import React, { useEffect, useState } from 'react';
import TableCard from '@/components/TableCard';
import Grid from '@mui/joy/Grid';

async function getData() {
  let updated: string | null = '';
  try {
    const [mostSatchelKills, mostKnifeKills, mostGrenadeKills, mostMineKills, mostVehicleKills, highestTotalScore, highestAvgKillsPerMinute, highestSupportScoreInAnyGame, highestCombatScoreInAnyGame, highestKillStreak, mostDeathsInASingleGame, mostKillsInASingleGame, highestAvgKDRatio, highestKDRatioInAnyGame, playersWithMostGamesPlayed, highestKPM, highestKills] = await Promise.all([
      fetch('https://api.val.town/v1/run/ktodaz.mostSatchelKills', { next: { revalidate: 3600 } }).then(response => {
        updated = new Date().toLocaleString();
        return response.json();
      }),
      fetch('https://api.val.town/v1/run/ktodaz.mostKnifeKills', { next: { revalidate: 3600 } }).then(response => response.json()),
      fetch('https://api.val.town/v1/run/ktodaz.mostGrenadeKills', { next: { revalidate: 3600 } }).then(response => response.json()),
      fetch('https://api.val.town/v1/run/ktodaz.mostMineKills', { next: { revalidate: 3600 } }).then(response => response.json()),
      fetch('https://api.val.town/v1/run/ktodaz.mostVehicleKills', { next: { revalidate: 3600 } }).then(response => response.json()),
      fetch('https://api.val.town/v1/run/ktodaz.highestTotalScore', { next: { revalidate: 3600 } }).then(response => response.json()),
      fetch('https://api.val.town/v1/run/ktodaz.highestAvgKillsPerMinute', { next: { revalidate: 3600 } }).then(response => response.json()),
      fetch('https://api.val.town/v1/run/ktodaz.highestSupportScoreInAnyGame', { next: { revalidate: 3600 } }).then(response => response.json()),
      fetch('https://api.val.town/v1/run/ktodaz.highestCombatScoreInAnyGame', { next: { revalidate: 3600 } }).then(response => response.json()),
      fetch('https://api.val.town/v1/run/ktodaz.highestKillStreak', { next: { revalidate: 3600 } }).then(response => response.json()),
      fetch('https://api.val.town/v1/run/ktodaz.mostDeathsInASingleGame', { next: { revalidate: 3600 } }).then(response => response.json()),
      fetch('https://api.val.town/v1/run/ktodaz.mostKillsInASingleGame', { next: { revalidate: 3600 } }).then(response => response.json()),
      fetch('https://api.val.town/v1/run/ktodaz.highestAvgKDRatio', { next: { revalidate: 3600 } }).then(response => response.json()),
      fetch('https://api.val.town/v1/run/ktodaz.highestKDRatioInAnyGame', { next: { revalidate: 3600 } }).then(response => response.json()),
      fetch('https://api.val.town/v1/run/ktodaz.playersWithMostGamesPlayed', { next: { revalidate: 3600 } }).then(response => response.json()),
      fetch('https://api.val.town/v1/run/ktodaz.highestKPM', { next: { revalidate: 3600 } }).then(response => response.json()),
      fetch('https://api.val.town/v1/run/ktodaz.highestKills', { next: { revalidate: 3600 } }).then(response => response.json())
    ]);

    return {
      updated,
      mostSatchelKills,
      mostKnifeKills,
      mostGrenadeKills,
      mostMineKills,
      mostVehicleKills,
      highestTotalScore,
      highestAvgKillsPerMinute,
      highestSupportScoreInAnyGame,
      highestCombatScoreInAnyGame,
      highestKillStreak,
      mostDeathsInASingleGame,
      mostKillsInASingleGame,
      highestAvgKDRatio,
      highestKDRatioInAnyGame,
      playersWithMostGamesPlayed,
      highestKPM,
      highestKills
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {};
  }
}

export default async function Home() {
  const data = await getData()
  console.log('data', data)
  return (
    <main>
      Last Updated: {data.updated}
      <Grid container spacing={2}>
        <Grid lg={6} xs={12} xl={4}>
          <TableCard
            title="Most Kills (1 Game)"
            description="Most kills in a single game over 30 days."
            columnHeaders={['Name', 'Kills']}
            data={data.mostKillsInASingleGame}
          />
        </Grid>
        <Grid lg={6} xs={12} xl={4}>
          <TableCard
            title="Most Kills"
            description="Highest amount of kills over 30 days (total sum)."
            columnHeaders={['Name', 'Total Kills']}
            data={data.highestKills}
          />
        </Grid>
        <Grid lg={6} xs={12} xl={4}>
          <TableCard
            title="Highest KPM (1 Game)"
            description="Highest KPM in a single game over 30 days."
            columnHeaders={['Name', 'KPM']}
            data={data.highestKPM}
          />
        </Grid>
        <Grid lg={6} xs={12} xl={4}>
          <TableCard
            title="Average KPM."
            description="Highest average KPM over 30 days."
            columnHeaders={['Name', 'KPM']}
            data={data.highestAvgKillsPerMinute}
          />
        </Grid>
        <Grid lg={6} xs={12} xl={4}>
          <TableCard
            title="Most Deaths (1 Game)."
            description="Most Deaths in a single game over 30 days."
            columnHeaders={['Name', 'Deaths']}
            data={data.mostDeathsInASingleGame}
          />
        </Grid>
        <Grid lg={6} xs={12} xl={4}>
          <TableCard
            title="Highest Kill Streak (1 Game)."
            description="Highest Kill Streak in a single game over 30 days."
            columnHeaders={['Name', 'Kill Streak']}
            data={data.highestKillStreak}
          />
        </Grid>
        <Grid lg={6} xs={12} xl={4}>
          <TableCard
            title="Highest K/D (1 Game)."
            description="Highest K/D in a Single game over 30 days."
            columnHeaders={['Name', 'K/D Ratio']}
            data={data.highestKDRatioInAnyGame}
          />
        </Grid>
        <Grid lg={6} xs={12} xl={4}>
          <TableCard
            title="Highest Avg K/D Ratio"
            description="Highest average K/D ratio over 30 days."
            columnHeaders={['Name', 'K/D Ratio']}
            data={data.highestAvgKDRatio}
          />
        </Grid>
        <Grid lg={6} xs={12} xl={4}>
          <TableCard
            title="Highest Total Score (1 Game)"
            description="Highest Total Score in a Single Game over 30 days."
            columnHeaders={['Name', 'Total Score']}
            data={data.highestTotalScore}
          />
        </Grid>
        <Grid lg={6} xs={12} xl={4}>
          <TableCard
            title="Highest Combat Score (1 Game)"
            description="Highest Combat Score in a Single Game over 30 days."
            columnHeaders={['Name', 'Combat Score']}
            data={data.highestCombatScoreInAnyGame}
          />
        </Grid>
        <Grid lg={6} xs={12} xl={4}>
          <TableCard
            title="Highest Support Score (1 Game)"
            description="Highest Support Score in a Single Game over 30 days."
            columnHeaders={['Name', 'Support Score']}
            data={data.highestSupportScoreInAnyGame}
          />
        </Grid>
        <Grid lg={6} xs={12} xl={4}>
          <TableCard
            title="Most Vehicle Kills"
            description="Most Vehicle kills over 30 days."
            columnHeaders={['Name', 'Total Vehicle Kills']}
            data={data.mostVehicleKills}
          />
        </Grid>
        <Grid lg={6} xs={12} xl={4}>
          <TableCard
            title="Most Mine Kills"
            description="Most mine kills over 30 days."
            columnHeaders={['Name', 'Total Mine Kills']}
            data={data.mostMineKills}
          />
        </Grid>
        <Grid lg={6} xs={12} xl={4}>
          <TableCard
            title="Most Grenade Kills"
            description="Most grenade kills over 30 days."
            columnHeaders={['Name', 'Total Grenade Kills']}
            data={data.mostGrenadeKills}
          />
        </Grid>
        <Grid lg={6} xs={12} xl={4}>
          <TableCard
            title="Most Satchel Kills"
            description="Most satchel kills over 30 days."
            columnHeaders={['Name', 'Total Satchel Kills']}
            data={data.mostSatchelKills}
          />
        </Grid>
        <Grid lg={6} xs={12} xl={4}>
          <TableCard
            title="Most Knife Kills"
            description="Most knife kills over 30 days."
            columnHeaders={['Name', 'Total Knife Kills']}
            data={data.mostKnifeKills}
          />
        </Grid>

        <Grid lg={6} xs={12} xl={4}>
          <TableCard
            title="Most Games Played"
            description="List of players with the most games played over 30 days."
            columnHeaders={['Name', 'Total Games Played']}
            data={data.playersWithMostGamesPlayed}
          />
        </Grid>
      </Grid>
    </main>
  );
}

