/**Die Einheiten mit den Indizes: ID, Name, Punkte, TP, EMP, DAM, EMP eff, EMP RF, DAM eff, DAM RF */

  window.addEventListener('message', function (event) {
    let race = event.data.race;
    let attack = event.data.attack;
    let fleet = event.data.fleet;
    let raceId
    switch (race) {
      case 'E': raceId = 0; break;
      case 'I': raceId = 1; break;
      case 'K': raceId = 2; break;
      case 'Z': raceId = 3; break;
    }
    if(fleet.length != 9) {
      return;
    }
    for (i = 0; i < fleet.length; i++) {
      let formInput = document.getElementById('EH' + (attack ? '0' : '1') + 'R' + raceId + 'T' + (i + 1));
      formInput.value = parseInt(formInput.value) + fleet[i];
    }
});

var EH = [null,
  [1, "Jäger", [150, 155, 175, 80], [15, 16, 14, 10], [0, 0, 0, 0], [4, 3, 6, 2], null, null, [100, 100, 80, 80, 80, 60, 60, 30, 30, 30, 30, 30, 30, 30], [1, 6, 10, 4, 9, 5, 7, 3, 2, 11, 12, 13, 14, 8], true],
  [2, "Jagdboote", [600, 550, 700, 500], [60, 55, 56, 60], [8, 12, 4, 8], [8, 3, 16, 5], [100, 80, 80, 60, 90, 90, 90, 60, 60, 60, 60, 40, 40, 40, 40], [4, 5, 9, 3, 7, 14, 13, 2, 6, 12, 11, 10, 1, 8], [100, 100, 100, 80, 80, 60, 60, 30, 30, 30, 30, 30, 30, 30], [1, 9, 10, 6, 11, 2, 13, 3, 4, 5, 7, 12, 14, 8], true],
  [3, "Zerstörer", [2800, 2900, 2850, 2800], [280, 290, 228, 336], [0, 0, 0, 0], [70, 58, 93, 63], null, null, [100, 100, 80, 80, 80, 60, 60, 30, 30, 30, 30, 30, 30, 30], [2, 6, 7, 3, 9, 5, 14, 1, 10, 4, 11, 12, 13, 8], true],
  [4, "Kreuzer", [5900, 5900, 5780, 5000], [590, 590, 462, 600], [0, 0, 0, 0], [148, 118, 188, 113], null, null, [100, 100, 80, 80, 80, 60, 60, 30, 30, 30, 30, 30, 30, 30], [3, 4, 11, 5, 9, 7, 12, 2, 1, 10, 6, 13, 14, 8], true],
  [5, "Schlachtschiffe", [13200, 13900, 12300, 12100], [1452, 1198, 1083, 1598], [0, 0, 0, 0], [330, 278, 400, 272], null, null, [100, 100, 100, 80, 80, 60, 60, 30, 30, 30, 30, 30, 30, 30], [4, 5, 9, 3, 13, 14, 7, 12, 11, 1, 10, 2, 6, 8], true],
  [6, "Bomber", [250, 200, 200, 250], [25, 20, 16, 30], [0, 5, 0, 0], [8, 0, 10, 6], [100, 100, 100, 100, 50, 20, 20, 20, 5, 5, 5, 5, 5, 5, 5], [14, 13, 12, 11, 9, 4, 5, 7, 3, 2, 1, 10, 6, 8], [100, 100, 100, 80, 80, 60, 60, 30, 30, 30, 30, 30, 30, 30], [14, 13, 9, 12, 11, 5, 4, 7, 1, 10, 6, 2, 3, 8], true],
  [7, "Träger", [15500, 16600, 17200, 15500], [1550, 1460, 1376, 1860], [0, 0, 0, 0], [194, 166, 280, 174], null, null, [100, 100, 80, 80, 60, 60, 60, 30, 30, 30, 30, 30, 30, 30], [1, 10, 6, 12, 11, 2, 9, 3, 4, 5, 7, 13, 14, 8], true],
  [8, "Frachter", [950, 850, 990, 980], [90, 90, 90, 90], [1, 4, 1, 1], [1.75, 2, 1.25, 1.25], [100, 100, 80, 60, 90, 90, 90, 60, 60, 60, 60, 40, 40, 40], [4, 9, 5, 7, 14, 13, 2, 6, 12, 11, 10, 12, 1, 8],[100, 100, 80, 80, 60, 60, 60, 30, 30, 30, 30, 30, 30, 30], [3, 4, 11, 5, 7, 12, 9, 2, 1, 10, 6, 13, 4, 8], true],
  [9, "Titanen", [115000, 122000, 116000, 104000], [14520, 11980, 10830, 15980], [165, 208, 100, 136], [3300, 2780, 4000, 2720],[100, 80, 60, 60, 90, 45, 45, 30, 30, 30, 30, 20, 20, 20, 20], [4, 5, 3, 7, 9, 14, 13, 2, 6, 12, 11, 10, 1, 8], [100, 95, 76, 76, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43], [3, 4, 11, 5, 6, 7, 11, 2, 1, 10, 13, 14, 8, 9], true],

  [10, "Orbitaljäger-Basen", [1500, 1500, 1750, 800], [180, 198, 180, 96], [0, 0, 0, 0], [38, 45, 38, 20], null, null, [100, 80, 80, 80, 40, 40, 40, 40, 40], [1, 6, 9, 7, 5, 4, 2, 3, 8], false],
  [11, "Flugkörper-Plattformen", [190, 135, 160, 170], [23, 18, 16, 20], [0, 0, 0, 0], [5, 4, 3, 4], null, null, [100, 80, 80, 80, 80, 80, 80, 80, 80], [2, 1, 9, 6, 3, 4, 5, 7, 8], false],
  [12, "Energiegeschoss-Plattformen", [125, 75, 150, 90], [15, 10, 9, 11], [0, 0, 0, 0], [3, 2, 2, 2], null, null, [100, 100, 80, 80, 40, 40, 40, 40, 40], [6, 2, 9, 1, 3, 4, 5, 7, 8], false],
  [13, "Materiegeschoss-Plattformen", [325, 260, 340, 295], [39, 34, 31, 35], [0, 0, 0, 0], [8, 8, 7, 7], null, null, [100, 100, 80, 80, 40, 40, 40, 40, 40], [3, 4, 5, 9, 7, 2, 6, 1, 8], false],
  [14, "Hochenergiegeschoss-Plattformen", [550, 525, 615, 530], [66, 69, 63, 64], [16, 17, 15, 16], [14, 16, 12, 13], [100, 100, 100, 50, 50, 25, 25, 25, 25], [9, 5, 4, 7, 3, 2, 6, 1, 8], [100, 90, 90, 90, 45, 45, 45, 45, 45], [4, 3, 5, 9, 2, 6, 1, 7, 8], false]];
var EH_NAME = 1, EH_PUNKTE = 2, EH_TP = 3, EH_EMP = 4, EH_DAM = 5, EH_EMP_EFF = 6, EH_EMP_RF = 7, EH_DAM_EFF = 8,
  EH_DAM_RF = 9, EH_ISTSCHIFF = 10;
var RASSEN = ["E", "I", "K", "Z"], TEAMNAME = ["Atter", "Deffer"];
var RF = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
/**Ein Kreuzer bzw Schlachter benötigt x Nissen als Support. Ein Boote benötigt x Kreuzer, Schlachter und Träger als Support. */
var supportwerte_Kreuzer = [10.0, 8.0, 7.0, 12.0], supportwerte_Schlachter = [20.0, 18.0, 14.0, 30.0],
  supportwerte_Boote_Kreuzer = [10.0, 13.0, 6.0, 12.0], supportwerte_Boote_Schlachter = [20.0, 28.0, 14.0, 29.0],
  supportwerte_Boote_Traeger = [40.0, 48.0, 28.0, 48.0];
/**Die Kampfkraft bei unsupporteten Schiffen sowie sie maximale Supportkraft für Boote ohne Schlachter.*/
var supportwerte_Boote_maxOhneSchlachter = 0.9, supportwerte_Boote_maxKreuzerOnly = 0.8, supportwerte_Boote_min = 0.5,
  supportwerte_Kreuzer_Schlachter_min = 0.2;

//TODO supportwerte geraten!

function zahl (wert) {
  if (wert < 0) return "- " + zahl(-wert);
  var result = "";
  wert = Math.floor(wert);
  while (wert >= 1000) {
    var ooo = wert % 1000;
    if (ooo < 10) result = ".00" + ooo + result;
    else if (ooo < 100) result = ".0" + ooo + result;
    else result = "." + ooo + result;
    wert = Math.floor(wert / 1000);
  }
  return wert + result;
}

function zahln0 (wert) {
  if (wert == 0) return "<zahl-null>0</zahl-null>";
  return zahl(wert);
}

function createFormular () {
  var html = "";
  for (var i = 1; i < EH.length; i++) {
    var line = "<tr class='InputLine'><th>" + EH[i][EH_NAME] + "</th>";
    if (EH[i][EH_ISTSCHIFF]) for (var j = 0; j < RASSEN.length; j++) {
      line += "<td class='Input" + RASSEN[j] + "'><input type='number' id='EH0R" + j + "T" + i + "' value='0' min='0' tabindex='" + (i + j * 20 + 1) + "' class='Input0' onchange='text_change(this);' onfocus='focus_in(this);' onblur='focus_out(this);' /></td>";
    } else for (var j = 0; j < RASSEN.length; j++) {
      line += "<td class='Input" + RASSEN[j] + "'>-</td>";
    }
    line += "<td></td>";
    for (var j = 0; j < RASSEN.length; j++) {
      line += "<td class='Input" + RASSEN[j] + "'><input type='number' id='EH1R" + j + "T" + i + "' value='0' min='0' tabindex='" + (i + j * 20 + 201) + "' class='Input0' onchange='text_change(this);' onfocus='focus_in(this);' onblur='focus_out(this);' /></td>";
    }
    line += "</tr>";
    html += line;
  }
  html += "<tr><th>Gesamtbonus Feuroka</th>" +
    "<td colspan='4'><input type='number' min='0' max='40' id='BonusF0' value='0' tabindex='190' step='0.1' onfocus='focus_in(this);' onblur='focus_out(this);' /> %</td><td></td>" +
    "<td colspan='4'><input type='number' min='0' max='40' id='BonusF1' value='0' tabindex='390' step='0.1' onfocus='focus_in(this);' onblur='focus_out(this);' /> %</td></tr>" +
    "<tr><th>Gesamtbonus Bloroka</th>" +
    "<td colspan='4'><input type='number' min='0' max='40' id='BonusB0' value='0' tabindex='191' step='0.1' onfocus='focus_in(this);' onblur='focus_out(this);' /> %</td><td></td>" +
    "<td colspan='4'><input type='number' min='0' max='40' id='BonusB1' value='0' tabindex='391' step='0.1' onfocus='focus_in(this);' onblur='focus_out(this);' /> %</td></tr>";

  document.getElementById("eingabeTabelle").innerHTML = html;

  if (window.location.search) {
    var querrry = window.location.search.substring(1).split('&');
    for (var i = 0; i < querrry.length; i++) if (querrry[i].length > 3) {
      var qqq = querrry[i].split('=');
      if (qqq.length == 2 && qqq[0].length == 2) {
        var rassj = -1, team;
        var tt = qqq[0].charAt(0);
        var rr = qqq[0].charAt(1).toUpperCase();
        if (tt == 'A' || tt == 'a') team = 0;
        else if (tt == 'D' || tt == 'd' || tt == 'V' || tt == 'v') team = 1;
        else continue;
        if (rr == 'A' || rr == 'a') {
          var artefaktanzahl = qqq[1].split("u");
          if (artefaktanzahl.length >= 1) document.getElementById("BonusF" + team).value = artefaktanzahl[0];
          if (artefaktanzahl.length >= 2) document.getElementById("BonusB" + team).value = artefaktanzahl[1];
          continue;
        }
        for (var rasse = 0; rasse < RASSEN.length; rasse++) if (RASSEN[rasse] == rr) rassj = rasse;
        if (rassj == -1) continue;
        var schiffsanzahl = qqq[1].split("u");
        for (var k = 0; k < schiffsanzahl.length && k + 1 < EH.length; k++) if (schiffsanzahl[k] > 0) {
          var elem = document.getElementById("EH" + team + "R" + rassj + "T" + (k + 1));
          elem.value = schiffsanzahl[k];
          elem.className = "";
        }
      }
    }
  }
}

function berechnen () {
  //Daten einlesen
  var dataini = new Array(EH.length);
  var debugg = "", bericht = "";
  var battleid = 0;
  for (var i = 1; i < dataini.length; i++) {
    //dataini [][0][R]: Atter Schiffe, [][1][R]: Deffer Schiffe, [][2]: Atter Start-TP, [][3]: Deffer Start-TP, [][4]: Atter DAM (ohne unsupp, noch nicht geblockt), ..., [][6] Atter DAM (geblockt), ..., [][8] Atter DAM Rassenverteilung, ...
    dataini[i] = [new Array(RASSEN.length), new Array(RASSEN.length), 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, new Array(RASSEN.length), new Array(RASSEN.length)];
    for (var j = 0; j < RASSEN.length; j++) {
      if (EH[i][EH_ISTSCHIFF]) dataini[i][0][j] = document.getElementById("EH0R" + j + "T" + i).value - 0;
      else dataini[i][0][j] = 0;
      dataini[i][1][j] = document.getElementById("EH1R" + j + "T" + i).value - 0;
    }
  }
  var bonusartefakte = new Array(4); //Feuroka Att, Feuroka Deff, Bloroka Att, Bloroka Deff
  bonusartefakte[0] = document.getElementById("BonusF0").value * 0.01 + 1.0;
  bonusartefakte[1] = document.getElementById("BonusF1").value * 0.01 + 1.0;
  bonusartefakte[2] = document.getElementById("BonusB0").value * 0.01 + 1.0;
  bonusartefakte[3] = document.getElementById("BonusB1").value * 0.01 + 1.0;


  //Support
  /**Indizes: EH-Typ, Team, Rasse. Datentyp double*/
  var support = new Array(EH.length);
  for (var i = 1; i < support.length; i++) support[i] = null;
  support[4] = [new Array(RASSEN.length), new Array(RASSEN.length)];
  support[2] = [new Array(RASSEN.length), new Array(RASSEN.length)];
  for (var team = 0; team <= 1; team++) {
    for (var j = 0; j < RASSEN.length; j++) {
      if (dataini[4][team][j] > 0 || dataini[5][team][j] > 0) { //Kreuzer-Schlachter-support
        support[4][team][j] = dataini[1][team][j] / (dataini[4][team][j] * supportwerte_Kreuzer[j] + dataini[5][team][j] * supportwerte_Schlachter[j]);
        if (support[4][team][j] >= 1.0) support[4][team][j] = 1.0; else {
          if (support[4][team][j] < supportwerte_Kreuzer_Schlachter_min) support[4][team][j] = supportwerte_Kreuzer_Schlachter_min;
          bericht += ++battleid + ".: " + TEAMNAME[team] + "-" + RASSEN[j] + "-Kreuzer/Schlachter sind unsupportet. Nur " + Math.floor(support[4][team][j] * 100) + "% Kampfkraft. <br>";
        }
      } else support[4][team][j] = 1.0;
      if (dataini[2][team][j] > 0) { //Boote-support //TODO 500 frei
        support[2][team][j] = dataini[4][team][j] * supportwerte_Boote_Kreuzer[j] / dataini[2][team][j];
        if (support[2][team][j] > supportwerte_Boote_maxKreuzerOnly) support[2][team][j] = supportwerte_Boote_maxKreuzerOnly;
        support[2][team][j] += dataini[7][team][j] * supportwerte_Boote_Traeger [j] / dataini[2][team][j];
        if (support[2][team][j] > supportwerte_Boote_maxOhneSchlachter) support[2][team][j] = supportwerte_Boote_maxOhneSchlachter;
        support[2][team][j] += dataini[5][team][j] * supportwerte_Boote_Schlachter[j] / dataini[2][team][j];
        if (support[2][team][j] >= 1.0) support[2][team][j] = 1.0; else {
          if (support[2][team][j] < supportwerte_Boote_min) support[2][team][j] = supportwerte_Boote_min;
          if (support[2][team][j] < supportwerte_Boote_maxOhneSchlachter)
            bericht += ++battleid + ".: " + TEAMNAME[team] + "-" + RASSEN[j] + "-Boote sind unsupportet. Nur " + Math.floor(support[2][team][j] * 100) + "% Kampfkraft. <br>";
          else
            bericht += ++battleid + ".: " + TEAMNAME[team] + "-" + RASSEN[j] + "-Boote sind wegen Schlachtschiffmangel nicht vollsupportet. " + Math.floor(support[2][team][j] * 100) + "% Kampfkraft. <br>";
        }
      } else support[2][team][j] = 1.0;
    }
  }
  support[5] = support[4];

  //Angriffskraft und Trefferpunkte berechnen
  /**Indizes: EH-Typ, Info: Atter-TP, Deffer-TP, Atter-DAM, Deffer-DAM, Atter-EMP, Deffer-EMP*/
  var data = new Array(EH.length);
  for (var i = 1; i < data.length; i++) {
    data[i] = [0.0, 0.0, 0.0, 0.0, 0.0, 0.0];
    for (var j = 0; j < RASSEN.length; j++) {
      data[i][0] += dataini[i][0][j] * EH[i][EH_TP][j];
      data[i][1] += dataini[i][1][j] * EH[i][EH_TP][j];
      if (support[i] == null) {
        dataini[i][8][j] = dataini[i][0][j] * EH[i][EH_DAM][j] * bonusartefakte[0];
        dataini[i][9][j] = dataini[i][1][j] * EH[i][EH_DAM][j] * bonusartefakte[1];
        data[i][2] += dataini[i][8][j];
        data[i][3] += dataini[i][9][j];
        data[i][4] += dataini[i][0][j] * EH[i][EH_EMP][j] * bonusartefakte[2];
        data[i][5] += dataini[i][1][j] * EH[i][EH_EMP][j] * bonusartefakte[3];

      } else {
        dataini[i][8][j] = dataini[i][0][j] * EH[i][EH_DAM][j] * support[i][0][j] * bonusartefakte[0];
        dataini[i][9][j] = dataini[i][1][j] * EH[i][EH_DAM][j] * support[i][1][j] * bonusartefakte[1];
        data[i][2] += dataini[i][8][j];
        data[i][3] += dataini[i][9][j];
        data[i][4] += dataini[i][0][j] * EH[i][EH_EMP][j] * support[i][0][j] * bonusartefakte[2];
        data[i][5] += dataini[i][1][j] * EH[i][EH_EMP][j] * support[i][1][j] * bonusartefakte[3];
      }
    }
    dataini[i][2] = data[i][0];
    dataini[i][3] = data[i][1];
    dataini[i][4] = data[i][2];
    dataini[i][5] = data[i][3];
  }

  //for (var i = 1; i < data.length; i++) for (var j = 0; j < data[i].length; j++) {
  //  debugg += "data[" + i + "][" + j + "] = " + data[i][j] + "<br />";
  //}  
  //for (var i = 1; i < support.length; i++) if (support[i] == null) debugg += "support[" + i + "]=null<br>"; else for (var j = 0; j < support[i][0].length; j++) debugg += "support[" + i + "][0][" + j + "] = " + support[i][0][j] + " und support[" + i + "][1][" + j + "] = " + support[i][1][j] + "<br>";


  var dbc = 0;
  //Kampf-Blocken
  for (var team = 0; team <= 1; team++) for (var i = 1; i < EH.length; i++) if (EH[i][EH_EMP_RF] != null && data[i][4 + team] > 0) {
    for (var zl = 0; zl < EH[i][EH_EMP_RF].length; zl++) {
      var ziel = EH[i][EH_EMP_RF][zl];
      dbc++;
      if (data[ziel] == null) alert(dbc + " ziel=" + ziel + " zl=" + zl + " i=" + i);
      if (data[ziel][3 - team] > 0) {
        var block = data[i][4 + team] * EH[i][EH_EMP_EFF][zl] / 100;
        if (data[ziel][3 - team] >= block) {  //gesamte Blockkraft verbraucht
          bericht += ++battleid + ".: " + TEAMNAME[1 - team] + "-" + EH[ziel][EH_NAME] + " werden von " + TEAMNAME[team] + "-" + EH[i][EH_NAME] + " teilweise geblockt. " + zahl(block) + " D. <br>";
          data[ziel][3 - team] -= block;
          data[i][4 + team] = 0;
          //debugg += "1: ziel = " + ziel + ", i = " + i + " <br>";
          break;
        } else {   //Ziel geblockt
          bericht += ++battleid + ".: " + TEAMNAME[1 - team] + "-" + EH[ziel][EH_NAME] + " werden von " + TEAMNAME[team] + "-" + EH[i][EH_NAME] + " vollständig geblockt. " + zahl(block) + " D. <br>";
          data[i][4 + team] -= data[ziel][3 - team] * 100 / EH[i][EH_EMP_EFF][zl];// / bonusartefakte[2+team];
          data[ziel][3 - team] = 0;
          //debugg += "2: ziel = " + ziel + ", i = " + i + " <br>";
        }
      }
    }
  }

  var resultblock = new Array(EH.length), resultfight = new Array(EH.length), resultsurvive = new Array(EH.length),
    resulttot = new Array(EH.length);
  //Blockergebnisse speichern
  for (var i = 1; i < EH.length; i++) {
    resultblock[i] = new Array(RASSEN.length * 2);
    resultfight[i] = new Array(RASSEN.length * 2);
    resultsurvive[i] = new Array(RASSEN.length * 2);
    resulttot[i] = new Array(RASSEN.length * 2);
    dataini[i][6] = data[2];
    dataini[i][7] = data[3];
    for (var team = 0; team <= 1; team++) for (var j = 0; j < RASSEN.length; j++) {
      if (dataini[i][team][j] == 0) {
        resultblock[i][team + 2 * j] = 0;
        resultfight[i][team + 2 * j] = 0;
      } else if (dataini[i][4 + team] > 0) {
        resultblock[i][team + 2 * j] = Math.floor(dataini[i][team][j] * (dataini[i][4 + team] - data[i][2 + team]) / dataini[i][4 + team]) //geblockt
        resultfight[i][team + 2 * j] = Math.floor(data[i][2 + team] / EH[i][EH_DAM][j] * dataini[i][8 + team][j] / dataini[i][4 + team]);
        //else resultfight[i][team + 2 * j] = Math.floor(data[i][2 + team] * support[i][team][j] / EH[i][EH_DAM][j]);
      } else { //darf eigentlich nicht vorkommen
        resultblock[i][team + 2 * j] = 0;
        resultfight[i][team + 2 * j] = 0;
      }
    }
  }

  //Kampf
  for (var team = 0; team <= 1; team++) for (var i = 1; i < EH.length; i++) if (data[i][2 + team] > 0) {
    //debugg += team + ": " + EH[i][EH_NAME] + " greifen an mit " + data[i][2 + team] + " DAM <br>";
    for (var zl = 0; zl < EH[i][EH_DAM_RF].length; zl++) {
      var ziel = EH[i][EH_DAM_RF][zl];
      if (data[ziel] == null || ziel <= 0 || ziel >= EH.length) {
        alert("ziel=" + ziel + ", i=" + i + ", zl= " + zl);
      }
      if (data[ziel][1 - team] > 0) {
        var schaden = data[i][2 + team] * EH[i][EH_DAM_EFF][zl] / 100; // * bonusartefakte[team];
        //debugg += "Ziel gefunden: zl=" + zl + ", i=" + i + ", ziel=" + ziel + ", (V)schaden =" + schaden + "<br>";
        if (data[ziel][1 - team] >= schaden) {  //gesamte Feuerkraft verbraucht
          bericht += ++battleid + ".: " + TEAMNAME[1 - team] + "-" + EH[ziel][EH_NAME] + " werden von " + TEAMNAME[team] + "-" + EH[i][EH_NAME] + " teilweise zerstört. " + zahl(schaden) + " TP. <br>";
          data[ziel][1 - team] -= schaden;
          data[i][2 + team] = 0;
          //debugg += "gesamte Feuerkraft verbraucht, data[ziel][1-team]= " + data[ziel][1-team] + " <br>";
          break;
        } else {   //Ziel zerstört
          bericht += ++battleid + ".: " + TEAMNAME[1 - team] + "-" + EH[ziel][EH_NAME] + " werden von " + TEAMNAME[team] + "-" + EH[i][EH_NAME] + " vollständig zerstört. " + zahl(schaden) + " TP. <br>";
          data[i][2 + team] -= data[ziel][1 - team] * 100 / EH[i][EH_DAM_EFF][zl]; // / bonusartefakte[team];
          data[ziel][1 - team] = 0;
          //debugg += "Ziel zerstört, data[i][2+team]=" + data[i][2+team] + "<br>";
        }
      }
    }
  }

  //Kampfergebnisse speichern
  for (var i = 1; i < EH.length; i++) for (var team = 0; team <= 1; team++) for (var j = 0; j < RASSEN.length; j++) {
    if (dataini[i][team][j] == 0) resultsurvive[i][team + 2 * j] = resulttot[i][team + 2 * j] = 0;
    else {
      resultsurvive[i][team + 2 * j] = Math.ceil(dataini[i][team][j] * data[i][team] / dataini[i][team + 2]);
      //resulttot[i][team + 2 * j] = dataini[i][team][j] - resultsurvive[i][team+2*j];
      resulttot[i][team + 2 * j] = resultsurvive[i][team + 2 * j] - dataini[i][team][j];
    }
  }

  //Punkte berechnen
  var resultPunkte = new Array(9), resultPunkteText = new Array(9), resultPunkteHP = new Array(9),
    resultPunkteHPText = new Array(9); //Tabellenspalten
  for (var j = 0; j < resultPunkte.length; j++) {
    resultPunkte[j] = 0;
    resultPunkteHP[j] = 0;
  }
  for (var i = 1; i < EH.length; i++) {
    for (var j = 0; j < RASSEN.length; j++) {
      resultPunkte[0] += dataini[i][0][j] * EH[i][EH_PUNKTE][j]; //Atter eingesetzt
      resultPunkte[5] += dataini[i][1][j] * EH[i][EH_PUNKTE][j]; //Deffer eingesetzt
//	 resultPunkte[1] += resultblock[i][2 * j] * EH[i][EH_PUNKTE][j]; //Atter geblockt
//	 resultPunkte[7] += resultblock[i][2 * j + 1] * EH[i][EH_PUNKTE][j]; //Deffer geblockt
      resultPunkte[1] += resultfight[i][2 * j] * EH[i][EH_PUNKTE][j]; //Atter kämpfend
      resultPunkte[6] += resultfight[i][2 * j + 1] * EH[i][EH_PUNKTE][j]; //Deffer kämpfend
      resultPunkte[2] += resultsurvive[i][2 * j] * EH[i][EH_PUNKTE][j]; //Atter überlebt
      resultPunkte[7] += resultsurvive[i][2 * j + 1] * EH[i][EH_PUNKTE][j]; //Deffer überlebt
      resultPunkte[3] += resulttot[i][2 * j] * EH[i][EH_PUNKTE][j]; //Atter tot
      resultPunkte[8] += resulttot[i][2 * j + 1] * EH[i][EH_PUNKTE][j]; //Deffer tot

      resultPunkteHP[0] += dataini[i][0][j] * EH[i][EH_TP][j]; //Atter eingesetzt
      resultPunkteHP[5] += dataini[i][1][j] * EH[i][EH_TP][j]; //Deffer eingesetzt
    }

    resultPunkteHP[2] += data[i][0]; //Atter überlebt
    resultPunkteHP[7] += data[i][1]; //Deffer überlebt
  }

  resultPunkte[4] = resultPunkteHP[4] = resultPunkteHP[1] = resultPunkteHP[6] = ""; //Mittellinie
  resultPunkteHP[3] = resultPunkteHP[2] - resultPunkteHP[0]; //Atter tot
  resultPunkteHP[8] = resultPunkteHP[7] - resultPunkteHP[5]; //Deffer tot

  resultPunkteText[0] = zahl(resultPunkte[0]) + "<br>(" + Math.round(100 * resultPunkte[0] / (resultPunkte[0] + resultPunkte[5])) + "%)";
  resultPunkteText[5] = zahl(resultPunkte[5]) + "<br>(" + Math.round(100 * resultPunkte[5] / (resultPunkte[0] + resultPunkte[5])) + "%)";
  resultPunkteText[1] = zahl(resultPunkte[1]) + "<br>(" + Math.round(100 * resultPunkte[1] / resultPunkte[0]) + "%)";
  resultPunkteText[2] = zahl(resultPunkte[2]) + "<br>(" + Math.round(100 * resultPunkte[2] / resultPunkte[0]) + "%)";
  resultPunkteText[3] = zahl(resultPunkte[3]) + "<br>(" + Math.round(100 * resultPunkte[3] / resultPunkte[0]) + "%)";
  resultPunkteText[6] = zahl(resultPunkte[6]) + "<br>(" + Math.round(100 * resultPunkte[6] / resultPunkte[5]) + "%)";
  resultPunkteText[7] = zahl(resultPunkte[7]) + "<br>(" + Math.round(100 * resultPunkte[7] / resultPunkte[5]) + "%)";
  resultPunkteText[8] = zahl(resultPunkte[8]) + "<br>(" + Math.round(100 * resultPunkte[8] / resultPunkte[5]) + "%)";

  resultPunkteText[4] = resultPunkteHPText[4] = resultPunkteHPText[1] = resultPunkteHPText[6] = "";

  resultPunkteHPText[0] = zahl(resultPunkteHP[0]) + "<br>(" + Math.round(100 * resultPunkteHP[0] / (resultPunkteHP[0] + resultPunkteHP[5])) + "%)";
  resultPunkteHPText[5] = zahl(resultPunkteHP[5]) + "<br>(" + Math.round(100 * resultPunkteHP[5] / (resultPunkteHP[0] + resultPunkteHP[5])) + "%)";
  resultPunkteHPText[2] = zahl(resultPunkteHP[2]) + "<br>(" + Math.round(100 * resultPunkteHP[2] / resultPunkteHP[0]) + "%)";
  resultPunkteHPText[3] = zahl(resultPunkteHP[3]) + "<br><u>(" + Math.round(100 * resultPunkteHP[3] / resultPunkteHP[0]) + "%)</u>";
  resultPunkteHPText[7] = zahl(resultPunkteHP[7]) + "<br>(" + Math.round(100 * resultPunkteHP[7] / resultPunkteHP[5]) + "%)";
  resultPunkteHPText[8] = zahl(resultPunkteHP[8]) + "<br><u>(" + Math.round(100 * resultPunkteHP[8] / resultPunkteHP[5]) + "%)</u>";


  //Kampfbericht schreiben
  var rasseda = new Array(RASSEN.length), turmda = new Array(RASSEN.length);
  for (var j = 0; j < rasseda.length; j++) rasseda[j] = false;
  for (var i = 1; i < EH.length; i++) for (var j = 0; j < RASSEN.length; j++) if (dataini[i][0][j] > 0 || dataini[i][1][j] > 0) {
    rasseda[j] = true;
    if (!EH[i][EH_ISTSCHIFF]) turmda[j] = true;
  }

  var html = "";
  for (var j = 0; j < RASSEN.length; j++) if (rasseda[j]) for (var i = 1; i < EH.length; i++) if (EH[i][EH_ISTSCHIFF] || turmda[j]) {
    var line = "<tr class='Result" + RASSEN[j] + "'><th>" + RASSEN[j] + "-" + EH[i][EH_NAME] + "</th>";
    for (var team = 0; team <= 1; team++) {
      line += "<td>" + zahln0(dataini[i][team][j]) + "</td><td";
      if (dataini[i][team][j] > 0 && support[i] != null) {
        if (support[i][team][j] == 1.0) line += " title='voll supportet.'";
        else line += " title='Kampfkraft " + Math.floor(support[i][team][j] * 100) + "% (fehlender Support).'";
      }
      line += ">" + zahln0(resultfight[i][team + 2 * j]) + "</td><td>" + zahln0(resultsurvive[i][team + 2 * j]) + "</td><td>" + zahln0(resulttot[i][team + 2 * j]) + "</td>";
      if (team == 0) line += "<td></td>";
      else line += "</tr>";
    }
    html += line;
  }
  html += "<tr class='ResultP'><th>Punkte</th>";
  for (var j = 0; j < resultPunkte.length; j++) html += "<th>" + resultPunkteText[j] + "</th>";
  html += "</tr><tr class='ResultP'><th>Hitpoints</th>";
  for (var j = 0; j < resultPunkteHP.length; j++) html += "<th>" + resultPunkteHPText[j] + "</th>";
  html += "</tr><tr class='ResultS'><th>Ergebnis</th><th colspan='9' style='text-align:center;'>";
  if (1.0 * resultPunkteHP[3] / resultPunkteHP[0] > 1.1 * resultPunkteHP[8] / resultPunkteHP[5])
    html += " D e r &nbsp; A n g r e i f e r &nbsp; g e w i n n t &nbsp; d e n &nbsp; K a m p f. </th></tr>";
  else
    html += " D e r &nbsp; V e r t e i d i g e r &nbsp; g e w i n n t &nbsp; d e n &nbsp; K a m p f. </th></tr>";
  document.getElementById("ergebnisTabelle").innerHTML = html;

  //for (var i = 1; i < data.length; i++) for (var j = 0; j < data[i].length; j++) {
  //  debugg += "data[" + i + "][" + j + "] = " + data[i][j] + "<br />";
  //}  
  //for (var i = 1; i < dataini.length; i++) for (var j = 0; j < RASSEN.length; j++) {
  //  debugg += "dataini[" + i + "][0][" + j + "] = " + dataini[i][1][j] + "dataini[" + i + "][1][" + j + "] = " + dataini[i][1][j] + "<br />";
  //}  

  //for (var i = 1; i < support.length; i++) if (support[i] == null) debugg += "support[" + i + "]=null<br>"; else for (var j = 0; j < support[i][0].length; j++) debugg += "support[" + i + "][0][" + j + "] = " + support[i][0][j] + " und support[" + i + "][1][" + j + "] = " + support[i][1][j] + "<br>";
  document.getElementById("debuggy").innerHTML = debugg + "<br>" + bericht;
}


function focus_in (src) {
  if (src.value == "0") src.value = "";
  else src.select();
  src.className = "";
}

function focus_out (src) {
  if (src.value == "" || src.value == 0) src.value = "0";
  text_change(src);
}

function text_change (src) {
  if (src.value == "" || src.value == 0) src.className = "Input0"; else src.className = "";
}
