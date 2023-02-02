import wixData from 'wix-data';
  console.log("hi!");


$w.onReady(function () {


wixData.query("bookoff")
  .find()
  .then((results) => {
    if(results.items.length > 0) {
      let items = results.items; 
      console.log(items);
     // console.log("row count"+results.length);
      let len = results.length
        let disabledDatesStart =[];
        let disabledDatesEnd =[];
        items.forEach(e => {
            disabledDatesStart.push(e.date);
            disabledDatesEnd.push(e.checkOutDate);

    })
    let newDateStart = [];
    newDateStart = disabledDatesStart;
    console.log("disDatesS"+newDateStart)
    let newDateEnd = [];
    newDateEnd= disabledDatesEnd;
    console.log("disDatesE"+newDateEnd)

const disDates = [
  {
    startDate: new Date(newDateStart[1]),
    endDate: new Date(newDateEnd[1])
  }

];



for (let index = 0; index < len; index++) {

  disDates.push( {
    startDate: new Date(newDateStart[index]),
    endDate: new Date(newDateEnd[index])
  })
  $w('#datePicker3').disabledDateRanges = disDates;
  $w('#datePicker4').disabledDateRanges = disDates;

}

console.log(disDates);



    }
  }) ;


export function button2_click(event) {
  let checkInValue = $w("#datePicker3").value; 
  let checkOutValue = $w("#datePicker4").value;

$w("#dataset4").add()
  .then( ( ) => {
    console.log("New item created");
  } )
  .catch( (err) => {
    let errMsg = err;
  } );
$w("#dataset4").setFieldValues( {
  "date":  checkInValue,
  "checkOutDate":   checkOutValue
} );

}
