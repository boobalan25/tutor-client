import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
    })
};
@Injectable({ providedIn: 'root' })
export class CommonProviders {
    host: string = "http://localhost:8080/";
    constructor(private httpClient: HttpClient) {

    }

    public openContent(lang: string, topic: string) {
        return this.httpClient.get(this.host + 'content/getContent/' + lang + '/' + topic);
    }

    public addContent(content: any) {
        return this.httpClient.post(this.host + 'content/addContent', content);
    }
}