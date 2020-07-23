import React from "react";
import { shallow } from "enzyme";
import "@testing-library/jest-dom";
import { GifExpertApp } from "../GifExpertApp";

describe('Pruebas en el componente GifExpertApp', () => {
    test('Debe de hacer match con el snaptshoot', () => {
        const wraper = shallow(<GifExpertApp />);
        expect(wraper).toMatchSnapshot();
    });

    test('Debe de mostrar una lista de catergorias', () => {
        const categoryes =  ['Halo','Xbox'];
        const wraper = shallow(<GifExpertApp defaultCategories={categoryes}/>);
        expect(wraper).toMatchSnapshot();
        expect(wraper.find('GifGrid').length).toBe(categoryes.length);
    });
});
