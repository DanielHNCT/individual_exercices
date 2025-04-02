#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define RED     "\x1b[31m"
#define GREEN   "\x1b[32m"
#define YELLOW  "\x1b[33m"
#define BLUE    "\x1b[34m"
#define MAGENTA "\x1b[35m"
#define CYAN    "\x1b[36m"
#define RESET   "\x1b[0m"

void displayBanner() {
    system("clear");
    system("figlet Guess a number");
    printf(CYAN"Welcome to this tiny game made with love for practice C lang\n"RESET);
    printf(YELLOW"1: One Player\n2: Two Players\n"RESET);
    printf(YELLOW"Select [1 - 2]\n"RESET);
}

void displayOnePlayer() {
    system("clear");
    system("figlet One Player !\n");
    printf(YELLOW"Please enter the number yoiu think it is\n"RESET);
}

void displayTwoPlayers() {
    system("clear");
    system("figlet Two Players");
    printf(YELLOW"1st player type your number to guess\n"RESET);
}

void askNumber(int test) {
    if (test == 1) {
        printf(YELLOW"Please type a number"RESET);
    } else if (test == 2) {
        printf(YELLOW"First user type your number"RESET);
    } else if (test == 3) {
        printf(YELLOW"Second user type your number"RESET);
    }
}