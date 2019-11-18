# Verkefni 10

Útfæra skal vefsíðu sem sækir mynd af handahófi frá NASA. Nota skal öll þau tól sem við höfum séð í vetur. Búið er að setja alla pakka og scriptur í `package.json` og upphafsstillingar fyrir rollup og babel í `rollup.config.js`. Allt útlit er gefið með sass ásamt viðeigandi HTML skrám. Leyfilegt er að breyta því sem gefið er.

Dæmi um virkni er gefin í `demo.mp4`.

## NASA APOD API
Í þessu verkefni munum við nota API sem NASA býður upp á.
 * https://api.nasa.gov/

Við munum notast við `Astronomy Picture of the Day` Apann, grunnslóðin að honum er `https://api.nasa.gov/planetary/apod`. Síðan þarf að bæta við slóðina URL viðföngunum `api_key` og `date`. Dæmi um fulla slóð er t.d.
```
https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2019-11-13
```

Þið getið notað `DEMO_KEY` fyrir nokkrar fyrirspurnir, en þar sem hann leyfir aðeins lítið magn af fyrirspurnum þá þurfið þið eflaust að sækja um API lykil. Það er ókeypis, og auðvelt er að öðlast hann (sjá myndband).

Dæmi um svar frá vefþjón er að finna í apod.json
```
{ 
  "date":"string",
  "explanation":"string",
  "hdurl":"string",
  "media_type":"string",
  "service_version":"string",
  "title":"string",
  "url":"string"
}
```
media_type getur verið `image` eða `video`. Hægt er að næla sér í aukastig ef passað er að myndskeið verði birt rétt í þau fáu skipti sem APOD skilar myndskeiði í staðin fyrir mynd. (sjá mat).

elsta dagsetningin sem APINN býður uppá er 16. júní 1995. Svo þið þurfið að velja einhverja dagsetningu af handahófi á milli 16. júní 1995 og deginum í dag (hvaða dagur sem það nú er).


## Forsíða

Þegar forsíðan er hlaði skal sækja mynd frá NASA API og birta hana strax ásamt titil myndarinnar og útskýringar texta. Á forsíðunni eru síðan 3 takkar. 
 * Þegar smellt er á efsta takkann er ný mynd sótt frá NASA og birt. Valið á mynd skal vera handahófskennt.
 * Þegar smellt er á miðju takkann þá er núverandi mynd vistuð í Local Storage.
 * Þegar smellt er á neðsta takkann þá er farið inná Favourites síðuna.

## Favourites

Á favourites síðunni er birt allar myndirnar sem hafa verið vistaðar ásamt titli þeirra.

## Tól og grunnkóði

Í verkefninu eru eftirfarandi tól uppsett:

* rollup til að pakka kóða
* babel til að transpilea kóða og gera aðgengilegri fyrir fleiri vafra
* node-sass fyrir Sass
* eslint fyrir lint á JavaScript
* stylelint fyrir lint á Sass
* browser-sync til að keyra verkefni

```bash
> npm install
> npm test -s
# Upp koma villur
> npm run dev
# Vefþjónn keyrir á localhost:3000
```

Allur grunnkóði er undir `src/` en þýddur kóði undir `dist/`. `index.html` vísar rétt í þýddar skrár.

Í gefnum kóða eru föll með athugasemdum. Leyfilegt er að breyta að öllu leiti.

## Mat

* 10% – Snyrtilegur kóði, engar villur þegar `npm test` er keyrt
* 30% – Virkni á forsíðu rétt.
* 30% – Vista myndir rétt
* 30% – Favourites birtir vistaðar myndir.
* 50% - Hægt er að næla sér í aukastig ef þið passið að birta youtube myndskeið í þeim tilfellum sem það gerist.

## Sett fyrir

Verkefni sett fyrir í  miðvikudaginn 13. nóvember 2019.

## Skil

Skila skal undir „Verkefni og hlutaprófa“ á Uglu í seinasta lagi fyrir lok dags fimmtudaginn 21. nóvember 2019.

Skilaboð skulu innihalda:

* Slóð á verkefni á heimasvæði
* Slóð á GitHub repo fyrir verkefni, og **öllum** dæmatímakennurum skal hafa verið boðið í repo ([sjá leiðbeiningar](https://help.github.com/articles/inviting-collaborators-to-a-personal-repository/)). Notendanöfn þeirra eru `anz1e`, `gunnnnii`, `magdadianaa`, `OlafurjonHI` og `Wolfcoder13` .

## Einkunn

Sett verða fyrir tíu minni verkefni þar sem átta bestu gilda 3,5% hvert, samtals 28% af lokaeinkunn.

Sett verða fyrir tvö hópverkefni þar sem hvort um sig gildir 11%, samtals 22% af lokaeinkunn.

---

> Útgáfa 0.1
