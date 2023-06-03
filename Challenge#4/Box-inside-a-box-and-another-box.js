function fitsInOneBox(boxes) {
  let sortBoxes = [...boxes].sort((a, b) => {
    let volumeA = a.l * a.w * a.h;
    let volumeB = b.l * b.w * b.h;

    return volumeA - volumeB;
  });

  let result = true;

  sortBoxes.map(({ l, w, h }, index, original) => {
    if (index === original.length - 1) return;

    const container = original[index + 1];

    if (l + 1 > container.l || w + 1 > container.w || h + 1 > container.h)
      result = false;
  });

  return result;
}
