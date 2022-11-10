## Despre

O bază de date de 13.749 localități, de la sate, adunate

## :cloud: Baza de date

### :pencil: CSV 
Toate orasele și satele în format CSV de tipul 

Longitudine | Latitudine | Denumire | Județ | Județ auto | Populație | Regiune

Nota: pentru a putea integra cu Google Maps trebuie sa folosit Y,X ex:

`23.57,46.07,"Alba Iulia","Alba","AB",65091,"Centru"`

https://maps.google.com/maps?q=46.07,23.57

Conține 13756 de înregistrări valabile în anul 2002.

### :pencil: JSON

Toate orasele și satele în format JSON de tipul

```typescript
type Oras = {
    x: number;
    y: number;
    nume: string;
    judet: string;
    judetAuto: string;
    populatie: number;
    regiune: string;
};

// Fisierele: orase.json, orase.min.json
type OraseJSON = Array<Oras>;

// Fisierele: orase-dupa-judet.json, orase-dupa-judet.min.json
type OraseDupaJudetJSON = Map</** Judet */ string, Oras>;

// Fisierele: orase-dupa-judet-auto.json, orase-dupa-judet-auto.min.json
type OraseDupaJudetAutoJSON = Map</** Judet Auto */ string, Oras>;
```

Fisierele `JSON` sunt generate de `generate-json.js` din fisierul `orase.csv`.
Vezi codul sursa pentru mai multe detalii.

### :hankey: SQL

 :rotating_light: Diferenta intre csv si .sql, foloște CSV

$ mysql -u root -p localitati < judete-orase.sql

## Exemple

http://hazzardweb.net/2013/04/localitatile-si-judetele-din-romania-in-sql/


## :trollface: Surse

* CSV: http://www.cipy.ro/internet/baza-de-date-orase-comune-din-romania.html
* JSON: https://github.com/romania/localitati/blob/master/orase.csv
* SQL: http://skyweb.ro/2013/01/02/tabele-mysql-cu-judetele-si-localitatile-din-romania/
* http://earth.unibuc.ro/download/romania-seturi-vectoriale

## :sparkling_heart: Contribuitori

[Vezi contribuitori](https://github.com/romania/localitati/graphs/contributors)

