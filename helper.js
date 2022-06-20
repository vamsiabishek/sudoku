
const getBoxArrayValues = (row, col, model) => {
    let rowStart = 0;
    let colStart = 0;
  
    if (row > 2) {
      rowStart = Math.floor(row / 3) * 3;
    }
  
    if (col > 2) {
      colStart = Math.floor(col / 3) * 3;
    }
  
    const boxValues = [];
    for (let a = rowStart; a < rowStart + 3; a++) {
      for (let y = colStart; y < colStart + 3; y++) {
        if (model[a][y]) boxValues.push(model[a][y]);
      }
    }
    return boxValues;
  };
  
const defaultValues = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  
const getAvailableValues = (rowIdx, colIdx, model1) => {
    const colPFromAllRows = model1.map((r) => r[colIdx]).filter((v) => v);
    const rowValues = [...Array(9)]
      .map((c, idx) => model1[rowIdx][idx])
      .filter((v) => v);
    const boxArrayValues = getBoxArrayValues(rowIdx, colIdx, model1);
  
    return [
      ...new Set([...colPFromAllRows, ...boxArrayValues, ...rowValues])
    ];
  };

  const hasDuplicateValuesInRow = (rowIdx, model) => {
    const rowValues = [...Array(9)]
        .map((c, idx) => model[rowIdx][idx])
        .filter((v) => v);

    return rowValues.some((v, idx) => rowValues.indexOf(v) !== idx)
  }

  const hasDuplicateValuesInCol = (colIdx, model) => {
    const colValues = model.map((r) => r[colIdx]).filter((v) => v);

    return colValues.some((v, idx) => colValues.indexOf(v) !== idx)
  }

  const hasDuplicateValuesInBox = (rowIdx, colIdx, model) => {
    const boxArrayValues = getBoxArrayValues(rowIdx, colIdx, model);

    return boxArrayValues.some((v, idx) => boxArrayValues.indexOf(v) !== idx)
  }

  const getPossibleValues = (availableValues) => {
    return defaultValues.filter((v) => !availableValues.includes(v));
  }
  
  module.exports = {
    getAvailableValues,
    getPossibleValues,
    hasDuplicateValuesInRow,
    hasDuplicateValuesInCol,
    hasDuplicateValuesInBox
  }