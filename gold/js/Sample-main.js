$(document).ready(function(){

	$('#home').on('pageinit', function(){
		//code needed for home page goes here
	});	
			
	$('#add').on('pageinit', function(){
	
			var billForm = $('#addBill');
			//var	abErrors = $('#abErrors');
		    billForm.validate({
				invalidHandler: function(form, validator) {
					abErrors.click();
					var labels = '';
					for(var key in validator.submitted) {
						var tag = $('label[for^="'+ key +'"]').not('[generated]');
						var groupTag = tag.closest('fieldset').find('.ui-controlgroup-label').not('[generated]');
						var itemName = groupTag.length ? groupTag.text() : tag.text();
						labels += '<li>'+ itemName +'</li>';
					};
					$("#errors ul").html(labels);
				},
				submitHandler: function() {
				var data = billForm.serializeArray();
				getForm(data);
				}
		
			})
		//any other code needed for addItem page goes here
		
	});
	
});

var clearBill = document.getElementById("resetMe");
var localClear = document.getElementById("clearAllData");
var saveSuccess = "Your Bill Is Saved!"


function createButtons(key, buttons) {
	var editButton = document.createElement("input");
	editButton.setAttribute("type", "button");
	editButton.setAttribute("value", "Edit Bill");
	editButton.setAttribute("id", "editBill");
	editButton.href = "#";
	editButton.key = key;
	editButton.addEventListener("click", makeEdits);
	buttons.appendChild(editButton);
	var pageBreak = document.createElement("br");
	buttons.appendChild(pageBreak);
	var delButton = document.createElement("input");
	delButton.setAttribute("type", "button");
	delButton.setAttribute("value", "Delete Bill");
	delButton.setAttribute("id", "delBill");
	delButton.href = "#";
	delButton.key = key;
	var delText = "Delete Bill";
	delButton.addEventListener("click", runDelete);
	delButton.innerHTML = delText;
	buttons.appendChild(delButton);
};

function makeEdits() {
	var value = localStorage.getItem(this.key);
	var recallData = JSON.parse(value);
	switchPages("off");
	displaySavedInfo("btype").value = recallData.btype[1];
	displaySavedInfo("bname").value = recallData.bname[1];
	displaySavedInfo("amt").value = recallData.amt[1];
	displaySavedInfo("prio").value = recallData.prio[1];
	displaySavedInfo("due").value = recallData.due[1];
	displaySavedInfo("freqs").value = recallData.freqs[1];
	var radioSelected = document.forms[0].status;
	for(i=0; i<radioSelected.length; i++) {
		if(radioSelected[i].value == recallData.pd[1]) {
			radioSelected[i].setAttribute("checked", "checked");
		};
	};
	displaySavedInfo("pdwith").value = recallData.pdwith[1];    	
	if(recallData.ontime[1] == "On Time") {
    	displaySavedInfo("ontime").setAttribute("checked", "checked");
	};
	if(recallData.late[1] == "Late") {
    	displaySavedInfo("late").setAttribute("checked", "checked");
	};
	if(recallData.lfee[1] == "Late Fee") {
    	displaySavedInfo("lfee").setAttribute("checked", "checked");
	};
	displaySavedInfo("textArea").value = recallData.textArea[1];
	//saveBill.removeEventListener("click", validate);
	displaySavedInfo("saveMe").value = "Edit Bill";
	var changeSubmit = displaySavedInfo("saveMe");
	changeSubmit.addEventListener("click");
	changeSubmit.key = this.key
};

function loadImg(billImg, newSub) {
	var img = document.createElement("li");
	newSub.appendChild(img);
	var insertImg = document.createElement("img");
	var imgSize = insertImg.setAttribute("id", "billImg");
	var imgSize = insertImg.setAttribute("class", "billImg");		
	var setImg = insertImg.setAttribute("src", "img/" + billImg + ".jpg");
	img.appendChild(insertImg);
};

function cleanHouse() {
	if(localStorage.length === 0) {
		alert("There is no data to clear!!");
	} else {
	localStorage.clear();
	alert("All bills are deleted");
	window.location.reload();
	};
	return false;
};



function displaySavedInfo(field) {
	var theBill = document.getElementById(field);
	return theBill
};


function cleanHouse() {
	if(localStorage.length === 0) {
		alert("There is no data to clear!!");
	} else {
	localStorage.clear();
	alert("All bills are deleted");
	window.location.reload();
	};
	return false;
};

function howPaid() {
	var paidWith = document.getElementById("pdwith");
	if(status-pd.checked) {
		paymentValue = paidWith.value;
	} else {
		paymentValue = "N/A";
	};	
};


function getSelectedRadio() {
	var radioSelected = document.forms[0].status;
	for(i=0; i<radioSelected.length; i++) {
		if(radioSelected[i].checked) {
			paidValue = radioSelected[i].value;
		};
	};
	return paidValue
};

	
function getCheckBoxOnTime() {
	 if(displaySavedInfo('ontime').checked){
		 onTime = displaySavedInfo('ontime').value;
	 }else{
		 onTime = "N/A";
	 }
};

function getCheckBoxLate() {
	 if(displaySavedInfo('late').checked){
		 late = displaySavedInfo('late').value;
	 }else{
		 late = "N/A";
	 }
};

function getCheckBoxLateFee() {
	 if(displaySavedInfo('lfee').checked){
		 lateFee = displaySavedInfo('lfee').value;
	 }else{
		 lateFee = "N/A";
	 }
};

function switchPages(status) {
	switch(status) {
		case "on":
			displaySavedInfo("addBill").style.display = "none";
			displaySavedInfo("clearAllData").style.display = "block";
			displaySavedInfo("displayLink").style.display = "none";
			displaySavedInfo("addNewBill").style.display = "block";
			displaySavedInfo("footer").style.display = "none";
			break;
		case "off":
			displaySavedInfo("addBill").style.display = "block";
			displaySavedInfo("clearAllData").style.display = "block";
			displaySavedInfo("displayLink").style.display = "block";
			displaySavedInfo("addNewBill").style.display = "none";
			displaySavedInfo("bill").style.display = "none";
			break;
		default:
			return false;
	};
};

//var autofillData = function (){};
function getSampleBills() {
	for(var n in sampleBills) {
		var id = (Math.floor(Math.random()*1000000001));
		localStorage.setItem(id, JSON.stringify(sampleBills[n]));
	};
};

//var getData = function(){};
function getBill() {
	switchPages("on"); 
	if(localStorage.length === 0) {
		getSampleBills();
		alert("There is no data to view. Sample Data has been added.");
	};
	var newDiv = document.createElement("div");
	newDiv.setAttribute("id", "bill");
	var newList = document.createElement("ul");
	newDiv.appendChild(newList);	
	document.body.appendChild(newDiv);
	displaySavedInfo("bill").style.display = "block";
	for(i=0, l=localStorage.length; i<l; i++) {
		var newItem = document.createElement("li");
		var buttons = document.createElement("li");
		newList.appendChild(newItem);
		var category = localStorage.key(i);
		var value = localStorage.getItem(category);
		var totalData = JSON.parse(value);
		var newSub = document.createElement("ul");
		newItem.appendChild(newSub);
		loadImg(totalData.btype[1], newSub);
		for(var d in totalData) {
			var newSubList = document.createElement("li");
			newSub.appendChild(newSubList);
			var insertText = totalData[d][0] + " " + totalData[d][1];
			newSubList.innerHTML = insertText;
			newSub.appendChild(buttons);
		};
		createButtons(localStorage.key(i), buttons);
	};
};

/*var storeData = function(data){
	console.log(data);
}; */
function getForm(key) {
	if(!key) {
		var id = (Math.floor(Math.random()*1000000001));
	} else {
		id = key;
	};
	getSelectedRadio();
	howPaid();
	getCheckBoxOnTime();
	getCheckBoxLate();
	getCheckBoxLateFee();
	var item = {};
			item.btype = ["Bill Type: ", displaySavedInfo("btype").value];
		item.bname = ["Bill Name: ", displaySavedInfo("bname").value];
		item.prio = ["Bill Priority: ", displaySavedInfo("prio").value];
		item.amt = ["Bill Amount: $", displaySavedInfo("amt").value];
		 	item.due = ["Bill Due Date: ", displaySavedInfo("due").value];
		 	item.freqs = ["Bill Frequency: ", displaySavedInfo("freqs").value];
		item.pd = ["Paid: ", paidValue];
		 	item.pdwith = ["Paid with: ", paymentValue];
		 	item.ontime = ["On time?: ", onTime];   		 	
		 	item.late = ["Late?: ", late];
		 	item.lfee = ["Late Fee?: ", lateFee];
		 	item.textArea = ["Comments: ", displaySavedInfo("textArea").value];
	localStorage.setItem(id, JSON.stringify(item));
	alert(saveSuccess);
	 	saveMe.setAttribute("type", "reset");  
	return getForm;
	};

//var	deleteItem = function (){};
function runDelete() {
	var verify = confirm("Are you sure you want to delete this bill. This can not be undone.");
	if(verify) {
		localStorage.removeItem(this.key);
		window.location.reload();
		alert("Bill was deleted");
	} else {
		alert("No changes have been made.");
	};
};
					
//var clearLocal = function(){};
function clearAll() {
	var areYouSure = confirm("Are you sure you want to clear the form and start over?");
	if(areYouSure) {
		resetMe.setAttribute("type", "reset");
		alert("Form was reset.");
	} else {
		alert("No changes were made to your input.");
	};
	return clearAll
};



displayLink.addEventListener("click", getBill);
clearBill.addEventListener("click", clearAll);
localClear.addEventListener("click", cleanHouse);