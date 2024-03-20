import { Url } from "../interfaces";

// const BASE_URL_API = "http://localhost:3000/api/v1";
const BASE_URL_API = "https://linkshortener-evzl.onrender.com/api/v1";

export async function getUrl(): Promise<Url[]> {
    const data = await fetch(BASE_URL_API);
    const res = await data.json();

    return res.data;
}

export async function getUniqueUrl(slot: string): Promise<Url> {
    const data = await fetch(`${BASE_URL_API}/${slot}`);
    const res = await data.json();

    return res.data;
}

export async function createUrl(objUrl: any) {
    const data = await fetch(BASE_URL_API, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(objUrl),
    });

    const res = await data.json();

    return res;
}

export async function deleteUrl(idUrl: string) {
    await fetch(`${BASE_URL_API}/${idUrl}`, {
        method: "DELETE",
    });
}
