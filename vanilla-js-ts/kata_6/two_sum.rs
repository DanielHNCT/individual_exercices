fn two_sum(number: [u8; 2], target: u8) -> Vec<u8> {

	let mut arr: Vec<u8> = Vec::new();

	let mut first_index = 0;
	let mut second_index = 0;
	// let mut a: i8;
	// let mut b: i8;
	
	loop {
		let a: u8 = number[first_index];
		while second_index < number.len() {
			if number[first_index] && number[second_index] {
				break;
			} else {
				let b: u8 = number[second_index];
				if a + b == target {
					arr.push(first_index as u8);
					arr.push(second_index as u8);
					return arr;
				} else {
					second_index += 1;
				}
			}	
		}

		first_index += 1;
	};
}	

fn main() {
	const NUMBER: [u8; 2] = [3, 3];
	const TARGET: u8 = 6;

	println!("{:?}", two_sum(NUMBER, TARGET));
}