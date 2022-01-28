import { Client } from '../client-form/client.model';

export class Local {
  constructor(
    public id?: number,
    public type?: string,
    public income?: number,
    public value?: number,
    public entry?: number,
    public installments?: number,
    public ClientId?: number,
    public client?: Client
  ) {}
}
