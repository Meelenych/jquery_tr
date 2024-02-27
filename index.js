$(document).ready(function () {
	$name = 'Taras';
	function greet() {
		alert(`Hi there ${$name}`);
	}
	// greet();

	console.log(square());

	$number = 2;
	function square($number) {
		return $number * $number;
	}

	$age = 0;

	if ($age) {
		console.log(square($number));
	}

	if (!$age) {
		console.log('age not specified');
	}
});
