import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DbProfitService {
  constructor() {}
  currencies = [
    {
      name: 'درهم',
      cities:[ {
        
        name: 'جهانی',
        buy: 0,
        sell: 0,
      },]
    },
    {
      name: 'دلار آمریکا',
      
        cities:[
         {
          name: 'تهران',
          buy: 0,
          sell: 0,
        },
         {
          name: 'مشهد',
          buy: 0,
          sell: 0,
        },
         {
          name: 'استانبول',
          buy: 0,
          sell: 0,
        },
      ]
    },
    {
      name: 'یورو',
     
        cities:[
          {
           name: 'تهران',
           buy: 0,
           sell: 0,
         },
          {
           name: 'مشهد',
           buy: 0,
           sell: 0,
         },
          {
           name: 'استانبول',
           buy: 0,
           sell: 0,
         },
       ]
    },
    {
      name: 'تتر',
        cities:[ {
          name: 'جهانی',
          buy: 0,
          sell: 0,
        },]
      
    },
    {
      name: 'پوند انگلیس',
      
        cities:[
          {
           name: 'تهران',
           buy: 0,
           sell: 0,
         },
          {
           name: 'مشهد',
           buy: 0,
           sell: 0,
         },
          {
           name: 'استانبول',
           buy: 0,
           sell: 0,
         },
       ]
    },
    {
      name: 'لیر ترکیه',
        cities:[
          {
           name: 'تهران',
           buy: 0,
           sell: 0,
         },
          {
           name: 'مشهد',
           buy: 0,
           sell: 0,
         },
          {
           name: 'استانبول',
           buy: 0,
           sell: 0,
         },
       ]
    },
  ];
}
