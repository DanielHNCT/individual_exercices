fn fizz_buzz(n: u8) -> Vec<String> {
    let mut vec: Vec<String> = Vec::new();
    
    let mut i: u8 = 1;
    while i <= n {
        
        if i % 3 == 0 && i % 5 == 0 {
            vec.push("FizzBuzz".to_string());
        } else if i % 3 == 0 {
            vec.push("Fizz".to_string())
        } else if i % 5 == 0 {
            vec.push("Buzz".to_string());
        } else {
            vec.push(i.to_string());
        }

        i += 1;
    };

    return vec;
}

fn main() {
    let answer: Vec<String> = fizz_buzz(15);
    println!("{:?}", answer);
}











// fn fizz_buzz(a: [i8; 15]*/) {
//     let mut i = 0;

//     while i < n {
//         if n[i] % 3 == 0 {
//             println!("fizz {:?}", n[i]);
//         }
//         println!("{}", i);
        
//         i += 1;
//     };
// }

// fn main() {
//     let a: [i8; 15] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
//     println!("{:#?}", a);
//     fizz_buzz(a);
// }