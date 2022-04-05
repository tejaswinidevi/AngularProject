import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }
  logInfo(msg:string):string{
    console.log(msg)
    return `Logged - ${msg}`
  }
}
