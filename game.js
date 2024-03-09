/* eslint-disable max-depth */
/* eslint-disable complexity */
export const gamearrays = () => {
  const newArray = [
    [2, 2, 2, 2, 2, 2],
    [2, 0, 0, 1, 0, 2],
    [2, 1, 0, 1, 0, 2],
    [2, 1, 0, 1, 0, 2],
    [2, 0, 1, 0, 1, 2],
    [2, 2, 2, 2, 2, 2],
  ];

  for (let i = 0; i <= 5; i++) {
    for (let j = 0; j <= 5; j++) {
      let counter = 0;
      if (
        i < newArray.length - 1 &&
        j < newArray[i].length - 1 &&
        i > 0 &&
        j > 0
      ) {
        if (newArray[i - 1][j - 1] === 1) {
          counter++;
        }

        if (newArray[i - 1][j] === 1) {
          counter++;
        }

        if (newArray[i - 1][j + 1] === 1) {
          counter++;
        }

        if (newArray[i][j - 1] === 1) {
          counter++;
        }

        if (newArray[i][j + 1] === 1) {
          counter++;
        }

        if (newArray[i + 1][j - 1] === 1) {
          counter++;
        }

        if (newArray[i - 1][j] === 1) {
          counter++;
        }

        if (newArray[i + 1][j] === 1) {
          counter++;
        }

        if (newArray[i + 1][j + 1] === 1) {
          counter++;
        }

        if (newArray[i][j] === 1) {
          if (counter < 2 || counter > 3) {
            newArray[i][j] = 0;
          }
        }

        if (newArray[i][j] === 0) {
          if (counter === 3) {
            newArray[i][j] = 1;
          }
        }
      }
    }
  }

  console.log(newArray);
};
