import React from "react";
import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";
import "@testing-library/jest-dom";

describe("Pruebas en componente", () => {
  const titulo = "Un titulo";
  const url = "https://localhost/img.gif";

  const wrapper = shallow(<GifGridItem title={titulo} url={url} />);

  test("debe de mostrar el componente correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de tener el parrafo con el titulo", () => {
    const p = wrapper.find('p');
    expect(p.text().trim()).toBe(titulo);
  });

  test("Debe de tener la imagen igual al url y alt de las props", () => {
    const img = wrapper.find('img');
    expect(img.props()['src']).toBe(url);
    expect(img.props()['alt']).toBe(titulo);
  });

  test('debe tener animated_fadeIn', () => {
      const div = wrapper.find('div');
      const className = div.prop('className');
      expect(className.includes('animate__fadeIn')).toBe(true);
  })
  
});
