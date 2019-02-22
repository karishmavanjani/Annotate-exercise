$("body").on("click", ".dot ", function (e) {
	e.preventDefault();
	// var $this_dot = $(this);
	// you can use const or let or var also, but const and let are more powerful.
	// The above line is redundant hence commented.

	$(this).addClass("active");
});

$("body").on("click", ".dot .close", function (e) {
	e.preventDefault();
	e.stopPropagation();
	// the above method tells it to not fire anything else except the below function because it also has dot class in it, it can start running the above function too. So dont do that.


	var $this_close = $(this); // we can remove this
	let $this_dot = $this_close.closest(".dot");

	$this_dot.removeClass("active");
});