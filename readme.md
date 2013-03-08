## Despre

O baza de date de 13.749 localități, de la sate, adunate

## Baza de date

### CSV
Toate orasele si satele in format CSV de tipul 

Longitudine | Latitudine | Denumire | Judet | Judet auto | Populatie | Regiune

* pentru a putea integra cu Google Maps trebuie sa folosit Y,X ex:

`23.57,46.07,"Alba Iulia","Alba","AB",65091,"Centru"`

https://maps.google.com/maps?q=46.07,23.57

### SQL

$ mysq -u root -p localitati < judete-orase.sql

## TODO

* Mai multe formate!

## Sursa Originala 

* CSV: http://www.cipy.ro/internet/baza-de-date-orase-comune-din-romania.html
* SQL: http://skyweb.ro/2013/01/02/tabele-mysql-cu-judetele-si-localitatile-din-romania/
* http://earth.unibuc.ro/download/romania-seturi-vectoriale
