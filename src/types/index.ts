export type IEventType = 'Treino' | 'Campeonato' | 'Live';
export interface IEvents {
  title: string;
  data: string;
  hours: string;
  type: IEventType;
}
