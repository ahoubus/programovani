function setup() {
    noCanvas();

    print(`ListA: ${sortedListA}`);
    print(`ListB: ${sortedListB}`);

    print(`Merged: ${merge(sortedListA, sortedListB)}`);
}

// Funkce merge dostance dva setřízené seznamy.
// Doplňte ji, aby seznamy 'slila' do jednoho setřízeného seznamu.
// Není potřeba nic znovu třídit, stačí přidávat do výsledného seznamu ve správném pořadí
function merge(listA, listB) {
    let out = [];

    let i = 0
    let j = 0

    while (true) {
        if (listA[i] < listB[j]) {
            out.push(listA[i])
        }
        if (listB[i] < listA[j]) {
            out.push(listB[j])
        }
        if (listA[i] = listB[j]) {
            out.push(listA[i])
        }

        break
    }


    return out;
}