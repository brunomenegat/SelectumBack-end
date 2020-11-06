
export const findSelection = (over) => {
    over.forEach(element => {
        if (element.selectionSet == undefined) {
            return element.name.value
        }
        else {
            return element.name.value+'.'+findSelection(element.selectionSet.selections)
        }
    })
}

// info.operation.selectionSet.selections[0].selectionSet.selections  [0]  .selectionSet.selections[0].name.value
