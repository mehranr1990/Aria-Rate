import { ExchangeRate } from '../types/currency';

export const initialRates: any = {
  aedToIRR: 19588,
  cities: ['tehran', 'mashhad', 'istanbul'],
  currencies: [
    { 
      code: 'USD', 
      name: 'دلار آمریکا',
      isEnabled: true,
      rates: [{
        city: 'تهران',
          rateToAED: 3.6725,
          rateFromAED: 3.6725,
          isEnabled: true
        },{
        city: 'مشهد' ,
          rateToAED: 3.6725,
          rateFromAED: 3.6725,
          isEnabled: true
        },{
        city: 'استانبول',
          rateToAED: 3.6725,
          rateFromAED: 3.6725,
          isEnabled: true
        }
      ]
    },
    { 
      code: 'EUR', 
      name: 'یورو',
      isEnabled: true,
      rates: [{
        city: 'تهران',
          rateToAED: 4.04,
          rateFromAED: 4.02,
          isEnabled: true
        },{
        city: 'مشهد' ,
          rateToAED: 4.04,
          rateFromAED: 4.02,
          isEnabled: true
        },{
        city: 'استانبول',
          rateToAED: 4.04,
          rateFromAED: 4.02,
          isEnabled: true
        }
      ]
    },
    { 
      code: 'USDT', 
      name: 'تتر',
      isEnabled: true,
      isGlobal: true,
      rates: [{
        city: 'تهران',
          rateToAED: 3.6725,
          rateFromAED: 3.6725,
          isEnabled: true
        },{
        city: 'مشهد' ,
          rateToAED: 3.6725,
          rateFromAED: 3.6725,
          isEnabled: true
        },{
        city: 'استانبول',
          rateToAED: 3.6725,
          rateFromAED: 3.6725,
          isEnabled: true
        }
      ]
    },
    { 
      code: 'GBP', 
      name: 'پوند انگلیس',
      isEnabled: true,
      rates: [{
        city: 'تهران',
          rateToAED: 4.67,
          rateFromAED: 4.65,
          isEnabled: true
        },{
        city: 'مشهد' ,
          rateToAED: 4.67,
          rateFromAED: 4.65,
          isEnabled: true
        },{
        city: 'استانبول',
          rateToAED: 4.67,
          rateFromAED: 4.65,
          isEnabled: true
        }
      ]
    },
    { 
      code: 'TRY', 
      name: 'لیر ترکیه',
      isEnabled: true,
      rates: [{
        city: 'تهران',
          rateToAED: 0.13,
          rateFromAED: 0.129,
          isEnabled: true
        },{
        city: 'مشهد' ,
          rateToAED: 0.13,
          rateFromAED: 0.129,
          isEnabled: true
        },{
        city: 'استانبول',
          rateToAED: 0.13,
          rateFromAED: 0.129,
          isEnabled: true
        }
      ]
    },
  ]
};