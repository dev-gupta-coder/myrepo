#include<iostream>
#include<vector>
using namespace std;
int main(){
int arr[4]={3,1,2,4};
int n=4;
int min=arr[0];
int sum=0;
vector<int> v;
   
    for(int j=0; j<n; j++){
        min=arr[j];
        for(int k=j; k<n; k++){
            v.push_back(arr[k]);
            if(arr[k]<min){
                min=arr[k];
            }sum+=min;
cout<<"Subarray: ";
        for(int l=0; l<v.size(); l++){
            cout<<v[l]<<" ";
        }

            cout<<"min : "<<min<<endl; 

            

    }
        
         v.clear();
        cout<<endl;

        }
        
        
        
    cout<<endl;
cout<<sum<<endl;
return 0;
}