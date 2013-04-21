$(document).ready(function(){

	$('#home').on('pageinit', function(){
		//code needed for home page goes here
	});	
			
	$('#add').on('pageinit', function(){
	
			var billForm = $('#addBill');
			var	abErrors = $('#abErrors');
		    billForm.validate({
				invalidHandler: function(form, validator) {
					abErrors.click();
					var labels = '';
					for(var key in validator.submitted) {
						var tag = $('label[for^="'+ key +'"]').not('[generated]');
						var groupTag = tag.closest('fieldset').find('.ui-controlgroup-label').not('[generated]');
						var itemName = groupTag.length ? groupTag.text() : tag.text();
						labels += '<li>'+ itemName +'</li>';
						console.log(itemName);
					};
					$("#errors ul").html(labels);
				},
				submitHandler: function() {
				var data = myForm.serializeArray();
				storeData(data);
			}
		});
		
		//any other code needed for addItem page goes here
		
	});
	
});
	//The functions below can go inside or outside the pageinit function for the page in which it is needed.
	
	var autofillData = function (){
		 
	};
	
	var getData = function(){
	
	};
	
	var storeData = function(data){
		console.log(data);
	}; 
	
	var	deleteItem = function (){
				
	};
						
	var clearLocal = function(){
	
	};


