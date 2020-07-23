import React from "react";
const { shallow } = require("enzyme");
const { AddCategory } = require("../../components/AddCategory");
import "@testing-library/jest-dom";

describe("Pruebas en el componente AddCategory", () => {
  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

  test("should ", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de cambiar la caja de texto", () => {
    const input = wrapper.find("input");
    const value = "Hola Mundo";
    input.simulate("change", { target: { value } });

    expect(wrapper.find("p").text().trim()).toBe(value);
  });

  test("No debe de postear la informacion", () => {
    wrapper.find("form").simulate("submit", { preventDefault() {} });
    expect(setCategories).not.toHaveBeenCalled();
  });

  test("debe de llamar el set categories y limpiar la caja de texto", () => {
    const value = "Halo";
    // Simula el input
    wrapper.find("input").simulate("change", { target: { value } });

    // Simula el input
    wrapper.find("form").simulate("submit", { preventDefault() {} });

    // Se llamo una vez
    expect(setCategories).toHaveBeenCalled();
    expect(setCategories).toHaveBeenCalledTimes(1);
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function));

    // Se limpia la caja del input
    expect(wrapper.find("p").text().trim()).toBe("");
  });
});
