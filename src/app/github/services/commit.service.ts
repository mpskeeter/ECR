import { computed, Injectable } from '@angular/core';
import { BaseCrudService, LineChartData } from '../../core';
import { GithubCommit } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class CommitService extends BaseCrudService<GithubCommit> {
  fixDate = (date: string): string => {
    // console.log('orig date:', date);
    const newDate = new Date(date).toLocaleDateString('fr-CA');
    // console.log('new date:', newDate);
    return newDate;
  };

  chartData = computed(() =>
    // {
  //   const data = 
  //     Object.entries(
  //       this.items()?.filter((item) => item?.commit.author.date)
  //         .sort((a: GithubCommit,b: GithubCommit) => new Date(a.commit.author.date)?.getTime() - new Date(b.commit.author.date)?.getTime())
  //         .reduce(
  //           (acc, item: GithubCommit) => {
  //             acc[new Date(item.commit.author.date)?.toLocaleDateString()] = (acc[new Date(item.commit.author.date)?.toLocaleDateString()] || 0) + 1;
  //             return acc;
  //           },
  //           {} as {[date: string]: number}
  //         ) || []
  //       )?.map(([date, value]) => ({ date, value } as LineChartData)) || [];

  //   console.log('chartData:', data);
  //   return data;
  // }
    Object.entries(
      this.items()?.filter((item) => item?.commit.author.date)
        .sort((a: GithubCommit,b: GithubCommit) => new Date(this.fixDate(a.commit.author.date))?.getTime() - new Date(this.fixDate(b.commit.author.date))?.getTime())
        .reduce(
          (acc, item: GithubCommit) => {
            // acc[new Date(this.fixDate(item.commit.author.date))?.toLocaleDateString()] = (acc[new Date(this.fixDate(item.commit.author.date))?.toLocaleDateString()] || 0) + 1;
            acc[this.fixDate(item.commit.author.date)] = (acc[this.fixDate(item.commit.author.date)] || 0) + 1;
            return acc;
          },
          {} as { [date: string]: number }
        ) || []
    )?.map(([date, value]) => ({ date, value } as LineChartData)) || []
  );

  constructor() { 
    super();
    this.endpointType='commits';
   }
}
