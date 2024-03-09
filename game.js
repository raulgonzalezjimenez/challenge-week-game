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
      if (newArray[i][j] === 1) {
        let counter = 0;

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

        if (counter < 2 || counter > 3) {
          newArray[i][j] = 0;
        }
      }

      if (newArray[i][j] === 0) {
        let counter = 0;
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

        if (counter === 3) {
          newArray[i][j] = 1;
        }
      }
    }
  }

  console.log(newArray);
};

gamearrays();
