import {ColorRGBAInterface} from "./color-rgba.interface";

function generateRandomRGBAColor(minOpacity:number, maxOpacity:number): string {
    const alpha = (Math.random() * (maxOpacity - minOpacity) + minOpacity).toFixed(1);
    return `rgba(${generateRandomValueForColor()},${generateRandomValueForColor()},${generateRandomValueForColor()},${alpha})`;
}

function generateRandomValueForColor():number {
    return  Math.round((Math.random()*255));
}

export const ColorRgbaService: ColorRGBAInterface = Object.freeze({
    generateRandomRGBAColor
});
