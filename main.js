var moment =require('moment');
var date=new Date();
var formatedDate=moment(date).format('LL');
var unique=require('uniq');
var data=[1,2,2,2,3,5,5,7];
console.log(unique(data))
console.log(formatedDate);
console.log(date);