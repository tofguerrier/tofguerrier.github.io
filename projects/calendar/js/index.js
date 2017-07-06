function report_date() {
    //var bdate ="April 14, 1974 11:13:00";
    var bdate =     document.getElementById("bday").value;
    //document.write("<br />Date entered  :"+bdate+"");
    //console.log(bdate);
}

document.getElementById("input").submit();

function generate_calendar() {
  var DateDiff = {
    inDays: function(d1, d2) {
        var t2 = d2.getTime();
        var t1 = d1.getTime();
        return parseInt((t2-t1)/(24*3600*1000));
    },
    inWeeks: function(d1, d2) {
        var t2 = d2.getTime();
        var t1 = d1.getTime();
        return parseInt((t2-t1)/(24*3600*1000*7));
    },
    inMonths: function(d1, d2) {
        var d1Y = d1.getFullYear();
        var d2Y = d2.getFullYear();
        var d1M = d1.getMonth();
        var d2M = d2.getMonth();
        return (d2M+12*d2Y)-(d1M+12*d1Y);
    },
    inYears: function(d1, d2) {
        return d2.getFullYear()-d1.getFullYear();
    }
}

  var bdate = document.getElementById("bday").value; var d1 = new Date(bdate);
  //var d1 = document.getElementById("bday");
  var d2 = new Date();

  
  document.getElementById('difference').innerHTML = "<br />Number of <b>days</b> since "+bdate+": "+DateDiff.inDays(d1, d2) + "<br />Number of <b>weeks</b> since "+bdate+": "+DateDiff.inWeeks(d1, d2) + "<br />Number of <b>months</b> since "+bdate+": "+DateDiff.inMonths(d1, d2) + "<br />Number of <b>years</b> since "+bdate+": "+DateDiff.inYears(d1, d2);

var rowsW = [];
var colStr = null;
var countweek = 1;
var week = DateDiff.inWeeks(d1, d2);
for(var rowi = 0; rowi <= 100; rowi++) {
	colStr = "";
  // 52 weeks per year -> 51
  for (var coli = 0; coli <= 51; coli++){
      //var characters = 'ABCDEFGHIJKLMNOPQRSTUVXYZ';
      //var random = parseInt(Math.random()*characters.length);
      //var letter = characters.charAt(random); //returning random letter
      countweek++;
      if (countweek > week) {
          var cell = '<td>' + 'O' + '</td>';
          } else {
          var cell = '<td bgcolor=black>' + 'X' + '</td>'; 
          }
      colStr += cell;
  };
  rowsW.push('<tr>' + colStr + '</tr>');
}


document.getElementById('life_calendar_week').innerHTML += rowsW.join("");

var rowsM = [];
var colStr = null;
var countMonth = 1;
var month = DateDiff.inMonths(d1, d2);
for(var rowmi = 0; rowmi <= 100; rowmi++) {
	colStr = "";
  for (var colmi = 0; colmi <= 11; colmi++){
      //var characters = 'ABCDEFGHIJKLMNOPQRSTUVXYZ';
      //var random = parseInt(Math.random()*characters.length);
      //var letter = characters.charAt(random); //returning random letter
      countMonth++;
      if (countMonth > month) {
          var cell = '<td>' + 'O' + '</td>';
          } else {
          var cell = '<td bgcolor=black>' + 'X' + '</td>'; 
          }
      colStr += cell;
  };
  rowsM.push('<tr>' + colStr + '</tr>');
}





document.getElementById('life_calendar_month').innerHTML += rowsM.join("");
  
}
