#!/usr/bin/env node

/*
 * # Genereaza fisierele JSON in functie de datele din fisierul CSV sursa.
 * 
 * ## Cum execut acest fisier?
 *  - Instalezi Node.js (https://nodejs.org/en/download/package-manager/)
 *  - In terminal/cmd/powershell executi: `node generate-json.js`
 */

const CSV_FILE = './orase.csv';
const OUT_DIR = './json'
const JSON_TAB_WIDTH = 2;

const fs = require('fs');
const path = require('path');

const csvFile = fs.readFileSync(CSV_FILE).toString('utf-8');
const lines = csvFile.trim().split('\n');
const csvColumns = lines[0].split(',').map(it => it.trim());


// Validari fisier CSV
console.assert(csvColumns.length === 7, `Structura fisierului '${CSV_FILE}' a fost modificata.`);
const assertColumnNameIs = (columnIdx, name) => {
    console.assert(csvColumns[columnIdx] === name, `Ma asteptam ca coloana '${columnIdx}' sa fie numita '${name}' dar este '${csvColumns[columnIdx]}'.`);
}

assertColumnNameIs(0, 'X');
assertColumnNameIs(1, 'Y');
assertColumnNameIs(2, 'NUME');
assertColumnNameIs(3, 'JUDET');
assertColumnNameIs(4, 'JUDET AUTO');
assertColumnNameIs(5, 'POPULATIE (in 2002)');
assertColumnNameIs(6, 'REGIUNE');

const writeJSONFile = (fileNameNoExt, data) => {
    fs.writeFileSync(path.join(OUT_DIR, `${fileNameNoExt}.min.json`), JSON.stringify(data));
    fs.writeFileSync(path.join(OUT_DIR, `${fileNameNoExt}.json`), JSON.stringify(data, undefined, JSON_TAB_WIDTH));
}

const orase = lines.slice(1).map(line => {
    const [x, y, nume, judet, judetAuto, populatie, regiune] = line.split(',').map(it => it.trim());
    return {
        x: +x,
        y: +y,
        nume,
        judet,
        judetAuto,
        populatie: +populatie,
        regiune
    };
}, []);

writeJSONFile('orase', orase);

const oraseByJudet = orase.reduce((acc, oras) => {
    if (!acc[oras.judet]) {
        acc[oras.judet] = []
    };

    acc[oras.judet].push(oras);
    return acc;
}, {});

writeJSONFile('orase-dupa-judet', oraseByJudet);


const oraseByJudetAuto = orase.reduce((acc, oras) => {
    if (!acc[oras.judetAuto]) {
        acc[oras.judetAuto] = []
    };

    acc[oras.judetAuto].push(oras);
    return acc;
}, {});

writeJSONFile('orase-dupa-judet-auto', oraseByJudetAuto);