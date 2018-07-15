import { Injectable } from '@angular/core';

import * as products from "./elite-data.json";

import * as _ from 'lodash';

@Injectable()
export class UserService {

  constructor() {
  }

  getData() {
    console.log(products.tournaments.games);

    let games = _.chain(products.tournaments.games)
      .filter(g => g.locationId === "loc-1")
      .map(g => {
        let isTeam1 = (g.team1Id === 828);
        let opponentName = isTeam1 ? g.team2 : g.team1;
        return {
          gameId: g.id,
          opponent: opponentName,
          time: Date.parse(g.time),
          location: g.location,
          locationUrl: g.locationUrl,
        }
      })
      .value();


    console.log("My Games: " + games[0].opponent);
  }

}
