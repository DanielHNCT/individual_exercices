fn two_sum(number: [i8; 3], target: i8) -> Vec<i8> {

	let mut arr: Vec<i8> = Vec::new();

	let mut first_index = 0;
	let mut second_index = 0;
	// let mut a: i8;
	// let mut b: i8;
	
	loop {
		let a: i8 = number[first_index];
		while second_index < number.len() {
			let b: i8 = number[second_index];
			if b ===
			if a + b == target {
				arr.push(first_index as i8);
				arr.push(second_index as i8);
				return arr;
			} else {
				second_index += 1;
			}
		}

		first_index += 1;
	};
}	

fn main() {
	const NUMBER: [i8; 3] = [3, 2, 4];
	const TARGET: i8 = 6;

	println!("{:?}", two_sum(NUMBER, TARGET));
}