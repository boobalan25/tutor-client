import { Injectable } from "@angular/core";
import { CommonProviders } from "../provider/common-providers";

@Injectable()
export class CommonServices {
    constructor(private provider: CommonProviders) {

    }

    openContent(lang: string, topic: string) {
        return new Promise((resolve, reject) => {
            this.provider.openContent(lang, topic).subscribe(data => {
                resolve(data);
            }, error =>{
                reject(error);
            })
        });
    }

    addContent(content: any) {
        return new Promise((resolve, reject) => {
            this.provider.addContent(content).subscribe(data => {
                resolve(data);
            }, error =>{
                if(!this.checkAuthenticateError(error)) {
                    reject(error);
                }
            })
        });
    }

    checkAuthenticateError(error: any) : boolean {
        if(error && error.message && error.message.includes("0 Unknown Error")) {
            return true;
        }
        return false;
    }
}