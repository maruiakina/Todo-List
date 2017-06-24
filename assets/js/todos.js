// JavaScript Document

// Check off specific todos by clicking
// select the parent el, assign the specific el that we want the event on
$('ul').on("click", "li", function(){
	$(this).toggleClass("completed");
});

// Click on X to delete todos
$('ul').on("click", "span", function(event){
	
	// this: the clicked element
	$(this).parent().fadeOut(500, function(){ 
		// this: clicked el and its parent el
		// parent(): get parent elements
		$(this).remove(); 
	});
	// Stop the element from excuting other events
	event.stopPropagation(); 
});

$('input[type="text"]').keypress(function(event){
	if(event.which === 13) {
		// grabbing new todo text from input
		var todoText = $(this).val();
		$(this).val("");
		// create a new li and add to ul
		$('ul').append("<li><span><i class='fa fa-trash-o' aria-hidden='true'></i></span> " + todoText + "</li>");
	}
});

$('.fa-pencil-square').click(function() {
	$('input[type="text"]').fadeToggle();
})
