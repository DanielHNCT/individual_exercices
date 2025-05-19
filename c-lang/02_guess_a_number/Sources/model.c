#include "../Headers/view.h"

void getChoiceAndRedirect(int userChoice) {
	if (userChoice == 1) {
		displayOnePlayer();
	} else if (userChoice == 2) {
		displayTwoPlayers();
	} else if (userChoice == 'exit') {
		printf("Thanks for using this CLI !");
	}
}