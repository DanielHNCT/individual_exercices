#include <stdio.h>
#include <stdlib.h>

int main(int argc, char *argvc[]) {
	
	system("clear");

	char userName[50];
	int hour = 0;

	printf("Please enter your name\n");
	scanf("%s", userName);

	printf("Please enter an hour\n");
	scanf("%d", &hour);

	if (hour >= 18) {
		printf("Bonsoir %s\n", userName);
	} else {
		printf("Bonjour %s\n", userName);
	}

	return 0;
}