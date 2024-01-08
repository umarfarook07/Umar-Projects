#include<iostream>

using namespace std;

int main(){
    int first = 0;
    int second = 1;
    int nextTerm;
    int i = 0;

    while (i<=10)
    {
        cout<<i<<endl;
        i++;
    }
    

    cout<<"Enter How Terms:";

    int seriesCount;

    cin>>seriesCount;
    cout<<first<<","<<second;
    for(int i = 0;i<seriesCount-1; i++){
        nextTerm = first + second;
        cout<<","<<nextTerm;

        first = second;
        second = nextTerm;
    }
    return 0;
}