import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root",
})
export class ApiRestService {
    readonly baseUrl = "http://localhost/back/";
    private token?: string;

    private getHeaders() {
        if (this.token) {
            const headers = {
                Authorization: `Bearer ${this.token}`,
                "Content-Type": "application/json",
            };

            return headers;
        } else {
            const headers = {
                "Content-Type": "application/json",
            };

            return headers;
        }
    }

    setToken(token: string) {
        this.token = token;
    }

    public isThereAUser(): boolean {
        return !!this.token;
    }

    async post<T = any>(url: string, body: string): Promise<T> {
        try {
            const response = await fetch(this.baseUrl + url, {
                method: "POST",
                headers: this.getHeaders(),
                body: body,
            });
            const data = await response.json();
            return data;
        } catch (error) {
            throw error;
        }
    }

    constructor() {}
}
