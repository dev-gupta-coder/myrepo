#include <iostream>
using namespace std;  
struct ListNode {
    int val;
    ListNode *next;
    ListNode() : val(0), next(nullptr) {}
    ListNode(int x) : val(x), next(nullptr) {}
    ListNode(int x, ListNode *next) : val(x), next(next) {}
};

class Solution {
public:
    ListNode* deleteMiddle(ListNode* head) {
        ListNode* right= head;
        if(head==NULL) return NULL;
        if(head->next==NULL) NULL;
        int count=0;
        while(right->next!=NULL){
            count++;
            right=right->next;
        }
        ListNode* left=head;
        for(int i=0; i<(count/2); i++){
            left=left->next;
        }
        left=left->next->next;
        return head;
    }   
};
int main() {
    // Example usage:
    ListNode* head = new ListNode(1);
    head->next = new ListNode(2);
    head->next->next = new ListNode(3);
    head->next->next->next = new ListNode(4);
    head->next->next->next->next = new ListNode(5);

    Solution sol;
    ListNode* modifiedHead = sol.deleteMiddle(head);

    // Print modified list
    ListNode* current = modifiedHead;
    while (current != nullptr) {
        cout << current->val << " ";
        current = current->next;
    }
    return 0;
}

