'use strict'
 
let link="https://drive.google.com/file/d/1FP3paEh4-Z6ExNQ_Lp4N9WO7XQ_3DPG1/view?usp=drive_link";
let id=link.indexOf("/d/");
let endId=link.indexOf("/view");
alert(link.substring(id+3,endId));