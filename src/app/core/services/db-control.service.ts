import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DbControlService {
  constructor() {}
  currencies = {
    usd: {
      isEnable:true,
      tehran: {
        valueto: 10,
        valuefrom: 200,
        isEnable: true,
      },
      mashhad: {
        valueto: 0,
        valuefrom: 0,
        isEnable: true,
      },
      istanbul: {
        valueto: 0,
        valuefrom: 0,
        isEnable: true,
      },
    },
    euro: {
      isEnable:true,
      tehran: {
        valueto: 0,
        valuefrom: 0,
        isEnable: true,
      },
      mashhad: {
        valueto: 0,
        valuefrom: 0,
        isEnable: true,
      },
      istanbul: {
        valueto: 0,
        valuefrom: 0,
        isEnable: true,
      },
    },
    usdt: {
      isEnable:true,
      tehran: {
        valueto: 0,
        valuefrom: 0,
        isEnable: true,
      },
      mashhad: {
        valueto: 0,
        valuefrom: 0,
        isEnable: true,
      },
      istanbul: {
        valueto: 0,
        valuefrom: 0,
        isEnable: true,
      },
    },
    GBP: {
      isEnable:true,
      tehran: {
        valueto: 0,
        valuefrom: 0,
        isEnable: true,
      },
      mashhad: {
        valueto: 0,
        valuefrom: 0,
        isEnable: true,
      },
      istanbul: {
        valueto: 0,
        valuefrom: 0,
        isEnable: true,
      },
    },
    TRY: {
      isEnable:true,
      tehran: {
        valueto: 0,
        valuefrom: 0,
        isEnable: true,
      },
      mashhad: {
        valueto: 0,
        valuefrom: 0,
        isEnable: true,
      },
      istanbul: {
        valueto: 0,
        valuefrom: 0,
        isEnable: true,
      },
    },
  };
}
