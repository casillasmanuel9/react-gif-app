import React from "react";
import { shallow } from "enzyme";
import "@testing-library/jest-dom";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock("../../hooks/useFetchGifs");

describe("Pruebas en GifGrid", () => {
  test("Debe hacer match con el snapshot", () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });

    const wraper = shallow(<GifGrid category={"halo"} />);
    expect(wraper).toMatchSnapshot();
  });

  test("Debe mostrar items cuando se cargan imagenes", () => {
    const gifs = [
      {
        id: "abc",
        url: "https://hola.gif",
        title: "prueba",
      },
    ];

    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false,
    });
    const wraper = shallow(<GifGrid category={"halo"} />);

    //expect(wraper).toMatchSnapshot();
    expect(wraper.find('p').exists()).toBe(false);
    expect(wraper.find('GifGridItem').length).toBe(gifs.length);
  });
});
