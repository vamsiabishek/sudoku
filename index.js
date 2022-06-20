const { model1, model2, model3, model4, model2Modified } = require("./models");

const {
    hasDuplicateValuesInRow,
    hasDuplicateValuesInCol,
    hasDuplicateValuesInBox,
    getAvailableValues,
    getPossibleValues
  } = require("./helper");

const sdkuModel = model1;

let models = [];

const addPossibilitiesToModels = (possibilities, rowIdx, colIdx) => {
    const currentModels = [...models];
    if(currentModels.length) {
        currentModels.forEach(model => {
            if(possibilities.length === 1) {
                addValueToModel(possibilities[0], [...model], rowIdx, colIdx);
            } else {
                possibilities.forEach(p => {
                    addValueToModel(p, [...model], rowIdx, colIdx);
                })
            }
        })
    } else { 
        if(possibilities.length === 1) {
            addValueToModel(possibilities[0], sdkuModel, rowIdx, colIdx);
        } else {
            possibilities.forEach(p => {
                addValueToModel(p, sdkuModel, rowIdx, colIdx);
            })
        }
    }

    models.splice(0, currentModels.length);
}

const addValueToModel = (value, model, rowIdx, colIdx) => {
    const newModel = [...model];
    const row = [...model[rowIdx]];
    row[colIdx] = value;
    newModel[rowIdx] = row;
    models.push([...newModel]);
}

const removeBreakingModels = () => {
    models = models.filter(model => {
        for (let rowIdx = 0; rowIdx < model.length; rowIdx++) {
            if (hasDuplicateValuesInRow(rowIdx, model)) {
                return false;
            }
        }
        for(let colIdx = 0; colIdx < model.length; colIdx++) {
            if (hasDuplicateValuesInCol(colIdx, model)) {
                return false;
            }  
        }
        for (let rowIdx = 0; rowIdx < model.length; rowIdx = rowIdx + 3) {
            for(let colIdx = 0; colIdx < model.length; colIdx = colIdx + 3) {
                if(hasDuplicateValuesInBox(rowIdx, colIdx, model)) {
                    return false;
                }
            }
        }
        return true;
    })
}

const removeIncompleteModels = () => {
    models = models.filter(model => {
        for (let rowIdx = 0; rowIdx < model.length; rowIdx++) {
            for(let colIdx = 0; colIdx < model.length; colIdx++) {
                if (!model[rowIdx][colIdx]) {
                    return false;
                }  
            }
        }
        return true;
    })
}

//solving the sudoku
for (let rowIdx = 0; rowIdx < sdkuModel.length; rowIdx++) {
    const row = sdkuModel[rowIdx];
    for(let colIdx = 0; colIdx < row.length; colIdx++) {
        if(!sdkuModel[rowIdx][colIdx]) {
            //console.log('filling', rowIdx, colIdx)
            const availableValues = getAvailableValues(rowIdx, colIdx, sdkuModel);
            const possibleValues = getPossibleValues(availableValues);
            addPossibilitiesToModels(possibleValues, rowIdx, colIdx);
            removeBreakingModels();
        }
    }
}

//remove models containing empty spaces
removeIncompleteModels();

console.log('solutions', models);
console.log('number of solutions ', models.length);

