import React from "react";
import { shallow } from "enzyme";
import "@testing-library/jest-dom";
import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from "@testing-library/react-hooks";
import { wait } from "@testing-library/react";

describe('Pruebas en el customhook ', () => {
    const category = 'Halo';
    test('debe retornar el estado inicial', async () => {
        
        const {result, waitForNextUpdate} = renderHook(() => useFetchGifs(category));
        const {data, loading} = result.current;
        //const {data:images, loading} = useFetchGifs(category);
        await waitForNextUpdate();

        expect(data).toEqual([]);
        expect(loading).toBe(true);
        
    }); 

    test('debe de retornar un arreglo de imagenes y el loading en false', async () => {
        const {result, waitForNextUpdate} = renderHook(() => useFetchGifs(category));

        await waitForNextUpdate();
        const {data, loading} = result.current;
        //const {data:images, loading} = useFetchGifs(category);

        expect(data.length).toBe(10);
        expect(loading).toBe(false);
    });
});
