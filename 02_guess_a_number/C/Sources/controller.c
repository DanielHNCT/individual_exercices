#include "../Headers/view.h"
#include "../Headers/controller.h"
#include "../Headers/model.h"

void getBanner() {
	displayBanner();
}

int getUserChoice() {
	int choice = 0;
	scanf("%d", &choice);
	return choice;
}

void redirect(int userChoice) {
	getChoiceAndRedirect(userChoice);
}

int choice(int choice) {
	if (choice == 1) {
		
	}
}
