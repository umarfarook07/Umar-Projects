#include<iostream>

using namespace std;

class Rectangle{
private:
    int length;
    int breadth;
public:
    Rectangle(int l, int b) : length(l), breadth(b) {}

    int  calculateArea(){
        return length * breadth;
    }

    friend int getLength(Rectangle &rect){
        return rect.length;
    }
    friend int getBreadth(Rectangle &rect){
        return rect.breadth;
    }
};

int main(){
    Rectangle box1(10,5);

    

    cout<<"Length of Rectangle Is :"<<getLength(box1)<<endl;
    cout<<"Breadth of Rectangle Is :"<<getBreadth(box1)<<endl;

    cout<<"Area of Rectangle Is :"<<box1.calculateArea()<<endl;

    return 0;

}