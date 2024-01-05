#include<iostream>

using namespace std;

void reverse(int *arr, int start, int end) {
    int temp;
    while (start < end) {
        temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}

int main() {
    int arr[9] = {1, 2, 3, 4, 5,7,8,9,10};
    int k = 5;
    int size = sizeof(arr) / sizeof(arr[0]);

    reverse(arr, 0, size - 1);
    reverse(arr, 0, k - 1);  // Fix: change loop condition to start < k
    reverse(arr, k, size - 1);

    for (int i = 0; i < size; i++) {
        cout << arr[i] <<" ";
    }

    return 0;
}
