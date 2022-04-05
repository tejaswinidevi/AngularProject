import { AuthService } from "./authservice"


describe('Service Auth', ()=>{
    let service:AuthService
    beforeEach(()=>{
        service=new AuthService()
    })
    afterEach(()=>{
        //cleaning    
        localStorage.removeItem('token')    
    })

    it('should return true if isAuth() if there is a token',()=>{
        localStorage.setItem('token', '12345')
        expect(service.isAuthenticated()).toBeTruthy()
    })
    
    it('should return false if isAuth() if there is a token',()=>{
        expect(service.isAuthenticated()).toBeFalsy()
    })

    /*beforeAll(()=>{

    })
    afterAll(()=>{

    })*/
})