


const USD = {symbol:"$", type:"USD", ratio:1};
const GBP = {symbol:"£", type:"GBP", ratio:.77};
const MXN = {symbol:"mx$", type:"MXN", ratio:19.95};
const CAD = {symbol:"c$", type:"CAD", ratio:1.38};
const GTQ = {symbol:" ", type:"GTQ", ratio:7.75};
const BZD = {symbol:"BZ$", type:"BZD", ratio:2.02};
const HNL = {symbol:"L", type:"HNL", ratio:24.98};
const NIO = {symbol:"C$", type:"NIO", ratio:36.91};
const CRC = {symbol:"₡", type:"CRC", ratio:515.38};
const PAB = {symbol:"฿", type:"PAB", ratio:1};
const COL = {symbol:"$", type:"COL", ratio:4282.33};
const VEF = {symbol:"Bs", type:"VEF", ratio:39.13};
const PEN = {symbol:"S/", type:"PEN", ratio:3.76};
const BOB = {symbol:"Bs.", type:"BOB", ratio:6.95};
const CLP = {symbol:"$", type:"CLP", ratio:952.38};
const UYU = {symbol:"$U", type:"UYU", ratio:41.76};
const PYG = {symbol:"₲", type:"PYG", ratio:7942.71};
const BRL = {symbol:"R$", type:"BRL", ratio:7942.71};
const ARS = {symbol:"$", type:"ARS", ratio:983.76};
const CNY = {symbol:"¥", type:"CNY", ratio:7.13};


if(!(sessionStorage.ratio)){
    sessionStorage.ratio = JSON.stringify(USD);
}

const useableVal = JSON.parse(sessionStorage.ratio);



function wordPrint(string){
    document.write(string);
}

function commaSplice(value){
    if(value<1000){
        return value;
    }
    var power = 0;
    var Uvalue = value;
    var output = "";
    var remainder = 0;
    while(Uvalue>=10){
        power++;
        Uvalue = Uvalue/10;
    }
    remainder = power%3;
    var ii = 0;
    for(i = 0; i<power+1; i++){
        if(ii%3 == remainder && !(i==power)){
            output = output+(Math.trunc(value/(Math.pow(10, power-i))))+",";
        }
        else{
            output = output+(Math.trunc(value/(Math.pow(10, power-i))));
        }
        value = value%(Math.pow(10, power-i));
        ii++;
    }
    return output;
}

function valRatioPrint(value){
    document.write(useableVal.symbol+commaSplice(Math.trunc((value*useableVal.ratio)*100)/100)+" "+useableVal.type);
}
function valPrint(value){
    document.write(useableVal.symbol+commaSplice(value)+" "+useableVal.type);

}
function setValPrintUSD(value){
    document.write(USD.symbol+commaSplice(Math.trunc((value*(USD.ratio*(1/useableVal.ratio)))*10000)/10000)+" "+USD.type);
}

function setValPrintGBP(value){
    document.write(GBP.symbol+commaSplice(Math.trunc((value*(GBP.ratio*(1/useableVal.ratio)))*10000)/10000)+" "+GBP.type);
}

function setValPrintCAD(value){
    document.write(CAD.symbol+commaSplice(Math.trunc((value*(CAD.ratio*(1/useableVal.ratio)))*10000)/10000)+" "+CAD.type);
}

function setValPrintMXN(value){
    document.write(MXN.symbol+commaSplice(Math.trunc((value*(MXN.ratio*(1/useableVal.ratio)))*10000)/10000)+" "+MXN.type);
}

function setValPrintARS(value){
    document.write(ARS.symbol+commaSplice(Math.trunc((value*(ARS.ratio*(1/useableVal.ratio)))*10000)/10000)+" "+ARS.type);
}

function setValPrintCNY(value){
    document.write(CNY.symbol+commaSplice(Math.trunc((value*(CNY.ratio*(1/useableVal.ratio)))*10000)/10000)+" "+CNY.type);
}

function setValPrintPEN(value){
    document.write(PEN.symbol+commaSplice(Math.trunc((value*(PEN.ratio*(1/useableVal.ratio)))*10000)/10000)+" "+PEN.type);
}

function rewriteRatio(money){

    if(money === "USD"){
        sessionStorage.ratio = JSON.stringify(USD);
    }
    else if(money === "GBP"){
        sessionStorage.ratio = JSON.stringify(GBP);
    }
    else if(money === "MXN"){
        sessionStorage.ratio = JSON.stringify(MXN);
    }
    else if(money === "CAD"){
        sessionStorage.ratio = JSON.stringify(CAD);
    }
    else if(money === "GTQ"){
        sessionStorage.ratio = JSON.stringify(GTQ);
    }
    else if(money === "BZD"){
        sessionStorage.ratio = JSON.stringify(BZD); 
    }
    else if(money === "HNL"){
        sessionStorage.ratio = JSON.stringify(HNL);
    }
    else if(money === "NIO"){
        sessionStorage.ratio = JSON.stringify(NIO);
    }
    else if(money === "CRC"){
        sessionStorage.ratio = JSON.stringify(CRC);
    }
    else if(money === "PAB"){
        sessionStorage.ratio = JSON.stringify(PAB);
    }
    else if(money === "COL"){
        sessionStorage.ratio = JSON.stringify(COL);
    }
    else if(money === "VEF"){
        sessionStorage.ratio = JSON.stringify(VEF);
    }
    else if(money === "PEN"){
        sessionStorage.ratio = JSON.stringify(PEN);
    }
    else if(money === "BOB"){
        sessionStorage.ratio = JSON.stringify(BOB);
    }
    else if(money === "CLP"){
        sessionStorage.ratio = JSON.stringify(CLP);
    }
    else if(money === "UYU"){
        sessionStorage.ratio = JSON.stringify(UYU);
    }
    else if(money === "PYG"){
        sessionStorage.ratio = JSON.stringify(PYG);
    }
    else if(money === "BRL"){
        sessionStorage.ratio = JSON.stringify(BRL);
    }
    else if(money === "ARS"){
        sessionStorage.ratio = JSON.stringify(ARS);
    }
    
    else if(money === "CNY"){
        sessionStorage.ratio = JSON.stringify(CNY);
    }
    location.reload();
}
function homePage(){
    window.location.href = "index.html";
}

function gotoPage(country){
    if(country === "United States of America"){
        window.location.href = "America.html";
    }
    else if(country === "United Kingdom"){
        window.location.href = "United Kingdom.html";
    }
    else if(country === "Argentina"){
        window.location.href = "Argentina.html";
    }
    else if(country === "Canada"){
        window.location.href = "Canada.html";
    }
    else if(country === "China"){
        window.location.href = "China.html";
    }
    else if(country === "Mexico"){
        window.location.href = "Mexico.html";
    }
    else if(country === "Peru"){
        window.location.href = "Peru.html";
    }
}