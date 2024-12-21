import { Component, OnInit } from '@angular/core';
import { DbProfitService } from '../../core/services/db-control.service';
import { FormsModule } from '@angular/forms';
import { getDatabase } from '../../core/db';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-trade-analyzer',
  standalone: true,
  imports: [FormsModule, DecimalPipe],
  templateUrl: './trade-analyzer.component.html',
  styleUrl: './trade-analyzer.component.scss',
})
export class TradeAnalyzerComponent implements OnInit {
  dataProfit: any;
  data: any;
  constructor(private dbProfit: DbProfitService) {
    this.dataProfit = dbProfit.currencies;
  }
  async ngOnInit() {
    const key = localStorage.getItem('key');
    const fetchfromDb = await getDatabase(key);
    // console.log(fetchfromDb);
    // console.log(this.dataProfit);
    this.data = fetchfromDb;
  }
  deals: any = [];
  deals1: any = [];
  deals2: any = [];
  deals3: any = [];
  derham: any;
  bestDeal() {
    this.deals = [];
    this.deals1 = [];
    this.deals2 = [];
    this.deals3 = [];
    // console.log(this.data);
    // console.log(this.dataProfit);

    this.dataProfit.forEach((item: any) => {
      item.cities.forEach((item1: any) => {
        if (item1.buy) {
          if (item1.sell) {
            const tlorance = item1.sell - item1.buy;
            const profit = (item1.sell / item1.buy - 1) * 100;

            this.deals.push({
              name: item.name,
              coin: item1,
              profit: profit,
              tlorance: tlorance,
            });
          }
          console.log(this.dataProfit);
          console.log(this.data);
          this.dataProfit.forEach((item2: any) => {
            item2.cities.forEach((item3: any) => {
              if (item3.sell) {
                const match = this.data.currencies.find(
                  (row: any) => row.name == item2.name
                );

                if (match) {
                  const exaxtmatch = match.rates.find(
                    (row: any) => row.city == item3.name
                  );
                  if (item.name == 'درهم') {
                    this.derham = item;
                    if (
                      item.cities[0].buy * exaxtmatch.rateFromAED <
                      item3.sell
                    ) {
                      const telorance =
                        item3.sell -
                        item.cities[0].buy * exaxtmatch.rateFromAED;
                      const profit =
                        (telorance /
                          (item.cities[0].buy * exaxtmatch.rateFromAED)) *
                        100;
                      this.deals1.push({
                        Derhamprice: item.cities[0].buy,
                        name1: item2.name,
                        rate1: exaxtmatch.rateFromAED,
                        Finalprice: item.cities[0].buy * exaxtmatch.rateFromAED,
                        Sellprice: item3.sell,
                        telorance: telorance,
                        profit: profit,
                      });
                    }
                  } else {
                    if (this.derham) {
                      if (item3.buy) {
                        if (
                          item3.buy / exaxtmatch.rateToAED <
                          this.derham.cities[0].buy
                        ) {
                          const telorance =
                            (this.derham.cities[0].sell -
                              item3.buy / exaxtmatch.rateToAED) *
                            exaxtmatch.rateToAED;

                          const profit =
                            (telorance /
                              ((item3.buy / exaxtmatch.rateToAED) *
                                exaxtmatch.rateToAED)) *
                            100;
                          this.deals2.push({
                            DerhamBuyprice: this.derham.cities[0].buy,
                            DerhamSellprice: this.derham.cities[0].sell,
                            currencyPrice: item3.buy,
                            name1: item2.name,
                            rate1: exaxtmatch.rateToAED,
                            Finalprice: item3.buy / exaxtmatch.rateToAED,
                            Sellprice: this.derham.cities[0].sell,
                            telorance: telorance,
                            profit: profit,
                          });
                          if (this.deals2) {
                            this.dataProfit.forEach((item11: any) => {
                              item11.cities.forEach((item12: any) => {
                                if (
                                  item12.sell &&
                                  item != item11 &&
                                  item11.name != 'درهم'
                                ) {
                                  console.log(item);
                                  console.log(item11);
                                  console.log(item12);
                                  const match1 = this.data.currencies.find(
                                    (row: any) => row.name == item11.name
                                  );
                                  if (match1) {
                                    const exaxtmatch1 = match1.rates.find(
                                      (row: any) => row.city == item12.name
                                    );
                                    const tlorance1 =  item12.sell - (item1.buy / exaxtmatch.rateToAED)*exaxtmatch1.rateFromAED
                                    const profit1 =( tlorance1/((item1.buy / exaxtmatch.rateToAED)*exaxtmatch1.rateFromAED))*100  
                                    console.log(match1);
                                    console.log(exaxtmatch1);
                                    if(item12.sell>exaxtmatch1.rateToAED*(item3.buy / exaxtmatch.rateFromAED)){
                                      this.deals3.push({
                                        derhamPrice:item1.buy / exaxtmatch.rateToAED,
                                        currencyBuyPrice1:item1.buy,
                                        currencyName1:item.name,
                                        currencyName2:item11.name,
                                        currencyRate1:exaxtmatch.rateToAED,
                                        currencyRate2:exaxtmatch1.rateFromAED,
                                        currencySellPrice2:item12.sell,
                                        currencyFinalPrice2:(item1.buy / exaxtmatch.rateToAED)*exaxtmatch1.rateFromAED,
                                        tlorance1:tlorance1,
                                        profit1:profit1
                                      });
                                    }
                                  }
                                }
                              });
                            });
                          }
                          // this.dataProfit.forEach((item4: any) => {
                          //   item4.cities.forEach((item5: any) => {
                          //     if (item5.sell) {}

                          //   });
                          // });
                        }
                      }
                    } else {
                      alert('ابتدا نرخ درهم را مشخص کنید');
                    }

                    // if (
                    //   item1.buy / exaxtmatch.rateFromAED <
                    //   this.dataProfit[0].cities[0].buy
                    // ) {
                    //   console.log('heeeeeey');
                    // }
                  }
                }
              }
            });
          });
        }
        if (item1.sell) {
        }
      });
    });
  }
}
