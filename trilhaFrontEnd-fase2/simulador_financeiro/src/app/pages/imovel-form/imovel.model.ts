import { Client } from '../client-form/client.model';

export class Imovel {
  constructor(
    public type?: string,
    public income?: number,
    public value?: number,
    public entry?: number,
    public installments?: number
  ) {}
}
