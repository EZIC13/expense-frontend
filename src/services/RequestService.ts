export class UnauthorizedError extends Error {
    constructor() {
        super("Unauthorized");
    }
}

const BASE_URL: string = import.meta.env.VITE_BACKEND_API;

export const getRequest = async <T>(endpoint: string):Promise<T> => {
    const response: Response = await fetch(BASE_URL + endpoint, {
        method: "GET",
        credentials: "include"
    });

    if (!response.ok) {
        if (response.status === 401) {
            throw new UnauthorizedError();
        }
        throw new Error();
    }

    return await response.json();
}

export const postRequest = async <TBody>(endpoint: string, body: TBody):Promise<void> => {
    const response: Response = await fetch(BASE_URL + endpoint, {
        method: "POST",
        body: JSON.stringify(body),
        headers: { "Content-Type": "application/json" },
        credentials: "include"
    });

    if (!response.ok) {
        if (response.status === 401) {
            throw new UnauthorizedError();
        }
        throw new Error();
    }
}