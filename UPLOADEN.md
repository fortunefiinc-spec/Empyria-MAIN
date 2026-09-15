# Empyria v0.29

Vier bestanden, allemaal in de ROOT van fortunefiinc-spec/Empyria-MAIN.
Geen assets-map, geen submappen.

    index.html
    three.min.js
    empyria-music.mp3
    empyria-music2.mp3

Staan de laatste drie er al, dan hoef je alleen index.html te vervangen.

Daarna in BotFather het versienummer ophogen:

    https://fortunefiinc-spec.github.io/Empyria-MAIN/index.html?v=18

Controle: onder het tandwiel hoort v0.29 te staan.

## Wat er in deze versie is opgelost

Het kader van je grondgebied werd op 3,7 eenheden hoogte getekend in
plaats van op het maaiveld. In een isometrisch beeld schuift alles wat
hoger ligt omhoog op je scherm, dus het kader stond scheef ten opzichte
van de tegels die het aangaf. Je gebouwen leken daardoor buiten je eigen
grond te staan. Alles ligt nu op de grond zelf.

Verder toont het spel nu een leesbare melding als een bestand ontbreekt,
in plaats van een leeg scherm. Die melding gaat alleen over je eigen
bestanden; externe scripts hebben hun eigen terugval.
