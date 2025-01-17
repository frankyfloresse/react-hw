import axios from "axios";
import {ICar} from "../models/ICar.ts";
import {ICarCreateRequest} from "../models/ICarCreateRequest.ts";

export const api = axios.create({
    baseURL: "http://owu.linkpc.net/carsAPI/v1/",
    headers: {
        "Content-Type": "application/json"
    },
});

export const getCars = async (): Promise<ICar[]> => {
    const { data } = await api.get<ICar[]>('/cars');
    return data;
}

export const createCar = async (car: ICarCreateRequest): Promise<ICar> => {
    const { data } = await api.post<ICar>('/cars', car);
    return data;
}