const base = 16;

const sizeMap = [.25, .5, .75, 1, 1.5, 2, 3, 4, 6, 8, 10, 12, 16, 20, 28];

export const sizes = sizeMap.map(scale => {
    return scale*16;
});