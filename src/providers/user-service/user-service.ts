import { Injectable } from '@angular/core';

// import * as products from './elite-data.json';

import * as _ from 'lodash';

@Injectable()
export class UserService {

  constructor() {
  }

  getData() {
    // console.log(products.tournaments.games);

    // let games = _.chain(products.tournaments.games)
    //   .filter(g => g.locationId === "loc-1")
    //   .map(g => {
    //     let isTeam1 = (g.team1Id === 828);
    //     let opponentName = isTeam1 ? g.team2 : g.team1;
    //     return {
    //       gameId: g.id,
    //       opponent: opponentName,
    //       time: Date.parse(g.time),
    //       location: g.location,
    //       locationUrl: g.locationUrl,
    //     }
    //   })
    //   .value();


    // console.log("My Games: " + games[0].opponent);
    // let teamId = '123'

    // let teamStanding = _.find(products.tournaments.standings, { 'teamId': teamId });
    // this.userSettings.isFavoriteTeam(this.team.id).then(value => this.isFollowing = value);

  }

  // favoriteTeam(team, tournamentId, tournamentName) {
  //   let item = { team: team, tournamentId: tournamentId, tournamentName: tournamentName };
  //   this.storage.set(team.id, JSON.stringify(item));
  //   this.events.publish('favorites:changed');
  // }

  // unfavoriteTeam(team) {
  //   this.storage.remove(team.id);
  //   this.events.publish('favorites:changed');
  // }

  // isFavoriteTeam(teamId) {
  //   return this.storage.get(teamId).then(value => value ? true : false);
  // }

}
