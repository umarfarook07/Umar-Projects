#include<iostream>

using namespace std;

int main(){
    int score;
    char grade;
    string outputMessage = "Enter Marks:" ;
    cout<<outputMessage;
    cin>>score;

    if (score>=90)
    {
        grade = 'A';
    }
    else if (score>=80)
    {
        grade = 'B';
    }
    else if (score >= 70)
    {
        grade = 'C';
    }else
    {
       grade = 'D';
    }

    cout<<"You Got Grade:"<<grade<<endl;

    if (score>=95)
    {
        cout<<"Congratulations! Excellent Performance";
    }
    

    return 0;
    
}