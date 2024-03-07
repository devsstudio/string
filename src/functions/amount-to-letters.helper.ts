export class AmountToLettersHelper {

  public static convert(amount: string, force_decimals: boolean = false, unit: string = ''): string {

    const xarray: { [key: number]: string } = {
      0: "CERO",
      1: "UN", 2: "DOS", 3: "TRES", 4: "CUATRO", 5: "CINCO", 6: "SEIS", 7: "SIETE", 8: "OCHO", 9: "NUEVE",
      10: "DIEZ", 11: "ONCE", 12: "DOCE", 13: "TRECE", 14: "CATORCE", 15: "QUINCE", 16: "DIECISEIS", 17: "DIECISIETE", 18: "DIECIOCHO", 19: "DIECINUEVE",
      20: "VEINTI", 30: "TREINTA", 40: "CUARENTA", 50: "CINCUENTA", 60: "SESENTA", 70: "SETENTA", 80: "OCHENTA", 90: "NOVENTA",
      100: "CIENTO", 200: "DOSCIENTOS", 300: "TRESCIENTOS", 400: "CUATROCIENTOS", 500: "QUINIENTOS", 600: "SEISCIENTOS", 700: "SETECIENTOS", 800: "OCHOCIENTOS", 900: "NOVECIENTOS"
    };

    let amount_trimmed = amount.trim();
    let xpos_punto = amount_trimmed.indexOf(".");
    let xaux_int = amount_trimmed;
    let xdecimales = "00";

    if (xpos_punto !== -1) {
      if (xpos_punto === 0) {
        amount_trimmed = "0" + amount_trimmed;
        xpos_punto = amount_trimmed.indexOf(".");
      }
      xaux_int = amount_trimmed.substring(0, xpos_punto); // Obtener la parte entera del monto
      xdecimales = (amount_trimmed + "00").substring(xpos_punto + 1, xpos_punto + 3); // Obtener los decimales
    }

    let XAUX = xaux_int.padStart(18, " "); // Ajustar la longitud de la cifra
    let xcadena = "";

    for (let xz = 0; xz < 3; xz++) {
      let xaux = XAUX.substring(xz * 6, xz * 6 + 6);
      if (xaux.trim().length === 0) {
        continue;
      }
      let xi = 0;
      let xlimite = 6;
      let xexit = true;

      while (xexit) {
        if (xi === xlimite) {
          break;
        }

        let x3digitos = (xlimite - xi) * -1;
        xaux = xaux.substring(xaux.length + x3digitos);

        for (let xy = 1; xy < 4; xy++) {
          switch (xy) {
            case 1:
              var key = parseInt(xaux.substring(0, 3));
              if (Number.isNaN(key) || key < 100) {
                // No hacer nada si el grupo de tres dígitos es menor a una centena
              } else {
                if (key in xarray) {
                  let xseek = xarray[key];
                  let xsub = this.suffix(xaux);
                  if (xaux.substring(0, 3) === "100") {
                    xcadena = " " + xcadena + " CIEN " + xsub;
                  } else {
                    xcadena = " " + xcadena + " " + xseek + " " + xsub;
                  }
                  xy = 3;
                } else {
                  key = parseInt(xaux[0]) * 100;
                  let xseek = xarray[key];
                  xcadena = " " + xcadena + " " + xseek;
                }
              }
              break;
            case 2:
              var key = parseInt(xaux[1] + xaux[2]);
              if (Number.isNaN(key) || key < 10) {
                // No hacer nada si las decenas son menores a diez
              } else {
                if (key in xarray) {
                  let xseek = xarray[key];
                  let xsub = this.suffix(xaux);
                  if (key === 20) {
                    xcadena = " " + xcadena + " VEINTE " + xsub;
                  } else {
                    xcadena = " " + xcadena + " " + xseek + " " + xsub;
                  }
                  xy = 3;
                } else {
                  key = parseInt(xaux[1]) * 10;
                  let xseek = xarray[key];
                  if (key === 20) {
                    xcadena = " " + xcadena + " " + xseek;
                  } else {
                    xcadena = " " + xcadena + " " + xseek + " Y ";
                  }
                }
              }
              break;
            case 3:
              var key = parseInt(xaux[2]);
              if (Number.isNaN(key) || key < 1) {
                // No hacer nada si la unidad es cero
              } else {
                let xseek = xarray[key];
                let xsub = this.suffix(xaux);
                xcadena = " " + xcadena + " " + xseek + " " + xsub;
              }
              break;
          }
        }
        xi += 3;
      }

      if (xcadena.trim().endsWith("ILLON") && unit) {
        xcadena += " DE";
      }

      if (xcadena.trim().endsWith("ILLONES") && unit) {
        xcadena += " DE";
      }

      if (xaux.trim() !== "") {
        switch (xz) {
          case 0:
            if (xaux.trim() === "1") {
              //if (xaux.substring(xz * 6, xz * 6 + 6).trim() === "1") {
              xcadena += " UN BILLON ";
            } else {
              xcadena += " BILLONES ";
            }
            break;
          case 1:
            //if (xaux.substring(xz * 6, xz * 6 + 6).trim() === "1") {
            if (xaux.trim() === "1") {
              xcadena += " UN MILLON ";
            } else {
              xcadena += " MILLONES ";
            }
            break;
          case 2:
            if (xdecimales !== "00" || force_decimals) {
              if (parseFloat(amount) < 1) {
                xcadena = "CERO CON " + xdecimales + "/100 " + unit;
              }
              if (parseFloat(amount) >= 1 && parseFloat(amount) < 2) {
                xcadena = "UNO CON " + xdecimales + "/100 " + unit;
              }
              if (parseFloat(amount) >= 2) {
                xcadena += " CON " + xdecimales + "/100 " + unit;
              }
            }
            break;
        }
      }

      xcadena = xcadena.replace("VEINTI ", "VEINTI");
      xcadena = xcadena.replace(/ +(?= )/g, ''); // Eliminar espacios duplicados
      xcadena = xcadena.replace("UN UN", "UN");
      xcadena = xcadena.replace(/ +(?= )/g, ''); // Eliminar espacios duplicados
      xcadena = xcadena.replace("BILLON DE MILLONES", "BILLON DE");
      xcadena = xcadena.replace("BILLONES DE MILLONES", "BILLONES DE");
      xcadena = xcadena.replace("DE UN", "UN");
      if (xcadena.trim().startsWith("UN MIL")) {
        xcadena = xcadena.replace("UN MIL", "MIL");
      }
    }

    return xcadena.trim();
  }

  private static suffix(xx: string): string {
    xx = xx.trim();
    let xstrlen = xx.length;
    let xsub = "";

    if (xstrlen === 1 || xstrlen === 2 || xstrlen === 3) {
      xsub = "";
    }

    if (xstrlen === 4 || xstrlen === 5 || xstrlen === 6) {
      xsub = "MIL";
    }

    return xsub;
  }
}