import { TestBed } from "@angular/core/testing";
import {LoggerService} from './logger.service';

describe('LoggerService', ()=>{
let service:LoggerService;
beforeEach(()=>{
    TestBed.configureTestingModule({});
        service = TestBed.inject(LoggerService);
});

it('should be created', ()=>{
    expect(service).toBeTruthy();
});

it('should log msg', ()=>{
 const actual= service.logInfo('Tejaswini Connected')
 const expected = 'Logger - Tejaswini Connected'
 expect(actual).toEqual(expected)
});
});