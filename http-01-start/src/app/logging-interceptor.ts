import { HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { tap } from "rxjs/operators";

export class LoggingInterceptor implements HttpInterceptor {
    intercept(req:HttpRequest<any>,next:HttpHandler) {
        console.log('LoggingInterceptor');
        return next.handle(req).pipe(tap(event=>{
           
            if (event.type === HttpEventType.Response) {
                console.log('Incoming Rzesponse')
                console.log(event.body)
                
            }
        }));
    }
}